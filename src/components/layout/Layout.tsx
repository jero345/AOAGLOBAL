import React, { useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { Header } from './Header';
import { Footer } from './Footer';
import { ScrollProgress } from '../ui/ScrollProgress';
import { FloatingContactPill } from '../ui/FloatingContactPill';
import { LangSuggestBanner } from '../ui/LangSuggestBanner';
import { pageview } from '../../lib/analytics';
import { useLanguage } from '../../context/LanguageContext';

/**
 * Comportamiento de scroll de la one-page:
 * - Los enlaces #ancla desplazan suavemente y NO dejan el hash en la URL:
 *   así una recarga vuelve arriba en lugar de saltar al formulario/footer.
 * - Si se llega con un hash (enlace compartido), se desplaza a esa sección
 *   una vez y se limpia la URL.
 * - Al cambiar de idioma (cambia el pathname) se vuelve arriba.
 */
function ScrollSync() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if ('scrollRestoration' in window.history) window.history.scrollRestoration = 'manual';
  }, []);

  useEffect(() => {
    // Salto instantáneo (sin scroll-behavior: smooth): un desplazamiento suave
    // se interrumpe durante el remontaje de la página al cambiar de ruta.
    const root = document.documentElement;
    const jump = (top: number) => {
      const prev = root.style.scrollBehavior;
      root.style.scrollBehavior = 'auto';
      window.scrollTo({ top, behavior: 'auto' });
      root.style.scrollBehavior = prev;
    };
    const el = hash ? document.getElementById(hash.slice(1)) : null;
    if (el) {
      const offset = parseFloat(getComputedStyle(root).scrollPaddingTop) || 0;
      const run = () => jump(el.getBoundingClientRect().top + window.scrollY - offset);
      run();
      requestAnimationFrame(run);
      window.history.replaceState(null, '', pathname + window.location.search);
      return;
    }
    jump(0);
  }, [pathname, hash]);

  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      if (e.defaultPrevented || e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;
      const a = (e.target as HTMLElement | null)?.closest<HTMLAnchorElement>('a[href^="#"]');
      if (!a) return;
      const id = a.getAttribute('href')!.slice(1);
      const el = id ? document.getElementById(id) : null;
      if (!el) return;
      e.preventDefault();
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    };
    document.addEventListener('click', onClick);
    return () => document.removeEventListener('click', onClick);
  }, []);

  return null;
}

/** Google Analytics: una vista por cada ruta, incluida la primera */
function RouteAnalytics() {
  const { pathname } = useLocation();
  const { language } = useLanguage();

  useEffect(() => {
    // react-helmet actualiza <title> tras pintar: se espera un instante para no
    // registrar la vista con el título de la página anterior.
    const id = window.setTimeout(() => pageview(pathname, document.title, language), 150);
    return () => window.clearTimeout(id);
  }, [pathname, language]);

  return null;
}

export const Layout: React.FC = () => {
  return (
    <div className="flex min-h-screen flex-col bg-paper selection:bg-navy selection:text-white">
      <ScrollSync />
      <RouteAnalytics />
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
