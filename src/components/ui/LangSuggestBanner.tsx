import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import { useLanguage, useTranslation, LANG_PREF_KEY } from '../../context/LanguageContext';
import type { Language } from '../../context/LanguageContext';

/**
 * Sugiere el idioma del navegador SOLO la primera vez y solo si difiere del actual.
 * Nunca redirige: un enlace compartido debe abrirse tal cual se compartió.
 */
export const LangSuggestBanner: React.FC = () => {
  const { language, setLanguage } = useLanguage();
  const { t } = useTranslation('nav');
  const [suggested, setSuggested] = useState<Language | null>(null);

  useEffect(() => {
    let pref: string | null = null;
    try {
      pref = localStorage.getItem(LANG_PREF_KEY);
    } catch {
      /* sin storage: mostramos igual, no persiste */
    }
    if (pref) return;

    const browser = (navigator.language || '').toLowerCase();
    const wants: Language = browser.startsWith('es') ? 'es' : 'en';
    if (wants !== language) setSuggested(wants);
  }, [language]);

  const dismiss = () => {
    try {
      localStorage.setItem(LANG_PREF_KEY, language);
    } catch {
      /* noop */
    }
    setSuggested(null);
  };

  const accept = () => {
    if (suggested) setLanguage(suggested);
    setSuggested(null);
  };

  return (
    <AnimatePresence>
      {suggested && (
        <motion.div
          role="status"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 16 }}
          transition={{ duration: 0.3 }}
          className="fixed bottom-6 left-1/2 z-40 w-[calc(100%-2rem)] max-w-md -translate-x-1/2 rounded-[var(--radius-card)] border border-line bg-paper p-4 shadow-lg md:left-6 md:translate-x-0"
        >
          <div className="flex items-start gap-3">
            <p className="flex-1 text-sm text-ink">{t.langSuggest.text}</p>
            <button type="button" onClick={dismiss} aria-label={t.langSuggest.dismiss} className="text-slate hover:text-ink cursor-pointer">
              <X size={16} />
            </button>
          </div>
          <div className="mt-3 flex gap-3">
            <button
              type="button"
              onClick={accept}
              className="rounded-[var(--radius-btn)] bg-navy px-4 py-2 text-xs font-semibold text-white hover:bg-ink cursor-pointer"
            >
              {t.langSuggest.accept}
            </button>
            <button type="button" onClick={dismiss} className="px-2 py-2 text-xs font-semibold text-slate hover:text-ink cursor-pointer">
              {t.langSuggest.dismiss}
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
