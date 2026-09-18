import React, { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
import { ArrowRight, ChevronDown } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useTranslation } from '../../context/LanguageContext';
import { useQuote } from '../../context/QuoteContext';
import { pages, type ServiceSlug } from '../../content';
import { Chapter } from './Chapter';
import { Rule } from '../ui/Rule';
import { Reveal } from '../ui/Reveal';
import { Button } from '../ui/Button';

const ease = [0.16, 1, 0.3, 1] as const;

interface Item {
  slug: ServiceSlug;
  name: string;
  image: string;
  imageAlt: string;
}

/** Imagen fija (escritorio) de la solución activa: fundido con desenfoque y color al entrar. */
const StickyImage: React.FC<{ items: Item[]; active: ServiceSlug; index: number }> = ({ items, active, index }) => {
  const reduce = useReducedMotion();
  const item = items.find((i) => i.slug === active) ?? items[0];
  return (
    <div>
      <div className="relative aspect-[4/3] overflow-hidden rounded-[var(--radius-card)] border border-line bg-mist shadow-[0_32px_64px_-28px_rgba(11,29,58,0.45)]">
        <AnimatePresence initial={false}>
          <motion.img
            key={item.slug}
            src={item.image}
            alt={item.imageAlt}
            width={900}
            height={560}
            loading="lazy"
            decoding="async"
            initial={reduce ? false : { opacity: 0, scale: 1.06, filter: 'blur(8px) grayscale(1)' }}
            animate={{ opacity: 1, scale: 1, filter: 'blur(0px) grayscale(0)' }}
            exit={reduce ? undefined : { opacity: 0, filter: 'blur(6px) grayscale(1)' }}
            transition={{ duration: 0.55, ease }}
            className="absolute inset-0 h-full w-full object-cover"
          />
        </AnimatePresence>
      </div>
      <p className="mt-4 flex items-baseline gap-2 text-sm text-slate">
        <span className="font-bold tabular-nums text-navy">0{index + 1}</span>
        <span className="font-semibold text-navy">{item.name}</span>
      </p>
    </div>
  );
};

/**
 * 03 · Soluciones: las cinco capacidades como un índice de filas numeradas.
 * En escritorio la imagen de la fila activa queda fija a la izquierda; en móvil cada fila
 * lleva su miniatura. "Ver detalles" despliega las capacidades específicas; el CTA lleva
 * al formulario con el tipo de proyecto preseleccionado.
 */
