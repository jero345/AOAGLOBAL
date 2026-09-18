import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { Mail } from 'lucide-react';
import { useTranslation } from '../../context/LanguageContext';
import { Chapter } from './Chapter';
import { Reveal } from '../ui/Reveal';
import { ContactForm } from '../sections/ContactForm';

/** 06 · Nuevos proyectos: el último capítulo, en navy, con el formulario sobre papel. */
export const ContactChapter: React.FC<{ number: string; label: string }> = ({ number, label }) => {
  const { t } = useTranslation('contact');
  const reduce = useReducedMotion();

  const image = (
    <motion.div
      initial={reduce ? false : { clipPath: 'inset(0 0 100% 0)' }}
      whileInView={{ clipPath: 'inset(0 0 0% 0)' }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
      className="group relative aspect-[4/3] overflow-hidden rounded-[var(--radius-card)] border border-white/15 bg-deep"
    >
      <img
        src="/img/contact.webp"
        alt={t.imageAlt}
        width={900}
        height={700}
        loading="lazy"
        decoding="async"
        className="h-full w-full object-cover transition-transform duration-700 ease-[var(--ease-out-expo)] group-hover:scale-105"
      />
      <div aria-hidden className="absolute inset-0 bg-gradient-to-t from-navy/60 to-transparent" />
    </motion.div>
  );

  return (
    <Chapter id="contact" number={number} label={label} title={t.title} intro={t.intro} tone="navy" wideAside aside={image}>
      <Reveal delay={0.1} className="rounded-[var(--radius-card)] border border-white/10 bg-paper p-5 shadow-[0_30px_60px_-30px_rgba(0,0,0,0.6)] md:p-8">
        <ContactForm />
      </Reveal>

      {/* Contacto directo: al final del bloque, después del formulario */}
      <Reveal className="mt-8 flex flex-wrap items-center gap-2 border-t border-white/15 pt-6 text-sm">
        <Mail size={16} aria-hidden className="shrink-0 text-accent" />
        <span className="text-white/75">{t.direct.title}:</span>
        <a href={`mailto:${t.direct.email}`} className="font-semibold text-white hover:underline">
          {t.direct.email}
        </a>
      </Reveal>
    </Chapter>
  );
};
