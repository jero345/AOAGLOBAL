import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight, MessageSquare } from 'lucide-react';
import { useTranslation } from '../../context/LanguageContext';

/**
 * CTA flotante: aparece tras 400px de scroll y se oculta cuando el
 * formulario ya está en pantalla (no compite con el CTA final).
 */
export const FloatingContactPill: React.FC = () => {
  const { t } = useTranslation('nav');
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const contact = document.getElementById('contact');
    let contactInView = false;

    const io = contact
      ? new IntersectionObserver(([entry]) => {
          contactInView = entry.isIntersecting;
          setVisible(window.scrollY > 400 && !contactInView);
        })
      : null;
    if (contact && io) io.observe(contact);

    const onScroll = () => setVisible(window.scrollY > 400 && !contactInView);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', onScroll);
      io?.disconnect();
    };
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 0, y: 20, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 20, scale: 0.9 }}
          transition={{ type: 'spring', stiffness: 350, damping: 25 }}
          className="fixed bottom-6 right-6 z-40"
        >
          <a
            href="#contact"
            data-track="floating_cta"
            className="flex items-center gap-2.5 rounded-full bg-accent px-5 py-3 text-xs font-bold text-navy shadow-lg transition-transform duration-200 hover:scale-105 hover:bg-accent-hover"
          >
            <MessageSquare size={16} aria-hidden />
            <span>{t.floatingCta}</span>
            <ArrowUpRight size={14} aria-hidden className="opacity-70" />
          </a>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
