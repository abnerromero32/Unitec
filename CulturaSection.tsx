'use client';

import React, { useEffect, useRef } from 'react';
import AppImage from '@/components/ui/AppImage';

/* ── Culture tiles data ── */
const culturaTiles = [
{
  id: 1,
  titulo: 'Gastronomía',
  subtitulo: 'Sabores auténticos',
  descripcion: 'Descubre el vigorón, el nacatamal, el gallo pinto y los fritangas de Nicaragua. Una cocina llena de historia, maíz, frijoles y tradición familiar que se transmite de generación en generación.',
  imagen: "https://img.rocket.new/generatedImages/rocket_gen_img_1f54f7923-1773000452382.png",
  alt: 'Colorful traditional Nicaraguan food spread on wooden table, rice and beans, bright vegetables, rustic setting',
  emoji: '🍽️',
  acento: 'from-amber-900/70'
},
{
  id: 2,
  titulo: 'Tradiciones',
  subtitulo: 'Raíces vivas',
  descripcion: 'Las Purísimas, el Güegüense, las procesiones de Semana Santa y las danzas folclóricas son expresiones vivas de la identidad nicaragüense que se celebran con fervor y alegría.',
  imagen: "https://img.rocket.new/generatedImages/rocket_gen_img_1aa9b1508-1784876404903.png",
  alt: 'Traditional festival celebration with colorful costumes and dancing, people in vibrant traditional dress, joyful atmosphere',
  emoji: '🎭',
  acento: 'from-purple-900/70'
},
{
  id: 3,
  titulo: 'Artesanías',
  subtitulo: 'Manos que crean',
  descripcion: 'Los talleres de Masaya, Matagalpa y San Juan de Oriente producen hamacas, cerámica, cuero y madera tallada. Cada pieza es una obra de arte hecha a mano con técnicas ancestrales.',
  imagen: "https://images.unsplash.com/photo-1581726069287-ec4ccc1c2aa9",
  alt: 'Artisan hands weaving colorful traditional hammock, vibrant threads, close up of craft work in progress',
  emoji: '🧵',
  acento: 'from-emerald-900/70'
},
{
  id: 4,
  titulo: 'Festividades',
  subtitulo: 'Alegría compartida',
  descripcion: 'Las fiestas patronales, el Carnaval de San Jacinto, las festividades de Santo Domingo de Guzmán en Managua y los toros a caballo llenan el calendario nicaragüense de color y música.',
  imagen: "https://img.rocket.new/generatedImages/rocket_gen_img_1aa9b1508-1784876404903.png",
  alt: 'Vibrant street festival with colorful lights and decorations at night, crowd celebrating, festive atmosphere',
  emoji: '🎉',
  acento: 'from-rose-900/70'
}];


export default function CulturaSection() {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const elements = ref?.current?.querySelectorAll<HTMLElement>('.reveal');
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
    elements?.forEach((el) => observer?.observe(el));
    return () => observer?.disconnect();
  }, []);

  return (
    <section
      ref={ref}
      id="cultura"
      className="py-20 md:py-28 bg-secondary/30 relative overflow-hidden"
      aria-label="Cultura de Nicaragua">
      
      {/* Subtle background accent */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl pointer-events-none" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center mb-14 reveal">
          <span className="inline-block text-xs font-semibold uppercase tracking-widest text-accent border-b-2 border-accent pb-1 mb-4">
            Cultura nicaragüense
          </span>
          <h2 className="font-display font-semibold text-section-title text-foreground leading-tight mb-4">
            Alma de Nicaragua
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto text-sm leading-relaxed italic">
            Un pueblo rico en tradiciones, gastronomía, arte y festividades que celebran la identidad centroamericana.
          </p>
        </div>

        {/* ── 2×2 Mosaic Grid ── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {culturaTiles?.map((tile, i) =>
          <article
            key={tile?.id}
            className="reveal group relative overflow-hidden rounded-2xl min-h-[320px] md:min-h-[380px] cursor-pointer border border-border"
            style={{ transitionDelay: `${i * 80}ms` }}
            aria-label={`Cultura: ${tile?.titulo}`}>
            
              {/* Background photo */}
              <div className="absolute inset-0">
                <AppImage
                src={tile?.imagen}
                alt={tile?.alt}
                fill
                sizes="(max-width: 640px) 100vw, 50vw"
                className="object-cover transition-transform duration-700 ease-spring group-hover:scale-105"
                unoptimized />
              
                {/* Gradient scrim — dark at bottom for text */}
                <div className={`absolute inset-0 bg-gradient-to-t ${tile?.acento} via-black/30 to-transparent`} />
              </div>

              {/* Content */}
              <div className="relative z-10 flex flex-col h-full min-h-[320px] md:min-h-[380px] p-6 md:p-8 justify-end">

                {/* Emoji badge */}
                <div className="absolute top-5 right-5 w-10 h-10 bg-white/15 backdrop-blur-sm border border-white/20 rounded-full flex items-center justify-center text-xl">
                  {tile?.emoji}
                </div>

                <div>
                  <p className="text-white/60 text-xs font-semibold uppercase tracking-widest mb-1 font-sans">
                    {tile?.subtitulo}
                  </p>
                  <h3 className="font-display font-semibold text-white text-2xl md:text-3xl mb-3 leading-tight">
                    {tile?.titulo}
                  </h3>

                  {/* Description — slides up on hover */}
                  <div className="overflow-hidden transition-all duration-500 max-h-0 group-hover:max-h-40">
                    <p className="text-white/80 text-sm leading-relaxed mb-4 font-sans">
                      {tile?.descripcion}
                    </p>
                  </div>

                  <button className="inline-flex items-center gap-2 text-white/80 text-xs font-semibold uppercase tracking-wider hover:text-white transition-colors duration-200 group/btn">
                    Explorar
                    <svg
                    className="w-3.5 h-3.5 transition-transform duration-300 group-hover/btn:translate-x-1"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2.5}>
                    
                      <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </button>
                </div>
              </div>

              {/* Hover ring glow */}
              <div className="absolute inset-0 rounded-2xl ring-0 group-hover:ring-2 group-hover:ring-white/20 transition-all duration-300 pointer-events-none" />
            </article>
          )}
        </div>
      </div>
    </section>);

}
