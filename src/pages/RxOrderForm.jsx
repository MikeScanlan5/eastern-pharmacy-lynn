import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { base44 } from '@/api/base44Client';
import { Plus, Trash2, CheckCircle } from 'lucide-react';

const inputClass = "w-full px-4 py-3 rounded-xl border border-border bg-white text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-accent/40 focus:border-accent transition-all";

function Field({ label, required, children }) {
  return (
    <div className="flex flex-col gap-1.5">
      <label className="text-sm font-inter font-medium text-foreground">
        {label} {required && <span className="text-destructive">*</span>}
      </label>
      {children}
    </div>
  );
}

const emptyPatient = () => ({ patient_first_name: '', patient_last_name: '', medication_strength: '' });

export default function RxOrderForm() {
  const [form, setForm] = useState({
    customer_email: '',
    customer_telephone: '',
    delivery_or_pickup: 'delivery',
  });
  const [patients, setPatients] = useState([emptyPatient()]);
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const updatePatient = (index, field, value) => {
    setPatients(prev => prev.map((p, i) => i === index ? { ...p, [field]: value } : p));
  };

  const addPatient = () => setPatients(prev => [...prev, emptyPatient()]);

  const removePatient = (index) => setPatients(prev => prev.filter((_, i) => i !== index));

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    await base44.entities.RxOrder.create({
      ...form,
      patients,
      status: 'new',
    });
    setLoading(false);
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center px-6">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="bg-white rounded-3xl shadow-xl border border-border p-12 max-w-md w-full text-center"
        >
          <div className="w-16 h-16 rounded-full bg-accent/15 flex items-center justify-center mx-auto mb-6">
            <CheckCircle className="w-8 h-8 text-accent" />
          </div>
          <h2 className="text-2xl font-inter font-bold text-foreground mb-3">Request Submitted!</h2>
          <p className="text-muted-foreground leading-relaxed">
            Your prescription order request has been received. Our team will review it and be in touch shortly.
          </p>
          <p className="mt-4 text-sm text-muted-foreground">
            Questions? Call us at <a href="tel:7814602000" className="text-accent font-semibold">(781) 460-2000</a>
          </p>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Hero */}
      <section className="bg-gradient-to-br from-accent/10 to-background pt-28 pb-12 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <h1 className="text-4xl md:text-5xl font-inter font-bold text-foreground tracking-tight">
              Prescription Order Request
            </h1>
            <p className="mt-4 text-lg text-muted-foreground max-w-xl mx-auto leading-relaxed">
              Submit prescription refill or order information for Eastern Pharmacy. Please include medication name and strength. For multiple prescriptions, list them clearly in the medication field.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Form */}
      <section className="max-w-3xl mx-auto px-6 py-12">
        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="space-y-10"
        >
          {/* Customer Information */}
          <div className="bg-white rounded-3xl border border-border shadow-sm p-8">
            <h2 className="text-lg font-inter font-bold text-foreground mb-6">Customer Information</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <Field label="Customer Email">
                <input
                  type="email"
                  className={inputClass}
                  placeholder="email@example.com"
                  value={form.customer_email}
                  onChange={e => setForm(f => ({ ...f, customer_email: e.target.value }))}
                />
              </Field>
              <Field label="Customer Telephone Number">
                <input
                  type="tel"
                  className={inputClass}
                  placeholder="(781) 000-0000"
                  value={form.customer_telephone}
                  onChange={e => setForm(f => ({ ...f, customer_telephone: e.target.value }))}
                />
              </Field>
            </div>
            <p className="mt-3 text-xs text-muted-foreground">Please provide at least an email address or phone number.</p>

            <div className="mt-5">
              <Field label="Delivery or Pickup?" required>
                <div className="flex gap-4 mt-1">
                  {['delivery', 'pickup'].map(opt => (
                    <label key={opt} className="flex items-center gap-2 cursor-pointer">
                      <input
                        type="radio"
                        name="delivery_or_pickup"
                        value={opt}
                        checked={form.delivery_or_pickup === opt}
                        onChange={() => setForm(f => ({ ...f, delivery_or_pickup: opt }))}
                        className="accent-accent w-4 h-4"
                      />
                      <span className="text-sm font-inter text-foreground capitalize">{opt}</span>
                    </label>
                  ))}
                </div>
              </Field>
            </div>
          </div>

          {/* Patient / Medication Information */}
          <div className="bg-white rounded-3xl border border-border shadow-sm p-8">
            <h2 className="text-lg font-inter font-bold text-foreground mb-2">Patient / Medication Information</h2>
            <p className="text-sm text-muted-foreground mb-6">
              Add one or more patients. For multiple prescriptions for the same patient, list all medications in the Medication + Strength box.
            </p>

            <div className="space-y-6">
              {patients.map((patient, index) => (
                <div key={index} className="p-5 rounded-2xl border border-border bg-muted/30 relative">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-sm font-inter font-semibold text-foreground">Patient {index + 1}</h3>
                    {patients.length > 1 && (
                      <button
                        type="button"
                        onClick={() => removePatient(index)}
                        className="flex items-center gap-1 text-xs text-destructive hover:text-destructive/80 transition-colors"
                      >
                        <Trash2 className="w-3.5 h-3.5" /> Remove
                      </button>
                    )}
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <Field label="Patient First Name" required>
                      <input
                        type="text"
                        className={inputClass}
                        value={patient.patient_first_name}
                        onChange={e => updatePatient(index, 'patient_first_name', e.target.value)}
                        required
                      />
                    </Field>
                    <Field label="Patient Last Name" required>
                      <input
                        type="text"
                        className={inputClass}
                        value={patient.patient_last_name}
                        onChange={e => updatePatient(index, 'patient_last_name', e.target.value)}
                        required
                      />
                    </Field>
                    <div className="md:col-span-2">
                      <Field label="Medication + Strength" required>
                        <textarea
                          className={`${inputClass} resize-none h-24`}
                          placeholder="e.g. Lisinopril 10mg, Metformin 500mg"
                          value={patient.medication_strength}
                          onChange={e => updatePatient(index, 'medication_strength', e.target.value)}
                          required
                        />
                      </Field>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <button
              type="button"
              onClick={addPatient}
              className="mt-4 flex items-center gap-2 text-sm font-inter font-semibold text-accent hover:text-accent/80 transition-colors"
            >
              <Plus className="w-4 h-4" /> Add Another Patient
            </button>
          </div>

          {/* Submit */}
          <div>
            <button
              type="submit"
              disabled={loading}
              className="w-full py-4 bg-accent text-accent-foreground font-inter font-semibold rounded-full hover:bg-accent/90 transition-all duration-300 hover:shadow-lg hover:shadow-accent/20 disabled:opacity-60 disabled:cursor-not-allowed"
            >
              {loading ? 'Submitting…' : 'Submit Prescription Order Request'}
            </button>
            <p className="mt-4 text-center text-xs text-muted-foreground">
              Do not use this form for emergencies. For urgent needs, call Eastern Pharmacy directly at{' '}
              <a href="tel:17814602000" className="text-accent font-semibold">(781) 460-2000</a>.
            </p>
          </div>
        </motion.form>
      </section>
    </div>
  );
}