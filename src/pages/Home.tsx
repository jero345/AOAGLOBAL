import React from 'react';
import { Seo } from '../components/layout/Seo';
import { Hero } from '../components/sections/Hero';
import { Diagnosis } from '../components/sections/Diagnosis';
import { HowItWorks } from '../components/sections/HowItWorks';
import { ServicesGrid } from '../components/sections/ServicesGrid';
import { Investment } from '../components/sections/Investment';
import { SocialProof } from '../components/sections/SocialProof';
import { Faq } from '../components/sections/Faq';
import { ContactSection } from '../components/sections/ContactSection';

/**
 * One-page de conversión. Orden obligatorio (brief §4):
 * problema → cómo trabajamos → soluciones → inversión → prueba → objeciones → formulario.
 */
export const Home: React.FC = () => (
  <>
    <Seo />
    <Hero />
    <Diagnosis />
    <HowItWorks />
    <ServicesGrid />
    <Investment />
    <SocialProof />
    <Faq />
    <ContactSection />
  </>
);
