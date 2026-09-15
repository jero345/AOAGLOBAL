import React from 'react';
import { FileCheck, Clock, Search } from 'lucide-react';
import { useTranslation } from '../../context/LanguageContext';
import { Section } from '../ui/Section';
import { SectionHeader } from '../ui/SectionHeader';
import { Reveal } from '../ui/Reveal';

const icons = [FileCheck, Clock, Search];

/**
 * Bloque 5: cómo se define la inversión. Sin cifras, sin paquetes:
 * alcance, tiempos, entregables e inversión se establecen en la propuesta.
 */
export const Investment: React.FC = () => {
  const { t } = useTranslation('investment');

  return (
    <Section tone="paper" id="investment">
      <SectionHeader eyebrow={t.eyebrow} title={t.title} />

      <ul className="mt-12 grid grid-cols-1 gap-5 md:grid-cols-3">
        {t.points.map((point, i) => {
          const Icon = icons[i] ?? FileCheck;
          return (
            <Reveal as="li" key={point.title} delay={i * 0.08} className="rounded-[var(--radius-card)] border border-line bg-paper p-6 transition-all duration-300 hover:-translate-y-1 hover:border-navy hover:shadow-md">
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-[var(--radius-btn)] bg-mist text-accent-hover">
                <Icon size={20} aria-hidden />
              </span>
              <h3 className="mt-5 text-h3 text-ink">{point.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate">{point.text}</p>
            </Reveal>
          );
        })}
      </ul>

      <Reveal className="mt-10 border-l-4 border-accent pl-5">
        <p className="text-lg font-semibold text-ink">{t.note}</p>
      </Reveal>
    </Section>
  );
};
