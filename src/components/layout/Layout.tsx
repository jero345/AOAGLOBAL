import React, { useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { Header } from './Header';
import { Footer } from './Footer';
import { ScrollProgress } from '../ui/ScrollProgress';
import { FloatingContactPill } from '../ui/FloatingContactPill';
import { LangSuggestBanner } from '../ui/LangSuggestBanner';

/**
 * Al cambiar de idioma la URL cambia de pathname conservando el hash:
 * volvemos a la misma sección. Sin hash → arriba.
 */
function ScrollSync() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const el = document.getElementById(hash.slice(1));
      if (el) {
        el.scrollIntoView({ block: 'start' });
        return;
      }
    }
    window.scrollTo(0, 0);
  }, [pathname, hash]);

  return null;
}

export const Layout: React.FC = () => {
  return (
    <div className="flex min-h-screen flex-col bg-paper selection:bg-navy selection:text-white">
      <ScrollSync />
      <ScrollProgress />
      <Header />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
      <FloatingContactPill />
      <LangSuggestBanner />
    </div>
  );
};
