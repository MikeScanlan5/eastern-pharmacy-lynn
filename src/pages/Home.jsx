import React from 'react';
import Hero from '../components/home/Hero';
import StatsBar from '../components/shared/StatsBar';
import ServicesPreview from '../components/home/ServicesPreview';
import Testimonials from '../components/home/Testimonials';
import CTASection from '../components/home/CTASection';

const HERO_IMAGE = 'https://media.base44.com/images/public/69e70dbd38987d0fb7722d27/bc0071628_generated_7a75578e.png';
const DELIVERY_IMAGE = 'https://media.base44.com/images/public/69e70dbd38987d0fb7722d27/e9a3cf1f6_generated_5f106e84.png';

export default function Home() {
  return (
    <>
      <Hero heroImage={HERO_IMAGE} />
      <StatsBar />
      <ServicesPreview />
      <Testimonials />
      <CTASection />
    </>
  );
}