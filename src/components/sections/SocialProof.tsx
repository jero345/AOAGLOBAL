import React from 'react';
import { Quote } from 'lucide-react';
import { useTranslation } from '../../context/LanguageContext';
import { Section } from '../ui/Section';
import { SectionHeader } from '../ui/SectionHeader';
import { Reveal } from '../ui/Reveal';

/**
 * Bloque 7: prueba social. Los testimonios actuales son de ejemplo:
 * reemplazar por reales en src/content antes de publicar.
 */
export const SocialProof: React.FC = () => {
  const { t } = useTranslation('socialProof');

  return (
    <Section tone="paper" id="results">
      <SectionHeader eyebrow={t.eyebrow} title={t.title} />

      <ul className="mt-12 grid grid-cols-1 gap-5 md:grid-cols-3">
        {t.items.map((item, i) => (
          <Reveal as="li" key={`${item.author}-${i}`} delay={i * 0.06} className="flex flex-col rounded-[var(--radius-card)] border border-line bg-paper p-6">
            <span className="inline-flex rounded-[var(--radius-btn)] bg-accent px-2.5 py-1 text-xs font-bold text-navy self-start">
              {item.result}
            </span>
            <Quote size={20} aria-hidden className="mt-5 text-line" />
            <blockquote className="mt-2 flex-1 text-base leading-relaxed text-ink">{item.quote}</blockquote>
            <footer className="mt-5 border-t border-line pt-4 text-sm">
              <p className="font-bold text-ink">{item.author}</p>
              <p className="text-slate">
                {item.role} · {item.company}
              </p>
            </footer>
          </Reveal>
        ))}
      </ul>
    </Section>
  );
};
