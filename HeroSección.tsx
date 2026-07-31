'use client';

import React, { useEffect, useRef } from 'react';
import AppImage from '@/components/ui/AppImage';

/* Nicaragua hero images — cinematic landscapes */
const heroSlides = [
{
  src: "https://img.rocket.new/generatedImages/rocket_gen_img_11aad9ba1-1785463401481.png",
  alt: 'Laguna de Apoyo Nicaragua, crater lake surrounded by dense tropical rainforest under golden sunset light'
},
{
  src: "https://images.unsplash.com/photo-1584747166768-8bbb2074f212",
  alt: 'Misty green mountains of Nicaragua covered in tropical cloud forest, moody atmospheric landscape'
},
{
  src: "https://images.unsplash.com/photo-1589029693762-c58bb921c523",
  alt: 'Pacific Ocean coastline at sunset, dramatic orange sky over calm dark ocean water'
},
{
  src: "https://images.unsplash.com/photo-1718313591412-b27248cce639",
  alt: 'Dramatic volcanic mountain peak rising above clouds, rugged terrain with green slopes'
}];


export default function HeroSection() {
  const sectionRef = useRef<HTMLElement>(null);

  /* Parallax on scroll */
  useEffect(() => {
    const section = sectionRef?.current;
    if (!section) return;

    const onScroll = () => {
      const scrollY = window.scrollY;
      const slides = section?.querySelectorAll<HTMLElement>('.hero-slide');
      slides?.forEach((slide) => {
        slide.style.transform = `scale(1.05) translateY(${scrollY * 0.2}px)`;
      });
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <section
      ref={sectionRef}
      id="inicio"
      className="relative min-h-screen w-full overflow-hidden flex flex-col"
      aria-label="Banner principal">
      
      {/* ── Background Slideshow ── */}
      <div className="absolute inset-0 z-0">
        {heroSlides?.map((slide, i) =>
        <div key={i} className="hero-slide absolute inset-0">
            <AppImage
            src={slide?.src}
            alt={slide?.alt}
            fill
            sizes="100vw"
            className="object-cover"
            priority={i === 0}
            unoptimized />
          
          </div>
        )}

        {/* Multi-layer gradient scrim — dark bottom for text legibility */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/65 via-black/30 to-black/80 z-10" />
        {/* Left vignette */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-transparent to-transparent z-10" />
        {/* Grain texture overlay */}
        <div className="absolute inset-0 grain-overlay z-10" />
      </div>
      {/* ── Hero Content ── */}
      <div className="relative z-20 flex flex-col justify-end min-h-screen pb-16 md:pb-24 px-4 sm:px-6 lg:px-12 max-w-7xl mx-auto w-full">

        {/* Status badge */}
        <div className="mb-6 inline-flex items-center gap-2.5 px-3 py-1.5 rounded-full border border-white/15 bg-white/8 backdrop-blur-md w-fit">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-accent" />
          </span>
          <span className="text-xs uppercase tracking-widest text-white/80 font-sans font-medium">
            Proyecto Universitario · Nicaragua 2026
          </span>
        </div>

        {/* Massive headline */}
        <div className="mb-8 max-w-5xl">
          <h1 className="font-display font-semibold text-white text-hero-display leading-[0.88] tracking-tight mb-4">
            Descubre la<br />
            <span className="italic text-accent">belleza</span> de<br />
            Nicaragua
          </h1>
          <p className="text-white/75 text-base sm:text-lg md:text-xl font-light leading-relaxed max-w-xl font-sans">
            con <strong className="text-white font-semibold">Territorio Web</strong> — conectamos viajeros
            con emprendedores locales para un turismo auténtico y sostenible.
          </p>
        </div>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
          <a
            href="#destinos"
            className="group inline-flex items-center gap-3 px-7 py-3.5 bg-primary text-primary-foreground font-semibold text-sm rounded-full hover:bg-primary/90 transition-all duration-300 hover:shadow-xl hover:shadow-primary/40 hover:-translate-y-0.5">
            
            Explorar Destinos
            <svg
              className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}>
              
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
          <a
            href="#nosotros"
            className="inline-flex items-center gap-2 px-6 py-3.5 border border-white/25 text-white text-sm font-medium rounded-full hover:bg-white/10 transition-all duration-300 backdrop-blur-sm">
            
            Conocer más
          </a>
        </div>

        {/* Scroll hint */}
        <div className="absolute bottom-8 right-8 hidden md:flex items-center gap-2 text-white/40 text-xs font-sans">
          <span className="uppercase tracking-widest">Explorar</span>
          <svg className="w-4 h-4 animate-bounce" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      </div>
    </section>);

}
