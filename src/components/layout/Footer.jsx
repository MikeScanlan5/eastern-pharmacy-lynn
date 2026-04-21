import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Clock, Truck, ArrowRight } from 'lucide-react';

const quickLinks = [
  { label: 'Long-Term Care', path: '/services' },
  { label: 'Compliance Packaging', path: '/services' },
  { label: 'Blister Packing', path: '/services' },
  { label: 'MAP Services', path: '/services' },
  { label: 'Delivery', path: '/services' },
];

const resourceLinks = [
  { label: 'Forms & Resources', path: '/resources' },
  { label: 'About Us', path: '/about' },
  { label: 'Contact', path: '/contact' },
];

export default function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      {/* Delivery Status Bar */}
      <div className="border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-4 flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
            <span className="text-sm font-inter text-primary-foreground/70">Delivery Active — Serving the North Shore</span>
          </div>
          <div className="flex items-center gap-2 text-sm text-primary-foreground/50">
            <Truck className="w-4 h-4" />
            Free Delivery Available
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="mb-6">
              <img
                src="https://media.base44.com/images/public/69e70dbd38987d0fb7722d27/5181b8aeb_EasternPharmacyLogo_Light1.png"
                alt="Eastern Pharmacy"
                className="h-14 w-auto brightness-0 invert opacity-80"
              />
            </div>
            <p className="text-sm text-primary-foreground/60 leading-relaxed mb-6">
              Precision institutional pharmacy serving nursing homes, hospitals, and clinical facilities across Massachusetts' North Shore.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 text-accent text-sm font-inter font-medium hover:gap-3 transition-all"
            >
              Partner With Us <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-xs uppercase tracking-[0.15em] text-primary-foreground/40 font-inter font-semibold mb-6">Services</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <Link to={link.path} className="text-sm text-primary-foreground/60 hover:text-primary-foreground transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="text-xs uppercase tracking-[0.15em] text-primary-foreground/40 font-inter font-semibold mb-6">Company</h4>
            <ul className="space-y-3">
              {resourceLinks.map((link) => (
                <li key={link.label}>
                  <Link to={link.path} className="text-sm text-primary-foreground/60 hover:text-primary-foreground transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-xs uppercase tracking-[0.15em] text-primary-foreground/40 font-inter font-semibold mb-6">Contact</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Phone className="w-4 h-4 mt-0.5 text-accent" />
                <div>
                  <a href="tel:7814602000" className="text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors">781-460-2000</a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="w-4 h-4 mt-0.5 text-accent" />
                <a href="mailto:easternpharmacylynn@gmail.com" className="text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors break-all">
                  easternpharmacylynn@gmail.com
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 mt-0.5 text-accent" />
                <span className="text-sm text-primary-foreground/60">Lynn, Massachusetts</span>
              </li>
              <li className="flex items-start gap-3">
                <Clock className="w-4 h-4 mt-0.5 text-accent" />
                <span className="text-sm text-primary-foreground/60">Mon–Fri: 9am – 6pm<br />Emergency line: 24/7</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-6 flex flex-wrap items-center justify-between gap-4">
          <p className="text-xs text-primary-foreground/40">
            © {new Date().getFullYear()} Eastern Pharmacy, Lynn MA. All rights reserved.
          </p>
          <p className="text-xs text-primary-foreground/30">
            Institutional Pharmacy Services
          </p>
        </div>
      </div>
    </footer>
  );
}