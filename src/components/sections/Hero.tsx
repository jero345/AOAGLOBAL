import React from 'react';
import { ArrowRight, Check } from 'lucide-react';
import { useTranslation } from '../../context/LanguageContext';
import { Eyebrow } from '../ui/Eyebrow';
import { Button } from '../ui/Button';
import { Reveal } from '../ui/Reveal';

/**
 * Hero: problema → promesa → 2 CTAs. Sin imagen de stock, sin animación que
 * retrase el texto. La tarjeta de la derecha explica el proceso en 3 líneas.
 * Sin bloque de credibilidad: no hay cifras reales confirmadas (ver brief §4.1).
 */
export const Hero: React.FC = () => {
  const { language, t } = useTranslation('hero');

  return (
    <section className="bg-paper border-b border-line overflow-hidden">
      <div className="mx-auto max-w-[1200px] px-6 md:px-8 py-16 md:py-24 lg:py-28">
        <div className="grid items-center gap-12 lg:grid-cols-[7fr_5fr] lg:gap-16">
          <div key={language} className="flex flex-col items-start">
            <Reveal immediate>
              <Eyebrow tone="navy">{t.eyebrow}</Eyebrow>
            </Reveal>

            <Reveal immediate delay={0.05} className="mt-5">
              <h1 className="text-4xl sm:text-5xl lg:text-display text-ink max-w-[14ch]">{t.title}</h1>
            </Reveal>

            <Reveal immediate delay={0.1} className="mt-6">
              <p className="text-base md:text-lg leading-relaxed text-slate max-w-xl">{t.subtitle}</p>
            </Reveal>

            <Reveal immediate delay={0.15} className="mt-8 flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
              <Button variant="accent" href="#contact" track="hero_primary">
                {t.primaryCta} <ArrowRight size={16} aria-hidden />
              </Button>
              <Button variant="outline" href="#pricing" track="hero_secondary">
                {t.secondaryCta}
              </Button>
            </Reveal>
          </div>

          <Reveal immediate delay={0.2}>
            <aside
              aria-label={t.card.label}
              className="rounded-[var(--radius-card)] border border-line bg-mist p-6 md:p-8 shadow-sm"
            >
              <p className="text-eyebrow font-semibold uppercase tracking-[0.08em] text-slate">{t.card.label}</p>
              <ol className="mt-5 space-y-5">
                {t.card.steps.map((step, i) => (
                  <li key={step.title} className="flex gap-4">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-navy text-xs font-bold text-white">
                      {i + 1}
                    </span>
                    <div>
                      <p className="font-semibold text-ink leading-snug">{step.title}</p>
                      <p className="mt-0.5 text-sm text-slate">{step.detail}</p>
                    </div>
                  </li>
                ))}
              </ol>
              <p className="mt-6 flex items-center gap-2 border-t border-line pt-4 text-sm text-ink">
                <Check size={16} aria-hidden className="text-accent-hover" />
                {t.card.footer}
              </p>
            </aside>
          </Reveal>
        </div>
      </div>
    </section>
  );
};
