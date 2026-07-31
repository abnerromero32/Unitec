import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import HeroSection from '@/app/components/HeroSection';
import BienvenidaSection from '@/app/components/BienvenidaSection';
import DestinosSection from '@/app/components/DestinosSection';
import ExperienciasSection from '@/app/components/ExperienciasSection';
import CulturaSection from '@/app/components/CulturaSection';
import NosotrosContactoSection from '@/app/components/NosotrosContactoSection';

/**
 * Homepage — TerritorioWeb
 * Sustainable tourism platform for Nicaragua
 */
export default function HomePage() {
  return (
    <main className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Header />
      <HeroSection />
      <BienvenidaSection />
      <DestinosSection />
      <ExperienciasSection />
      <CulturaSection />
      <NosotrosContactoSection />
      <Footer />
    </main>
  );
}
