import React from 'react';
import { motion } from 'framer-motion';

const stats = [
  { value: '30+', label: 'Years of Service' },
  { value: '100+', label: 'Facilities Served' },
  { value: '24/7', label: 'Emergency Support' },
  { value: '100%', label: 'Compliance Rate' },
];

export default function StatsBar() {
  return (
    <div className="border-y border-border bg-card">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 divide-x divide-border">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="py-10 px-6 text-center"
            >
              <div className="text-3xl md:text-4xl font-inter font-bold text-accent tracking-tight">{stat.value}</div>
              <div className="mt-2 text-sm font-inter text-muted-foreground">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}