import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Section } from '../components/ui/Section';
import { Eyebrow } from '../components/ui/Eyebrow';
import { TiltCard } from '../components/ui/TiltCard';
import { ProcessSteps } from '../components/sections/ProcessSteps';
import { Metrics } from '../components/sections/Metrics';
import { CtaBand } from '../components/sections/CtaBand';
import { ShieldCheck, Target, TrendingUp, Users } from 'lucide-react';

export const About: React.FC = () => {
  const principles = [
    {
      title: "Rigor Cuantitativo",
      description: "Toda recomendación se sustenta en modelos financieros robustos y datos empíricos de la operación real.",
      icon: Target
    },
    {
      title: "Involucramiento Directo",
      description: "Los socios fundadores y consultores senior participan directamente en cada sesión de trabajo y toma de decisiones.",
      icon: Users
    },
    {
      title: "Independencia y Ética",
      description: "Garantizamos total objetividad profesional, orientando cada estrategia exclusivamente al beneficio del cliente.",
      icon: ShieldCheck
    },
    {
      title: "Transferencia de Valor",
      description: "Nuestro objetivo es fortalecer las capacidades internas del cliente para que sostenga el crecimiento sin dependencia externa.",
      icon: TrendingUp
    }
  ];

  const aboutPhotos = [
    {
      url: "https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=600&q=80",
      caption: "Centro de Modelado Estratégico",
      location: "San Francisco"
    },
    {
      url: "https://images.unsplash.com/photo-1577495508048-b635879837f1?auto=format&fit=crop&w=600&q=80",
      caption: "Sesión de Directorio y Gobernanza",
      location: "Nueva York"
    },
    {
      url: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=600&q=80",
      caption: "Alineación de Equipos Ejecutivos",
      location: "Londres"
    }
  ];

  return (
    <>
      <Helmet>
        <title>Nosotros | AOA Global Services</title>
        <meta
          name="description"
          content="Conozca el equipo directivo, principios operativos y trayectoria de AOA Global Services en consultoría estratégica y gestión empresarial."
        />
        <link rel="canonical" href="https://aoaglobalservices.com/about" />
      </Helmet>

      {/* Page Header */}
      <section className="bg-[var(--color-line)] py-16 md:py-24 border-b border-[var(--color-line)]">
        <div className="mx-auto max-w-[1200px] px-6 md:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <Eyebrow tone="navy" className="mb-4">
              Nuestra Firma
            </Eyebrow>
            <h1 className="text-3xl font-bold tracking-tight text-[var(--color-ink)] sm:text-4xl md:text-5xl">
              Asesoría de Alta Dirección Basada en Resultados Concretos
            </h1>
            <p className="mt-4 text-base text-[var(--color-slate)] md:text-lg leading-relaxed">
              Nacimos para brindar una alternativa ágil, rigurosa y comprometida a las estructuras burocráticas de las consultoras multinacionales tradicionales.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Origin & Philosophy with Tilt Visual */}
      <Section tone="paper">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-6 space-y-6"
          >
            <Eyebrow tone="navy">Nuestra Filosofía</Eyebrow>
            <h2 className="text-2xl sm:text-3xl font-bold text-[var(--color-ink)] leading-snug">
              Un enfoque práctico que une estrategia de directorio con ejecución en la planta.
            </h2>
            <p className="text-sm md:text-base text-[var(--color-slate)] leading-relaxed">
              En AOA Global Services entendemos que la mejor estrategia carece de valor si no puede implementarse con éxito en la realidad diaria de la organización. Por ello, nuestros mandatos abarcan desde la conceptualización directiva hasta la puesta en marcha de nuevos protocolos operativos.
            </p>
            <p className="text-sm md:text-base text-[var(--color-slate)] leading-relaxed">
              Trabajamos junto a juntas directivas, directores generales y fondos de capital privado en América y Europa, optimizando operaciones críticas, gestionando transiciones complejas y diseñando estrategias de expansión internacional.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-6"
          >
            <TiltCard maxTilt={6}>
              <div className="relative aspect-[4/3] w-full overflow-hidden rounded-[var(--radius-card)] border border-[var(--color-line)] bg-[var(--color-line)] group shadow-sm">
                <img
                  src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=1000&q=80"
                  alt="Sesión de trabajo estratégica con directivos corporativos"
                  className="h-full w-full object-cover grayscale contrast-125 transition-transform duration-700 group-hover:scale-105"
                  width={800}
                  height={600}
                  loading="lazy"
                />
                <div className="absolute bottom-4 left-4 bg-[var(--color-navy)] px-3 py-1.5 text-white text-[0.7rem] font-bold uppercase tracking-wider rounded-[var(--radius-btn)]">
                  Liderazgo Ejecutivo en Acción
                </div>
              </div>
            </TiltCard>
          </motion.div>
        </div>
      </Section>

      {/* Visual Photos Mosaic */}
      <Section tone="line">
        <div className="max-w-2xl mb-12">
          <Eyebrow tone="navy" className="mb-3">
            Infraestructura & Frentes de Trabajo
          </Eyebrow>
          <h2 className="text-2xl sm:text-3xl font-bold text-[var(--color-ink)]">
            Presencia ejecutiva en centros neurálgicos de negocio
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {aboutPhotos.map((photo, idx) => (
            <motion.div
              key={photo.caption}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
              className="group relative overflow-hidden rounded-[var(--radius-card)] border border-[var(--color-line)] bg-[var(--color-ink)] aspect-[4/3]"
            >
              <img
                src={photo.url}
                alt={photo.caption}
                className="h-full w-full object-cover grayscale contrast-125 transition-transform duration-700 group-hover:scale-110 opacity-70 group-hover:opacity-85"
                loading="lazy"
                width={500}
                height={375}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-ink)] via-[var(--color-navy)]/40 to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 text-white">
                <span className="text-[0.65rem] font-bold uppercase tracking-widest text-white/70 block mb-0.5">
                  {photo.location}
                </span>
                <p className="text-sm font-bold text-white leading-snug">
                  {photo.caption}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Operating Principles */}
      <Section tone="paper">
        <div className="max-w-2xl mb-12">
          <Eyebrow tone="navy" className="mb-3">
            Pilares de Trabajo
          </Eyebrow>
          <h2 className="text-2xl sm:text-3xl font-bold text-[var(--color-ink)]">
            Principios que rigen cada uno de nuestros mandatos
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {principles.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08, duration: 0.5 }}
                whileHover={{ y: -3 }}
                className="bg-[var(--color-paper)] border border-[var(--color-line)] p-6 rounded-[var(--radius-card)] flex flex-col justify-between hover:border-[var(--color-navy)] transition-colors duration-200"
              >
                <div>
                  <div className="h-10 w-10 bg-slate-100 rounded-[var(--radius-btn)] flex items-center justify-center text-[var(--color-navy)] mb-4">
                    <Icon size={20} />
                  </div>
                  <h3 className="text-base font-bold text-[var(--color-ink)] mb-2">
                    {item.title}
                  </h3>
                </div>
                <p className="text-xs text-[var(--color-slate)] leading-relaxed mt-2">
                  {item.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </Section>

      {/* Process Methodology */}
      <ProcessSteps tone="line" />

      {/* Metrics of Impact */}
      <Metrics />

      {/* CTA Band */}
      <CtaBand />
    </>
  );
};
