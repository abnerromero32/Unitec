
import React, { useEffect, useRef } from 'react';

/* Stats for the right column */
const stats = [
  { value: '6+',   label: 'Destinos destacados',    icon: '📍' },
  { value: '6+',   label: 'Experiencias únicas',     icon: '🏄' },
  { value: '17',   label: 'Departamentos de Nicaragua', icon: '🗺️' },
  { value: '100%', label: 'Turismo sostenible',      icon: '♻️' },
];

export default function BienvenidaSection() {
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
      { threshold: 0.15 }
    );

    elements?.forEach((el) => observer?.observe(el));
    return () => observer?.disconnect();
  }, []);

  return (
    <section
      ref={ref}
      id="bienvenida"
      className="py-20 md:py-28 bg-background relative overflow-hidden"
      aria-label="Bienvenida a Territorio Web"
    >
      {/* Subtle dot pattern background */}
      <div className="absolute inset-0 dot-pattern opacity-40" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

          {/* ── Left: Mission text (60%) ── */}
          <div className="reveal">
            <span className="inline-block text-xs font-semibold uppercase tracking-widest text-accent border-b-2 border-accent pb-1 mb-6">
              Bienvenidos
            </span>
            <h2 className="font-display font-semibold text-section-title text-foreground mb-6 leading-tight">
              Turismo que{' '}
              <span className="italic text-primary">transforma</span>{' '}
              comunidades
            </h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed text-base">
              <p>
                <strong className="text-foreground font-semibold">Territorio Web</strong> es una plataforma
                digital creada para conectar a turistas nacionales e internacionales con los destinos
                más auténticos de Nicaragua, apoyando directamente a emprendedores y comunidades locales.
              </p>
              <p>
                Creemos que el turismo sostenible es una herramienta poderosa para el desarrollo económico
                y la preservación cultural. Cada visita que realizas a través de nuestra plataforma
                contribuye al bienestar de las comunidades que hacen grande a Nicaragua.
              </p>
              <p>
                Desde las costas del Pacífico hasta los volcanes del interior, descubre paisajes
                únicos, sabores auténticos y experiencias que solo Nicaragua puede ofrecer.
              </p>
            </div>
            <div className="mt-8 flex items-center gap-4">
              <a
                href="#destinos"
                className="inline-flex items-center gap-2 px-6 py-3 bg-accent text-accent-foreground font-semibold text-sm rounded-full hover:bg-accent/90 transition-all duration-300 hover:shadow-lg hover:shadow-accent/25 hover:-translate-y-px"
              >
                Ver destinos
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
              <a
                href="#nosotros"
                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors underline underline-offset-4"
              >
                Sobre el proyecto
              </a>
            </div>
          </div>

          {/* ── Right: Stat cards (40%) ── */}
          <div className="grid grid-cols-2 gap-4 reveal" style={{ transitionDelay: '150ms' }}>
            {stats?.map((stat, i) => (
              <div
                key={stat?.label}
                className="relative p-5 bg-card border border-border rounded-xl card-shimmer card-hover overflow-hidden group"
                style={{ transitionDelay: `${i * 60}ms` }}
              >
                {/* Accent glow on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-xl" />
                <div className="relative z-10">
                  <span className="text-2xl mb-3 block">{stat?.icon}</span>
                  <p className="font-display font-bold text-3xl text-primary mb-1 leading-none">
                    {stat?.value}
                  </p>
                  <p className="text-xs text-muted-foreground font-medium leading-snug">
                    {stat?.label}
                  </p>
                </div>
                {/* Bottom accent line */}
                <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-primary to-accent scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
