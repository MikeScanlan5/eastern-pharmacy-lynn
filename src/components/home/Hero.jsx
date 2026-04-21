import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Shield } from 'lucide-react';

export default function Hero({ heroImage }) {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Advanced pharmaceutical automation technology"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/80 to-primary/40" />
      </div>

      {/* Animated Lines */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute left-0 right-0 h-px bg-white/5"
            style={{ top: `${20 + i * 15}%` }}
            initial={{ x: '-100%' }}
            animate={{ x: '100%' }}
            transition={{ duration: 8 + i * 2, repeat: Infinity, delay: i * 1.5, ease: 'linear' }}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 py-32 w-full">
        <div className="flex items-start gap-16">
        <div className="max-w-3xl flex-1">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center gap-3 mb-8">
              <Shield className="w-5 h-5 text-accent" />
              <span className="text-xs uppercase tracking-[0.2em] text-white/60 font-inter font-semibold">
                Born in Lynn, Massachusetts — Serving the North Shore
              </span>
            </div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-inter font-bold text-white tracking-tight leading-[0.95]">
              PRECISION<br />
              PHARMACY.<br />
              <span className="text-accent">INSTITUTIONAL</span><br />
              SCALE.
            </h1>

            <p className="mt-8 text-lg md:text-xl text-white/60 max-w-lg leading-relaxed">
              Serving nursing homes, hospitals, and clinical facilities with compliance packaging, 
              medication management, and 24/7 pharmaceutical support.
            </p>

            <div className="mt-10 flex flex-wrap items-center gap-4">
              <Link
                to="/contact"
                className="group inline-flex items-center gap-3 px-8 py-4 bg-accent text-accent-foreground font-inter font-semibold rounded-lg hover:bg-accent/90 transition-all duration-300 hover:shadow-xl hover:shadow-accent/25 hover:scale-[1.02] active:scale-[0.98]"
              >
                Partner With Us
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/services"
                className="inline-flex items-center gap-2 px-8 py-4 text-white/80 font-inter font-medium hover:text-white transition-colors border border-white/20 rounded-lg hover:border-white/40"
              >
                Explore Services
              </Link>
            </div>
          </motion.div>
        </div>

        {/* Logo to the right of hero text */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="hidden lg:flex items-center justify-center shrink-0"
        >
          <img
            src="https://media.base44.com/images/public/69e70dbd38987d0fb7722d27/5181b8aeb_EasternPharmacyLogo_Light1.png"
            alt="Eastern Pharmacy"
            className="h-64 w-auto"
          />
        </motion.div>

        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
}