import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Award, Clock, Users } from 'lucide-react';
import SectionHeading from '../components/shared/SectionHeading';
import AnimatedLine from '../components/shared/AnimatedLine';
import StatsBar from '../components/shared/StatsBar';

const TEAM_IMAGE = 'https://media.base44.com/images/public/69e70dbd38987d0fb7722d27/d5ea19634_generated_cafe96dd.png';
const B2B_IMAGE = 'https://media.base44.com/images/public/69e70dbd38987d0fb7722d27/813ae2746_generated_ed8b3915.png';

const values = [
  {
    icon: Shield,
    title: 'Precision',
    description: 'Every medication, every dose, every delivery is handled with pharmaceutical-grade exactness.',
  },
  {
    icon: Award,
    title: 'Compliance',
    description: 'We maintain the highest standards of regulatory compliance for every facility we serve.',
  },
  {
    icon: Clock,
    title: 'Reliability',
    description: 'Available 24/7/365 with emergency support, because healthcare never takes a day off.',
  },
  {
    icon: Users,
    title: 'Partnership',
    description: 'We don\'t just fill prescriptions — we become an extension of your clinical care team.',
  },
];

export default function About() {
  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="py-24 lg:py-32 bg-primary">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <SectionHeading
            label="About Eastern Pharmacy"
            title="Three Decades of Institutional Excellence"
            description="Founded and operated by Evan Dorcet in Lynn, Massachusetts, Eastern Pharmacy has spent over 30 years building a reputation as the North Shore's most trusted institutional pharmacy."
            light
          />
        </div>
      </section>

      <AnimatedLine />

      {/* Story */}
      <section className="py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="text-xs uppercase tracking-[0.2em] text-accent font-inter font-semibold">Our Story</span>
              <h2 className="mt-4 text-3xl md:text-4xl font-inter font-bold text-foreground tracking-tight leading-tight">
                Built on Trust, Powered by Precision
              </h2>
              <div className="mt-8 space-y-6 text-muted-foreground leading-relaxed">
                <p>
                  Eastern Pharmacy isn't your typical neighborhood drug store. Under the leadership of owner 
                  and pharmacist Evan Dorcet, we've built a specialized institutional pharmacy focused 
                  exclusively on the unique demands of nursing homes, hospitals, group homes, and clinical facilities.
                </p>
                <p>
                  Based in Lynn, Massachusetts, we serve the entire North Shore region with a comprehensive 
                  suite of pharmaceutical services — from compliance packaging and blister packing to 24/7 
                  MAP consulting and free medication delivery.
                </p>
                <p>
                  Our mission is simple: ensure every patient in every facility we serve receives the right 
                  medication, at the right time, in the right packaging — with zero room for error.
                </p>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="rounded-2xl overflow-hidden"
            >
              <img
                src={TEAM_IMAGE}
                alt="Eastern Pharmacy team providing pharmaceutical consultation"
                className="w-full h-full object-cover aspect-[4/3]"
              />
            </motion.div>
          </div>
        </div>
      </section>

      <StatsBar />

      {/* Values */}
      <section className="py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <SectionHeading
            label="Our Values"
            title="The Pillars of Our Practice"
            align="center"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((v, i) => (
              <motion.div
                key={v.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="text-center p-8 rounded-xl border border-border bg-card hover:border-accent/30 transition-all duration-500"
              >
                <div className="w-14 h-14 mx-auto rounded-xl bg-accent/10 flex items-center justify-center mb-6">
                  <v.icon className="w-7 h-7 text-accent" />
                </div>
                <h3 className="text-lg font-inter font-semibold text-foreground mb-3">{v.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{v.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Facility Image */}
      <section className="pb-24 lg:pb-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="rounded-2xl overflow-hidden">
            <img
              src={B2B_IMAGE}
              alt="Modern pharmaceutical facility"
              className="w-full h-80 lg:h-[28rem] object-cover"
            />
          </div>
        </div>
      </section>
    </div>
  );
}