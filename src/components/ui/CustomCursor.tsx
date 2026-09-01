import React, { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

export const CustomCursor: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [cursorText, setCursorText] = useState('');

  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  const springConfig = { damping: 25, stiffness: 400 };
  const cursorX = useSpring(mouseX, springConfig);
  const cursorY = useSpring(mouseY, springConfig);

  useEffect(() => {
    // Only activate cursor on devices with fine pointer (mouse/trackpad)
    if (typeof window === 'undefined' || !window.matchMedia('(pointer: fine)').matches) {
      return;
    }

    const moveCursor = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseEnter = () => setIsVisible(true);
    const handleMouseLeave = () => setIsVisible(false);

    const handleOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      if (!target) return;

      const interactive = target.closest('a, button, [role="button"], input, select, textarea, .interactive-card');
      const textData = target.closest('[data-cursor]')?.getAttribute('data-cursor');

      if (textData) {
        setCursorText(textData);
        setIsHovered(true);
      } else if (interactive) {
        setCursorText('');
        setIsHovered(true);
      } else {
        setCursorText('');
        setIsHovered(false);
      }
    };

    window.addEventListener('mousemove', moveCursor);
    window.addEventListener('mouseover', handleOver);
    document.body.addEventListener('mouseenter', handleMouseEnter);
    document.body.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      window.removeEventListener('mousemove', moveCursor);
      window.removeEventListener('mouseover', handleOver);
      document.body.removeEventListener('mouseenter', handleMouseEnter);
      document.body.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [mouseX, mouseY, isVisible]);

  if (!isVisible) return null;

  return (
    <motion.div
      style={{
        left: cursorX,
        top: cursorY,
        translateX: '-50%',
        translateY: '-50%'
      }}
      animate={{
        scale: isHovered ? (cursorText ? 2.5 : 1.6) : 1,
        opacity: isVisible ? 1 : 0
      }}
      transition={{ type: 'spring', stiffness: 400, damping: 28 }}
      className={`pointer-events-none fixed z-[9999] flex items-center justify-center rounded-full transition-colors duration-200 ${
        isHovered
          ? 'h-8 w-8 bg-[var(--color-navy)]/80 text-[8px] font-bold text-white shadow-xs backdrop-blur-xs'
          : 'h-3.5 w-3.5 bg-[var(--color-navy)]/60'
      }`}
    >
      {cursorText && (
        <span className="scale-75 tracking-wider uppercase">{cursorText}</span>
      )}
    </motion.div>
  );
};
