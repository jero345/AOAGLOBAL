import React from 'react';
import { LayoutGrid, Workflow, Globe } from 'lucide-react';
import { useTranslation } from '../../context/LanguageContext';
import { Section } from '../ui/Section';
import { SectionHeader } from '../ui/SectionHeader';
import { Reveal } from '../ui/Reveal';

const icons = [LayoutGrid, Workflow, Globe];

/**
 * Proyectos y soluciones: tipos de solución que AOA desarrolla.
 * No se presentan como clientes concretos ni con métricas.
 */
export const Projects: React.FC = () => {
  const { t } = useTranslation('projects');

  return (
    <Section tone="paper" id="projects">
      <SectionHeader eyebrow={t.eyebrow} title={t.title} />

      <ul className="mt-12 grid grid-cols-1 gap-5 md:grid-cols-3">
        {t.items.map((item, i) => {
          const Icon = icons[i] ?? LayoutGrid;
          return (
            <Reveal
              as="li"
              key={item.title}
              delay={i * 0.08}
              className="flex flex-col rounded-[var(--radius-card)] border border-line bg-paper p-6 transition-all duration-300 hover:-translate-y-1 hover:border-navy hover:shadow-md"
            >
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-[var(--radius-btn)] bg-navy text-white">
                <Icon size={20} aria-hidden />
              </span>
              <h3 className="mt-5 text-h3 uppercase tracking-[0.04em] text-ink">{item.title}</h3>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-slate">{item.text}</p>
              <div className="mt-5 border-t border-line pt-4">
                <p className="text-eyebrow font-semibold uppercase tracking-[0.08em] text-slate">{t.capabilitiesLabel}</p>
                <ul className="mt-2 flex flex-wrap gap-1.5">
                  {item.capabilities.map((cap) => (
                    <li key={cap} className="rounded-[var(--radius-btn)] bg-mist px-2 py-1 text-[0.7rem] font-medium text-ink">
                      {cap}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          );
        })}
      </ul>
    </Section>
  );
};