export const CapabilitiesChapter: React.FC<{ number: string; label: string }> = ({ number, label }) => {
  const { language, t } = useTranslation('capabilities');
  const { t: footer } = useTranslation('footer');
  const { requestQuote } = useQuote();
  const reduce = useReducedMotion();
  const [open, setOpen] = useState<ServiceSlug | null>(null);
  const [inView, setInView] = useState<ServiceSlug>(t.items[0].slug);
  const [hover, setHover] = useState<ServiceSlug | null>(null);
  const rows = useRef<Partial<Record<ServiceSlug, HTMLElement | null>>>({});
  const active = hover ?? inView;

  // La fila que cruza la franja central del viewport es la activa (sube y baja con el scroll)
  useEffect(() => {
    if (typeof IntersectionObserver === 'undefined') return;
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) setInView((e.target as HTMLElement).dataset.slug as ServiceSlug);
        }
      },
      { rootMargin: '-45% 0px -45% 0px', threshold: 0 }
    );
    Object.values(rows.current).forEach((el) => el && io.observe(el));
    return () => io.disconnect();
  }, [language]);
  const activeIndex = Math.max(0, t.items.findIndex((i) => i.slug === active));

  return (
    <Chapter
      id="capabilities"
      number={number}
      label={label}
      title={t.title}
      intro={t.intro}
      tone="paper"
      wideAside
      aside={<StickyImage items={t.items} active={active} index={activeIndex} />}
    >
      <ol key={language}>
        {t.items.map((s, i) => {
          const isOpen = open === s.slug;
          const isActive = active === s.slug;
          const panelId = `capability-${s.slug}-details`;
          return (
            <li key={s.slug}>
              <Rule delay={i * 0.06} />
              <motion.article
                initial={reduce ? false : { opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.55, delay: 0.08 + i * 0.06, ease }}
                ref={(el) => {
                  rows.current[s.slug] = el;
                }}
                data-slug={s.slug}
                onMouseEnter={() => setHover(s.slug)}
                onMouseLeave={() => setHover(null)}
                className="grid grid-cols-[2.5rem_1fr] gap-x-4 py-7 md:grid-cols-[3.5rem_1fr] md:gap-x-8 md:py-9"
              >
                <span
                  className={`text-sm font-bold tabular-nums transition-[color,translate] duration-300 ease-[var(--ease-out-quart)] ${
                    isActive ? 'translate-x-1 text-navy' : 'text-slate'
                  }`}
                >
                  0{i + 1}
                </span>

                <div>
                  <div className="flex flex-col gap-4">
                    {/* Móvil/tablet (sin imagen fija a la izquierda): banda de imagen de la solución */}
                    <div className="relative aspect-[2/1] overflow-hidden rounded-[var(--radius-card)] border border-line bg-mist lg:hidden">
                      <img
                        src={s.image}
                        alt=""
                        width={900}
                        height={560}
                        loading="lazy"
                        decoding="async"
                        className="h-full w-full object-cover"
                      />
                    </div>
                    <div className="min-w-0">
                      <h3 className={`text-xl font-bold leading-snug transition-colors duration-200 md:text-2xl md:tracking-[-0.01em] ${isActive ? 'text-navy' : 'text-ink'}`}>
                        {s.name}
                      </h3>
                      <p className="mt-2 max-w-2xl text-base leading-relaxed text-slate">{s.description}</p>
                    </div>
                  </div>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        id={panelId}
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.32, ease }}
                        className="overflow-hidden"
                      >
                        <div className="mt-5 max-w-2xl">
                          <p className="text-eyebrow font-semibold uppercase tracking-[0.08em] text-slate">{t.capabilitiesLabel}</p>
                          <ul className="mt-2.5 flex flex-wrap gap-2">
                            {s.capabilities.map((cap, j) => (
                              <motion.li
                                key={cap}
                                initial={reduce ? false : { opacity: 0, y: 6 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.3, delay: 0.05 + j * 0.04, ease }}
                                className="rounded-[var(--radius-btn)] bg-mist px-2.5 py-1 text-xs font-medium text-ink"
                              >
                                {cap}
                              </motion.li>
                            ))}
                          </ul>
                          {s.note && <p className="mt-3 text-sm leading-relaxed text-slate">{s.note}</p>}
                          {s.slug === 'automation' && (
                            <Link to={pages.ai[language]} className="group/link mt-3 inline-flex items-center gap-1 text-sm font-semibold text-navy hover:underline">
                              {footer.aiPageLink}
                              <ArrowRight size={14} aria-hidden className="transition-transform duration-200 ease-[var(--ease-out-quart)] group-hover/link:translate-x-0.5" />
                            </Link>
                          )}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>

                  <div className="mt-5 flex flex-wrap items-center gap-x-6 gap-y-3">
                    <Button variant="outline" size="sm" onClick={() => requestQuote(s.slug)} track={`capability_${s.slug}`}>
                      {t.cta} <ArrowRight size={14} aria-hidden />
                    </Button>
                    <button
                      type="button"
                      onClick={() => setOpen(isOpen ? null : s.slug)}
                      aria-expanded={isOpen}
                      aria-controls={panelId}
                      className="inline-flex min-h-10 cursor-pointer items-center gap-1 whitespace-nowrap text-xs font-bold uppercase tracking-wider text-navy transition-colors duration-200 hover:text-ink"
                    >
                      {isOpen ? t.hideDetails : t.showDetails}
                      <motion.span animate={{ rotate: isOpen ? 180 : 0 }} transition={{ duration: 0.2, ease: [0.23, 1, 0.32, 1] }} className="flex">
                        <ChevronDown size={14} aria-hidden />
                      </motion.span>
                    </button>
                  </div>
                </div>
              </motion.article>
            </li>
          );
        })}
      </ol>
      <Rule delay={0.2} />

      {/* Nota al cierre de Soluciones (sin CTA) */}
      <Reveal className="mt-8">
        <p className="max-w-2xl text-sm leading-relaxed text-slate">{t.note}</p>
      </Reveal>
    </Chapter>
  );
};
