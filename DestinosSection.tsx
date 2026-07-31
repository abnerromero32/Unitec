'use client';

import React, { useEffect, useRef } from 'react';
import AppImage from '@/components/ui/AppImage';

/* ── Destination data ── */
const destinos = [
{
  id: 1,
  nombre: 'San Juan del Sur',
  departamento: 'Rivas',
  descripcion: 'Bahía paradisíaca conocida por sus olas perfectas para el surf, vida nocturna vibrante y atardeceres inolvidables sobre el Pacífico.',
  imagen: "https://images.unsplash.com/photo-1731758798341-393d4f1f1e68",
  alt: 'Peaceful bay at golden sunset, Pacific Ocean coastline with fishing boats in calm water, orange sky',
  tag: 'Playa · Surf'
},
{
  id: 2,
  nombre: 'Granada',
  departamento: 'Granada',
  descripcion: 'La ciudad colonial más antigua de América continental, con arquitectura española vibrante, iglesias históricas y el lago Cocibolca.',
  imagen: "https://images.unsplash.com/photo-1650867656079-912676241e4c",
  alt: 'Colorful colonial architecture buildings on a sunny street, bright painted facades, lush tropical trees',
  tag: 'Colonial · Cultura'
},
{
  id: 3,
  nombre: 'León',
  departamento: 'León',
  descripcion: 'Ciudad universitaria y cultural, sede de la mayor catedral de América Central, famosa por el volcán boarding en el Cerro Negro.',
  imagen: "https://images.unsplash.com/photo-1647269005928-ef9e5428c9ff",
  alt: 'Dramatic volcanic landscape with lush green slopes, misty mountain peak rising above tropical forest',
  tag: 'Cultura · Aventura'
},
{
  id: 4,
  nombre: 'Isla de Ometepe',
  departamento: 'Rivas',
  descripcion: 'Isla volcánica única en el mundo formada por dos volcanes dentro del lago Cocibolca. Paraíso de biodiversidad y turismo ecológico.',
  imagen: "https://images.unsplash.com/photo-1693227826210-05cc6258283e",
  alt: 'Tropical island with lush green volcano rising above calm lake water, blue sky with white clouds',
  tag: 'Ecoturismo · Volcanes'
},
{
  id: 5,
  nombre: 'Corn Island',
  departamento: 'RACCS',
  descripcion: 'Joya caribeña con aguas cristalinas turquesa, arrecifes de coral vírgenes y una cultura afrocaribeña única llena de música y sabor.',
  imagen: "https://img.rocket.new/generatedImages/rocket_gen_img_1ba7ed732-1772525228545.png",
  alt: 'Crystal clear turquoise Caribbean water over coral reef, white sandy beach with palm trees, bright sunny day',
  tag: 'Caribe · Buceo'
},
{
  id: 6,
  nombre: 'Cañón de Somoto',
  departamento: 'Madriz',
  descripcion: 'Impresionante cañón de roca volcánica tallado por el río Coco, con paredes de hasta 100 metros de altura. Tesoro natural de Nicaragua.',
  imagen: "https://images.unsplash.com/photo-1563770892-58a2f688c519",
  alt: 'Narrow river canyon with towering rocky walls, clear turquoise water flowing through, lush green vegetation',
  tag: 'Naturaleza · Senderismo'
}];


/**
 * Bento grid audit:
 * Array has 6 cards: SanJuan, Granada, León, Ometepe, CornIsland, Somoto
 *
 * md:grid-cols-3 layout:
 * Row 1: [col-1+2: SanJuan cs-2 tall] [col-3: Granada cs-1]
 * Row 2: [col-1: León cs-1]           [col-2: Ometepe cs-1] [col-3: CornIsland cs-1 — fills col-3 row2]
 * Row 3: [col-1+2+3: Somoto cs-3 — last row fill]
 *
 * Placed 6/6 cards ✓
 */

