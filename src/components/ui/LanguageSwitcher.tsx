import React, { useId } from 'react';
import { motion } from 'framer-motion';
import { Globe } from 'lucide-react';
import { useLanguage, useTranslation, type Language } from '../../context/LanguageContext';
import { LOCALES, content } from '../../content';

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
  const { t } = useTranslation('nav');
  // Cada instancia necesita su propio layoutId: header, drawer móvil y footer coexisten
  const instanceId = useId();

  const isDark = variant === 'dark';
  const containerBg = isDark ? 'bg-white/10 border-white/15' : 'bg-mist border-line';
  const activeText = isDark ? 'text-navy' : 'text-white';
  const inactiveText = isDark ? 'text-white/70 hover:text-white' : 'text-slate hover:text-ink';
  const pillBg = isDark ? 'bg-white' : 'bg-navy';

  return (
    <div
      className={`inline-flex items-center gap-1 rounded-full border p-1 ${containerBg} ${className}`}
      role="group"
      aria-label={t.langSwitcherLabel}
    >
      {showIcon && <Globe size={14} aria-hidden className={`ml-1.5 shrink-0 ${isDark ? 'text-white/60' : 'text-slate'}`} />}

      {LOCALES.map((lang: Language) => {
        const isActive = language === lang;
        return (
          <button
            key={lang}
            type="button"
            onClick={() => setLanguage(lang)}
            aria-pressed={isActive}
            aria-label={content[lang].meta.localeName}
            lang={lang}
            className={`relative rounded-full px-2.5 py-0.5 text-xs font-bold uppercase tracking-wider transition-colors duration-200 cursor-pointer ${
              isActive ? activeText : inactiveText
            }`}
          >
            {isActive && (
              <motion.div
                layoutId={`activeLangPill-${instanceId}`}
                className={`absolute inset-0 rounded-full ${pillBg}`}
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
