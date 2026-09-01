import React from 'react';
import { Routes, Route, Navigate, useLocation } from 'react-router-dom';
import { AnimatePresence, motion, type Variants } from 'framer-motion';
import { Layout } from './components/layout/Layout';
import { Home } from './pages/Home';
import { Services } from './pages/Services';
import { About } from './pages/About';
import { Contact } from './pages/Contact';

const pageVariants: Variants = {
  initial: {
    opacity: 0,
    y: 8
  },
  in: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.35,
      ease: [0.16, 1, 0.3, 1]
    }
  },
  out: {
    opacity: 0,
    y: -8,
    transition: {
      duration: 0.25,
      ease: [0.16, 1, 0.3, 1]
    }
  }
};

const AnimatedRouteWrapper: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <motion.div
      variants={pageVariants}
      initial="initial"
      animate="in"
      exit="out"
    >
      {children}
    </motion.div>
  );
};

export const App: React.FC = () => {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Layout />}>
          <Route
            index
            element={
              <AnimatedRouteWrapper>
                <Home />
              </AnimatedRouteWrapper>
            }
          />
          <Route
            path="services"
            element={
              <AnimatedRouteWrapper>
                <Services />
              </AnimatedRouteWrapper>
            }
          />
          <Route
            path="about"
            element={
              <AnimatedRouteWrapper>
                <About />
              </AnimatedRouteWrapper>
            }
          />
          <Route
            path="contact"
            element={
              <AnimatedRouteWrapper>
                <Contact />
              </AnimatedRouteWrapper>
            }
          />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Route>
      </Routes>
    </AnimatePresence>
  );
};

export default App;
