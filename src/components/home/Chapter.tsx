import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { TextReveal } from '../ui/TextReveal';
import { Reveal } from '../ui/Reveal';

export type ChapterTone = 'paper' | 'mist' | 'navy' | 'deep';

interface ChapterProps {
  id: string;
  /** Nombre del bloque (eyebrow aprobado) */
  label: string;
  /** H2 del capítulo */
  title: string;
  intro?: string;
  tone?: ChapterTone;
  /** Contenido fijo bajo el numeral en escritorio (p. ej. la imagen de la solución activa) */
  aside?: React.ReactNode;
  /** Columna izquierda ancha (~40%) para que la imagen tenga peso real */
  wideAside?: boolean;
  children: React.ReactNode;
}

const tones: Record<ChapterTone, { section: string; rule: string; label: string; title: string; intro: string }> = {
  paper: { section: 'bg-paper', rule: 'bg-accent', label: 'text-slate', title: 'text-ink', intro: 'text-slate' },
  mist: { section: 'bg-mist', rule: 'bg-accent', label: 'text-slate', title: 'text-ink', intro: 'text-slate' },
  navy: { section: 'bg-navy', rule: 'bg-accent-light', label: 'text-accent-light', title: 'text-white', intro: 'text-white/75' },
  // Azul tirando a negro (el del footer): último bloque
  deep: { section: 'bg-deep', rule: 'bg-accent-light', label: 'text-accent-light', title: 'text-white', intro: 'text-white/75' }
};

/** Encabezado del bloque: regla que se dibuja y nombre (sin numeral, a petición de Andrea). */
const ChapterHead: React.FC<{ label: string; tone: ChapterTone }> = ({ label, tone }) => {
  const reduce = useReducedMotion();
  const c = tones[tone];
  const ease = [0.16, 1, 0.3, 1] as const;
  const labelClass = `text-eyebrow font-semibold uppercase tracking-[0.08em] ${c.label}`;

  if (reduce) {
    return (
      <div className="flex flex-col gap-2">
        <span aria-hidden className={`h-0.5 w-10 ${c.rule}`} />
        <span className={labelClass}>{label}</span>
      </div>
    );
  }

  return (
    <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.5 }} className="flex flex-col gap-2">
      <motion.span
        aria-hidden
        variants={{ hidden: { scaleX: 0 }, visible: { scaleX: 1, transition: { duration: 0.8, ease } } }}
        className={`h-0.5 w-10 origin-left ${c.rule}`}
      />
      <motion.span
        variants={{ hidden: { opacity: 0, y: 6 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5, delay: 0.1, ease } } }}
        className={labelClass}
      >
        {label}
      </motion.span>
    </motion.div>
  );
};

/**
 * Bloque de la home: el nombre queda fijo a la izquierda mientras el contenido
 * pasa (escritorio); en móvil el encabezado va arriba y el resto fluye.
 */
export const Chapter: React.FC<ChapterProps> = ({ id, label, title, intro, tone = 'paper', aside, wideAside = false, children }) => {
  const c = tones[tone];
  const grid = wideAside
    ? 'lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] lg:gap-14 xl:gap-20'
    : 'lg:grid-cols-[220px_minmax(0,1fr)] lg:gap-14 xl:grid-cols-[300px_minmax(0,1fr)] xl:gap-20';
  return (
    <section id={id} className={`py-14 md:py-20 lg:py-28 ${c.section}`}>
      <div className="mx-auto max-w-[1200px] px-6 md:px-8">
        <div className={`lg:grid ${grid}`}>
          <div className="lg:sticky lg:top-28 lg:self-start">
            <ChapterHead label={label} tone={tone} />
            {aside && <div className="mt-10 hidden lg:block">{aside}</div>}
          </div>

          <div className="mt-8 lg:mt-1">
            <TextReveal as="h2" text={title} className={`max-w-2xl text-3xl md:text-h2 xl:text-[2.75rem] xl:leading-[1.1] ${c.title}`} />
            {intro && (
              <Reveal delay={0.15}>
                <p className={`mt-5 max-w-2xl text-base leading-relaxed md:text-lg ${c.intro}`}>{intro}</p>
              </Reveal>
            )}
            <div className="mt-10 md:mt-14">{children}</div>
          </div>
        </div>
      </div>
    </section>
  );
};
