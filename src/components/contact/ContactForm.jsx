import React, { useState } from 'react';
import { base44 } from '@/api/base44Client';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Label } from '@/components/ui/label';
import { ArrowRight, CheckCircle2, Loader2 } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const facilityTypes = [
  { value: 'nursing_home', label: 'Nursing Home / Memory Care' },
  { value: 'hospital', label: 'Hospital' },
  { value: 'clinic', label: 'Clinic' },
  { value: 'group_home', label: 'Group Home' },
  { value: 'map_program', label: 'MAP Program' },
  { value: 'individual', label: 'Individual' },
  { value: 'other', label: 'Other' },
];

const serviceInterests = [
  { value: 'long_term_care', label: 'Long-Term Care' },
  { value: 'compliance_packaging', label: 'Compliance Packaging' },
  { value: 'blister_packing', label: 'Blister Packing' },
  { value: 'delivery', label: 'Delivery Services' },
  { value: 'map_services', label: 'MAP Services' },
  { value: 'consulting', label: 'Consulting' },
  { value: 'general', label: 'General Inquiry' },
];

export default function ContactForm() {
  const [form, setForm] = useState({
    name: '', email: '', phone: '', organization: '',
    facility_type: '', service_interest: '', message: '',
  });
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    await base44.entities.ContactInquiry.create(form);
    setSubmitting(false);
    setSubmitted(true);
  };

  const updateField = (field, value) => setForm(prev => ({ ...prev, [field]: value }));

  if (submitted) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="text-center py-16"
      >
        <div className="w-16 h-16 mx-auto rounded-full bg-green-100 flex items-center justify-center mb-6">
          <CheckCircle2 className="w-8 h-8 text-green-600" />
        </div>
        <h3 className="text-2xl font-inter font-bold text-foreground mb-2">Thank You!</h3>
        <p className="text-muted-foreground max-w-md mx-auto">
          Your inquiry has been received. Our team will get back to you within one business day.
        </p>
      </motion.div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <Label htmlFor="name" className="text-sm font-inter font-medium">Full Name *</Label>
          <Input
            id="name"
            required
            value={form.name}
            onChange={(e) => updateField('name', e.target.value)}
            placeholder="Your full name"
            className="h-12 rounded-lg"
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="email" className="text-sm font-inter font-medium">Email Address *</Label>
          <Input
            id="email"
            type="email"
            required
            value={form.email}
            onChange={(e) => updateField('email', e.target.value)}
            placeholder="you@organization.com"
            className="h-12 rounded-lg"
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="phone" className="text-sm font-inter font-medium">Phone Number</Label>
          <Input
            id="phone"
            value={form.phone}
            onChange={(e) => updateField('phone', e.target.value)}
            placeholder="(781) 000-0000"
            className="h-12 rounded-lg"
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="org" className="text-sm font-inter font-medium">Organization</Label>
          <Input
            id="org"
            value={form.organization}
            onChange={(e) => updateField('organization', e.target.value)}
            placeholder="Facility or organization name"
            className="h-12 rounded-lg"
          />
        </div>
        <div className="space-y-2">
          <Label className="text-sm font-inter font-medium">Facility Type</Label>
          <Select value={form.facility_type} onValueChange={(v) => updateField('facility_type', v)}>
            <SelectTrigger className="h-12 rounded-lg">
              <SelectValue placeholder="Select facility type" />
            </SelectTrigger>
            <SelectContent>
              {facilityTypes.map(t => (
                <SelectItem key={t.value} value={t.value}>{t.label}</SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        <div className="space-y-2">
          <Label className="text-sm font-inter font-medium">Service Interest</Label>
          <Select value={form.service_interest} onValueChange={(v) => updateField('service_interest', v)}>
            <SelectTrigger className="h-12 rounded-lg">
              <SelectValue placeholder="Select a service" />
            </SelectTrigger>
            <SelectContent>
              {serviceInterests.map(s => (
                <SelectItem key={s.value} value={s.value}>{s.label}</SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </div>
      <div className="space-y-2">
        <Label htmlFor="message" className="text-sm font-inter font-medium">Message *</Label>
        <Textarea
          id="message"
          required
          value={form.message}
          onChange={(e) => updateField('message', e.target.value)}
          placeholder="Tell us about your facility's needs..."
          className="min-h-[120px] rounded-lg"
        />
      </div>
      <button
        type="submit"
        disabled={submitting}
        className="group inline-flex items-center gap-3 px-8 py-4 bg-accent text-accent-foreground font-inter font-semibold rounded-lg hover:bg-accent/90 transition-all duration-300 hover:shadow-xl hover:shadow-accent/25 disabled:opacity-50"
      >
        {submitting ? (
          <><Loader2 className="w-5 h-5 animate-spin" /> Submitting...</>
        ) : (
          <>Submit Inquiry <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" /></>
        )}
      </button>
    </form>
  );
}