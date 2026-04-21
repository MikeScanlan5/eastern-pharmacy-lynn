import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const navLinks = [
  { label: 'Home', path: '/' },
  { label: 'About', path: '/about' },
  { label: 'Services', path: '/services' },
  { label: 'Contact', path: '/contact' },
  { label: 'Patient Transfer', path: '/patient-transfer' },
  { label: 'Facility Patient Form', path: '/facility-patient-form' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? 'bg-white shadow-md border-b border-border' : 'bg-white/95 backdrop-blur-sm border-b border-border/60'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Desktop Nav */}
            <div className="hidden lg:flex items-center gap-8">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`text-sm font-inter font-medium transition-colors duration-300 relative group ${
                    location.pathname === link.path
                      ? 'text-accent'
                      : 'text-foreground/70 hover:text-accent'
                  }`}
                >
                  {link.label}
                  <span className={`absolute -bottom-1 left-0 h-0.5 bg-accent transition-all duration-300 ${
                    location.pathname === link.path ? 'w-full' : 'w-0 group-hover:w-full'
                  }`} />
                </Link>
              ))}


            </div>

            {/* CTA + Hamburger */}
            <div className="flex items-center gap-4">
              <a
                href="tel:7814602000"
                className="hidden md:flex items-center gap-2 text-sm font-inter font-medium text-foreground/60 hover:text-accent transition-colors duration-300"
              >
                <Phone className="w-4 h-4" />
                781-460-2000
              </a>
              <Link
                to="/contact"
                className="hidden lg:inline-flex px-5 py-2.5 bg-accent text-accent-foreground text-sm font-inter font-semibold rounded-full hover:bg-accent/90 transition-all duration-300 hover:shadow-lg hover:shadow-accent/25"
              >
                Contact Us
              </Link>
              <button
                onClick={() => setIsOpen(true)}
                className="lg:hidden p-2 rounded-lg text-foreground hover:bg-muted transition-colors"
              >
                <Menu className="w-6 h-6" />
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Full-Screen Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[100] bg-white flex flex-col"
          >
            <div className="flex justify-between items-center p-6 border-b border-border">
              <span className="text-lg font-inter font-bold text-foreground">Eastern Pharmacy</span>
              <button onClick={() => setIsOpen(false)} className="p-2 text-foreground/60 hover:text-foreground">
                <X className="w-8 h-8" />
              </button>
            </div>
            <div className="flex-1 flex flex-col items-center justify-center gap-8">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.path}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.08 }}
                >
                  <Link
                    to={link.path}
                    className={`text-3xl font-inter font-semibold tracking-tight transition-colors ${
                      location.pathname === link.path ? 'text-accent' : 'text-foreground/60 hover:text-accent'
                    }`}
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }}>
                <a href="tel:7814602000" className="flex items-center gap-3 text-muted-foreground text-lg mt-8">
                  <Phone className="w-5 h-5" />
                  781-460-2000
                </a>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}