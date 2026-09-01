import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { useTranslation } from '../../context/LanguageContext';
import { Button } from '../ui/Button';
import { LanguageSwitcher } from '../ui/LanguageSwitcher';

export const Header: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  const { t } = useTranslation('nav');

  const navLinks = [
    { label: t.home, href: '/' },
    { label: t.services, href: '/services' },
    { label: t.about, href: '/about' },
    { label: t.contact, href: '/contact' }
  ];

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location]);

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [mobileMenuOpen]);

  return (
    <header className="sticky top-0 z-50 h-20 border-b border-[var(--color-line)] bg-[var(--color-paper)]/95 backdrop-blur-md">
      <div className="mx-auto flex h-full max-w-[1200px] items-center justify-between px-6 md:px-8">
        {/* Brand Logo */}
        <Link
          to="/"
          className="flex items-center gap-3 text-ink focus-visible:outline-[var(--color-navy)] group"
          aria-label="AOA Global Services Home"
        >
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex h-9 w-9 items-center justify-center bg-[var(--color-navy)] text-white font-bold text-sm rounded-[var(--radius-btn)] shadow-xs"
          >
            <span className="tracking-tighter">AOA</span>
          </motion.div>
          <div className="flex flex-col">
            <span className="text-base font-bold tracking-tight text-[var(--color-navy)] leading-none">
              AOA GLOBAL
            </span>
            <span className="text-[0.65rem] font-semibold tracking-[0.15em] text-[var(--color-slate)] uppercase mt-0.5">
              Services
            </span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-8 md:flex" aria-label={t.mainNavLabel}>
          {navLinks.map((link) => {
            const isActive = location.pathname === link.href;
            return (
              <Link
                key={link.href}
                to={link.href}
                className={`relative text-sm font-medium transition-colors duration-200 py-1 ${
                  isActive
                    ? 'text-[var(--color-navy)] font-semibold'
                    : 'text-[var(--color-slate)] hover:text-[var(--color-ink)]'
                }`}
              >
                {link.label}
                {isActive && (
                  <motion.div
                    layoutId="activeNavTab"
                    className="absolute -bottom-1 left-0 right-0 h-0.5 bg-[var(--color-navy)]"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
              </Link>
            );
          })}
        </nav>

        {/* Desktop CTA & Language Switcher */}
        <div className="hidden md:flex items-center gap-4">
          <LanguageSwitcher variant="light" />
          <Button variant="primary" href="/contact">
            {t.scheduleCta}
          </Button>
        </div>

        {/* Mobile Menu Controls */}
        <div className="flex items-center gap-3 md:hidden">
          <LanguageSwitcher variant="light" showIcon={false} />
          <motion.button
            whileTap={{ scale: 0.9 }}
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="flex h-10 w-10 items-center justify-center text-[var(--color-ink)] focus-visible:outline-[var(--color-navy)] cursor-pointer"
            aria-expanded={mobileMenuOpen}
            aria-label={mobileMenuOpen ? t.closeMenu : t.openMenu}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </motion.button>
        </div>
      </div>

      {/* Mobile Drawer (Full-screen solid Navy) */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'spring', damping: 28, stiffness: 300 }}
            className="fixed inset-0 top-20 z-40 flex flex-col justify-between bg-[var(--color-navy)] px-6 py-10 md:hidden"
            aria-hidden={!mobileMenuOpen}
          >
            <div className="flex flex-col space-y-6">
              <div className="flex items-center justify-between">
                <span className="text-[0.75rem] font-semibold uppercase tracking-[0.08em] text-white/50">
                  {t.mobileNavTitle}
                </span>
                <LanguageSwitcher variant="dark" />
              </div>

              <nav className="flex flex-col space-y-4" aria-label={t.mobileNavLabel}>
                {navLinks.map((link, idx) => {
                  const isActive = location.pathname === link.href;
                  return (
                    <motion.div
                      key={link.href}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: idx * 0.08, duration: 0.3 }}
                    >
                      <Link
                        to={link.href}
                        className={`text-2xl font-semibold transition-colors duration-200 ${
                          isActive
                            ? 'text-white underline decoration-2 underline-offset-8'
                            : 'text-white/80 hover:text-white'
                        }`}
                      >
                        {link.label}
                      </Link>
                    </motion.div>
                  );
                })}
              </nav>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.35, duration: 0.4 }}
              className="flex flex-col space-y-4 border-t border-white/15 pt-8"
            >
              <Button variant="inverse" href="/contact" className="w-full">
                {t.scheduleCta}
              </Button>
              <p className="text-center text-xs text-white/60">
                contact@aoaglobalservices.com
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
