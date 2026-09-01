import React, { createContext, useContext, useState, useEffect } from 'react';
import { translations, type TranslationDict } from '../data/translations';

export type Language = 'es' | 'en';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  toggleLanguage: () => void;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguageState] = useState<Language>(() => {
    if (typeof window !== 'undefined') {
      const savedLang = localStorage.getItem('aoa_lang') as Language;
      if (savedLang === 'es' || savedLang === 'en') {
        return savedLang;
      }
      const browserLang = navigator.language.toLowerCase();
      if (browserLang.startsWith('en')) {
        return 'en';
      }
    }
    return 'es';
  });

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    if (typeof window !== 'undefined') {
      localStorage.setItem('aoa_lang', lang);
      document.documentElement.lang = lang;
    }
  };

  const toggleLanguage = () => {
    const nextLang: Language = language === 'es' ? 'en' : 'es';
    setLanguage(nextLang);
  };

  useEffect(() => {
    document.documentElement.lang = language;
  }, [language]);

  return (
    <LanguageContext.Provider value={{ language, setLanguage, toggleLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

/**
 * Hook único de traducción: devuelve el idioma activo y el bloque de textos
 * solicitado. Uso: const { language, t } = useTranslation("hero");
 */
export const useTranslation = <K extends keyof TranslationDict>(section: K) => {
  const { language } = useLanguage();
  return { language, t: translations[language][section] };
};
