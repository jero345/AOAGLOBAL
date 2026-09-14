import React from 'react';
import { ArrowRight } from 'lucide-react';
import { useTranslation } from '../../context/LanguageContext';
import { useQuote } from '../../context/QuoteContext';
import { Section } from '../ui/Section';
import { SectionHeader } from '../ui/SectionHeader';
import { SpotlightCard } from '../ui/SpotlightCard';
import { Reveal } from '../ui/Reveal';

/** Bloque 4: tarjetas problema → qué hacemos → qué obtienes. */
export const ServicesGrid: React.FC = () => {
  const { t } = useTranslation('services');
  const { requestQuote } = useQuote();

  return (
    <Section tone="line" id="services">
      <SectionHeader eyebrow={t.eyebrow} title={t.title} description={t.description} />

      <ul className="mt-12 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
        {t.items.map((s, i) => (
          <Reveal as="li" key={s.slug} delay={i * 0.05} className="h-full">
            <SpotlightCard className="flex h-full flex-col p-6">
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
                <div className="rounded-[var(--radius-btn)] bg-mist p-3">
                  <dt className="text-eyebrow font-semibold uppercase tracking-[0.08em] text-accent-hover">{t.outcomeLabel}</dt>
                  <dd className="mt-1 font-medium text-ink">{s.outcome}</dd>
                </div>
              </dl>

              <button
                type="button"
                onClick={() => requestQuote(s.slug)}
                data-track={`service_${s.slug}`}
                className="mt-6 inline-flex items-center gap-1.5 self-start text-xs font-bold uppercase tracking-wider text-navy transition-transform duration-200 hover:translate-x-1 cursor-pointer"
              >
                {t.quoteCta} <ArrowRight size={14} aria-hidden />
              </button>
            </SpotlightCard>
          </Reveal>
        ))}
      </ul>
    </Section>
  );
};
