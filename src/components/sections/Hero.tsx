import React, { useEffect, useRef } from 'react';
import { motion, useScroll, useTransform, useReducedMotion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { useTranslation } from '../../context/LanguageContext';
import { Eyebrow } from '../ui/Eyebrow';
import { Button } from '../ui/Button';
import { Reveal } from '../ui/Reveal';
import { TextReveal } from '../ui/TextReveal';
import { HeroFrame } from './HeroFrame';
import { useIntroReady } from '../../lib/intro';

const HERO_SRCSET = '/img/hero-640.webp 640w, /img/hero.webp 1400w';

/**
 * Hero "el plan cobra vida": eyebrow → H1 → un solo párrafo → CTA sólido + enlace simple → microcopy.
 * Escritorio (lg+): texto a la izquierda; a la derecha la foto en un marco flotante que se inclina
 * siguiendo al cursor, con la línea dorada del proceso dibujándose encima. Detrás, una aurora
 * navy/dorado que deriva despacio y una luz dorada que sigue al cursor.
 * Móvil: la foto va de fondo bajo una capa azul casi negra (sin línea dorada: Andrea no quiere amarillo ahí).
 */
export const Hero: React.FC = () => {
  const { language, t } = useTranslation('hero');
  const reduce = useReducedMotion();
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] });
  const imgY = useTransform(scrollYProgress, [0, 1], ['0%', reduce ? '0%' : '8%']);
  // Con cortina de entrada, el hero arranca cuando esta empieza a levantarse
  const ready = useIntroReady();
  const d = 0.15;

  // Luz dorada que sigue al cursor: solo actualiza dos variables CSS (sin re-render)
  useEffect(() => {
    const el = ref.current;
    if (!el || reduce) return;
    let raf = 0;
    const onMove = (e: MouseEvent) => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        const r = el.getBoundingClientRect();
        el.style.setProperty('--mx', `${e.clientX - r.left}px`);
        el.style.setProperty('--my', `${e.clientY - r.top}px`);
      });
    };
    el.addEventListener('mousemove', onMove);
    return () => {
      cancelAnimationFrame(raf);
      el.removeEventListener('mousemove', onMove);
    };
  }, [reduce]);

  return (
    <section
      ref={ref}
      className="relative overflow-hidden bg-onyx text-white lg:bg-gradient-to-br lg:from-paper lg:from-40% lg:to-onyx lg:to-100% lg:text-ink"
    >
      {/* Móvil/tablet: imagen de fondo + capa azul casi negra (Andrea: más oscura que el footer, sin amarillo) */}
      <div aria-hidden className="absolute inset-0 lg:hidden">
        <img
          src="/img/hero.webp"
          srcSet={HERO_SRCSET}
          sizes="100vw"
          alt=""
          width={1400}
          height={1050}
          loading="eager"
          {...{ fetchpriority: 'high' }}
          decoding="async"
          className="h-full w-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-onyx/88 via-onyx/82 to-onyx/94" />
      </div>

      {/* Escritorio: aurora navy/dorado y luz que sigue al cursor */}
      <div aria-hidden className="pointer-events-none absolute inset-0 hidden lg:block">
        <div className="aurora -left-24 top-10 h-[28rem] w-[28rem] bg-navy/10" />
        <div className="aurora -bottom-32 right-[18%] h-[32rem] w-[32rem] bg-white/10" style={{ animationDuration: '20s', animationDelay: '-7s', animationDirection: 'reverse' }} />
        <div className="aurora left-[38%] -top-40 h-[26rem] w-[26rem] bg-navy/15" style={{ animationDuration: '24s', animationDelay: '-12s' }} />
      </div>
      <div aria-hidden className="hero-glow hidden lg:block" />

      <div className="relative mx-auto max-w-[1200px] px-6 py-14 md:px-8 md:py-20 lg:py-20">
        <div className="grid items-center gap-10 lg:grid-cols-[10fr_9fr] lg:gap-14 xl:gap-20">
          <div key={language} className="flex flex-col items-start">
            <Reveal immediate play={ready} delay={d}>
              <Eyebrow tone="navy" className="max-lg:text-accent">
                {t.eyebrow}
              </Eyebrow>
            </Reveal>

            <TextReveal
              as="h1"
              text={t.title}
              immediate
              play={ready}
              blur
              delay={d + 0.1}
              className="mt-4 text-4xl text-white sm:text-5xl lg:max-w-[16ch] lg:text-display lg:text-ink xl:text-[4rem] xl:leading-[1.03]"
            />

            <Reveal immediate play={ready} delay={d + 0.35} className="mt-5">
              <p className="max-w-xl text-base leading-relaxed text-white/85 md:text-lg lg:text-slate">{t.description}</p>
            </Reveal>

            <Reveal immediate play={ready} delay={d + 0.45} className="mt-7 flex w-full flex-col items-start gap-4 sm:w-auto sm:flex-row sm:items-center sm:gap-6">
              <Button variant="accent" href="#contact" track="hero_start" className="w-full sm:w-auto max-lg:border max-lg:border-white/40 max-lg:bg-deep max-lg:text-white max-lg:hover:bg-ink">
                {t.primaryCta}
              </Button>
              <a
                href="#capabilities"
                data-track="hero_explore"
                className="group/link inline-flex min-h-10 items-center gap-1.5 text-sm font-semibold text-white underline-offset-4 transition-colors hover:underline lg:text-navy"
              >
                {t.secondaryCta}{' '}
                <ArrowRight size={16} aria-hidden className="transition-transform duration-200 ease-[var(--ease-out-quart)] group-hover/link:translate-x-0.5" />
              </a>
            </Reveal>

            <Reveal immediate play={ready} delay={d + 0.55} className="mt-4">
              <p className="max-w-md text-xs text-white/70 lg:text-slate">{t.note}</p>
            </Reveal>
          </div>

          {/* Escritorio: la foto en su marco. Se revela de abajo hacia arriba y luego flota. */}
          <motion.div
            initial={reduce ? false : { opacity: 0, clipPath: 'inset(100% 0 0 0)' }}
            animate={ready || reduce ? { opacity: 1, clipPath: 'inset(0% 0 0 0)' } : { opacity: 0, clipPath: 'inset(100% 0 0 0)' }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: d + 0.25 }}
            className="hidden lg:block"
          >
            <div className="float-card">
              <HeroFrame
                src="/img/hero.webp"
                srcSet={HERO_SRCSET}
                sizes="(min-width: 1024px) 45vw, 100vw"
                alt={t.imageAlt}
                width={1400}
                height={1050}
                imgY={imgY}
                delay={d}
                play={ready}
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
