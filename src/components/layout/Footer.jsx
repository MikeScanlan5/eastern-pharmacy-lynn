import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Clock, ArrowRight } from 'lucide-react';

const quickLinks = [
  { label: 'Long-Term Care', path: '/services' },
  { label: 'Compliance Packaging', path: '/services' },
  { label: 'Blister Packing', path: '/services' },
  { label: 'MAP Services', path: '/services' },
  { label: 'Delivery', path: '/services' },
];

const resourceLinks = [
  { label: 'About Us', path: '/about' },
  { label: 'Contact', path: '/contact' },
  { label: 'Terms & Conditions', path: '/terms' },
  { label: 'Privacy Policy', path: '/privacy' },
];

export default function Footer() {
  return (
    <footer className="bg-muted/60 border-t border-border">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="mb-5">
              <span className="text-xl font-inter font-bold text-foreground">Eastern Pharmacy</span>
              <p className="text-xs text-accent font-inter font-semibold mt-1">Lynn, Massachusetts</p>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed mb-6">
              Your trusted neighborhood pharmacy serving nursing homes, hospitals, and families across Massachusetts' North Shore.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 text-accent text-sm font-inter font-semibold hover:gap-3 transition-all"
            >
              Get In Touch <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-xs uppercase tracking-[0.15em] text-foreground/40 font-inter font-semibold mb-6">Services</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <Link to={link.path} className="text-sm text-muted-foreground hover:text-accent transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="text-xs uppercase tracking-[0.15em] text-foreground/40 font-inter font-semibold mb-6">Company</h4>
            <ul className="space-y-3">
              {resourceLinks.map((link) => (
                <li key={link.label}>
                  <Link to={link.path} className="text-sm text-muted-foreground hover:text-accent transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-xs uppercase tracking-[0.15em] text-foreground/40 font-inter font-semibold mb-6">Contact</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Phone className="w-4 h-4 mt-0.5 text-accent shrink-0" />
                <a href="tel:7814602000" className="text-sm text-muted-foreground hover:text-accent transition-colors">781-460-2000</a>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="w-4 h-4 mt-0.5 text-accent shrink-0" />
                <a href="mailto:easternpharmacylynn@gmail.com" className="text-sm text-muted-foreground hover:text-accent transition-colors break-all">
                  easternpharmacylynn@gmail.com
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 mt-0.5 text-accent shrink-0" />
                <span className="text-sm text-muted-foreground">152 Lynnway Suite 1C<br />Lynn, MA 01902</span>
              </li>
              <li className="flex items-start gap-3">
                <Clock className="w-4 h-4 mt-0.5 text-accent shrink-0" />
                <span className="text-sm text-muted-foreground">Mon–Fri: 9am – 6pm<br />Emergency line: 24/7</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-border">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-6 flex flex-wrap items-center justify-between gap-4">
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} Eastern Pharmacy, Lynn MA. All rights reserved.
          </p>
          <p className="text-xs text-muted-foreground/50">
            Institutional Pharmacy Services
          </p>
        </div>
      </div>
    </footer>
  );
}