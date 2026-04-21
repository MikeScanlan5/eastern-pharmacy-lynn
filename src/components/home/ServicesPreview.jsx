import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Building2, Heart, Package, Truck, ClipboardList, Users } from 'lucide-react';
import SectionHeading from '../shared/SectionHeading';
import AnimatedLine from '../shared/AnimatedLine';

const services = [
  {
    icon: Building2,
    title: 'Long-Term Care',
    description: 'Complete medication management for nursing homes, memory care, and assisted living facilities.',
  },
  {
    icon: Package,
    title: 'Compliance Packaging',
    description: 'Dispill color-coded multi-dose packaging to eliminate medication errors and ensure adherence.',
  },
  {
    icon: ClipboardList,
    title: 'Blister Packing',
    description: 'Bingo card/sheet packaging specially designed for MAP facilities and group homes.',
  },
  {
    icon: Users,
    title: 'MAP Services & Consulting',
    description: '24/7/365 MAP consulting services for local group homes and assisted living programs.',
  },
  {
    icon: Truck,
    title: 'Free Delivery',
    description: 'Reliable medication delivery across the North Shore, ensuring your facility never runs short.',
  },
  {
    icon: Heart,
    title: 'Nursing Support',
    description: 'Medication synchronization, monthly log sheets, and dedicated nursing facility support.',
  },
];

export default function ServicesPreview() {
  return (
    <section className="py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-16">
          <SectionHeading
            label="What We Do"
            title="B2B Institutional Pharmacy Solutions"
            description="Purpose-built pharmaceutical services for healthcare facilities that demand precision, compliance, and reliability."
          />
          <Link
            to="/services"
            className="inline-flex items-center gap-2 text-accent font-inter font-semibold text-sm hover:gap-3 transition-all shrink-0 self-start lg:self-auto"
          >
            View All Services <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <AnimatedLine className="mb-16" />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="group p-8 rounded-xl border border-border bg-card hover:border-accent/30 hover:shadow-lg hover:shadow-accent/5 transition-all duration-500"
            >
              <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center mb-6 group-hover:bg-accent/20 transition-colors">
                <service.icon className="w-6 h-6 text-accent" />
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