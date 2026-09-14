import React from 'react';
import { AlertTriangle } from 'lucide-react';
import { useTranslation } from '../../context/LanguageContext';
import { Section } from '../ui/Section';
import { SectionHeader } from '../ui/SectionHeader';
import { Reveal } from '../ui/Reveal';

/** Bloque 2: el lector se reconoce en el problema antes de ver la solución. */
export const Diagnosis: React.FC = () => {
  const { t } = useTranslation('diagnosis');

  return (
    <Section tone="line" id="diagnosis" className="scroll-mt-20">
      <SectionHeader eyebrow={t.eyebrow} title={t.title} description={t.intro} />

      <ul className="mt-12 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
        {t.items.map((item, i) => (
          <Reveal as="li" key={item.problem} delay={i * 0.05} className="flex flex-col rounded-[var(--radius-card)] border border-line bg-paper p-6">
            <span className="mb-4 inline-flex h-9 w-9 items-center justify-center rounded-[var(--radius-btn)] bg-mist text-accent-hover">
              <AlertTriangle size={18} aria-hidden />
            </span>
            <h3 className="text-h3 text-ink">{item.problem}</h3>
            <p className="mt-2 text-sm leading-relaxed text-slate">{item.cost}</p>
          </Reveal>
        ))}
      </ul>

      <Reveal className="mt-12 border-l-4 border-accent pl-5">
        <p className="text-lg font-semibold text-ink max-w-3xl">{t.transition}</p>
      </Reveal>
    </Section>
  );
};
