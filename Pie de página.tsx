import React from 'react';
import AppLogo from '@/components/ui/AppLogo';

/* Footer links — Pattern 7: Arc Browser Split */
const footerLinks = [
  { label: 'Destinos',     href: '#destinos' },
  { label: 'Experiencias', href: '#experiencias' },
  { label: 'Cultura',      href: '#cultura' },
  { label: 'Nosotros',     href: '#nosotros' },
  { label: 'Contacto',     href: '#contacto' },
];

export default function Footer() {
  return (
    <footer className="bg-foreground border-t border-white/10 pt-14 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* ── Main row: Logo+tagline left | Links right ── */}
        <div className="flex flex-col sm:flex-row justify-between items-start gap-10 mb-10 pb-10 border-b border-white/10">

          {/* Brand left */}
          <div className="flex flex-col gap-3 max-w-xs">
            <div className="flex items-center gap-3">
              <AppLogo size={36} />
              <span className="font-display font-semibold text-xl text-white tracking-tight">
                Territorio<span className="text-accent">Web</span>
              </span>
            </div>
            <p className="text-white/50 text-sm leading-relaxed">
              Turismo sostenible en Nicaragua.<br />
              Conectando viajeros con comunidades locales.
            </p>
            {/* Contact info */}
            <div className="flex flex-col gap-1.5 mt-2">
              <a
                href="mailto:info@territorioweb.nic"
                className="flex items-center gap-2 text-white/50 hover:text-accent transition-colors text-sm"
              >
                <svg className="w-4 h-4 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                </svg>
                info@territorioweb.nic
              </a>
              <a
                href="tel:+50522345678"
                className="flex items-center gap-2 text-white/50 hover:text-accent transition-colors text-sm"
              >
                <svg className="w-4 h-4 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                </svg>
                +505 2234-5678
              </a>
              <span className="flex items-center gap-2 text-white/50 text-sm">
                <svg className="w-4 h-4 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                </svg>
                Managua, Nicaragua
              </span>
            </div>
          </div>

          {/* Links right */}
          <div className="flex flex-col gap-3">
            <span className="text-white/30 text-xs font-semibold uppercase tracking-widest">Navegación</span>
            <nav className="flex flex-col gap-2" aria-label="Footer navigation">
              {footerLinks?.map((link) => (
                <a
                  key={link?.label}
                  href={link?.href}
                  className="text-white/60 hover:text-white transition-colors duration-200 text-sm font-medium py-1"
                >
                  {link?.label}
                </a>
              ))}
            </nav>
          </div>
        </div>

        {/* ── Bottom row ── */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-white/30 text-xs">
            © 2026 Territorio Web — Proyecto Universitario de Turismo Sostenible
          </p>

          {/* Social icons */}
          <div className="flex items-center gap-3" aria-label="Redes sociales">
            {/* Facebook */}
            <a
              href="#"
              className="w-9 h-9 rounded-full border border-white/15 flex items-center justify-center text-white/50 hover:text-white hover:border-accent hover:bg-accent/10 transition-all duration-300"
              aria-label="Facebook"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
              </svg>
            </a>
            {/* Instagram */}
            <a
              href="#"
              className="w-9 h-9 rounded-full border border-white/15 flex items-center justify-center text-white/50 hover:text-white hover:border-accent hover:bg-accent/10 transition-all duration-300"
              aria-label="Instagram"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z" />
                <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
              </svg>
            </a>
            {/* Twitter / X */}
            <a
              href="#"
              className="w-9 h-9 rounded-full border border-white/15 flex items-center justify-center text-white/50 hover:text-white hover:border-accent hover:bg-accent/10 transition-all duration-300"
              aria-label="Twitter"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
            </a>
            {/* YouTube */}
            <a
              href="#"
              className="w-9 h-9 rounded-full border border-white/15 flex items-center justify-center text-white/50 hover:text-white hover:border-accent hover:bg-accent/10 transition-all duration-300"
              aria-label="YouTube"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M21.543 6.498C22 8.28 22 12 22 12s0 3.72-.457 5.502c-.254.985-.997 1.76-1.938 2.022C17.896 20 12 20 12 20s-5.893 0-7.605-.476c-.945-.266-1.687-1.04-1.938-2.022C2 15.72 2 12 2 12s0-3.72.457-5.502c.254-.985.997-1.76 1.938-2.022C6.107 4 12 4 12 4s5.896 0 7.605.476c.945.266 1.687 1.04 1.938 2.022zM10 15.5l6-3.5-6-3.5v7z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
