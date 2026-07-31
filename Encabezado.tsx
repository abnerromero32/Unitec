'use client';

import React, { useState, useEffect } from 'react';
import AppLogo from '@/components/ui/AppLogo';

/* Navigation links */
const navLinks = [
  { label: 'Inicio',       href: '/' },
  { label: 'Destinos',     href: '#destinos' },
  { label: 'Experiencias', href: '#experiencias' },
  { label: 'Cultura',      href: '#cultura' },
  { label: 'Nosotros',     href: '#nosotros' },
  { label: 'Contacto',     href: '#contacto' },
];

export default function Header() {
  const [menuOpen, setMenuOpen]       = useState(false);
  const [scrolled, setScrolled]       = useState(false);

  /* Detect scroll to add backdrop */
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  /* Close menu on scroll */
  useEffect(() => {
    if (!menuOpen) return;
    const close = () => setMenuOpen(false);
    window.addEventListener('scroll', close, { passive: true, once: true });
    return () => window.removeEventListener('scroll', close);
  }, [menuOpen]);

  const handleNavClick = () => setMenuOpen(false);

  return (
    <>
      {/* ── Sticky Header ── */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? 'bg-foreground/95 backdrop-blur-md shadow-lg border-b border-white/10'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 md:h-20">

            {/* Logo + Brand */}
            <a href="/" className="flex items-center gap-3 group" aria-label="Territorio Web — Inicio">
              <AppLogo size={36} className="transition-transform duration-300 group-hover:scale-110" />
              <div className="flex flex-col leading-tight">
                <span className="font-display font-semibold text-lg text-white tracking-tight">
                  Territorio<span className="text-accent">Web</span>
                </span>
                <span className="text-white/60 text-xs font-sans tracking-wide hidden sm:block">
                  Turismo Sostenible
                </span>
              </div>
            </a>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-1" aria-label="Navegación principal">
              {navLinks?.map((link) => (
                <a
                  key={link?.label}
                  href={link?.href}
                  className="relative px-3 py-2 text-sm font-medium text-white/80 hover:text-white transition-colors duration-200 group"
                >
                  {link?.label}
                  <span className="absolute bottom-1 left-3 right-3 h-px bg-accent scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
                </a>
              ))}
              <a
                href="#contacto"
                className="ml-4 px-5 py-2 bg-primary text-primary-foreground text-sm font-semibold rounded-full hover:bg-primary/90 transition-all duration-300 hover:shadow-lg hover:shadow-primary/30 hover:-translate-y-px"
              >
                Contáctanos
              </a>
            </nav>

            {/* Mobile Hamburger */}
            <button
              className="md:hidden p-2 text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-accent rounded-md"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label={menuOpen ? 'Cerrar menú' : 'Abrir menú'}
              aria-expanded={menuOpen}
            >
              <span className="sr-only">{menuOpen ? 'Cerrar' : 'Abrir'} menú</span>
              {/* Hamburger / Close icon */}
              <svg
                className="w-6 h-6 transition-transform duration-300"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                {menuOpen ? (
                  <>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                  </>
                ) : (
                  <>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                  </>
                )}
              </svg>
            </button>
          </div>
        </div>
      </header>
      {/* ── Mobile Menu Overlay ── */}
      <div
        id="mobile-menu"
        className={`fixed inset-0 z-40 md:hidden flex flex-col items-center justify-center transition-all duration-300 ${
          menuOpen
            ? 'opacity-100 pointer-events-auto' :'opacity-0 pointer-events-none'
        }`}
        style={{ background: 'rgba(26, 46, 26, 0.97)', backdropFilter: 'blur(12px)' }}
        aria-hidden={!menuOpen}
      >
        <nav className="flex flex-col items-center gap-6" aria-label="Menú móvil">
          {navLinks?.map((link, i) => (
            <a
              key={link?.label}
              href={link?.href}
              onClick={handleNavClick}
              className="font-display italic text-3xl font-medium text-white hover:text-accent transition-colors duration-200"
              style={{ transitionDelay: `${i * 40}ms` }}
            >
              {link?.label}
            </a>
          ))}
          <a
            href="#contacto"
            onClick={handleNavClick}
            className="mt-4 px-8 py-3 bg-primary text-primary-foreground font-semibold rounded-full text-base hover:bg-primary/90 transition-colors"
          >
            Contáctanos
          </a>
        </nav>
        {/* Close button */}
        <button
          className="absolute top-5 right-5 p-2 text-white/70 hover:text-white transition-colors"
          onClick={() => setMenuOpen(false)}
          aria-label="Cerrar menú"
        >
          <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
    </>
  );
}
