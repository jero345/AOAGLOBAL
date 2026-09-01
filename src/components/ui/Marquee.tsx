import React from 'react';
import { motion } from 'framer-motion';

interface MarqueeProps {
  children: React.ReactNode;
  direction?: 'left' | 'right';
  speed?: number; // duration in seconds
  pauseOnHover?: boolean;
  className?: string;
}

export const Marquee: React.FC<MarqueeProps> = ({
  children,
  direction = 'left',
  speed = 25,
  pauseOnHover = true,
  className = ''
}) => {
  return (
    <div
      className={`group flex overflow-hidden select-none [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)] ${className}`}
    >
      <motion.div
        initial={{ x: direction === 'left' ? '0%' : '-50%' }}
        animate={{ x: direction === 'left' ? '-50%' : '0%' }}
        transition={{
          duration: speed,
          repeat: Infinity,
          ease: 'linear'
        }}
        className={`flex shrink-0 items-center justify-around gap-12 ${
          pauseOnHover ? 'group-hover:[animation-play-state:paused]' : ''
        }`}
      >
        <div className="flex shrink-0 items-center gap-12">{children}</div>
        <div className="flex shrink-0 items-center gap-12" aria-hidden="true">
          {children}
        </div>
      </motion.div>
    </div>
  );
};
