import React from 'react';
import { Seo } from '../components/layout/Seo';
import { Hero } from '../components/sections/Hero';
import { Challenges } from '../components/sections/Challenges';
import { Approach } from '../components/sections/Approach';
import { Capabilities } from '../components/sections/Capabilities';
import { Projects } from '../components/sections/Projects';
import { Faq } from '../components/sections/Faq';
import { ContactSection } from '../components/sections/ContactSection';

/**
 * One-page. Orden: hero (+ de la necesidad al proyecto) → desafíos de negocio →
 * nuestro enfoque (+ dirección integrada) → capacidades → proyectos y soluciones →
 * preguntas frecuentes → nuevos proyectos (formulario).
 */
export const Home: React.FC = () => (
  <>
    <Seo />
    <Hero />
    <Challenges />
    <Approach />
    <Capabilities />
    <Projects />
    <Faq />
    <ContactSection />
  </>
);
