import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, ChevronDown, HelpCircle, Check } from 'lucide-react';
import { useTranslation } from '../../context/LanguageContext';
import { useQuote, GENERAL_SERVICE } from '../../context/QuoteContext';
import { Button } from '../ui/Button';
import { Section } from '../ui/Section';
import { SectionHeader } from '../ui/SectionHeader';
import { SpotlightCard } from '../ui/SpotlightCard';
import { Reveal } from '../ui/Reveal';
import type { ServiceSlug } from '../../content';

/**
 * Bloque 4: cinco capacidades. "Explorar solución" despliega el alcance habitual
 * dentro de la tarjeta (sin páginas extra); "Hablar con AOA" preselecciona el formulario.
 */
export const ServicesGrid: React.FC = () => {
  const { language, t } = useTranslation('services');
  const { requestQuote } = useQuote();
  const [open, setOpen] = useState<ServiceSlug | null>(null);

  return (
    <Section tone="line" id="services">
      <SectionHeader eyebrow={t.eyebrow} title={t.title} description={t.description} />

      <ul className={`mt-12 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3 ${open ? 'md:items-start' : ''}`} key={language}>
        {t.items.map((s, i) => {
          const isOpen = open === s.slug;
          const panelId = `service-${s.slug}-details`;
          return (
            <Reveal as="li" key={s.slug} delay={(i % 3) * 0.08} className="h-full">
              <SpotlightCard className="group flex h-full flex-col overflow-hidden">
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

                  {/* Alcance habitual: se despliega dentro de la tarjeta */}
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        id={panelId}
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                        className="overflow-hidden"
                      >
                        <div className="mt-5 border-t border-line pt-4">
                          <p className="text-eyebrow font-semibold uppercase tracking-[0.08em] text-slate">{t.detailsLabel}</p>
                          <ul className="mt-2 space-y-1.5">
                            {s.details.map((d) => (
                              <li key={d} className="flex items-start gap-2 text-sm text-ink">
                                <Check size={15} aria-hidden className="mt-0.5 shrink-0 text-accent-hover" />
                                <span>{d}</span>
                              </li>
                            ))}
                          </ul>
                          <Button
                            variant="primary"
                            onClick={() => requestQuote(s.slug)}
                            track={`service_talk_${s.slug}`}
                            className="mt-4 w-full"
                          >
                            {t.talkCta} <ArrowRight size={16} aria-hidden />
                          </Button>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>

                  <button
                    type="button"
                    onClick={() => setOpen(isOpen ? null : s.slug)}
                    aria-expanded={isOpen}
                    aria-controls={panelId}
                    data-track={`service_explore_${s.slug}`}
                    className="mt-6 inline-flex items-center gap-1.5 self-start text-xs font-bold uppercase tracking-wider text-navy cursor-pointer"
                  >
                    {isOpen ? t.collapseCta : t.exploreCta}
                    <motion.span animate={{ rotate: isOpen ? 180 : 0 }} transition={{ duration: 0.2 }} className="flex">
                      <ChevronDown size={14} aria-hidden />
                    </motion.span>
                  </button>
                </div>
              </SpotlightCard>
            </Reveal>
          );
        })}

        {/* Tarjeta final: orienta a quien aún no tiene definida la solución */}
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
