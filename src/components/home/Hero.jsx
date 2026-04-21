import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, MapPin, Heart, Clock } from 'lucide-react';

export default function Hero({ heroImage }) {
  return (
    <section className="relative pt-20 overflow-hidden bg-background">
      {/* Soft decorative blobs */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full opacity-20 pointer-events-none"
        style={{ background: 'radial-gradient(circle, hsl(168,52%,38%) 0%, transparent 70%)', transform: 'translate(30%, -30%)' }} />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full opacity-10 pointer-events-none"
        style={{ background: 'radial-gradient(circle, hsl(168,52%,38%) 0%, transparent 70%)', transform: 'translate(-40%, 40%)' }} />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16 lg:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* Left: Text */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <motion.img
              src="https://media.base44.com/images/public/69e70dbd38987d0fb7722d27/a72d6e609_EasternPharmacyLogo_Light.png"
              alt="Eastern Pharmacy"
              className="w-56 mb-8"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            />

            <div className="inline-flex items-center gap-2 px-4 py-2 bg-accent/10 rounded-full mb-6">
              <MapPin className="w-4 h-4 text-accent" />
              <span className="text-xs font-inter font-semibold text-accent uppercase tracking-wider">
                Lynn, MA — Serving the North Shore
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-inter font-bold text-foreground tracking-tight leading-tight">
              Your Trusted<br />
              Neighborhood<br />
              <span className="text-accent">Pharmacy</span>
            </h1>

            <p className="mt-6 text-lg text-muted-foreground leading-relaxed max-w-lg">
              Eastern Pharmacy brings personalized care and precision medication management to nursing homes, 
              group homes, and families across Massachusetts' North Shore.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <div className="w-5 h-5 rounded-full bg-accent/15 flex items-center justify-center">
                  <Heart className="w-3 h-3 text-accent" />
                </div>
                Personalized Care
              </div>
              <div className="w-px h-4 bg-border" />
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <div className="w-5 h-5 rounded-full bg-accent/15 flex items-center justify-center">
                  <Clock className="w-3 h-3 text-accent" />
                </div>
                24/7 Support
              </div>
              <div className="w-px h-4 bg-border" />
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <div className="w-5 h-5 rounded-full bg-accent/15 flex items-center justify-center">
                  <ArrowRight className="w-3 h-3 text-accent" />
                </div>
                Free Delivery
              </div>
            </div>

            <div className="mt-10 flex flex-wrap items-center gap-4">
              <Link
                to="/contact"
                className="group inline-flex items-center gap-3 px-8 py-4 bg-accent text-accent-foreground font-inter font-semibold rounded-full hover:bg-accent/90 transition-all duration-300 hover:shadow-xl hover:shadow-accent/20 hover:scale-[1.02] active:scale-[0.98]"
              >
                Get In Touch
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/services"
                className="inline-flex items-center gap-2 px-8 py-4 text-foreground font-inter font-medium hover:text-accent transition-colors border border-border rounded-full hover:border-accent/40"
              >
                Our Services
              </Link>
            </div>
          </motion.div>

          {/* Right: Image */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative rounded-3xl overflow-hidden shadow-2xl shadow-accent/10">
              <img
                src={heroImage}
                alt="Eastern Pharmacy team and facility"
                className="w-full h-[480px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-accent/20 to-transparent" />
            </div>

            {/* Floating card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="absolute -bottom-6 -left-6 bg-white rounded-2xl shadow-xl p-5 border border-border"
            >
              <p className="text-xs text-muted-foreground font-inter mb-1">Trusted by</p>
              <p className="text-2xl font-inter font-bold text-accent">100+ Facilities</p>
              <p className="text-xs text-muted-foreground font-inter mt-1">Across the North Shore</p>
            </motion.div>

            {/* Second floating card */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.6 }}
              className="absolute -top-4 -right-4 bg-white rounded-2xl shadow-xl p-4 border border-border"
            >
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-accent/15 flex items-center justify-center">
                  <Heart className="w-4 h-4 text-accent" />
                </div>
                <div>
                  <p className="text-xs font-inter font-semibold text-foreground">30+ Years</p>
                  <p className="text-xs text-muted-foreground">of Service</p>
                </div>
              </div>
            </motion.div>
          </motion.div>

        </div>
      </div>

      {/* Wave divider */}
      <div className="relative h-16 overflow-hidden">
        <svg viewBox="0 0 1440 64" fill="none" xmlns="http://www.w3.org/2000/svg" className="absolute bottom-0 w-full" preserveAspectRatio="none">
          <path d="M0 32C360 0 720 64 1080 32C1260 16 1380 8 1440 32V64H0V32Z" fill="hsl(0,0%,100%)" />
        </svg>
      </div>
    </section>
  );
}