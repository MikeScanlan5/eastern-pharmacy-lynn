import React from 'react';
import { motion } from 'framer-motion';
import SectionHeading from '../shared/SectionHeading';
import { Quote } from 'lucide-react';

const testimonials = [
  {
    quote: "I take many medications and struggled with how many pills to take and when to take them. The pharmacy offered the Dispill program to me and it changed everything. Now I take all my medications and even my doctors have seen changes in my lab numbers.",
    author: "Joe",
    role: "Dispill user for 2 years",
  },
  {
    quote: "Eastern Pharmacy has been instrumental in helping our nursing facility maintain compliance. Their packaging solutions and 24/7 support give us peace of mind that our residents are always properly medicated.",
    author: "Director of Nursing",
    role: "North Shore Nursing Facility",
  },
  {
    quote: "The MAP consulting services have transformed how we manage medications at our group homes. The team's expertise and availability around the clock is unmatched in the industry.",
    author: "Program Director",
    role: "Community Living Program",
  },
];

export default function Testimonials() {
  return (
    <section className="py-24 lg:py-32 bg-primary">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <SectionHeading
          label="Client Voices"
          title="Trusted by Healthcare Leaders"
          description="Hear from the facilities and patients who rely on Eastern Pharmacy every day."
          align="center"
          light
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="p-8 rounded-xl bg-white/5 border border-white/10 hover:border-accent/30 transition-all duration-500"
            >
              <Quote className="w-8 h-8 text-accent/40 mb-6" />
              <p className="text-white/70 text-sm leading-relaxed mb-8">"{t.quote}"</p>
              <div>
                <p className="text-white font-inter font-semibold text-sm">{t.author}</p>
                <p className="text-white/40 text-xs mt-1">{t.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}