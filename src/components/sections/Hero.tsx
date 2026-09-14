import React, { useRef, useEffect, useState } from 'react';
import { motion, useScroll, useTransform, useReducedMotion } from 'framer-motion';
import { ArrowRight, Check } from 'lucide-react';
import { useTranslation } from '../../context/LanguageContext';
import { Eyebrow } from '../ui/Eyebrow';
import { Button } from '../ui/Button';
import { Reveal } from '../ui/Reveal';
import { TextReveal } from '../ui/TextReveal';
import { Ticker } from '../ui/Ticker';

/**
 * Hero: problema → promesa → 2 CTAs. Imagen local (WebP, eager, fetchpriority high)
 * con parallax suave al hacer scroll y la tarjeta de proceso superpuesta.
 * Sin bloque de credibilidad: no hay cifras reales confirmadas.
 */
export const Hero: React.FC = () => {
  const { language, t } = useTranslation('hero');
  const reduce = useReducedMotion();
  const ref = useRef<HTMLElement>(null);
  // La tarjeta solo flota (parallax) en escritorio; en móvil va en flujo y un desplazamiento dejaría hueco
  const [isDesktop, setIsDesktop] = useState(false);
  useEffect(() => {
    const mq = window.matchMedia('(min-width: 1024px)');
    const update = () => setIsDesktop(mq.matches);
    update();
    mq.addEventListener('change', update);
    return () => mq.removeEventListener('change', update);
  }, []);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] });
  const imgY = useTransform(scrollYProgress, [0, 1], ['0%', reduce ? '0%' : '18%']);
  const cardY = useTransform(scrollYProgress, [0, 1], ['0%', reduce || !isDesktop ? '0%' : '-30%']);

  return (
    <>
      <section ref={ref} className="relative overflow-hidden bg-paper">
        {/* Fondo: rejilla de puntos + mancha ámbar flotante (muy baja opacidad) */}
        <div aria-hidden className="dot-grid absolute inset-0 opacity-60 [mask-image:radial-gradient(ellipse_at_top_left,black,transparent_70%)]" />
        <div aria-hidden className="blob absolute -right-32 -top-32 h-[28rem] w-[28rem] rounded-full bg-accent/15 blur-3xl" />

        <div className="relative mx-auto max-w-[1200px] px-6 md:px-8 py-16 md:py-24 lg:py-28">
          <div className="grid items-center gap-12 lg:grid-cols-[6fr_6fr] lg:gap-16">
            <div key={language} className="flex flex-col items-start">
              <Reveal immediate>
                <Eyebrow tone="navy">{t.eyebrow}</Eyebrow>
              </Reveal>

              <TextReveal
                as="h1"
                text={t.title}
                immediate
                delay={0.1}
                className="mt-5 text-4xl sm:text-5xl lg:text-display text-ink max-w-[14ch]"
              />

              <Reveal immediate delay={0.35} className="mt-6">
                <p className="text-base md:text-lg leading-relaxed text-slate max-w-xl">{t.subtitle}</p>
              </Reveal>

              <Reveal immediate delay={0.45} className="mt-8 flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
                <Button variant="accent" href="#contact" track="hero_primary">
                  {t.primaryCta} <ArrowRight size={16} aria-hidden />
                </Button>
                <Button variant="outline" href="#pricing" track="hero_secondary">
                  {t.secondaryCta}
                </Button>
              </Reveal>
            </div>

            {/* Imagen + tarjeta de proceso superpuesta */}
            <div className="relative lg:pl-6">
              <motion.div
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.15 }}
                className="relative aspect-[4/3] overflow-hidden rounded-[var(--radius-card)] border border-line bg-line shadow-md lg:aspect-[11/10]"
              >
                <motion.img
                  src="/img/hero.webp"
                  srcSet="/img/hero-640.webp 640w, /img/hero.webp 1000w"
                  sizes="(min-width: 1024px) 50vw, 100vw"
                  alt={t.imageAlt}
                  width={1000}
                  height={800}
                  loading="eager"
                  fetchPriority="high"
                  decoding="async"
                  style={{ y: imgY }}
                  className="kenburns h-[118%] w-full object-cover grayscale contrast-110"
                />
                <div aria-hidden className="absolute inset-0 bg-gradient-to-t from-navy/70 via-navy/10 to-transparent" />
              </motion.div>

              <motion.aside
                aria-label={t.card.label}
                style={{ y: cardY }}
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.55, ease: [0.16, 1, 0.3, 1] }}
                className="relative -mt-16 mx-4 rounded-[var(--radius-card)] border border-line bg-paper p-5 shadow-lg md:p-6 lg:absolute lg:-bottom-10 lg:-left-6 lg:mx-0 lg:mt-0 lg:w-[22rem]"
              >
                <p className="text-eyebrow font-semibold uppercase tracking-[0.08em] text-slate">{t.card.label}</p>
                <ol className="mt-4 space-y-4">
                  {t.card.steps.map((step, i) => (
                    <motion.li
                      key={step.title}
                      initial={{ opacity: 0, x: -12 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.75 + i * 0.12, duration: 0.4 }}
                      className="flex gap-3"
                    >
                      <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-navy text-[0.7rem] font-bold text-white">
                        {i + 1}
                      </span>
                      <div>
                        <p className="text-sm font-semibold text-ink leading-snug">{step.title}</p>
                        <p className="mt-0.5 text-xs text-slate">{step.detail}</p>
                      </div>
                    </motion.li>
                  ))}
                </ol>
                <p className="mt-4 flex items-center gap-2 border-t border-line pt-3 text-xs text-ink">
                  <Check size={14} aria-hidden className="text-accent-hover" />
                  {t.card.footer}
                </p>
              </motion.aside>
            </div>
          </div>
        </div>
      </section>

      <Ticker items={t.ticker} />
    </>
  );
};
