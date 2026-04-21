import React from 'react';
import { Building2, Package, ClipboardList, Users, Truck, Heart } from 'lucide-react';
import SectionHeading from '../components/shared/SectionHeading';
import ServiceCard from '../components/services/ServiceCard';
import AnimatedLine from '../components/shared/AnimatedLine';

const B2B_IMAGE = 'https://media.base44.com/images/public/69e70dbd38987d0fb7722d27/813ae2746_generated_ed8b3915.png';
const COMPLIANCE_IMAGE = 'https://media.base44.com/images/public/69e70dbd38987d0fb7722d27/5e6edb025_generated_621a3d48.png';
const DELIVERY_IMAGE = 'https://media.base44.com/images/public/69e70dbd38987d0fb7722d27/e9a3cf1f6_generated_5f106e84.png';
const NURSING_IMAGE = 'https://media.base44.com/images/public/69e70dbd38987d0fb7722d27/064a56c79_generated_60fee521.png';

const services = [
  {
    icon: Building2,
    title: 'Long-Term Care',
    subtitle: 'Nursing Homes & Memory Care',
    description: 'Comprehensive medication management for long-term care facilities. We handle everything from dispensing to compliance documentation.',
    features: [
      'Complete medication dispensing and management',
      'Monthly medication log sheets and reporting',
      'Customized medication administration records (MARs)',
      'Pharmacist consultation available 24/7',
      'Automatic refill coordination',
      'Emergency medication supply',
    ],
    image: NURSING_IMAGE,
  },
  {
    icon: Package,
    title: 'Compliance Packaging',
    subtitle: 'Dispill Multi-Dose System',
    description: 'Our Dispill compliance packaging program ensures patients take their medications correctly — color-coded by time of day, detachable, portable, and filled by a licensed pharmacist.',
    features: [
      'Color-coded by time of day (morning, noon, evening, bedtime)',
      'Detachable and portable individual packs',
      'Pharmacist-verified to eliminate medication mix-ups',
      'Ideal for patients on multiple medications',
      'Reduces medication errors by up to 60%',
      'Monthly sync with physician orders',
    ],
    image: COMPLIANCE_IMAGE,
  },
  {
    icon: ClipboardList,
    title: 'Blister Packing',
    subtitle: 'Bingo Cards/Sheets for MAP',
    description: 'Specialized blister packing (bingo cards/sheets) designed specifically for MAP facilities and group homes requiring organized medication distribution.',
    features: [
      'Industry-standard bingo card format',
      'Designed for MAP facility requirements',
      'Clear labeling with patient and medication info',
      'Tamper-evident sealed packaging',
      'Monthly delivery scheduling',
      'Pharmacist oversight on every pack',
    ],
    image: B2B_IMAGE,
  },
  {
    icon: Users,
    title: 'MAP Services & Consulting',
    subtitle: '24/7/365 Support',
    description: 'Expert MAP consulting services for group homes across the region. Our pharmacists are available around the clock to support your MAP program.',
    features: [
      '24/7/365 pharmacist availability',
      'MAP program setup and optimization',
      'Staff training and certification support',
      'Regulatory compliance guidance',
      'Medication error prevention protocols',
      'On-site consultation available',
    ],
    image: NURSING_IMAGE,
  },
  {
    icon: Truck,
    title: 'Free Delivery',
    subtitle: 'North Shore Coverage',
    description: 'Reliable, free medication delivery across the entire North Shore region. Your facility will never run short on essential medications.',
    features: [
      'Free delivery for all institutional clients',
      'Same-day emergency delivery available',
      'Temperature-controlled transport',
      'Secure chain-of-custody documentation',
      'Flexible scheduling for your facility',
      'Covering Lynn and the entire North Shore',
    ],
    image: DELIVERY_IMAGE,
  },
  {
    icon: Heart,
    title: 'Nursing Support',
    subtitle: 'Dedicated Facility Partnership',
    description: 'Comprehensive nursing support including medication synchronization, administration schedules, and dedicated account management for your facility.',
    features: [
      'Medication synchronization programs',
      'Administration schedule optimization',
      'Dedicated account pharmacist',
      'Monthly facility reviews',
      'Drug interaction monitoring',
      'New admission medication reviews',
    ],
    image: COMPLIANCE_IMAGE,
  },
];

export default function Services() {
  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="py-24 lg:py-32 bg-primary">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <SectionHeading
            label="Our Services"
            title="Institutional-Grade Pharmacy Solutions"
            description="Purpose-built services for nursing homes, hospitals, MAP facilities, and clinical environments that demand the highest standards of precision and compliance."
            light
          />
        </div>
      </section>

      <AnimatedLine />

      {/* Services Grid */}
      <section className="py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, i) => (
              <ServiceCard key={service.title} {...service} index={i} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}