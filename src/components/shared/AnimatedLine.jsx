import React from 'react';
import { motion } from 'framer-motion';

export default function AnimatedLine({ className = '', delay = 0 }) {
  return (
    <div className={`overflow-hidden ${className}`}>
      <motion.div
        className="h-px bg-gradient-to-r from-transparent via-accent/40 to-transparent"
        initial={{ x: '-100%' }}
        whileInView={{ x: '0%' }}
        viewport={{ once: true }}
        transition={{ duration: 1.5, delay, ease: 'easeOut' }}
      />
    </div>
  );
}