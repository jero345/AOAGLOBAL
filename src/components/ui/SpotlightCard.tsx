import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';

interface SpotlightCardProps {
  children: React.ReactNode;
  /** Incluye el padding aquí (la tarjeta no fija uno por defecto). */
  className?: string;
}

/** Tarjeta con halo sutil que sigue al cursor. Solo decorativa; el contenido no depende de ella. */
export const SpotlightCard: React.FC<SpotlightCardProps> = ({ children, className = '' }) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const [hovered, setHovered] = useState(false);

  const onMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    setPos({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={onMove}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      whileHover={{ y: -3 }}
      transition={{ type: 'spring', stiffness: 400, damping: 25 }}
      className={`relative overflow-hidden rounded-[var(--radius-card)] border border-line bg-paper transition-colors duration-200 hover:border-navy ${className}`}
    >
      {hovered && (
        <div
          aria-hidden
          className="pointer-events-none absolute -inset-px"
          style={{
            background: `radial-gradient(400px circle at ${pos.x}px ${pos.y}px, rgba(11, 29, 58, 0.05), transparent 80%)`
          }}
        />
      )}
      <div className="relative z-10 flex h-full flex-col">{children}</div>
    </motion.div>
  );
};
