import React, { createContext, useContext, useEffect, useMemo, useCallback } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { content, localeFromPath, localePath, pages, type Locale, type SiteContent } from '../content';

export type Language = Locale;

interface LanguageContextType {
  language: Language;
  /** Navega a la misma sección en el otro idioma (URL indexable por idioma). */
  setLanguage: (lang: Language) => void;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

/** Preferencia explícita del usuario. Solo se usa para NO volver a mostrar el banner de sugerencia. */
export const LANG_PREF_KEY = 'aoa_lang_pref';

/**
 * El idioma es función de la URL: "/" → en, "/es" → es.
 * Debe montarse DENTRO de BrowserRouter.
 */
export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const location = useLocation();
  const navigate = useNavigate();
  const language = localeFromPath(location.pathname);

  useEffect(() => {
    document.documentElement.lang = language;
  }, [language]);

  const setLanguage = useCallback(
    (lang: Language) => {
      try {
        localStorage.setItem(LANG_PREF_KEY, lang);
      } catch {
        /* modo privado / storage bloqueado: sin persistencia, sin error */
      }
      if (lang === language) return;
      // Página secundaria (p. ej. consultoría de IA): ir a su equivalente en el otro idioma
      const current = location.pathname.endsWith('/') ? location.pathname : location.pathname + '/';
      const page = Object.values(pages).find((p) => p[language] === current);
      if (page) {
        navigate(page[lang]);
        return;
      }
      // La URL ya no conserva el hash: localizamos la sección visible para volver a ella en el otro idioma
      const sections = Array.from(document.querySelectorAll<HTMLElement>('main section[id]'));
      const visible = sections.filter((el) => el.getBoundingClientRect().top <= window.innerHeight * 0.5).pop();
      navigate(localePath(lang, visible ? `#${visible.id}` : ''), { replace: false });
    },
    [language, location.pathname, navigate]
  );

  const value = useMemo(() => ({ language, setLanguage }), [language, setLanguage]);

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
};

export const useLanguage = (): LanguageContextType => {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error('useLanguage must be used within a LanguageProvider');
  return ctx;
};

/**
 * Hook único de acceso a textos.
 * Uso: const { language, t } = useTranslation('hero');
 */
export const useTranslation = <K extends keyof SiteContent>(section: K) => {
  const { language } = useLanguage();
  return { language, t: content[language][section] };
};
