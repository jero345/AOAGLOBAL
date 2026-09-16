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
 * Hero: eyebrow → H1 → un solo párrafo → CTA sólido + enlace simple → microcopy.
 * Escritorio (lg+): texto a la izquierda, ilustración a la derecha.
 * Móvil: la ilustración va de fondo bajo el título, con una capa azul translúcida
 * (tipo banner) y el texto en blanco.
 */
export const Hero: React.FC = () => {
  const { language, t } = useTranslation('hero');
  const reduce = useReducedMotion();
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] });
  const imgY = useTransform(scrollYProgress, [0, 1], ['0%', reduce ? '0%' : '8%']);

  return (
    <>
      <section ref={ref} className="relative overflow-hidden bg-navy text-white lg:bg-gradient-to-br lg:from-paper lg:from-40% lg:to-navy lg:to-100% lg:text-ink">
        {/* Móvil/tablet: imagen de fondo + capa navy translúcida */}
        <div aria-hidden className="absolute inset-0 lg:hidden">
          <img
            src="/img/hero.webp"
            srcSet="/img/hero-640.webp 640w, /img/hero.webp 1000w"
            sizes="100vw"
            alt=""
            width={1000}
            height={750}
            loading="eager"
            fetchPriority="high"
            decoding="async"
            className="h-full w-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-navy/70 via-navy/60 to-navy/85" />
        </div>

        {/* Escritorio: degradado blanco → navy con rejilla de puntos sutil en el lado claro */}
        <div aria-hidden className="dot-grid absolute inset-0 hidden opacity-60 [mask-image:radial-gradient(ellipse_at_top_left,black,transparent_55%)] lg:block" />

        <div className="relative mx-auto max-w-[1200px] px-6 py-14 md:px-8 md:py-20 lg:py-24">
          <div className="grid items-center gap-10 lg:grid-cols-[6fr_5fr] lg:gap-16">
            <div key={language} className="flex flex-col items-start">
              <Reveal immediate>
                <Eyebrow tone="navy" className="max-lg:text-accent">
                  {t.eyebrow}
                </Eyebrow>
              </Reveal>

              <TextReveal
                as="h1"
                text={t.title}
                immediate
                delay={0.1}
                className="mt-4 text-4xl text-white sm:text-5xl lg:max-w-[16ch] lg:text-display lg:text-ink"
              />

              <Reveal immediate delay={0.35} className="mt-5">
                <p className="max-w-xl text-base leading-relaxed text-white/85 md:text-lg lg:text-slate">{t.description}</p>
              </Reveal>

              <Reveal immediate delay={0.45} className="mt-7 flex w-full flex-col items-start gap-4 sm:w-auto sm:flex-row sm:items-center sm:gap-6">
                <Button variant="accent" href="#contact" track="hero_start" className="w-full sm:w-auto">
                  {t.primaryCta}
                </Button>
                <a
                  href="#capabilities"
                  data-track="hero_explore"
                  className="inline-flex min-h-10 items-center gap-1.5 text-sm font-semibold text-white underline-offset-4 transition-colors hover:underline lg:text-navy"
                >
                  {t.secondaryCta} <ArrowRight size={16} aria-hidden />
                </a>
              </Reveal>

              <Reveal immediate delay={0.55} className="mt-4">
                <p className="max-w-md text-xs text-white/70 lg:text-slate">{t.note}</p>
              </Reveal>
            </div>

            {/* Escritorio: ilustración a la derecha */}
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.15 }}
              className="float-card relative hidden lg:block"
            >
              {/* Marco flotante: borde claro, sombra amplia y una segunda capa desplazada detrás */}
              <div aria-hidden className="absolute -inset-3 rounded-lg bg-white/10 backdrop-blur-sm" />
              <div aria-hidden className="absolute -bottom-4 -right-4 h-full w-full rounded-lg border border-accent/40" />
              <div className="relative aspect-[4/3] overflow-hidden rounded-md border-[6px] border-white bg-paper shadow-[0_30px_60px_-15px_rgba(11,29,58,0.55)]">
              <motion.img
                src="/img/hero.webp"
                srcSet="/img/hero-640.webp 640w, /img/hero.webp 1000w"
                sizes="(min-width: 1024px) 45vw, 100vw"
                alt={t.imageAlt}
                width={1000}
                height={750}
                loading="eager"
                fetchPriority="high"
                decoding="async"
                style={{ y: imgY }}
                className="kenburns h-[108%] w-full object-cover"
              />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <Ticker items={t.ticker} />
    </>
  );
};
