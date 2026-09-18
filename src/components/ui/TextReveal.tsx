import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';

interface TextRevealProps {
  text: string;
  as?: 'h1' | 'h2' | 'p';
  className?: string;
  /** true = al montar (hero). false = al entrar en viewport. */
  immediate?: boolean;
  delay?: number;
  /** Entrada con desenfoque (más cinematográfica): solo para el H1 del hero */
  blur?: boolean;
}

/**
 * Revela un titular palabra por palabra (deslizamiento + fade).
 * El texto completo queda en el DOM en orden: lectores de pantalla y SEO no se enteran del truco.
 */
export const TextReveal: React.FC<TextRevealProps> = ({ text, as = 'h2', className = '', immediate = false, delay = 0, blur = false }) => {
  const reduce = useReducedMotion();
  const Tag = as;
  const words = text.split(' ');

  if (reduce) return <Tag className={className}>{text}</Tag>;

  const MotionTag = motion[as];
  const visible = { transition: { staggerChildren: 0.045, delayChildren: delay } };

  return (
    <MotionTag
      className={className}
      initial="hidden"
      {...(immediate ? { animate: 'visible' } : { whileInView: 'visible' })}
      viewport={{ once: true, amount: 0.2 }}
      variants={{ hidden: {}, visible }}
      aria-label={text}
    >
      {words.map((word, i) => (
        <span key={i} className="inline-block overflow-hidden align-bottom pb-[0.08em] -mb-[0.08em]">
          <motion.span
            className="inline-block"
            variants={{
              hidden: { y: '100%', opacity: 0, ...(blur ? { filter: 'blur(8px)' } : {}) },
              visible: { y: 0, opacity: 1, ...(blur ? { filter: 'blur(0px)' } : {}), transition: { duration: blur ? 0.7 : 0.5, ease: [0.16, 1, 0.3, 1] } }
            }}
          >
            {word}
          </motion.span>
          {i < words.length - 1 ? ' ' : ''}
        </span>
      ))}
    </MotionTag>
  );
};
