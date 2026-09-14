import React from 'react';
import ReactDOM from 'react-dom/client';
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
  ReactDOM.createRoot(rootElement).render(
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
}
