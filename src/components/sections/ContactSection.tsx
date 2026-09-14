import React from 'react';
import { Check, Mail } from 'lucide-react';
import { useTranslation } from '../../context/LanguageContext';
import { Section } from '../ui/Section';
import { Eyebrow } from '../ui/Eyebrow';
import { Reveal } from '../ui/Reveal';
import { ContactForm } from './ContactForm';

/** Bloque 9: CTA final + formulario en la misma vista. */
export const ContactSection: React.FC = () => {
  const { t } = useTranslation('contact');

  return (
    <Section tone="paper" id="contact">
      <div className="grid gap-12 lg:grid-cols-[2fr_3fr] lg:gap-16">
        <Reveal>
          <div className="group relative mb-8 aspect-[16/10] overflow-hidden rounded-[var(--radius-card)] border border-line bg-mist">
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
          <p className="mt-4 text-base leading-relaxed text-slate">{t.subtitle}</p>

          <ul className="mt-8 space-y-3">
            {t.reassurance.map((line) => (
              <li key={line} className="flex items-center gap-2.5 text-sm text-ink">
                <Check size={16} aria-hidden className="shrink-0 text-accent-hover" />
                {line}
              </li>
            ))}
          </ul>

          <div className="mt-10 rounded-[var(--radius-card)] border border-line bg-mist p-5">
            <p className="text-eyebrow font-semibold uppercase tracking-[0.08em] text-slate">{t.direct.title}</p>
            <a href={`mailto:${t.direct.email}`} className="mt-2 inline-flex items-center gap-2 text-sm font-semibold text-navy hover:underline">
              <Mail size={16} aria-hidden /> {t.direct.email}
            </a>
          </div>
        </Reveal>

        <Reveal delay={0.08} className="rounded-[var(--radius-card)] border border-line bg-paper p-6 md:p-8 shadow-sm">
          <ContactForm />
        </Reveal>
      </div>
    </Section>
  );
};
