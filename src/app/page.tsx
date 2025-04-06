import React from 'react';
import Header from '@/components/layout/Header';
import Hero from '@/components/layout/Hero';
import Features from '@/components/layout/Features';
import Pricing from '@/components/layout/Pricing';
import EarlyLarpOffer from '@/components/layout/EarlyLarpOffer';
import AsciiArt from '@/components/layout/AsciiArt';
import Footer from '@/components/layout/Footer';

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <Features />
        <Pricing />
        <EarlyLarpOffer />
        <AsciiArt />
      </main>
      <Footer />
    </div>
  );
}
