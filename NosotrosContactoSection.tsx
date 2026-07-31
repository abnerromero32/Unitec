'use client';

import React, { useEffect, useRef, useState } from 'react';

/* Team members */
const equipo = [
  { nombre: 'Ana Sofía Martínez',  rol: 'Coordinadora del Proyecto', iniciales: 'AS' },
  { nombre: 'Carlos Espinoza',     rol: 'Desarrollo Web',             iniciales: 'CE' },
  { nombre: 'Valeria Roa',         rol: 'Diseño y Contenido',         iniciales: 'VR' },
];

/* Contact form state type */
type FormState = {
  nombre: string;
  correo: string;
  mensaje: string;
};

export default function NosotrosContactoSection() {
  const ref = useRef<HTMLElement>(null);
  const [form, setForm]           = useState<FormState>({ nombre: '', correo: '', mensaje: '' });
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending]     = useState(false);

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

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  /* Mock submit handler — no external service */
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSending(true);
    setTimeout(() => {
      setSending(false);
      setSubmitted(true);
      setForm({ nombre: '', correo: '', mensaje: '' });
    }, 1200);
  };

  return (
    <section
      ref={ref}
      className="relative overflow-hidden"
      aria-label="Sobre nosotros y contacto"
    >
      {/* ── Nosotros ── */}
      <div
        id="nosotros"
        className="py-20 md:py-28 bg-foreground relative"
      >
        {/* Background decoration */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-accent/10 rounded-full blur-[100px] pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">

            {/* Left: About text */}
            <div className="reveal">
              <span className="inline-block text-xs font-semibold uppercase tracking-widest text-accent border-b-2 border-accent pb-1 mb-6">
                Quiénes somos
              </span>
              <h2 className="font-display font-semibold text-section-title text-white leading-tight mb-6">
                Un proyecto con{' '}
                <span className="italic text-accent">propósito</span>
              </h2>
              <div className="space-y-4 text-white/65 text-sm leading-relaxed">
                <p>
                  <strong className="text-white">Territorio Web</strong> es una plataforma digital universitaria
                  creada con el objetivo de impulsar el turismo sostenible en Nicaragua, conectando a viajeros
                  con emprendedores locales y promoviendo los tesoros naturales y culturales del país.
                </p>
                <p>
                  Nuestro proyecto nace de la convicción de que el turismo responsable puede ser un motor
                  de desarrollo económico para las comunidades rurales y urbanas de Nicaragua, preservando
                  al mismo tiempo el patrimonio natural y cultural que nos hace únicos en Centroamérica.
                </p>
                <p>
                  Trabajamos en colaboración con guías locales, pequeños hoteles, restaurantes familiares
                  y artesanos para ofrecer experiencias auténticas que benefician directamente a quienes
                  hacen grande a Nicaragua.
                </p>
              </div>

              {/* Values */}
              <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4">
                {[
                  { icon: '🌿', label: 'Sostenible',   desc: 'Turismo que cuida el medio ambiente' },
                  { icon: '🤝', label: 'Comunitario',  desc: 'Apoyo directo a emprendedores locales' },
                  { icon: '🗺️', label: 'Auténtico',    desc: 'Experiencias genuinas de Nicaragua' },
                ].map((val) => (
                  <div key={val.label} className="p-4 bg-white/5 border border-white/10 rounded-xl hover:bg-white/8 transition-colors duration-300">
                    <span className="text-2xl block mb-2">{val.icon}</span>
                    <p className="text-white font-semibold text-sm mb-1">{val.label}</p>
                    <p className="text-white/50 text-xs leading-snug">{val.desc}</p>
                  </div>
                ))}
              </div>

              {/* Team */}
              <div className="mt-8">
                <p className="text-white/40 text-xs uppercase tracking-widest font-semibold mb-4">Equipo</p>
                <div className="flex flex-col gap-3">
                  {equipo.map((member) => (
                    <div key={member.nombre} className="flex items-center gap-3 group">
                      <div className="w-9 h-9 rounded-full bg-primary/30 border border-primary/30 flex items-center justify-center text-xs font-bold text-primary-foreground shrink-0 group-hover:bg-primary/50 transition-colors">
                        {member.iniciales}
                      </div>
                      <div>
                        <p className="text-white text-sm font-medium">{member.nombre}</p>
                        <p className="text-white/45 text-xs">{member.rol}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right: Contact form */}
            <div
              id="contacto"
              className="reveal"
              style={{ transitionDelay: '150ms' }}
            >
              <span className="inline-block text-xs font-semibold uppercase tracking-widest text-primary border-b-2 border-primary pb-1 mb-6">
                Contacto
              </span>
              <h3 className="font-display font-semibold text-2xl md:text-3xl text-white leading-tight mb-3">
                ¿Listo para explorar Nicaragua?
              </h3>
              <p className="text-white/55 text-sm mb-8">
                Escríbenos y te ayudaremos a planificar tu aventura sostenible.
              </p>

              {submitted ? (
                /* Success state */
                <div className="p-8 bg-accent/10 border border-accent/30 rounded-2xl text-center">
                  <span className="text-4xl block mb-4">✅</span>
                  <h4 className="font-display font-semibold text-white text-xl mb-2">¡Mensaje enviado!</h4>
                  <p className="text-white/60 text-sm">
                    Gracias por contactarnos. Nuestro equipo te responderá en las próximas 24 horas.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="mt-6 px-5 py-2 border border-white/20 text-white/70 text-sm rounded-full hover:bg-white/10 transition-colors"
                  >
                    Enviar otro mensaje
                  </button>
                </div>
              ) : (
                /* Contact form */
                <form
                  onSubmit={handleSubmit}
                  className="space-y-4"
                  aria-label="Formulario de contacto"
                  noValidate
                >
                  {/* Nombre */}
                  <div>
                    <label htmlFor="nombre" className="block text-white/60 text-xs font-semibold uppercase tracking-wider mb-2">
                      Nombre completo
                    </label>
                    <input
                      id="nombre"
                      name="nombre"
                      type="text"
                      required
                      value={form.nombre}
                      onChange={handleChange}
                      placeholder="Tu nombre"
                      className="w-full px-4 py-3 bg-white/5 border border-white/15 rounded-xl text-white placeholder:text-white/30 text-sm focus:outline-none focus:border-primary/60 focus:bg-white/8 transition-all duration-200 font-sans"
                    />
                  </div>

                  {/* Correo */}
                  <div>
                    <label htmlFor="correo" className="block text-white/60 text-xs font-semibold uppercase tracking-wider mb-2">
                      Correo electrónico
                    </label>
                    <input
                      id="correo"
                      name="correo"
                      type="email"
                      required
                      value={form.correo}
                      onChange={handleChange}
                      placeholder="tu@correo.com"
                      className="w-full px-4 py-3 bg-white/5 border border-white/15 rounded-xl text-white placeholder:text-white/30 text-sm focus:outline-none focus:border-primary/60 focus:bg-white/8 transition-all duration-200 font-sans"
                    />
                  </div>

                  {/* Mensaje */}
                  <div>
                    <label htmlFor="mensaje" className="block text-white/60 text-xs font-semibold uppercase tracking-wider mb-2">
                      Mensaje
                    </label>
                    <textarea
                      id="mensaje"
                      name="mensaje"
                      required
                      rows={5}
                      value={form.mensaje}
                      onChange={handleChange}
                      placeholder="Cuéntanos sobre tu viaje soñado por Nicaragua..."
                      className="w-full px-4 py-3 bg-white/5 border border-white/15 rounded-xl text-white placeholder:text-white/30 text-sm focus:outline-none focus:border-primary/60 focus:bg-white/8 transition-all duration-200 resize-none font-sans"
                    />
                  </div>

                  {/* Submit */}
                  <button
                    type="submit"
                    disabled={sending}
                    className="w-full py-3.5 bg-primary text-primary-foreground font-semibold text-sm rounded-xl hover:bg-primary/90 transition-all duration-300 hover:shadow-lg hover:shadow-primary/30 hover:-translate-y-px disabled:opacity-60 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                  >
                    {sending ? (
                      <>
                        <svg className="w-4 h-4 animate-spin" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth={4} />
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                        </svg>
                        Enviando...
                      </>
                    ) : (
                      <>
                        Enviar mensaje
                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" />
                        </svg>
                      </>
                    )}
                  </button>

                  <p className="text-white/30 text-xs text-center">
                    Al enviar aceptas nuestra política de privacidad. No compartimos tu información.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
