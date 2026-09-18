import React, { useEffect, useRef } from 'react';
import { motion, useMotionValue, useSpring, useReducedMotion, type MotionValue } from 'framer-motion';
import { HeroFlow } from './HeroFlow';

interface HeroFrameProps {
  src: string;
  srcSet: string;
  sizes: string;
  alt: string;
  width: number;
  height: number;
  /** Desplazamiento vertical ligado al scroll (parallax) */
  imgY: MotionValue<string>;
  /** Retardo base de entrada (cortina) */
  delay: number;
}

/**
 * Marco flotante en 3D: se inclina siguiendo al cursor con física de resorte (solo con
 * puntero fino), las capas del marco tienen profundidad real y un brillo recorre el
 * cristal al pasar el cursor. Encima de la foto, la línea dorada de HeroFlow.
 */
export const HeroFrame: React.FC<HeroFrameProps> = ({ src, srcSet, sizes, alt, width, height, imgY, delay }) => {
  const reduce = useReducedMotion();
  const ref = useRef<HTMLDivElement>(null);
  const rx = useMotionValue(0);
  const ry = useMotionValue(0);
  const rotateX = useSpring(rx, { stiffness: 120, damping: 18, mass: 0.6 });
  const rotateY = useSpring(ry, { stiffness: 120, damping: 18, mass: 0.6 });

  useEffect(() => {
    if (reduce || !window.matchMedia('(hover: hover) and (pointer: fine)').matches) return;
    const el = ref.current;
    if (!el) return;
    let raf = 0;
    const onMove = (e: MouseEvent) => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        const r = el.getBoundingClientRect();
        // Inclinación máxima de ±7°, calculada desde el centro del marco
        const px = (e.clientX - (r.left + r.width / 2)) / (r.width / 2);
        const py = (e.clientY - (r.top + r.height / 2)) / (r.height / 2);
        ry.set(Math.max(-1, Math.min(1, px)) * 7);
        rx.set(Math.max(-1, Math.min(1, -py)) * 7);
      });
    };
    const onLeave = () => {
      rx.set(0);
      ry.set(0);
    };
    // Se escucha en la sección entera: el marco reacciona antes de que el cursor lo toque
    const section = el.closest('section') ?? el;
    section.addEventListener('mousemove', onMove);
    section.addEventListener('mouseleave', onLeave);
    return () => {
      cancelAnimationFrame(raf);
      section.removeEventListener('mousemove', onMove);
      section.removeEventListener('mouseleave', onLeave);
    };
  }, [reduce, rx, ry]);

  return (
    <div ref={ref} style={{ perspective: '1400px' }}>
      <motion.div style={{ rotateX, rotateY, transformStyle: 'preserve-3d' }} className="group/frame relative">
        {/* Capas traseras del marco, a distinta profundidad */}
        <div aria-hidden className="absolute -inset-3 rounded-lg bg-white/10 backdrop-blur-sm" style={{ transform: 'translateZ(-24px)' }} />
        <div aria-hidden className="absolute -bottom-4 -right-4 h-full w-full rounded-lg border border-accent/60" style={{ transform: 'translateZ(-12px)' }} />

        <div className="relative aspect-[4/3] overflow-hidden rounded-md border-[6px] border-white bg-paper shadow-[0_30px_60px_-15px_rgba(11,29,58,0.55)]">
          <motion.img
            src={src}
            srcSet={srcSet}
            sizes={sizes}
            alt={alt}
            width={width}
            height={height}
            loading="eager"
            {...{ fetchpriority: 'high' }}
            decoding="async"
            style={{ y: imgY, animationDelay: `${delay}s` }}
            className="kenburns h-[108%] w-full object-cover"
          />
          <HeroFlow delay={delay + 1.15} />
          {/* Brillo que recorre el cristal al pasar el cursor */}
          <div aria-hidden className="hero-sweep pointer-events-none absolute inset-0" />
        </div>
      </motion.div>
    </div>
  );
};
