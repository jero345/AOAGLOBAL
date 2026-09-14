import React, { createContext, useContext, useMemo, useState, useCallback, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import type { ServiceSlug } from '../content';

/** Valor del select cuando el visitante aún no sabe qué necesita */
export const GENERAL_SERVICE = 'general';
export type QuoteService = ServiceSlug | typeof GENERAL_SERVICE | '';

interface QuoteContextType {
  service: QuoteService;
  /** Preselecciona el servicio y lleva al formulario ("Cotizar este servicio"). */
  requestQuote: (service: QuoteService) => void;
  setService: (service: QuoteService) => void;
}

const QuoteContext = createContext<QuoteContextType | undefined>(undefined);

const VALID: QuoteService[] = ['web', 'seo', 'software', 'automation', 'consulting', GENERAL_SERVICE];

export const QuoteProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const location = useLocation();
  const [service, setService] = useState<QuoteService>('');

  // Soporta enlaces externos del tipo /?service=web#contact
  useEffect(() => {
    const param = new URLSearchParams(location.search).get('service');
    if (param && (VALID as string[]).includes(param)) setService(param as QuoteService);
  }, [location.search]);

  const requestQuote = useCallback((next: QuoteService) => {
    setService(next);
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }, []);

  const value = useMemo(() => ({ service, requestQuote, setService }), [service, requestQuote]);
  return <QuoteContext.Provider value={value}>{children}</QuoteContext.Provider>;
};

export const useQuote = (): QuoteContextType => {
  const ctx = useContext(QuoteContext);
  if (!ctx) throw new Error('useQuote must be used within a QuoteProvider');
  return ctx;
};
