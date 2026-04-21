import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Search, FileText, Phone, Mail, Download, ArrowRight } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Link } from 'react-router-dom';
import SectionHeading from '../components/shared/SectionHeading';
import AnimatedLine from '../components/shared/AnimatedLine';

const forms = [
  { name: 'New Account Application', category: 'Account', description: 'Apply to become an Eastern Pharmacy institutional client.' },
  { name: 'Medication Refill Request', category: 'Orders', description: 'Submit a refill request for your facility medications.' },
  { name: 'Compliance Packaging Enrollment', category: 'Services', description: 'Enroll patients in the Dispill compliance packaging program.' },
  { name: 'MAP Program Consultation Request', category: 'Consulting', description: 'Request a consultation for your MAP program setup or optimization.' },
  { name: 'Delivery Schedule Change', category: 'Logistics', description: 'Modify or update your regular delivery schedule.' },
  { name: 'Emergency Medication Request', category: 'Urgent', description: 'For after-hours or emergency medication needs.' },
  { name: 'Blister Pack Order Form', category: 'Orders', description: 'Order blister packaging (bingo cards) for your MAP facility.' },
  { name: 'Insurance & Billing Inquiry', category: 'Account', description: 'Submit billing questions or insurance-related inquiries.' },
];

const categories = ['All', ...new Set(forms.map(f => f.category))];

export default function Resources() {
  const [search, setSearch] = useState('');
  const [activeCategory, setActiveCategory] = useState('All');

  const filtered = forms.filter(f => {
    const matchesSearch = f.name.toLowerCase().includes(search.toLowerCase()) ||
      f.description.toLowerCase().includes(search.toLowerCase());
    const matchesCategory = activeCategory === 'All' || f.category === activeCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="py-24 lg:py-32 bg-primary">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <SectionHeading
            label="Forms & Resources"
            title="The Compliance Vault"
            description="Access all institutional forms, request services, and manage your account — all in one place. Submit any form digitally, and our team will respond within one business day."
            light
          />
        </div>
      </section>

      <AnimatedLine />

      {/* Search & Filter */}
      <section className="py-24 lg:py-32">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="relative mb-8">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
            <Input
              placeholder="Search forms and resources..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="pl-12 h-14 text-base rounded-xl border-border bg-card"
            />
          </div>

          <div className="flex flex-wrap gap-2 mb-12">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 text-sm font-inter font-medium rounded-lg transition-all duration-300 ${
                  activeCategory === cat
                    ? 'bg-accent text-accent-foreground'
                    : 'bg-card text-muted-foreground border border-border hover:border-accent/30'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Form List */}
          <div className="space-y-4">
            {filtered.map((form, i) => (
              <motion.div
                key={form.name}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="group p-6 rounded-xl border border-border bg-card hover:border-accent/30 hover:shadow-lg hover:shadow-accent/5 transition-all duration-500 cursor-pointer"
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center shrink-0 mt-0.5">
                      <FileText className="w-5 h-5 text-accent" />
                    </div>
                    <div>
                      <h3 className="font-inter font-semibold text-foreground group-hover:text-accent transition-colors">{form.name}</h3>
                      <p className="text-sm text-muted-foreground mt-1">{form.description}</p>
                      <span className="inline-block mt-2 text-xs uppercase tracking-wider text-accent/60 font-inter font-semibold">{form.category}</span>
                    </div>
                  </div>
                  <Link
                    to="/contact"
                    className="shrink-0 p-2 rounded-lg text-muted-foreground hover:text-accent hover:bg-accent/10 transition-all"
                  >
                    <ArrowRight className="w-5 h-5" />
                  </Link>
                </div>
              </motion.div>
            ))}

            {filtered.length === 0 && (
              <div className="text-center py-16 text-muted-foreground">
                <FileText className="w-12 h-12 mx-auto mb-4 opacity-30" />
                <p className="text-lg font-inter">No forms match your search.</p>
                <p className="text-sm mt-2">Try a different search term or category.</p>
              </div>
            )}
          </div>

          {/* Contact Fallback */}
          <div className="mt-16 p-8 rounded-xl bg-primary text-white">
            <h3 className="text-xl font-inter font-bold mb-2">Can't find what you need?</h3>
            <p className="text-white/60 mb-6">Contact us directly and we'll help you with any request.</p>
            <div className="flex flex-wrap gap-4">
              <a href="tel:7814602000" className="inline-flex items-center gap-2 text-accent text-sm font-inter font-semibold">
                <Phone className="w-4 h-4" /> 781-460-2000
              </a>
              <a href="mailto:easternpharmacylynn@gmail.com" className="inline-flex items-center gap-2 text-accent text-sm font-inter font-semibold">
                <Mail className="w-4 h-4" /> Email Us
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}