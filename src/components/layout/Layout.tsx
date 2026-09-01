import React, { useEffect } from 'react';
import { useLocation, Outlet } from 'react-router-dom';
import { Header } from './Header';
import { Footer } from './Footer';
import { ScrollProgress } from '../ui/ScrollProgress';
import { CustomCursor } from '../ui/CustomCursor';
import { FloatingContactPill } from '../ui/FloatingContactPill';

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

export const Layout: React.FC = () => {
  return (
    <div className="flex min-h-screen flex-col bg-[var(--color-paper)] selection:bg-[var(--color-navy)] selection:text-white">
      <ScrollToTop />
      <ScrollProgress />
      <CustomCursor />
      <FloatingContactPill />
      <Header />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};
