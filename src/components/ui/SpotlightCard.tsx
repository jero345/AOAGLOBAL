import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';

interface SpotlightCardProps {
  children: React.ReactNode;
  className?: string;
  tone?: 'paper' | 'line';
}

export const SpotlightCard: React.FC<SpotlightCardProps> = ({
  children,
  className = '',
  tone = 'paper'
}) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    setMousePosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top
    });
  };

  const bgBase = tone === 'paper' ? 'bg-[var(--color-paper)]' : 'bg-[var(--color-line)]';

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      whileHover={{ y: -3 }}
      transition={{ type: 'spring', stiffness: 400, damping: 25 }}
      className={`relative overflow-hidden rounded-[var(--radius-card)] border border-[var(--color-line)] p-8 ${bgBase} transition-colors duration-200 hover:border-[var(--color-navy)] ${className}`}
    >
      {/* Subtle radial spotlight overlay on hover */}
      {isHovered && (
        <div
          className="pointer-events-none absolute -inset-px transition-opacity duration-300"
          style={{
            background: `radial-gradient(400px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(11, 29, 58, 0.05), transparent 80%)`
          }}
        />
      )}
      <div className="relative z-10">{children}</div>
    </motion.div>
  );
};
