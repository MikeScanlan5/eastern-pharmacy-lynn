import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const navLinks = [
  { label: 'Home', path: '/' },
  { label: 'Services', path: '/services' },
  { label: 'Resources', path: '/resources' },
  { label: 'About', path: '/about' },
  { label: 'Contact', path: '/contact' },
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
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? 'bg-card/95 backdrop-blur-xl shadow-sm border-b border-border' : 'bg-transparent'
      }`}>
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link to="/" className="flex items-center group">
              {scrolled ? (
                <img
                  src="https://media.base44.com/images/public/69e70dbd38987d0fb7722d27/5181b8aeb_EasternPharmacyLogo_Light1.png"
                  alt="Eastern Pharmacy"
                  className="h-12 w-auto"
                />
              ) : (
                <div className="flex items-center gap-3">
                  <div className="h-12 w-12 rounded-lg bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center overflow-hidden">
                    <img
                      src="https://media.base44.com/images/public/69e70dbd38987d0fb7722d27/5181b8aeb_EasternPharmacyLogo_Light1.png"
                      alt="Eastern Pharmacy"
                      className="h-10 w-auto"
                    />
                  </div>
                  <div>
                    <span className="text-lg font-inter font-semibold tracking-tight text-white">Eastern</span>
                    <span className="block text-[10px] uppercase tracking-[0.2em] text-white/70">Pharmacy</span>
                  </div>
                </div>
              )}
            </Link>

            {/* Desktop Nav */}
            <div className="hidden lg:flex items-center gap-8">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`text-sm font-inter font-medium transition-colors duration-300 relative group ${
                    location.pathname === link.path
                      ? (scrolled ? 'text-accent' : 'text-white')
                      : (scrolled ? 'text-muted-foreground hover:text-foreground' : 'text-white/70 hover:text-white')
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
                className={`hidden md:flex items-center gap-2 text-sm font-inter font-medium transition-colors duration-300 ${
                  scrolled ? 'text-foreground' : 'text-white'
                }`}
              >
                <Phone className="w-4 h-4" />
                781-460-2000
              </a>
              <Link
                to="/contact"
                className="hidden lg:inline-flex px-5 py-2.5 bg-accent text-accent-foreground text-sm font-inter font-semibold rounded-lg hover:bg-accent/90 transition-all duration-300 hover:shadow-lg hover:shadow-accent/25"
              >
                Partner With Us
              </Link>
              <button
                onClick={() => setIsOpen(true)}
                className={`lg:hidden p-2 rounded-lg transition-colors ${
                  scrolled ? 'text-foreground hover:bg-muted' : 'text-white hover:bg-white/10'
                }`}
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
            className="fixed inset-0 z-[100] bg-primary/98 backdrop-blur-xl flex flex-col"
          >
            <div className="flex justify-end p-6">
              <button onClick={() => setIsOpen(false)} className="p-2 text-primary-foreground/70 hover:text-primary-foreground">
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
                    className={`text-4xl font-inter font-semibold tracking-tight transition-colors ${
                      location.pathname === link.path ? 'text-accent' : 'text-primary-foreground/70 hover:text-primary-foreground'
                    }`}
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }}>
                <a href="tel:7814602000" className="flex items-center gap-3 text-primary-foreground/50 text-lg mt-8">
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