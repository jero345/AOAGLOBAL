import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, ChevronDown } from 'lucide-react';
import { useTranslation } from '../../context/LanguageContext';
import { useQuote } from '../../context/QuoteContext';
import { Button } from '../ui/Button';
import { Section } from '../ui/Section';
import { SectionHeader } from '../ui/SectionHeader';
import { SpotlightCard } from '../ui/SpotlightCard';
import { Reveal } from '../ui/Reveal';
import { Link } from 'react-router-dom';
import { pages, type ServiceSlug } from '../../content';

/**
 * Soluciones: cinco capacidades. Cada tarjeta muestra nombre + descripción breve;
 * "Ver detalles" despliega las capacidades específicas. El CTA lleva al formulario
 * con el tipo de proyecto preseleccionado.
 */
export const Capabilities: React.FC = () => {
  const { language, t } = useTranslation('capabilities');
  const { t: footer } = useTranslation('footer');
  const { requestQuote } = useQuote();
  const [open, setOpen] = useState<ServiceSlug | null>(null);

  return (
    <Section tone="line" id="capabilities">
      <SectionHeader eyebrow={t.eyebrow} title={t.title} description={t.intro} />

      <ul className={`mt-8 grid grid-cols-1 gap-4 md:mt-12 md:grid-cols-2 md:gap-5 lg:grid-cols-3 ${open ? 'md:items-start' : ''}`} key={language}>
        {t.items.map((s, i) => {
          const isOpen = open === s.slug;
          const panelId = `capability-${s.slug}-details`;
          return (
            <Reveal as="li" key={s.slug} delay={(i % 3) * 0.08} className="h-full">
              <SpotlightCard className="group flex h-full flex-col overflow-hidden">
                <div className="relative aspect-[21/9] overflow-hidden border-b border-line bg-mist md:aspect-[16/9]">
                  <img
                    src={s.image}
                    alt={s.imageAlt}
                    width={900}
                    height={560}
                    loading="lazy"
                    decoding="async"
                    className="h-full w-full object-cover grayscale transition-[transform,filter] duration-700 ease-[var(--ease-out-expo)] group-hover:scale-105 group-hover:grayscale-0"
                  />
                  <span className="absolute left-3 top-3 rounded-[var(--radius-btn)] bg-navy px-2.5 py-1 text-[0.65rem] font-bold tracking-wider text-white">
                    0{i + 1}
                  </span>
                </div>

                <div className="flex flex-1 flex-col p-5 md:p-6">
                  <h3 className="text-h3 text-ink">{s.name}</h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-slate">{s.description}</p>

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
                        <div className="mt-4 border-t border-line pt-3">
                          <p className="text-eyebrow font-semibold uppercase tracking-[0.08em] text-slate">{t.capabilitiesLabel}</p>
                          <ul className="mt-2 flex flex-wrap gap-1.5">
                            {s.capabilities.map((cap) => (
                              <li key={cap} className="rounded-[var(--radius-btn)] bg-mist px-2 py-1 text-[0.7rem] font-medium text-ink">
                                {cap}
                              </li>
                            ))}
                          </ul>
                          {s.note && <p className="mt-3 text-xs leading-relaxed text-slate">{s.note}</p>}
                          {s.slug === 'automation' && (
                            <Link to={pages.ai[language]} className="group/link mt-3 inline-flex items-center gap-1 text-xs font-semibold text-navy hover:underline">
                              {footer.aiPageLink} <ArrowRight size={12} aria-hidden className="transition-transform duration-200 ease-[var(--ease-out-quart)] group-hover/link:translate-x-0.5" />
                            </Link>
                          )}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>

                  <div className="mt-4 flex items-center justify-between gap-3">
                    <button
                      type="button"
                      onClick={() => setOpen(isOpen ? null : s.slug)}
                      aria-expanded={isOpen}
                      aria-controls={panelId}
                      className="inline-flex min-h-10 items-center gap-1 whitespace-nowrap text-xs font-bold uppercase tracking-wider text-navy cursor-pointer transition-colors duration-200 hover:text-ink"
                    >
                      {isOpen ? t.hideDetails : t.showDetails}
                      <motion.span animate={{ rotate: isOpen ? 180 : 0 }} transition={{ duration: 0.2, ease: [0.23, 1, 0.32, 1] }} className="flex">
                        <ChevronDown size={14} aria-hidden />
                      </motion.span>
                    </button>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => requestQuote(s.slug)}
                      track={`capability_${s.slug}`}
                    >
                      {t.cta} <ArrowRight size={14} aria-hidden />
                    </Button>
                  </div>
                </div>
              </SpotlightCard>
            </Reveal>
          );
        })}
      </ul>

      {/* Nota al cierre de Soluciones (sin CTA) */}
      <Reveal className="mt-8">
        <p className="max-w-3xl text-sm text-slate">{t.note}</p>
      </Reveal>
    </Section>
  );
};
