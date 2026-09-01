import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowUpRight, MessageSquare } from 'lucide-react';
import { useTranslation } from '../../context/LanguageContext';

export const FloatingContactPill: React.FC = () => {
  const { t } = useTranslation('nav');
  const [showPill, setShowPill] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 400) {
        setShowPill(true);
      } else {
        setShowPill(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <AnimatePresence>
      {showPill && (
        <motion.div
          initial={{ opacity: 0, y: 20, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 20, scale: 0.9 }}
          transition={{ type: 'spring', stiffness: 350, damping: 25 }}
          className="fixed bottom-6 right-6 z-40"
        >
          <Link
            to="/contact"
            className="flex items-center gap-2.5 rounded-full bg-[var(--color-navy)] px-5 py-3 text-xs font-bold text-white shadow-lg transition-transform duration-200 hover:scale-105 hover:bg-[var(--color-ink)] focus-visible:outline-[var(--color-navy)]"
          >
            <MessageSquare size={16} />
            <span>{t.floatingCta}</span>
            <ArrowUpRight size={14} className="opacity-70" />
          </Link>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
