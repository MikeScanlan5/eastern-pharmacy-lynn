import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Phone } from 'lucide-react';

export default function CTASection({ deliveryImage }) {
  return (
    <section className="py-24 lg:py-32 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="relative rounded-2xl overflow-hidden">
          <img
            src={deliveryImage}
            alt="Eastern Pharmacy delivery service"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/95 to-primary/70" />
          <div className="relative z-10 px-8 md:px-16 py-16 md:py-24">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="max-w-xl"
            >
              <span className="text-xs uppercase tracking-[0.2em] text-accent font-inter font-semibold">Ready to Get Started?</span>
              <h2 className="mt-4 text-3xl md:text-4xl lg:text-5xl font-inter font-bold text-white tracking-tight leading-tight">
                A Better Pharmacy Experience Starts Here
              </h2>
              <p className="mt-6 text-white/60 text-lg leading-relaxed">
                Whether you manage a nursing home, hospital, or group home — let's discuss how Eastern Pharmacy 
                can streamline your medication management.
              </p>
              <div className="mt-10 flex flex-wrap items-center gap-4">
                <Link
                  to="/contact"
                  className="group inline-flex items-center gap-3 px-8 py-4 bg-accent text-accent-foreground font-inter font-semibold rounded-lg hover:bg-accent/90 transition-all duration-300 hover:shadow-xl hover:shadow-accent/25"
                >
                  Get In Touch <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
                <a
                  href="tel:7814602000"
                  className="inline-flex items-center gap-2 text-white/70 font-inter font-medium hover:text-white transition-colors"
                >
                  <Phone className="w-4 h-4" />
                  Call 781-460-2000
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}