export default function DestinosSection() {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const elements = ref.current?.querySelectorAll<HTMLElement>('.reveal');
    if (!elements) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.08 }
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={ref}
      id="destinos"
      className="py-20 md:py-28 bg-secondary/40 relative overflow-hidden"
      aria-label="Destinos destacados de Nicaragua">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14 reveal">
          <div>
            <span className="inline-block text-xs font-semibold uppercase tracking-widest text-accent border-b-2 border-accent pb-1 mb-4">
              Destinos destacados
            </span>
            <h2 className="font-display font-semibold text-section-title text-foreground leading-tight">
              Explora Nicaragua
            </h2>
          </div>
          <p className="text-muted-foreground max-w-sm text-sm leading-relaxed italic">
            Desde volcanes hasta costas caribeñas, cada rincón de Nicaragua tiene una historia que contar.
          </p>
        </div>

        {/* ── Bento Grid ── */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 auto-rows-auto">

          {/* [col-1+2: SanJuan cs-2 tall] */}
          <DestinoCard destino={destinos[0]} className="md:col-span-2 min-h-[400px]" tall delay={0} />

          {/* [col-3: Granada cs-1] */}
          <DestinoCard destino={destinos[1]} className="md:col-span-1 min-h-[400px]" delay={80} />

          {/* [col-1: León cs-1] */}
          <DestinoCard destino={destinos[2]} className="md:col-span-1 min-h-[320px]" delay={120} />

          {/* [col-2: Ometepe cs-1] */}
          <DestinoCard destino={destinos[3]} className="md:col-span-1 min-h-[320px]" delay={160} />

          {/* [col-3: CornIsland cs-1] */}
          <DestinoCard destino={destinos[4]} className="md:col-span-1 min-h-[320px]" delay={200} />

          {/* [col-1+2+3: Somoto cs-3 — last row fill] */}
          <DestinoCard destino={destinos[5]} className="md:col-span-3 min-h-[280px]" wide delay={240} />
        </div>
      </div>
    </section>);

}

/* ── Destination Card Component ── */
function DestinoCard({
  destino,
  className = '',
  tall = false,
  wide = false,
  delay = 0






}: {destino: typeof destinos[0];className?: string;tall?: boolean;wide?: boolean;delay?: number;}) {
  return (
    <article
      className={`reveal group relative overflow-hidden rounded-xl border border-border bg-card cursor-pointer ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
      aria-label={`Destino: ${destino.nombre}, ${destino.departamento}`}>
      
      {/* Photo */}
      <div className="absolute inset-0 overflow-hidden">
        <AppImage
          src={destino.imagen}
          alt={destino.alt}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover transition-transform duration-700 ease-spring group-hover:scale-105"
          unoptimized />
        
        {/* Gradient scrim — dark at bottom for text */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
      </div>

      {/* Tag pill */}
      <div className="absolute top-4 left-4 z-10">
        <span className="px-2.5 py-1 bg-black/40 backdrop-blur-sm border border-white/20 rounded-full text-white/85 text-xs font-medium tracking-wide">
          {destino.tag}
        </span>
      </div>

      {/* Content overlay */}
      <div className={`absolute bottom-0 left-0 right-0 z-10 p-5 ${wide ? 'md:p-6' : ''}`}>
        <p className="text-white/60 text-xs font-semibold uppercase tracking-widest mb-1 font-sans">
          {destino.departamento}
        </p>
        <h3 className="font-display font-semibold text-white text-xl md:text-2xl mb-2 leading-tight">
          {destino.nombre}
        </h3>

        {/* Description — visible on hover for tall/wide cards, always for others */}
        <p
          className={`text-white/75 text-sm leading-relaxed font-sans mb-4 transition-all duration-500 ${
          tall || wide ?
          'opacity-100 max-h-20' : 'opacity-0 max-h-0 group-hover:opacity-100 group-hover:max-h-20'}`
          }>
          
          {destino.descripcion}
        </p>

        <button className="inline-flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground text-xs font-semibold rounded-full hover:bg-primary/90 transition-all duration-300 hover:gap-3 hover:shadow-lg hover:shadow-primary/40">
          Ver más
          <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </button>
      </div>

      {/* Hover border glow */}
      <div className="absolute inset-0 rounded-xl ring-0 group-hover:ring-2 group-hover:ring-primary/40 transition-all duration-300 pointer-events-none" />
    </article>);

}
