import React from 'react';
import { ArrowRight, HelpCircle } from 'lucide-react';
import { useTranslation } from '../../context/LanguageContext';
import { useQuote, GENERAL_SERVICE } from '../../context/QuoteContext';
import { Button } from '../ui/Button';
import { Section } from '../ui/Section';
import { SectionHeader } from '../ui/SectionHeader';
import { SpotlightCard } from '../ui/SpotlightCard';
import { Reveal } from '../ui/Reveal';

/** Bloque 4: tarjetas con imagen, problema → qué hacemos → qué obtienes. */
export const ServicesGrid: React.FC = () => {
  const { t } = useTranslation('services');
  const { requestQuote } = useQuote();

  return (
    <Section tone="line" id="services">
      <SectionHeader eyebrow={t.eyebrow} title={t.title} description={t.description} />

      <ul className="mt-12 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
        {t.items.map((s, i) => (
          <Reveal as="li" key={s.slug} delay={(i % 3) * 0.08} className="h-full">
            <SpotlightCard className="group flex h-full flex-col overflow-hidden">
              {/* Imagen: gris → color y zoom al pasar el cursor */}
              <div className="relative aspect-[16/9] overflow-hidden border-b border-line bg-mist">
                <img
                  src={s.image}
                  alt={s.imageAlt}
                  width={900}
                  height={560}
                  loading="lazy"
                  decoding="async"
                  className="h-full w-full object-cover grayscale transition-all duration-700 ease-out group-hover:scale-105 group-hover:grayscale-0"
                />
                <span className="absolute left-3 top-3 rounded-[var(--radius-btn)] bg-navy px-2.5 py-1 text-[0.65rem] font-bold tracking-wider text-white">
                  0{i + 1}
                </span>
              </div>

              <div className="flex flex-1 flex-col p-6">
                <h3 className="text-h3 text-ink">{s.name}</h3>

                <dl className="mt-5 flex-1 space-y-4 text-sm">
                  <div>
                    <dt className="text-eyebrow font-semibold uppercase tracking-[0.08em] text-slate">{t.problemLabel}</dt>
                    <dd className="mt-1 text-ink">{s.problem}</dd>
                  </div>
                  <div>
                    <dt className="text-eyebrow font-semibold uppercase tracking-[0.08em] text-slate">{t.whatLabel}</dt>
                    <dd className="mt-1 text-slate leading-relaxed">{s.what}</dd>
                  </div>
                  <div className="rounded-[var(--radius-btn)] bg-mist p-3 transition-colors duration-300 group-hover:bg-accent/15">
                    <dt className="text-eyebrow font-semibold uppercase tracking-[0.08em] text-accent-hover">{t.outcomeLabel}</dt>
                    <dd className="mt-1 font-medium text-ink">{s.outcome}</dd>
                  </div>
                </dl>

                <button
                  type="button"
                  onClick={() => requestQuote(s.slug)}
                  data-track={`service_${s.slug}`}
                  className="mt-6 inline-flex items-center gap-1.5 self-start text-xs font-bold uppercase tracking-wider text-navy cursor-pointer"
                >
                  {t.quoteCta}
                  <ArrowRight size={14} aria-hidden className="transition-transform duration-200 group-hover:translate-x-1" />
                </button>
              </div>
            </SpotlightCard>
          </Reveal>
        ))}

        {/* Tarjeta final: captura al indeciso en lugar de dejar el hueco vacío */}
        <Reveal as="li" delay={0.16} className="h-full">
          <div className="flex h-full flex-col justify-between rounded-[var(--radius-card)] border border-dashed border-navy/40 bg-paper/60 p-6 transition-colors duration-300 hover:border-navy">
            <div>
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-accent text-navy">
                <HelpCircle size={20} aria-hidden />
              </span>
              <h3 className="mt-5 text-h3 text-ink">{t.undecided.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate">{t.undecided.text}</p>
            </div>
            <Button variant="primary" onClick={() => requestQuote(GENERAL_SERVICE)} track="service_undecided" className="mt-6 self-start">
              {t.undecided.cta} <ArrowRight size={16} aria-hidden />
            </Button>
          </div>
        </Reveal>
      </ul>
    </Section>
  );
};
