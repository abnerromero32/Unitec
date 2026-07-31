'use client';

import React, { useEffect, useRef } from 'react';
import AppImage from '@/components/ui/AppImage';

/* ── Experience data ── */
const experiencias = [
{
  id: 1,
  titulo: 'Surf en San Juan del Sur',
  ubicacion: 'San Juan del Sur, Rivas',
  descripcion: 'Domina las olas del Pacífico en una de las mejores playas de surf de Centroamérica. Clases para todos los niveles.',
  duracion: '3–4 horas',
  nivel: 'Todos los niveles',
  imagen: "https://images.unsplash.com/photo-1693813429298-2d51bbd4ed05",
  alt: 'Surfer riding a large Pacific Ocean wave at sunset, silhouette against orange sky, warm golden light',
  emoji: '🏄'
},
{
  id: 2,
  titulo: 'Ascenso al Volcán Cerro Negro',
  ubicacion: 'León',
  descripcion: 'Sube a uno de los volcanes más activos de América y desciende en tabla por sus laderas de arena volcánica negra.',
  duracion: '5–6 horas',
  nivel: 'Intermedio',
  imagen: "https://images.unsplash.com/photo-1715624848989-aeea27b7364e",
  alt: 'Active volcano with black lava slopes under dramatic cloudy sky, hikers ascending steep volcanic terrain',
  emoji: '🌋'
},
{
  id: 3,
  titulo: 'Tour por Granada',
  ubicacion: 'Granada',
  descripcion: 'Recorre las calles empedradas de la ciudad colonial, visita sus iglesias históricas y navega por los islotes del lago Cocibolca.',
  duracion: '4–5 horas',
  nivel: 'Fácil',
  imagen: "https://images.unsplash.com/photo-1695228921213-dcc55534d5b2",
  alt: 'Historic colonial city street with colorful buildings, bright blue sky, tourists walking on cobblestone road',
  emoji: '🏛️'
},
{
  id: 4,
  titulo: 'Kayak en Ometepe',
  ubicacion: 'Isla de Ometepe, Rivas',
  descripcion: 'Explora las aguas del lago Cocibolca en kayak rodeado de la majestuosa vista de los dos volcanes de Ometepe.',
  duracion: '2–3 horas',
  nivel: 'Fácil',
  imagen: "https://images.unsplash.com/photo-1580267719560-f8ed6659d940",
  alt: 'Kayaker paddling on calm tropical lake with volcanic island in background, lush green landscape, clear water',
  emoji: '🚣'
},
{
  id: 5,
  titulo: 'Buceo en Corn Island',
  ubicacion: 'Corn Island, RACCS',
  descripcion: 'Sumérgete en los arrecifes de coral del Caribe nicaragüense, hogar de tortugas marinas, barracudas y coloridos peces tropicales.',
  duracion: '3–4 horas',
  nivel: 'Intermedio',
  imagen: "https://images.unsplash.com/photo-1656467664454-d091e816d6a2",
  alt: 'Scuba diver exploring colorful coral reef in crystal clear Caribbean water, tropical fish swimming around',
  emoji: '🤿'
},
{
  id: 6,
  titulo: 'Senderismo en Miraflor',
  ubicacion: 'Estelí',
  descripcion: 'Camina por los senderos de la Reserva Natural Miraflor, un paraíso de biodiversidad con orquídeas, quetzales y comunidades campesinas.',
  duracion: '4–6 horas',
  nivel: 'Moderado',
  imagen: "https://img.rocket.new/generatedImages/rocket_gen_img_13b3012eb-1772265931485.png",
  alt: 'Hiker on forest trail surrounded by lush tropical vegetation, morning mist filtering through tall trees',
  emoji: '🥾'
}];


const nivelColor: Record<string, string> = {
  'Todos los niveles': 'bg-accent/15 text-accent',
  'Fácil': 'bg-primary/15 text-primary',
  'Intermedio': 'bg-amber-500/15 text-amber-700',
  'Moderado': 'bg-orange-500/15 text-orange-700'
};

export default function ExperienciasSection() {
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
      id="experiencias"
      className="py-20 md:py-28 bg-background relative"
      aria-label="Experiencias turísticas en Nicaragua">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14 reveal">
          <div>
            <span className="inline-block text-xs font-semibold uppercase tracking-widest text-primary border-b-2 border-primary pb-1 mb-4">
              Experiencias
            </span>
            <h2 className="font-display font-semibold text-section-title text-foreground leading-tight">
              Vívelas de cerca
            </h2>
          </div>
          <p className="text-muted-foreground max-w-sm text-sm leading-relaxed italic">
            Actividades únicas guiadas por expertos locales que conocen cada rincón del país.
          </p>
        </div>

        {/* ── Experience Cards Grid (2 cols desktop, 1 mobile) ── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {experiencias.map((exp, i) =>
          <article
            key={exp.id}
            className="reveal group bg-card border border-border rounded-xl overflow-hidden card-hover card-shimmer relative flex flex-col"
            style={{ transitionDelay: `${i * 70}ms` }}
            aria-label={`Experiencia: ${exp.titulo}`}>
            
              {/* Photo */}
              <div className="relative h-52 overflow-hidden">
                <AppImage
                src={exp.imagen}
                alt={exp.alt}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                className="object-cover transition-transform duration-700 ease-spring group-hover:scale-105"
                unoptimized />
              
                {/* Scrim */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                {/* Emoji badge */}
                <div className="absolute top-3 right-3 w-9 h-9 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center text-lg shadow-md">
                  {exp.emoji}
                </div>
              </div>

              {/* Content */}
              <div className="p-5 flex flex-col flex-1">
                <div className="flex items-start justify-between gap-2 mb-2">
                  <h3 className="font-display font-semibold text-foreground text-lg leading-snug">
                    {exp.titulo}
                  </h3>
                </div>

                <p className="flex items-center gap-1.5 text-xs text-muted-foreground mb-3 font-sans">
                  <svg className="w-3.5 h-3.5 shrink-0 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                  </svg>
                  {exp.ubicacion}
                </p>

                <p className="text-muted-foreground text-sm leading-relaxed mb-4 flex-1">
                  {exp.descripcion}
                </p>

                {/* Meta pills */}
                <div className="flex items-center gap-2 flex-wrap mb-4">
                  <span className={`px-2.5 py-1 rounded-full text-xs font-semibold ${nivelColor[exp.nivel] ?? 'bg-muted text-muted-foreground'}`}>
                    {exp.nivel}
                  </span>
                  <span className="flex items-center gap-1 px-2.5 py-1 rounded-full bg-muted text-muted-foreground text-xs font-medium">
                    <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <circle cx="12" cy="12" r="10" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6l4 2" />
                    </svg>
                    {exp.duracion}
                  </span>
                </div>

                {/* CTA */}
                <button className="w-full py-2.5 border border-primary text-primary text-sm font-semibold rounded-full hover:bg-primary hover:text-primary-foreground transition-all duration-300 group-hover:bg-primary group-hover:text-primary-foreground">
                  Reservar experiencia
                </button>
              </div>

              {/* Bottom accent */}
              <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-primary to-accent scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
            </article>
          )}
        </div>
      </div>
    </section>);

}
