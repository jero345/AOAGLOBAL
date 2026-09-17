import React from 'react';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom/server';
import { HelmetProvider, type HelmetServerState } from 'react-helmet-async';
import { LanguageProvider } from './context/LanguageContext';
import { QuoteProvider } from './context/QuoteContext';
import App from './App';

/**
 * Render estático (prerender en build): devuelve el HTML de la app y las
 * etiquetas <head> que genera react-helmet-async para una ruta concreta.
 * Lo consume scripts/prerender.mjs; el cliente hidrata después (main.tsx).
 */
export function render(url: string): { html: string; helmet: HelmetServerState } {
  const helmetContext: { helmet?: HelmetServerState } = {};
  const html = renderToString(
    <React.StrictMode>
      <HelmetProvider context={helmetContext}>
        <StaticRouter location={url}>
          <LanguageProvider>
            <QuoteProvider>
              <App />
            </QuoteProvider>
          </LanguageProvider>
        </StaticRouter>
      </HelmetProvider>
    </React.StrictMode>
  );
  return { html, helmet: helmetContext.helmet! };
}
