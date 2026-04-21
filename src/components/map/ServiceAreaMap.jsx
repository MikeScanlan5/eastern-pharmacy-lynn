import React, { useState, useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup, Circle, useMap } from 'react-leaflet';
import L from 'leaflet';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Building2, Heart, Users, ArrowRight, Phone, MapPin, X } from 'lucide-react';

// Fix leaflet default icon issue
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-icon-2x.png',
  iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-icon.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-shadow.png',
});

// Custom icon factory
const createIcon = (color, size = 32) => L.divIcon({
  className: '',
  html: `<div style="
    width: ${size}px; height: ${size}px;
    background: ${color};
    border: 3px solid white;
    border-radius: 50% 50% 50% 0;
    transform: rotate(-45deg);
    box-shadow: 0 4px 12px rgba(0,0,0,0.25);
    transition: transform 0.2s;
  "></div>`,
  iconSize: [size, size],
  iconAnchor: [size / 2, size],
  popupAnchor: [0, -size],
});

const ICONS = {
  pharmacy:    createIcon('#0EA5E9', 36),
  hospital:    createIcon('#F43F5E', 30),
  nursing:     createIcon('#8B5CF6', 28),
  group_home:  createIcon('#10B981', 26),
};

// Eastern Pharmacy HQ + North Shore facilities
const PHARMACY_HQ = { lat: 42.4668, lng: -70.9495, name: 'Eastern Pharmacy' };

const FACILITIES = [
  // Lynn (home base cluster)
  { id: 1,  lat: 42.4671, lng: -70.9561, type: 'nursing',    name: 'Lynn Care Center',               city: 'Lynn',        beds: 120, services: ['Long-Term Care', 'Compliance Packaging', 'Delivery'] },
  { id: 2,  lat: 42.4712, lng: -70.9437, type: 'hospital',   name: 'Union Hospital Lynn',             city: 'Lynn',        beds: 218, services: ['Medication Delivery', 'Emergency Supply'] },
  { id: 3,  lat: 42.4598, lng: -70.9521, type: 'group_home', name: 'North Shore Living',              city: 'Lynn',        beds: 18,  services: ['MAP Services', 'Blister Packing'] },
  { id: 4,  lat: 42.4735, lng: -70.9490, type: 'nursing',    name: 'Elmhurst Skilled Nursing',        city: 'Lynn',        beds: 96,  services: ['Long-Term Care', 'Dispill Packaging'] },

  // Salem
  { id: 5,  lat: 42.5195, lng: -70.8967, type: 'nursing',    name: 'Salem Transitional Care',         city: 'Salem',       beds: 143, services: ['Compliance Packaging', 'Delivery', 'Consulting'] },
  { id: 6,  lat: 42.5221, lng: -70.9011, type: 'hospital',   name: 'Salem Hospital',                  city: 'Salem',       beds: 310, services: ['Institutional Supply', 'Delivery'] },
  { id: 7,  lat: 42.5148, lng: -70.8891, type: 'group_home', name: 'Harbor House Group Home',         city: 'Salem',       beds: 12,  services: ['MAP Services', 'Blister Packing', '24/7 Support'] },

  // Peabody
  { id: 8,  lat: 42.5279, lng: -70.9289, type: 'nursing',    name: 'Peabody Glen Health Center',      city: 'Peabody',     beds: 160, services: ['Long-Term Care', 'Dispill Packaging', 'Delivery'] },
  { id: 9,  lat: 42.5334, lng: -70.9501, type: 'group_home', name: 'Peabody Community Homes',         city: 'Peabody',     beds: 22,  services: ['MAP Services', 'Blister Packing'] },

  // Beverly
  { id: 10, lat: 42.5584, lng: -70.8800, type: 'hospital',   name: 'Beverly Hospital',                city: 'Beverly',     beds: 286, services: ['Pharmaceutical Supply', 'Emergency Delivery'] },
  { id: 11, lat: 42.5512, lng: -70.8732, type: 'nursing',    name: 'Beverly Manor',                   city: 'Beverly',     beds: 115, services: ['Long-Term Care', 'Compliance Packaging'] },

  // Swampscott & Marblehead
  { id: 12, lat: 42.4809, lng: -70.9188, type: 'nursing',    name: 'Swampscott Manor',                city: 'Swampscott',  beds: 88,  services: ['Long-Term Care', 'Delivery', 'Dispill'] },
  { id: 13, lat: 42.4997, lng: -70.8581, type: 'group_home', name: 'Marblehead Group Home',           city: 'Marblehead',  beds: 10,  services: ['MAP Consulting', 'Blister Packing'] },

  // Saugus & Revere
  { id: 14, lat: 42.4723, lng: -71.0123, type: 'nursing',    name: 'Saugus Rehab & Nursing',          city: 'Saugus',      beds: 102, services: ['Long-Term Care', 'Compliance Packaging', 'Delivery'] },
  { id: 15, lat: 42.4084, lng: -71.0120, type: 'nursing',    name: 'Revere Nursing Center',           city: 'Revere',      beds: 134, services: ['Long-Term Care', 'Dispill Packaging'] },
  { id: 16, lat: 42.4089, lng: -71.0052, type: 'group_home', name: 'Shore Communities',               city: 'Revere',      beds: 16,  services: ['MAP Services', 'Blister Packing'] },

  // Gloucester & Danvers
  { id: 17, lat: 42.6160, lng: -70.6609, type: 'nursing',    name: 'Addison Gilbert LTC Unit',        city: 'Gloucester',  beds: 74,  services: ['Long-Term Care', 'Delivery'] },
  { id: 18, lat: 42.5751, lng: -70.9500, type: 'nursing',    name: 'Danvers Health Center',           city: 'Danvers',     beds: 126, services: ['Long-Term Care', 'Compliance Packaging'] },
  { id: 19, lat: 42.5742, lng: -70.9610, type: 'group_home', name: 'Danvers Group Homes',             city: 'Danvers',     beds: 14,  services: ['MAP Consulting', 'Blister Packing'] },

  // Nahant & Winthrop
  { id: 20, lat: 42.4265, lng: -70.9231, type: 'group_home', name: 'Nahant Living Program',           city: 'Nahant',      beds: 8,   services: ['MAP Services', '24/7 Support'] },
];

