import React from 'react';
import Hero from '../components/Hero';
import TrustLogos from '../components/TrustLogos';
import CompanyIntro from '../components/CompanyIntro';
import Timeline from '../components/Timeline';
import Expertise from '../components/Expertise';
import Technology from '../components/Technology';
import Products from '../components/Products';
import CaseStudies from '../components/CaseStudies';
import Consultation from '../components/Consultation';
import Testimonials from '../components/Testimonials';

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <Hero />

      {/* Trust Client Logo Strip */}
      <TrustLogos />

      {/* Company Introduction & Stats */}
      <CompanyIntro />

      {/* Milestones / Our Story Timeline */}
      <Timeline />

      {/* Full-Spectrum Expertise */}
      <Expertise />

      {/* Technology / Platform Section */}
      <Technology />

      {/* Products We've Engineered and Shipped */}
      <Products />

      {/* Proof / Case Studies */}
      <CaseStudies />

      {/* Consultation Section */}
      <Consultation />

      {/* Testimonials */}
      <Testimonials />
    </>
  );
}
