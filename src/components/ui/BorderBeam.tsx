import React from 'react';
import { motion } from 'framer-motion';

interface BorderBeamProps {
  duration?: number;
  size?: number;
  className?: string;
  colorFrom?: string;
  colorTo?: string;
}

export const BorderBeam: React.FC<BorderBeamProps> = ({
  duration = 8,
  size = 200,
  className = '',
  colorFrom = '#0B1D3A',
  colorTo = 'transparent'
}) => {
  return (
    <div className={`pointer-events-none absolute inset-0 overflow-hidden rounded-[inherit] ${className}`}>
      <motion.div
        initial={{ offsetDistance: '0%' }}
        animate={{ offsetDistance: '100%' }}
        transition={{
          duration,
          repeat: Infinity,
          ease: 'linear'
        }}
        style={{
          position: 'absolute',
          aspectRatio: '1',
          width: size,
          background: `radial-gradient(circle, ${colorFrom} 0%, ${colorTo} 70%)`,
          offsetPath: `rect(0 auto auto 0 round inherit)`,
          transform: 'translate(-50%, -50%)'
        }}
      />
    </div>
  );
};
