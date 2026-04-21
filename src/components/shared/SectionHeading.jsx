import React from 'react';
import { motion } from 'framer-motion';

export default function SectionHeading({ label, title, description, align = 'left', light = false }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className={`mb-16 ${align === 'center' ? 'text-center max-w-2xl mx-auto' : 'max-w-xl'}`}
    >
      {label && (
        <span className={`inline-block text-xs uppercase tracking-[0.2em] font-inter font-semibold mb-4 ${
          light ? 'text-accent' : 'text-accent'
        }`}>
          {label}
        </span>
      )}
      <h2 className={`text-3xl md:text-4xl lg:text-5xl font-inter font-bold tracking-tight leading-tight ${
        light ? 'text-white' : 'text-foreground'
      }`}>
        {title}
      </h2>
      {description && (
        <p className={`mt-4 text-lg leading-relaxed ${
          light ? 'text-white/60' : 'text-muted-foreground'
        }`}>
          {description}
        </p>
      )}
    </motion.div>
  );
}