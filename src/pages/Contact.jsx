import React from 'react';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';
import SectionHeading from '../components/shared/SectionHeading';
import AnimatedLine from '../components/shared/AnimatedLine';
import ContactForm from '../components/contact/ContactForm';
import { motion } from 'framer-motion';

const contactInfo = [
  { icon: Phone, label: 'Phone', value: '781-460-2000', href: 'tel:7814602000' },
  { icon: Mail, label: 'Email', value: 'easternpharmacylynn@gmail.com', href: 'mailto:easternpharmacylynn@gmail.com' },
  { icon: MapPin, label: 'Location', value: 'Lynn, Massachusetts' },
  { icon: Clock, label: 'Hours', value: 'Mon–Fri: 9am – 6pm\nEmergency: 24/7' },
];

export default function Contact() {
  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="py-24 lg:py-32 bg-primary">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <SectionHeading
            label="Get In Touch"
            title="Let's Build a Partnership"
            description="Whether you're exploring a new pharmacy partnership or need immediate support for your facility, we're here to help."
            light
          />
        </div>
      </section>

      <AnimatedLine />

      <section className="py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
            {/* Contact Info */}
            <div className="lg:col-span-1">
              <h3 className="text-xl font-inter font-bold text-foreground mb-8">Contact Information</h3>
              <div className="space-y-6">
                {contactInfo.map((info, i) => (
                  <motion.div
                    key={info.label}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="flex items-start gap-4"
                  >
                    <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center shrink-0">
                      <info.icon className="w-5 h-5 text-accent" />
                    </div>
                    <div>
                      <p className="text-xs uppercase tracking-wider text-muted-foreground font-inter font-semibold">{info.label}</p>
                      {info.href ? (
                        <a href={info.href} className="text-foreground font-inter font-medium hover:text-accent transition-colors mt-1 block">
                          {info.value}
                        </a>
                      ) : (
                        <p className="text-foreground font-inter font-medium mt-1 whitespace-pre-line">{info.value}</p>
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Quick Response Promise */}
              <div className="mt-12 p-6 rounded-xl bg-accent/5 border border-accent/20">
                <h4 className="text-sm font-inter font-bold text-foreground mb-2">Response Guarantee</h4>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  We respond to all institutional inquiries within one business day. 
                  For urgent medication needs, call our emergency line 24/7.
                </p>
              </div>
            </div>

            {/* Form */}
            <div className="lg:col-span-2">
              <div className="p-8 md:p-10 rounded-2xl bg-card border border-border shadow-sm">
                <h3 className="text-xl font-inter font-bold text-foreground mb-2">Send Us an Inquiry</h3>
                <p className="text-sm text-muted-foreground mb-8">Fill out the form below and our team will get back to you promptly.</p>
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}