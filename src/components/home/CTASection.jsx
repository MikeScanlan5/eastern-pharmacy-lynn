import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Phone } from 'lucide-react';

export default function CTASection() {
  return (
    <section className="py-24 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="relative rounded-3xl overflow-hidden bg-accent px-8 md:px-16 py-16 md:py-24">
          {/* Decorative circles */}
          <div className="absolute top-0 right-0 w-96 h-96 rounded-full opacity-10 pointer-events-none"
            style={{ background: 'radial-gradient(circle, white 0%, transparent 70%)', transform: 'translate(30%, -30%)' }} />
          <div className="absolute bottom-0 left-1/2 w-64 h-64 rounded-full opacity-10 pointer-events-none"
            style={{ background: 'radial-gradient(circle, white 0%, transparent 70%)', transform: 'translate(-50%, 50%)' }} />

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative z-10 max-w-xl"
          >
            <span className="inline-block text-xs uppercase tracking-[0.2em] text-white/60 font-inter font-semibold mb-4">Ready to Get Started?</span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-inter font-bold text-white tracking-tight leading-tight">
              A Warmer, Better Pharmacy Experience
            </h2>
            <p className="mt-6 text-white/70 text-lg leading-relaxed">
              Whether you manage a nursing home, hospital, or group home — let's talk about how Eastern Pharmacy 
              can bring better care to your residents.
            </p>
            <div className="mt-10 flex flex-wrap items-center gap-4">
              <Link
                to="/contact"
                className="group inline-flex items-center gap-3 px-8 py-4 bg-white text-accent font-inter font-semibold rounded-full hover:bg-white/90 transition-all duration-300 hover:shadow-xl"
              >
                Get In Touch <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <a
                href="tel:7814602000"
                className="inline-flex items-center gap-2 text-white/80 font-inter font-medium hover:text-white transition-colors"
              >
                <Phone className="w-4 h-4" />
                Call 781-460-2000
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}