const TYPE_CONFIG = {
  hospital:   { label: 'Hospital',    color: '#F43F5E', Icon: Building2 },
  nursing:    { label: 'Nursing Home',color: '#8B5CF6', Icon: Heart     },
  group_home: { label: 'Group Home',  color: '#10B981', Icon: Users     },
};

function MapController({ center }) {
  const map = useMap();
  React.useEffect(() => {
    if (center) map.flyTo(center, 14, { duration: 1.2 });
  }, [center, map]);
  return null;
}

export default function ServiceAreaMap() {
  const [selectedFacility, setSelectedFacility] = useState(null);
  const [activeFilter, setActiveFilter] = useState('all');
  const [flyTarget, setFlyTarget] = useState(null);

  const filtered = activeFilter === 'all'
    ? FACILITIES
    : FACILITIES.filter(f => f.type === activeFilter);

  const handleMarkerClick = (facility) => {
    setSelectedFacility(facility);
    setFlyTarget([facility.lat, facility.lng]);
  };

  const counts = {
    hospital:   FACILITIES.filter(f => f.type === 'hospital').length,
    nursing:    FACILITIES.filter(f => f.type === 'nursing').length,
    group_home: FACILITIES.filter(f => f.type === 'group_home').length,
  };

  return (
    <div className="relative">
      {/* Header Stats */}
      <div className="grid grid-cols-3 gap-4 mb-6">
        {Object.entries(TYPE_CONFIG).map(([type, cfg]) => (
          <button
            key={type}
            onClick={() => setActiveFilter(activeFilter === type ? 'all' : type)}
            className={`p-4 rounded-xl border text-left transition-all duration-300 ${
              activeFilter === type
                ? 'border-transparent shadow-lg scale-[1.02]'
                : 'border-border bg-card hover:border-border/60'
            }`}
            style={activeFilter === type ? { background: cfg.color + '15', borderColor: cfg.color + '40' } : {}}
          >
            <div className="flex items-center gap-2 mb-2">
              <div className="w-3 h-3 rounded-full" style={{ background: cfg.color }} />
              <span className="text-xs font-inter font-semibold text-muted-foreground uppercase tracking-wider">{cfg.label}s</span>
            </div>
            <div className="text-2xl font-inter font-bold" style={{ color: cfg.color }}>{counts[type]}</div>
          </button>
        ))}
      </div>

      {/* Map Container */}
      <div className="relative rounded-2xl overflow-hidden border border-border shadow-xl" style={{ height: 520 }}>
        <MapContainer
          center={[42.505, -70.93]}
          zoom={11}
          style={{ height: '100%', width: '100%' }}
          zoomControl={false}
          attributionControl={false}
        >
          {/* Clean tile layer - Carto Positron */}
          <TileLayer
            url="https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png"
            attribution='&copy; <a href="https://carto.com/">CARTO</a>'
          />

          {flyTarget && <MapController center={flyTarget} />}

          {/* Service radius circle around HQ */}
          <Circle
            center={[PHARMACY_HQ.lat, PHARMACY_HQ.lng]}
            radius={22000}
            pathOptions={{
              fillColor: '#0EA5E9',
              fillOpacity: 0.06,
              color: '#0EA5E9',
              weight: 1.5,
              dashArray: '6 4',
            }}
          />

          {/* Eastern Pharmacy HQ */}
          <Marker position={[PHARMACY_HQ.lat, PHARMACY_HQ.lng]} icon={ICONS.pharmacy}>
            <Popup>
              <div className="p-1 font-inter">
                <div className="flex items-center gap-2 mb-1">
                  <div className="w-3 h-3 rounded-full bg-accent" />
                  <strong className="text-sm">Eastern Pharmacy HQ</strong>
                </div>
                <p className="text-xs text-gray-500">Lynn, Massachusetts</p>
                <p className="text-xs text-gray-500 mt-1">781-460-2000</p>
              </div>
            </Popup>
          </Marker>

          {/* Facility Markers */}
          {filtered.map((facility) => (
            <Marker
              key={facility.id}
              position={[facility.lat, facility.lng]}
              icon={ICONS[facility.type]}
              eventHandlers={{ click: () => handleMarkerClick(facility) }}
            />
          ))}
        </MapContainer>

        {/* Map Legend overlay */}
        <div className="absolute bottom-4 left-4 z-[1000] bg-white/95 backdrop-blur-sm rounded-xl p-3 shadow-lg border border-border">
          <p className="text-[10px] uppercase tracking-wider text-muted-foreground font-inter font-semibold mb-2">Legend</p>
          <div className="space-y-1.5">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-accent" />
              <span className="text-xs font-inter text-foreground">Eastern Pharmacy</span>
            </div>
            {Object.entries(TYPE_CONFIG).map(([type, cfg]) => (
              <div key={type} className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full" style={{ background: cfg.color }} />
                <span className="text-xs font-inter text-foreground">{cfg.label}</span>
              </div>
            ))}
            <div className="flex items-center gap-2 mt-1 pt-1 border-t border-border">
              <div className="w-8 h-px border-t-2 border-dashed border-accent" />
              <span className="text-xs font-inter text-muted-foreground">Service Area (~22mi)</span>
            </div>
          </div>
        </div>

        {/* Filter badge */}
        {activeFilter !== 'all' && (
          <button
            onClick={() => setActiveFilter('all')}
            className="absolute top-4 left-4 z-[1000] flex items-center gap-2 px-3 py-1.5 bg-white/95 backdrop-blur-sm rounded-full shadow-md border border-border text-xs font-inter font-semibold hover:bg-muted transition-colors"
          >
            <div className="w-2 h-2 rounded-full" style={{ background: TYPE_CONFIG[activeFilter]?.color }} />
            {TYPE_CONFIG[activeFilter]?.label}s only
            <X className="w-3 h-3 text-muted-foreground" />
          </button>
        )}
      </div>

      {/* Facility Detail Panel */}
      <AnimatePresence>
        {selectedFacility && (
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 12 }}
            transition={{ duration: 0.3 }}
            className="mt-4 p-6 rounded-2xl border bg-card shadow-lg relative overflow-hidden"
            style={{ borderColor: TYPE_CONFIG[selectedFacility.type]?.color + '40' }}
          >
            {/* Accent stripe */}
            <div
              className="absolute top-0 left-0 w-1 h-full rounded-l-2xl"
              style={{ background: TYPE_CONFIG[selectedFacility.type]?.color }}
            />
            <button
              onClick={() => setSelectedFacility(null)}
              className="absolute top-4 right-4 p-1.5 rounded-lg text-muted-foreground hover:text-foreground hover:bg-muted transition-colors"
            >
              <X className="w-4 h-4" />
            </button>

            <div className="pl-4">
              <div className="flex items-start gap-3 mb-4">
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0"
                  style={{ background: TYPE_CONFIG[selectedFacility.type]?.color + '20' }}
                >
                  {React.createElement(TYPE_CONFIG[selectedFacility.type]?.Icon, {
                    className: 'w-5 h-5',
                    style: { color: TYPE_CONFIG[selectedFacility.type]?.color }
                  })}
                </div>
                <div>
                  <h4 className="font-inter font-bold text-foreground text-base">{selectedFacility.name}</h4>
                  <div className="flex items-center gap-3 mt-1">
                    <span
                      className="text-xs font-inter font-semibold px-2 py-0.5 rounded-full"
                      style={{
                        background: TYPE_CONFIG[selectedFacility.type]?.color + '15',
                        color: TYPE_CONFIG[selectedFacility.type]?.color
                      }}
                    >
                      {TYPE_CONFIG[selectedFacility.type]?.label}
                    </span>
                    <span className="flex items-center gap-1 text-xs text-muted-foreground">
                      <MapPin className="w-3 h-3" /> {selectedFacility.city}, MA
                    </span>
                    {selectedFacility.beds && (
                      <span className="text-xs text-muted-foreground">{selectedFacility.beds} beds</span>
                    )}
                  </div>
                </div>
              </div>

              <div className="mb-5">
                <p className="text-xs uppercase tracking-wider text-muted-foreground font-inter font-semibold mb-2">Active Services</p>
                <div className="flex flex-wrap gap-2">
                  {selectedFacility.services.map((s) => (
                    <span key={s} className="text-xs font-inter px-2.5 py-1 rounded-lg bg-muted text-foreground">
                      {s}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-3">
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 px-5 py-2.5 bg-accent text-accent-foreground text-sm font-inter font-semibold rounded-lg hover:bg-accent/90 transition-all hover:shadow-lg hover:shadow-accent/20"
                >
                  Partner With Us <ArrowRight className="w-4 h-4" />
                </Link>
                <a
                  href="tel:7814602000"
                  className="inline-flex items-center gap-2 px-5 py-2.5 border border-border text-sm font-inter font-medium rounded-lg hover:bg-muted transition-colors text-foreground"
                >
                  <Phone className="w-4 h-4" /> 781-460-2000
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {!selectedFacility && (
        <p className="mt-3 text-center text-xs text-muted-foreground font-inter">
          Click any pin to view facility details and services
        </p>
      )}
    </div>
  );
}