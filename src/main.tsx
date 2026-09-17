import React from 'react';
import { createRoot, hydrateRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { LanguageProvider } from './context/LanguageContext';
import { QuoteProvider } from './context/QuoteContext';
import { initAnalytics } from './lib/analytics';
import App from './App';
import './index.css';

initAnalytics();

const rootElement = document.getElementById('root');

if (rootElement) {
  const app = (
    <React.StrictMode>
      <HelmetProvider>
        <BrowserRouter>
          <LanguageProvider>
            <QuoteProvider>
              <App />
            </QuoteProvider>
          </LanguageProvider>
        </BrowserRouter>
      </HelmetProvider>
    </React.StrictMode>
  );
  // Las rutas se prerenderizan en build (scripts/prerender.mjs): si el HTML ya trae
  // contenido, hidratamos; si no (dev), montamos desde cero.
  if (rootElement.hasChildNodes()) hydrateRoot(rootElement, app);
  else createRoot(rootElement).render(app);
}
