import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useReducedMotion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { useTranslation } from '../../context/LanguageContext';
import { Eyebrow } from '../ui/Eyebrow';
import { Button } from '../ui/Button';
import { Reveal } from '../ui/Reveal';
import { TextReveal } from '../ui/TextReveal';
import { INTRO_HERO_DELAY, introWillPlay } from '../../lib/intro';

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
  // Si la cortina de entrada se muestra, el hero arranca cuando esta empieza a levantarse
  const d = introWillPlay() ? INTRO_HERO_DELAY : 0;

  return (
    <section ref={ref} className="relative overflow-hidden bg-navy text-white lg:bg-gradient-to-br lg:from-paper lg:from-40% lg:to-navy lg:to-100% lg:text-ink">
        {/* Móvil/tablet: imagen de fondo + capa navy translúcida (versión aprobada, un punto más azul) */}
        <div aria-hidden className="absolute inset-0 lg:hidden">
          <img
            src="/img/hero.webp"
            srcSet="/img/hero-640.webp 640w, /img/hero.webp 1400w"
            sizes="100vw"
            alt=""
            width={1400}
            height={1050}
            loading="eager"
            {...{ fetchpriority: "high" }}
            decoding="async"
            className="h-full w-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-navy/80 via-navy/72 to-navy/90" />
        </div>


        <div className="relative mx-auto max-w-[1200px] px-6 py-14 md:px-8 md:py-20 lg:py-20">
          <div className="grid items-center gap-10 lg:grid-cols-[10fr_9fr] lg:gap-14 xl:gap-20">
            <div key={language} className="flex flex-col items-start">
              <Reveal immediate delay={d}>
                <Eyebrow tone="navy" className="max-lg:text-accent">
                  {t.eyebrow}
                </Eyebrow>
              </Reveal>

              <TextReveal
                as="h1"
                text={t.title}
                immediate
                delay={d + 0.1}
                className="mt-4 text-4xl text-white sm:text-5xl lg:max-w-[16ch] lg:text-display lg:text-ink xl:text-[4rem] xl:leading-[1.03]"
              />

              <Reveal immediate delay={d + 0.35} className="mt-5">
                <p className="max-w-xl text-base leading-relaxed text-white/85 md:text-lg lg:text-slate">{t.description}</p>
              </Reveal>

              <Reveal immediate delay={d + 0.45} className="mt-7 flex w-full flex-col items-start gap-4 sm:w-auto sm:flex-row sm:items-center sm:gap-6">
                <Button variant="accent" href="#contact" track="hero_start" className="w-full sm:w-auto max-lg:border max-lg:border-white/40 max-lg:bg-navy max-lg:text-white max-lg:hover:bg-ink">
                  {t.primaryCta}
                </Button>
                <a
                  href="#capabilities"
                  data-track="hero_explore"
                  className="group/link inline-flex min-h-10 items-center gap-1.5 text-sm font-semibold text-white underline-offset-4 transition-colors hover:underline lg:text-navy"
                >
                  {t.secondaryCta}{" "}
                  <ArrowRight size={16} aria-hidden className="transition-transform duration-200 ease-[var(--ease-out-quart)] group-hover/link:translate-x-0.5" />
                </a>
              </Reveal>

              <Reveal immediate delay={d + 0.55} className="mt-4">
                <p className="max-w-md text-xs text-white/70 lg:text-slate">{t.note}</p>
              </Reveal>
            </div>

            {/* Escritorio: ilustración a la derecha. Se revela de abajo hacia arriba y luego flota. */}
            <motion.div
              initial={reduce ? false : { opacity: 0, clipPath: 'inset(100% 0 0 0)' }}
              animate={{ opacity: 1, clipPath: 'inset(0% 0 0 0)' }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: d + 0.25 }}
              className="hidden lg:block"
            >
            <div className="float-card relative">
              {/* Marco flotante: borde claro, sombra amplia y una segunda capa desplazada detrás */}
              <div aria-hidden className="absolute -inset-3 rounded-lg bg-white/10 backdrop-blur-sm" />
              <div aria-hidden className="absolute -bottom-4 -right-4 h-full w-full rounded-lg border border-accent/40" />
              <div className="relative aspect-[4/3] overflow-hidden rounded-md border-[6px] border-white bg-paper shadow-[0_30px_60px_-15px_rgba(11,29,58,0.55)]">
              <motion.img
                src="/img/hero.webp"
                srcSet="/img/hero-640.webp 640w, /img/hero.webp 1400w"
                sizes="(min-width: 1024px) 45vw, 100vw"
                alt={t.imageAlt}
                width={1400}
                height={1050}
                loading="eager"
                {...{ fetchpriority: "high" }}
                decoding="async"
                style={{ y: imgY, animationDelay: `${d}s` }}
                className="kenburns h-[108%] w-full object-cover"
              />
              </div>
            </div>
            </motion.div>
          </div>
        </div>
      </section>
  );
};
