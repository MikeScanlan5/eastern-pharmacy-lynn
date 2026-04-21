import React from 'react';
import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';

const testimonials = [
  {
    quote: "I take many medications and struggled with how many pills to take and when. The pharmacy offered the Dispill program and it changed everything. Now I take all my medications and even my doctors have seen changes in my lab numbers.",
    author: "Joe",
    role: "Dispill user for 2 years",
    initial: "J",
  },
  {
    quote: "Eastern Pharmacy has been instrumental in helping our nursing facility maintain compliance. Their packaging solutions and 24/7 support give us peace of mind that our residents are always properly medicated.",
    author: "Director of Nursing",
    role: "North Shore Nursing Facility",
    initial: "D",
  },
  {
    quote: "The MAP consulting services have transformed how we manage medications at our group homes. The team's expertise and availability around the clock is unmatched in the industry.",
    author: "Program Director",
    role: "Community Living Program",
    initial: "P",
  },
];

export default function Testimonials() {
  return (
    <section className="py-24 lg:py-32 bg-muted/50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="inline-block text-xs uppercase tracking-[0.2em] font-inter font-semibold text-accent mb-4">Client Voices</span>
          <h2 className="text-3xl md:text-4xl font-inter font-bold text-foreground">
            People Trust Eastern Pharmacy
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-xl mx-auto">
            Hear from the facilities and patients who rely on us every day.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="p-8 rounded-2xl bg-white border border-border shadow-sm hover:shadow-md transition-all duration-300"
            >
              <Quote className="w-7 h-7 text-accent/30 mb-5" />
              <p className="text-foreground/75 text-sm leading-relaxed mb-8">"{t.quote}"</p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-accent/15 flex items-center justify-center text-accent font-inter font-bold text-sm">
                  {t.initial}
                </div>
                <div>
                  <p className="text-foreground font-inter font-semibold text-sm">{t.author}</p>
                  <p className="text-muted-foreground text-xs mt-0.5">{t.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}