import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { base44 } from '@/api/base44Client';
import { CheckCircle2, UserRound, MapPin, Building2, Pill } from 'lucide-react';
import SectionHeading from '../components/shared/SectionHeading';
import AnimatedLine from '../components/shared/AnimatedLine';

const Field = ({ label, required, optional, italic, children }) => (
  <div className="flex flex-col gap-1.5">
    <label className="text-sm font-inter font-medium text-foreground">
      {label}
      {required && <span className="text-accent ml-1">*</span>}
      {(optional || italic) && (
        <span className="text-muted-foreground font-normal italic ml-1">
          {optional ? '(optional)' : italic}
        </span>
      )}
    </label>
    {children}
  </div>
);

const inputClass =
  'w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground font-inter text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent/40 focus:border-accent transition-all';

export default function FacilityPatientForm() {
  const [form, setForm] = useState({
    patient_first_name: '',
    patient_last_name: '',
    date_of_birth: '',
    telephone: '',
    email: '',
    street_address_1: '',
    street_address_2: '',
    city: '',
    state: '',
    zip_code: '',
    facility_name: '',
    facility_room: '',
    admitting_physician: '',
    drug_allergies: '',
    current_medications: '',
    insurance: '',
  });
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const set = (key) => (e) => setForm((f) => ({ ...f, [key]: e.target.value }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    await base44.entities.FacilityPatient.create(form);
    setSubmitted(true);
    setLoading(false);
  };

  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="py-24 lg:py-32 bg-primary">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <SectionHeading
            label="Facility Services"
            title="New Facility Patient Form"
            description="Enroll a new patient from your facility with Eastern Pharmacy. Our team will process the request and reach out within one business day."
            light
          />
        </div>
      </section>

      <AnimatedLine />

      <section className="py-24 lg:py-32">
        <div className="max-w-3xl mx-auto px-6 lg:px-8">
          {submitted ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-center py-20 px-8 rounded-2xl border border-border bg-card shadow-sm"
            >
              <div className="w-16 h-16 mx-auto rounded-full bg-accent/10 flex items-center justify-center mb-6">
                <CheckCircle2 className="w-8 h-8 text-accent" />
              </div>
              <h2 className="text-2xl font-inter font-bold text-foreground mb-3">Patient Enrollment Received</h2>
              <p className="text-muted-foreground leading-relaxed max-w-md mx-auto">
                Thank you! We've received the new facility patient form. A member of our team will follow up within one business day to complete onboarding.
              </p>
              <p className="mt-4 text-sm text-muted-foreground">
                Questions? Call us at{' '}
                <a href="tel:7814602000" className="text-accent font-medium hover:underline">
                  781-460-2000
                </a>
              </p>
            </motion.div>
          ) : (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="rounded-2xl border border-border bg-card shadow-sm overflow-hidden"
            >
              {/* Form Header */}
              <div className="px-8 md:px-10 pt-10 pb-6 border-b border-border">
                <p className="text-xs text-muted-foreground font-inter">
                  <span className="text-accent font-semibold">*</span> indicates a required field
                </p>
              </div>

              <form onSubmit={handleSubmit} className="px-8 md:px-10 py-10 space-y-10">

                {/* Patient Info */}
                <div>
                  <div className="flex items-center gap-2 mb-6">
                    <div className="w-7 h-7 rounded-lg bg-accent/10 flex items-center justify-center">
                      <UserRound className="w-4 h-4 text-accent" />
                    </div>
                    <h3 className="text-sm font-inter font-semibold uppercase tracking-wider text-muted-foreground">Patient Information</h3>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <Field label="Patient First Name" required>
                      <input className={inputClass} placeholder="First name" value={form.patient_first_name} onChange={set('patient_first_name')} required />
                    </Field>
                    <Field label="Patient Last Name" required>
                      <input className={inputClass} placeholder="Last name" value={form.patient_last_name} onChange={set('patient_last_name')} required />
                    </Field>
                    <Field label="Date of Birth">
                      <input className={inputClass} type="date" value={form.date_of_birth} onChange={set('date_of_birth')} />
                    </Field>
                    <Field label="Telephone">
                      <input className={inputClass} type="tel" placeholder="(617) 000-0000" value={form.telephone} onChange={set('telephone')} />
                    </Field>
                    <Field label="Email Address" optional>
                      <input className={inputClass} type="email" placeholder="you@example.com" value={form.email} onChange={set('email')} />
                    </Field>
                  </div>
                </div>

                {/* Address */}
                <div>
                  <div className="flex items-center gap-2 mb-6">
                    <div className="w-7 h-7 rounded-lg bg-accent/10 flex items-center justify-center">
                      <MapPin className="w-4 h-4 text-accent" />
                    </div>
                    <h3 className="text-sm font-inter font-semibold uppercase tracking-wider text-muted-foreground">Address</h3>
                  </div>
                  <div className="space-y-5">
                    <Field label="Street Address Line 1" required>
                      <input className={inputClass} placeholder="123 Main St" value={form.street_address_1} onChange={set('street_address_1')} required />
                    </Field>
                    <Field label="Street Address Line 2">
                      <input className={inputClass} placeholder="Apt, Suite, Unit (optional)" value={form.street_address_2} onChange={set('street_address_2')} />
                    </Field>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
                      <div className="sm:col-span-1">
                        <Field label="City" required>
                          <input className={inputClass} placeholder="Lynn" value={form.city} onChange={set('city')} required />
                        </Field>
                      </div>
                      <Field label="State">
                        <input className={inputClass} placeholder="MA" maxLength={2} value={form.state} onChange={set('state')} />
                      </Field>
                      <Field label="Zip Code">
                        <input className={inputClass} placeholder="01901" value={form.zip_code} onChange={set('zip_code')} />
                      </Field>
                    </div>
                  </div>
                </div>

                {/* Facility Info */}
                <div>
                  <div className="flex items-center gap-2 mb-6">
                    <div className="w-7 h-7 rounded-lg bg-accent/10 flex items-center justify-center">
                      <Building2 className="w-4 h-4 text-accent" />
                    </div>
                    <h3 className="text-sm font-inter font-semibold uppercase tracking-wider text-muted-foreground">Facility Information</h3>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <Field label="Facility Name" required>
                      <input className={inputClass} placeholder="Name of facility" value={form.facility_name} onChange={set('facility_name')} required />
                    </Field>
                    <Field label="Room / Unit" optional>
                      <input className={inputClass} placeholder="Room or unit number" value={form.facility_room} onChange={set('facility_room')} />
                    </Field>
                    <Field label="Admitting Physician" optional>
                      <input className={inputClass} placeholder="Dr. Jane Smith" value={form.admitting_physician} onChange={set('admitting_physician')} />
                    </Field>
                  </div>
                </div>

                {/* Clinical Details */}
                <div>
                  <div className="flex items-center gap-2 mb-6">
                    <div className="w-7 h-7 rounded-lg bg-accent/10 flex items-center justify-center">
                      <Pill className="w-4 h-4 text-accent" />
                    </div>
                    <h3 className="text-sm font-inter font-semibold uppercase tracking-wider text-muted-foreground">Clinical Details</h3>
                  </div>
                  <div className="space-y-5">
                    <Field label="Drug Allergies" italic="(if applicable)">
                      <input className={inputClass} placeholder="List any known drug allergies" value={form.drug_allergies} onChange={set('drug_allergies')} />
                    </Field>
                    <Field label="Current Medications" optional>
                      <textarea
                        className={inputClass + ' resize-none'}
                        rows={3}
                        placeholder="List current medications, dosages, and frequencies"
                        value={form.current_medications}
                        onChange={set('current_medications')}
                      />
                    </Field>
                    <Field label="Insurance" optional>
                      <input className={inputClass} placeholder="Insurance provider or plan name" value={form.insurance} onChange={set('insurance')} />
                    </Field>
                  </div>
                </div>

                {/* Submit */}
                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full py-4 bg-accent text-accent-foreground font-inter font-semibold rounded-lg hover:bg-accent/90 transition-all hover:shadow-lg hover:shadow-accent/20 disabled:opacity-60 disabled:cursor-not-allowed"
                  >
                    {loading ? 'Submitting...' : 'Submit Patient Form'}
                  </button>
                </div>

              </form>
            </motion.div>
          )}
        </div>
      </section>
    </div>
  );
}