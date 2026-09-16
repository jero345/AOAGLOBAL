import React, { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { useTranslation } from '../../context/LanguageContext';
import { localePath, company } from '../../content';
import { Button } from '../ui/Button';
import { LanguageSwitcher } from '../ui/LanguageSwitcher';

export const Header: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  const { language, t } = useTranslation('nav');
  const home = localePath(language);

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location]);

  useEffect(() => {
    document.body.style.overflow = mobileMenuOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  return (
    <header className="sticky top-0 z-50 h-20 border-b border-line bg-paper/95 backdrop-blur-md">
      <div className="mx-auto flex h-full max-w-[1200px] items-center justify-between px-6 md:px-8">
        <Link to={home} className="flex items-center gap-3 group">
          <div className="flex h-9 w-9 items-center justify-center bg-navy text-white font-bold text-sm rounded-[var(--radius-btn)]">
            <span className="tracking-tighter">AOA</span>
          </div>
          <div className="flex flex-col">
            <span className="text-base font-bold tracking-tight text-navy leading-none">AOA GLOBAL</span>
            <span className="text-[0.65rem] font-semibold tracking-[0.15em] text-slate uppercase mt-0.5">Services</span>
          </div>
        </Link>

        <nav className="hidden items-center gap-7 lg:flex" aria-label={t.mainNavLabel}>
          {t.links.map((link) => (
            <a
              key={link.anchor}
              href={link.anchor}
              className="text-sm font-medium text-slate transition-colors duration-200 hover:text-ink py-1"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-4">
          <LanguageSwitcher variant="light" />
          <Button variant="accent" href="#contact" track="header_cta" className="px-5 py-2.5">
            {t.cta}
          </Button>
        </div>

        <div className="flex items-center gap-3 lg:hidden">
          <LanguageSwitcher variant="light" showIcon={false} />
          <button
            type="button"
            onClick={() => setMobileMenuOpen((v) => !v)}
            className="flex h-10 w-10 items-center justify-center text-ink cursor-pointer"
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-nav"
            aria-label={mobileMenuOpen ? t.closeMenu : t.openMenu}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Portal: el backdrop-blur del header crearía un contenedor para el panel fixed y lo dejaría sin fondo */}
      {createPortal(
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            id="mobile-nav"
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'spring', damping: 28, stiffness: 300 }}
            className="fixed inset-0 top-20 z-40 flex flex-col justify-between bg-navy px-6 py-10 lg:hidden"
          >
            <nav className="flex flex-col space-y-5" aria-label={t.mobileNavLabel}>
              {t.links.map((link, idx) => (
                <motion.a
                  key={link.anchor}
                  href={link.anchor}
                  onClick={() => setMobileMenuOpen(false)}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.06, duration: 0.3 }}
                  className="text-2xl font-semibold text-white/85 hover:text-white"
                >
                  {link.label}
                </motion.a>
              ))}
            </nav>

            <div className="flex flex-col space-y-4 border-t border-white/15 pt-8">
              <Button variant="accent" href="#contact" track="mobile_menu_cta" className="w-full">
                {t.cta}
              </Button>
              <p className="text-center text-xs text-white/60">{company.email}</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>,
      document.body
      )}
    </header>
  );
};
