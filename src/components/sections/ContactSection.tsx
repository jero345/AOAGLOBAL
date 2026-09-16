import React from 'react';
import { Mail } from 'lucide-react';
import { useTranslation } from '../../context/LanguageContext';
import { Section } from '../ui/Section';
import { Eyebrow } from '../ui/Eyebrow';
import { Reveal } from '../ui/Reveal';
import { ContactForm } from './ContactForm';

/** Nuevos proyectos: principal mecanismo de inicio de un proyecto. */
export const ContactSection: React.FC = () => {
  const { t } = useTranslation('contact');

  return (
    <Section tone="paper" id="contact">
      <div className="grid gap-8 lg:grid-cols-[2fr_3fr] lg:gap-16">
        <Reveal>
          <div className="group relative mb-6 hidden aspect-[16/10] overflow-hidden rounded-[var(--radius-card)] border border-line bg-mist md:block">
            <img
              src="/img/contact.webp"
              alt={t.imageAlt}
              width={900}
              height={700}
              loading="lazy"
              decoding="async"
              className="h-full w-full object-cover grayscale transition-all duration-700 ease-out group-hover:scale-105 group-hover:grayscale-0"
            />
            <div aria-hidden className="absolute inset-0 bg-gradient-to-t from-navy/60 to-transparent" />
          </div>
          <Eyebrow tone="navy" className="mb-3">{t.eyebrow}</Eyebrow>
          <h2 className="text-3xl md:text-h2 text-ink">{t.title}</h2>
          <p className="mt-3 text-base leading-relaxed text-slate">{t.intro}</p>
        </Reveal>

        <Reveal delay={0.08} className="rounded-[var(--radius-card)] border border-line bg-mist p-5 md:p-8">
          <ContactForm />
        </Reveal>
      </div>

      {/* Contacto directo: al final del bloque, después del formulario */}
      <Reveal className="mt-8 flex flex-wrap items-center gap-2 border-t border-line pt-6 text-sm">
        <Mail size={16} aria-hidden className="shrink-0 text-accent-hover" />
        <span className="text-slate">{t.direct.title}:</span>
        <a href={`mailto:${t.direct.email}`} className="font-semibold text-navy hover:underline">
          {t.direct.email}
        </a>
      </Reveal>
    </Section>
  );
};
