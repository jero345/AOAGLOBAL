import React from 'react';
import { ArrowRight, Check, Clock } from 'lucide-react';
import { useTranslation } from '../../context/LanguageContext';
import { useQuote } from '../../context/QuoteContext';
import { Section } from '../ui/Section';
import { SectionHeader } from '../ui/SectionHeader';
import { Reveal } from '../ui/Reveal';
import { Button } from '../ui/Button';

/**
 * Bloque 5: precios "desde" como filtro de calificación.
 * El plan con featured:true actúa de ancla visual (el del medio, no el más caro).
 */
export const Pricing: React.FC = () => {
  const { t } = useTranslation('pricing');
  const { requestQuote } = useQuote();

  return (
    <Section tone="paper" id="pricing">
      <SectionHeader eyebrow={t.eyebrow} title={t.title} description={t.subtitle} />

      <ul className="mt-12 grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3">
        {t.plans.map((plan, i) => {
          const featured = plan.featured;
          return (
            <Reveal
              as="li"
              key={plan.slug}
              delay={i * 0.05}
              className={`relative flex flex-col rounded-[var(--radius-card)] border p-6 md:p-7 ${
                featured ? 'border-navy bg-navy text-white shadow-lg xl:-my-3' : 'border-line bg-paper'
              }`}
            >
              {featured && (
                <span className="absolute -top-3 left-6 rounded-full bg-accent px-3 py-1 text-[0.65rem] font-bold uppercase tracking-wider text-navy">
                  {t.featuredBadge}
                </span>
              )}

              <h3 className={`text-h3 ${featured ? 'text-white' : 'text-ink'}`}>{plan.name}</h3>
              <p className={`mt-1 text-sm ${featured ? 'text-white/70' : 'text-slate'}`}>{plan.problem}</p>

              <div className={`mt-6 border-t pt-5 ${featured ? 'border-white/15' : 'border-line'}`}>
                <p className={`text-eyebrow font-semibold uppercase tracking-[0.08em] ${featured ? 'text-white/60' : 'text-slate'}`}>
                  {t.fromLabel}
                </p>
                <p className={`mt-1 text-3xl font-bold tracking-tight ${featured ? 'text-white' : 'text-ink'}`}>
                  {plan.priceUsd}
                </p>
                {t.secondaryCurrencyNote && plan.priceAud && (
                  <p className={`mt-1 text-xs ${featured ? 'text-white/60' : 'text-slate'}`}>
                    {t.secondaryCurrencyNote} {plan.priceAud}
                  </p>
                )}
                <p className={`mt-3 inline-flex items-center gap-1.5 text-xs font-medium ${featured ? 'text-white/80' : 'text-ink'}`}>
                  <Clock size={14} aria-hidden className={featured ? 'text-accent' : 'text-accent-hover'} />
                  {t.timelineLabel}: {plan.timeline}
                </p>
              </div>

              <div className="mt-6 flex-1">
                <p className={`text-eyebrow font-semibold uppercase tracking-[0.08em] ${featured ? 'text-white/60' : 'text-slate'}`}>
                  {t.deliverableLabel}
                </p>
                <ul className="mt-3 space-y-2">
                  {plan.deliverables.map((d) => (
                    <li key={d} className={`flex items-start gap-2 text-sm ${featured ? 'text-white/90' : 'text-ink'}`}>
                      <Check size={16} aria-hidden className={`mt-0.5 shrink-0 ${featured ? 'text-accent' : 'text-accent-hover'}`} />
                      <span>{d}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <Button
                variant={featured ? 'accent' : 'outline'}
                onClick={() => requestQuote(plan.slug)}
                track={`pricing_${plan.slug}`}
                className="mt-8 w-full"
              >
                {t.cta} <ArrowRight size={16} aria-hidden />
              </Button>
            </Reveal>
          );
        })}
      </ul>

      <Reveal className="mt-8">
        <p className="text-xs text-slate max-w-2xl">{t.disclaimer}</p>
      </Reveal>
    </Section>
  );
};
