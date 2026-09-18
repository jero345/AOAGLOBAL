import React from 'react';
import { LayoutGrid, Workflow, Globe } from 'lucide-react';
import { useTranslation } from '../../context/LanguageContext';
import { Section } from '../ui/Section';
import { SectionHeader } from '../ui/SectionHeader';
import { Reveal } from '../ui/Reveal';

const icons = [LayoutGrid, Workflow, Globe];

/**
 * Proyectos y soluciones: ejemplos de tipos de solución que AOA desarrolla.
 * No son clientes concretos ni casos de éxito; sin métricas.
 */
export const Projects: React.FC = () => {
  const { t } = useTranslation('projects');

  return (
    <Section tone="paper" id="projects">
      <SectionHeader eyebrow={t.eyebrow} title={t.title} />

      <ul className="mt-8 grid grid-cols-1 gap-4 md:mt-12 md:grid-cols-3 md:gap-5">
        {t.items.map((item, i) => {
          const Icon = icons[i] ?? LayoutGrid;
          return (
            <Reveal
              as="li"
              key={item.title}
              delay={i * 0.08}
              className="flex flex-row items-start gap-4 rounded-[var(--radius-card)] border border-line bg-paper p-4 transition-[transform,border-color,box-shadow] duration-300 ease-[var(--ease-out-quart)] hover:-translate-y-1 hover:border-navy hover:shadow-[0_12px_24px_-12px_rgba(11,29,58,0.25)] md:flex-col md:gap-0 md:p-6"
            >
              <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-[var(--radius-btn)] bg-navy text-white">
                <Icon size={20} aria-hidden />
              </span>
              <div>
                <h3 className="text-base font-bold uppercase tracking-[0.04em] text-ink md:mt-5 md:text-h3">{item.title}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-slate md:mt-2">{item.text}</p>
              </div>
            </Reveal>
          );
        })}
      </ul>
    </Section>
  );
};
