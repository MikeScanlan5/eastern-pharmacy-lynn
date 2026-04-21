import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Building2, Heart, Package, Truck, ClipboardList, Users } from 'lucide-react';
import SectionHeading from '../shared/SectionHeading';

const services = [
  {
    icon: Building2,
    title: 'Long-Term Care',
    description: 'Complete medication management for nursing homes, memory care, and assisted living facilities.',
    color: 'bg-emerald-50 text-emerald-600',
  },
  {
    icon: Package,
    title: 'Compliance Packaging',
    description: 'Dispill color-coded multi-dose packaging to eliminate medication errors and ensure adherence.',
    color: 'bg-teal-50 text-teal-600',
  },
  {
    icon: ClipboardList,
    title: 'Blister Packing',
    description: 'Bingo card/sheet packaging specially designed for MAP facilities and group homes.',
    color: 'bg-green-50 text-green-600',
  },
  {
    icon: Users,
    title: 'MAP Services & Consulting',
    description: '24/7/365 MAP consulting services for local group homes and assisted living programs.',
    color: 'bg-emerald-50 text-emerald-600',
  },
  {
    icon: Truck,
    title: 'Free Delivery',
    description: 'Reliable medication delivery across the North Shore, ensuring your facility never runs short.',
    color: 'bg-teal-50 text-teal-600',
  },
  {
    icon: Heart,
    title: 'Nursing Support',
    description: 'Medication synchronization, monthly log sheets, and dedicated nursing facility support.',
    color: 'bg-green-50 text-green-600',
  },
];

export default function ServicesPreview() {
  return (
    <section className="py-24 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-16">
          <SectionHeading
            label="What We Do"
            title="Care for Every Patient, Every Day"
            description="From compliance packaging to 24/7 support — we make medication management simple, safe, and personal."
          />
          <Link
            to="/services"
            className="inline-flex items-center gap-2 text-accent font-inter font-semibold text-sm hover:gap-3 transition-all shrink-0 self-start lg:self-auto"
          >
            View All Services <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="group p-8 rounded-2xl border border-border bg-card hover:shadow-lg hover:shadow-accent/5 hover:-translate-y-1 transition-all duration-300"
            >
              <div className={`w-12 h-12 rounded-2xl flex items-center justify-center mb-6 ${service.color}`}>
                <service.icon className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-inter font-semibold text-foreground mb-3">{service.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}