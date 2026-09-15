import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { Layout } from './components/layout/Layout';
import { Home } from './pages/Home';

/** Rutas antiguas del sitio anterior → ancla equivalente en la one-page */
const LEGACY_REDIRECTS: Record<string, string> = {
  services: '#capabilities',
  about: '#approach',
  contact: '#contact'
};

export const App: React.FC = () => {
  return (
    <Routes>
      {/* Inglés (idioma por defecto) en la raíz */}
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        {Object.entries(LEGACY_REDIRECTS).map(([from, hash]) => (
          <Route key={from} path={from} element={<Navigate to={{ pathname: '/', hash }} replace />} />
        ))}
      </Route>

      {/* Español bajo /es */}
      <Route path="/es" element={<Layout />}>
        <Route index element={<Home />} />
        {Object.entries(LEGACY_REDIRECTS).map(([from, hash]) => (
          <Route key={from} path={from} element={<Navigate to={{ pathname: '/es/', hash }} replace />} />
        ))}
      </Route>

      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
};

export default App;
