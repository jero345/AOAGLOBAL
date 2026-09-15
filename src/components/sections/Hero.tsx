import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useReducedMotion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { useTranslation } from '../../context/LanguageContext';
import { Eyebrow } from '../ui/Eyebrow';
import { Button } from '../ui/Button';
import { Reveal } from '../ui/Reveal';
import { TextReveal } from '../ui/TextReveal';
import { Ticker } from '../ui/Ticker';

/**
 * Hero: eyebrow → H1 → un solo párrafo → 2 CTAs → microcopy secundario.
 * Sin altura mínima artificial: el conjunto es compacto en móvil.
 * Imagen local WebP (eager, preload en index.html) con parallax suave.
 */
export const Hero: React.FC = () => {
  const { language, t } = useTranslation('hero');
  const reduce = useReducedMotion();
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] });
  const imgY = useTransform(scrollYProgress, [0, 1], ['0%', reduce ? '0%' : '18%']);

  return (
    <>
      <section ref={ref} className="relative overflow-hidden bg-gradient-to-br from-navy/14 via-navy/4 to-paper">
        <div aria-hidden className="dot-grid absolute inset-0 opacity-70 [mask-image:radial-gradient(ellipse_at_top_left,black,transparent_70%)]" />
        <div aria-hidden className="blob absolute -right-32 -top-32 h-[30rem] w-[30rem] rounded-full bg-navy/22 blur-3xl" />
        <div aria-hidden className="absolute -bottom-40 -left-24 h-[24rem] w-[24rem] rounded-full bg-navy/12 blur-3xl" />

        <div className="relative mx-auto max-w-[1200px] px-6 py-12 md:px-8 md:py-20 lg:py-24">
          <div className="grid items-center gap-10 lg:grid-cols-[6fr_5fr] lg:gap-16">
            <div key={language} className="flex flex-col items-start">
              <Reveal immediate>
                <Eyebrow tone="navy">{t.eyebrow}</Eyebrow>
              </Reveal>

              <TextReveal
                as="h1"
                text={t.title}
                immediate
                delay={0.1}
                className="mt-4 text-4xl sm:text-5xl lg:text-display text-ink lg:max-w-[16ch]"
              />

              <Reveal immediate delay={0.35} className="mt-5">
                <p className="text-base md:text-lg leading-relaxed text-slate max-w-xl">{t.description}</p>
              </Reveal>

              <Reveal immediate delay={0.45} className="mt-7 flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
                <Button variant="accent" href="#capabilities" track="hero_explore">
                  {t.primaryCta} <ArrowRight size={16} aria-hidden />
                </Button>
                <Button variant="outline" href="#contact" track="hero_start">
                  {t.secondaryCta}
                </Button>
              </Reveal>

              <Reveal immediate delay={0.55} className="mt-4">
                <p className="text-xs text-slate max-w-md">{t.note}</p>
              </Reveal>
            </div>

            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.15 }}
              className="relative aspect-[16/10] overflow-hidden rounded-[var(--radius-card)] border border-line bg-line shadow-md lg:aspect-[5/4]"
            >
              <motion.img
                src="/img/hero.webp"
                srcSet="/img/hero-640.webp 640w, /img/hero.webp 1000w"
                sizes="(min-width: 1024px) 45vw, 100vw"
                alt={t.imageAlt}
                width={1000}
                height={800}
                loading="eager"
                fetchPriority="high"
                decoding="async"
                style={{ y: imgY }}
                className="kenburns h-[118%] w-full object-cover grayscale-[35%]"
              />
              <div aria-hidden className="absolute inset-0 bg-gradient-to-t from-navy/50 via-transparent to-transparent" />
            </motion.div>
          </div>
        </div>
      </section>

      <Ticker items={t.ticker} />
    </>
  );
};
