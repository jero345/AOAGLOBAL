import React from 'react';
import { ArrowRight, UserCheck } from 'lucide-react';
import { useTranslation } from '../../context/LanguageContext';
import { Section } from '../ui/Section';
import { SectionHeader } from '../ui/SectionHeader';
import { Reveal } from '../ui/Reveal';
import { Button } from '../ui/Button';

/** Bloque 3: requerimiento → cotización → solución. Un solo interlocutor. */
export const HowItWorks: React.FC = () => {
  const { t } = useTranslation('howItWorks');

  return (
    <Section tone="paper" id="how-it-works">
      <SectionHeader eyebrow={t.eyebrow} title={t.title} />

      <ol className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-3">
        {t.steps.map((step, i) => (
          <Reveal as="li" key={step.number} delay={i * 0.08} className="relative border-t-2 border-navy pt-6">
            <span className="text-3xl font-bold text-accent-hover tabular-nums">{step.number}</span>
            <h3 className="mt-3 text-h3 text-ink">{step.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-slate">{step.description}</p>
          </Reveal>
        ))}
      </ol>

      <Reveal className="mt-14 grid gap-8 rounded-[var(--radius-card)] bg-navy p-8 text-white md:grid-cols-[auto_1fr_auto] md:items-center md:p-10">
        <span className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-white/10">
          <UserCheck size={22} aria-hidden />
        </span>
        <div>
          <h3 className="text-h3 text-white">{t.highlightTitle}</h3>
          <p className="mt-2 text-sm leading-relaxed text-white/75 max-w-2xl">{t.highlightText}</p>
        </div>
        <Button variant="accent" href="#contact" track="howitworks_cta" className="whitespace-nowrap">
          {t.cta} <ArrowRight size={16} aria-hidden />
        </Button>
      </Reveal>
    </Section>
  );
};
