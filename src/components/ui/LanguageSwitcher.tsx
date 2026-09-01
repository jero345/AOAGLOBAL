import React, { useId } from 'react';
import { motion } from 'framer-motion';
import { useLanguage, Language } from '../../context/LanguageContext';
import { Globe } from 'lucide-react';

interface LanguageSwitcherProps {
  variant?: 'light' | 'dark';
  showIcon?: boolean;
  className?: string;
}

export const LanguageSwitcher: React.FC<LanguageSwitcherProps> = ({
  variant = 'light',
  showIcon = true,
  className = ''
}) => {
  const { language, setLanguage } = useLanguage();
  // Cada instancia necesita su propio layoutId: header, drawer móvil y footer coexisten
  const instanceId = useId();

  const isDark = variant === 'dark';

  const containerBg = isDark
    ? 'bg-white/10 border-white/15'
    : 'bg-slate-100 border-[var(--color-line)]';

  const activeTextColor = isDark
    ? 'text-[var(--color-navy)] font-bold'
    : 'text-white font-bold';

  const inactiveTextColor = isDark
    ? 'text-white/70 hover:text-white'
    : 'text-[var(--color-slate)] hover:text-[var(--color-ink)]';

  const activePillBg = isDark ? 'bg-white' : 'bg-[var(--color-navy)]';

  return (
    <div
      className={`inline-flex items-center gap-1 rounded-full border p-1 ${containerBg} ${className}`}
      role="group"
      aria-label="Selector de idioma / Language selector"
    >
      {showIcon && (
        <Globe
          size={14}
          className={`ml-1.5 shrink-0 ${isDark ? 'text-white/60' : 'text-[var(--color-slate)]'}`}
        />
      )}

      {(['es', 'en'] as Language[]).map((lang) => {
        const isActive = language === lang;
        return (
          <button
            key={lang}
            type="button"
            onClick={() => setLanguage(lang)}
            aria-pressed={isActive}
            className={`relative rounded-full px-2.5 py-0.5 text-xs font-semibold uppercase tracking-wider transition-colors duration-200 cursor-pointer ${
              isActive ? activeTextColor : inactiveTextColor
            }`}
          >
            {isActive && (
              <motion.div
                layoutId={`activeLangPill-${instanceId}`}
                className={`absolute inset-0 rounded-full ${activePillBg}`}
                transition={{ type: 'spring', stiffness: 400, damping: 28 }}
              />
            )}
            <span className="relative z-10">{lang.toUpperCase()}</span>
          </button>
        );
      })}
    </div>
  );
};
