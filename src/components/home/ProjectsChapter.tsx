import React from 'react';
import { useTranslation } from '../../context/LanguageContext';
import { Chapter } from './Chapter';
import { Rule } from '../ui/Rule';
import { Reveal } from '../ui/Reveal';

/**
 * 04 · Ejemplos de soluciones: tipos de solución que AOA desarrolla, como lista numerada.
 * No son clientes concretos ni casos de éxito; sin métricas.
 */
export const ProjectsChapter: React.FC<{ number: string; label: string }> = ({ number, label }) => {
  const { t } = useTranslation('projects');

  return (
    <Chapter id="projects" number={number} label={label} title={t.title} tone="mist">
      <ol className="grid grid-cols-1 gap-x-8 md:grid-cols-3">
        {t.items.map((item, i) => (
          <li key={item.title}>
            <Rule delay={i * 0.12} />
            <Reveal delay={0.1 + i * 0.12} className="grid grid-cols-[2.5rem_1fr] gap-x-4 py-6 md:block md:py-7">
              <span className="text-sm font-bold tabular-nums text-navy md:pt-1">0{i + 1}</span>
              <div className="md:mt-4">
                <h3 className="text-lg font-bold leading-snug text-ink md:text-xl">{item.title}</h3>
                <p className="mt-2 text-base leading-relaxed text-slate">{item.text}</p>
              </div>
            </Reveal>
          </li>
        ))}
      </ol>
      <Rule delay={0.4} className="md:hidden" />
    </Chapter>
  );
};
