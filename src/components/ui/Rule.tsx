import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';

interface RuleProps {
  tone?: 'line' | 'navy' | 'accent' | 'white';
  /** Ancho de la línea (clases); por defecto ocupa todo el ancho */
  className?: string;
  delay?: number;
}

const tones = {
  line: 'bg-line',
  navy: 'bg-navy',
  accent: 'bg-accent',
  white: 'bg-white/20'
};

/** Línea de un píxel que se "dibuja" de izquierda a derecha al entrar en pantalla. */
export const Rule: React.FC<RuleProps> = ({ tone = 'line', className = '', delay = 0 }) => {
  const reduce = useReducedMotion();
  return (
    <motion.div
      aria-hidden
      initial={reduce ? false : { scaleX: 0 }}
      whileInView={{ scaleX: 1 }}
      viewport={{ once: true, amount: 0.6 }}
      transition={{ duration: 0.9, delay, ease: [0.16, 1, 0.3, 1] }}
      className={`h-px w-full origin-left ${tones[tone]} ${className}`}
    />
  );
};
