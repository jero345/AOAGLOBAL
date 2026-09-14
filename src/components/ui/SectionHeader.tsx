import React from 'react';
import { Eyebrow } from './Eyebrow';
import { Reveal } from './Reveal';
import { TextReveal } from './TextReveal';

interface SectionHeaderProps {
  eyebrow: string;
  title: string;
  description?: string;
  tone?: 'light' | 'dark';
  align?: 'left' | 'center';
  className?: string;
}

/** Cabecera estándar: eyebrow → H2 → descripción. Un H2 por sección. */
export const SectionHeader: React.FC<SectionHeaderProps> = ({
  eyebrow,
  title,
  description,
  tone = 'light',
  align = 'left',
  className = ''
}) => {
  const isDark = tone === 'dark';
  return (
    <Reveal className={`max-w-2xl ${align === 'center' ? 'mx-auto text-center' : ''} ${className}`}>
      <Eyebrow tone={isDark ? 'white' : 'navy'} className="mb-3">
        {eyebrow}
      </Eyebrow>
      <TextReveal as="h2" text={title} className={`text-3xl md:text-h2 ${isDark ? 'text-white' : 'text-ink'}`} />
      {description && (
        <p className={`mt-4 text-base leading-relaxed ${isDark ? 'text-white/75' : 'text-slate'}`}>{description}</p>
      )}
    </Reveal>
  );
};
