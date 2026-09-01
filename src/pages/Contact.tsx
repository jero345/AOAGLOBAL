import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { useSearchParams } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { motion, AnimatePresence } from 'framer-motion';
import confetti from 'canvas-confetti';
import { Section } from '../components/ui/Section';
import { Eyebrow } from '../components/ui/Eyebrow';
import { Button } from '../components/ui/Button';
import { services } from '../data/services';
import { companyDetails } from '../data/nav';
import { Mail, Phone, MapPin, CheckCircle2, AlertCircle } from 'lucide-react';

interface ContactFormData {
  fullName: string;
  email: string;
  company: string;
  service: string;
  message: string;
  website_honeypot?: string;
}

export const Contact: React.FC = () => {
  const [searchParams] = useSearchParams();
  const preselectedService = searchParams.get('service') || '';
  const [formStatus, setFormStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');
  const [statusMessage, setStatusMessage] = useState<string>('');

  const {
    register,
    handleSubmit,
    setValue,
    reset,
    formState: { errors }
  } = useForm<ContactFormData>({
    defaultValues: {
      fullName: '',
      email: '',
      company: '',
      service: preselectedService,
      message: '',
      website_honeypot: ''
    }
  });

  useEffect(() => {
    if (preselectedService) {
      setValue('service', preselectedService);
    }
  }, [preselectedService, setValue]);

  const onSubmit = async (data: ContactFormData) => {
    if (data.website_honeypot) {
      setFormStatus('success');
      setStatusMessage('Su solicitud ha sido recibida con éxito.');
      return;
    }

    setFormStatus('sending');
    setStatusMessage('');

    try {
      const payload = {
        fullName: data.fullName,
        email: data.email,
        company: data.company,
        service: data.service,
        message: data.message,
        timestamp: new Date().toISOString()
      };

      await new Promise((resolve) => setTimeout(resolve, 800));
      console.log('Contact form submitted payload:', payload);

      // Trigger refined confetti explosion
      confetti({
        particleCount: 70,
        spread: 60,
        origin: { y: 0.7 },
        colors: ['#0B1D3A', '#747474', '#111111']
      });

      setFormStatus('success');
      setStatusMessage('Gracias por contactar a AOA Global Services. Un socio director se comunicará con usted en menos de 24 horas laborables.');
      reset();
    } catch {
      setFormStatus('error');
      setStatusMessage('Ocurrió un error al procesar su solicitud. Por favor contáctenos directamente vía correo a contact@aoaglobalservices.com');
    }
  };

  return (
    <>
      <Helmet>
        <title>Contacto | AOA Global Services</title>
        <meta
          name="description"
          content="Inicie una conversación confidencial con nuestros socios directores. Solicite una sesión de diagnóstico estratégico para su empresa."
        />
        <link rel="canonical" href="https://aoaglobalservices.com/contact" />
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
              Canales Corporativos
            </Eyebrow>
            <h1 className="text-3xl font-bold tracking-tight text-[var(--color-ink)] sm:text-4xl md:text-5xl">
              Inicie una Consulta Confidencial
            </h1>
            <p className="mt-4 text-base text-[var(--color-slate)] md:text-lg leading-relaxed">
              Complete el formulario para coordinar una sesión de evaluación inicial con nuestros socios directores.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Content Grid */}
      <Section tone="paper">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Form with bottom-border-only inputs */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-7"
          >
            <h2 className="text-2xl font-bold text-[var(--color-ink)] mb-2">
              Formulario de Solicitud Directiva
            </h2>
            <p className="text-sm text-[var(--color-slate)] mb-8">
              Todos los campos marcados con asterisco (*) son obligatorios.
            </p>

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-8" noValidate>
              <input
                type="text"
                {...register('website_honeypot')}
                tabIndex={-1}
                autoComplete="off"
                className="hidden"
                aria-hidden="true"
              />

              {/* Full Name */}
              <div className="flex flex-col space-y-2">
                <label
                  htmlFor="fullName"
                  className="text-[0.75rem] font-semibold uppercase tracking-[0.08em] text-[var(--color-slate)]"
                >
                  Nombre Completo *
                </label>
                <input
                  id="fullName"
                  type="text"
                  placeholder="Ej. Roberto Valenzuela"
                  {...register('fullName', { required: 'Por favor ingrese su nombre completo' })}
                  className="w-full bg-transparent border-0 border-b border-[var(--color-line)] pb-3 text-base text-[var(--color-ink)] transition-colors duration-200 placeholder:text-slate-400 focus:border-[var(--color-navy)] focus:outline-none"
                  aria-invalid={errors.fullName ? 'true' : 'false'}
                />
                {errors.fullName && (
                  <span className="text-xs text-red-600 font-medium">{errors.fullName.message}</span>
                )}
              </div>

              {/* Corporate Email */}
              <div className="flex flex-col space-y-2">
                <label
                  htmlFor="email"
                  className="text-[0.75rem] font-semibold uppercase tracking-[0.08em] text-[var(--color-slate)]"
                >
                  Correo Corporativo *
                </label>
                <input
                  id="email"
                  type="email"
                  placeholder="Ej. rvalenzuela@empresa.com"
                  {...register('email', {
                    required: 'Por favor ingrese su correo corporativo',
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                      message: 'Ingrese una dirección de correo válida'
                    }
                  })}
                  className="w-full bg-transparent border-0 border-b border-[var(--color-line)] pb-3 text-base text-[var(--color-ink)] transition-colors duration-200 placeholder:text-slate-400 focus:border-[var(--color-navy)] focus:outline-none"
                  aria-invalid={errors.email ? 'true' : 'false'}
                />
                {errors.email && (
                  <span className="text-xs text-red-600 font-medium">{errors.email.message}</span>
                )}
              </div>

              {/* Company */}
              <div className="flex flex-col space-y-2">
                <label
                  htmlFor="company"
                  className="text-[0.75rem] font-semibold uppercase tracking-[0.08em] text-[var(--color-slate)]"
                >
                  Empresa / Organización *
                </label>
                <input
                  id="company"
                  type="text"
                  placeholder="Ej. Grupo Industrial Andino S.A."
                  {...register('company', { required: 'Por favor ingrese el nombre de su empresa' })}
                  className="w-full bg-transparent border-0 border-b border-[var(--color-line)] pb-3 text-base text-[var(--color-ink)] transition-colors duration-200 placeholder:text-slate-400 focus:border-[var(--color-navy)] focus:outline-none"
                  aria-invalid={errors.company ? 'true' : 'false'}
                />
                {errors.company && (
                  <span className="text-xs text-red-600 font-medium">{errors.company.message}</span>
                )}
              </div>

              {/* Service Selection */}
              <div className="flex flex-col space-y-2">
                <label
                  htmlFor="service"
                  className="text-[0.75rem] font-semibold uppercase tracking-[0.08em] text-[var(--color-slate)]"
                >
                  Servicio de Interés Principal *
                </label>
                <select
                  id="service"
                  {...register('service', { required: 'Seleccione un área de especialidad' })}
                  className="w-full bg-transparent border-0 border-b border-[var(--color-line)] pb-3 text-base text-[var(--color-ink)] transition-colors duration-200 focus:border-[var(--color-navy)] focus:outline-none cursor-pointer"
                  aria-invalid={errors.service ? 'true' : 'false'}
                >
                  <option value="">-- Seleccionar servicio --</option>
                  {services.map((item) => (
                    <option key={item.slug} value={item.slug}>
                      {item.title}
                    </option>
                  ))}
                  <option value="otro">Evaluación Estratégica General</option>
                </select>
                {errors.service && (
                  <span className="text-xs text-red-600 font-medium">{errors.service.message}</span>
                )}
              </div>

              {/* Message */}
              <div className="flex flex-col space-y-2">
                <label
                  htmlFor="message"
                  className="text-[0.75rem] font-semibold uppercase tracking-[0.08em] text-[var(--color-slate)]"
                >
                  Resumen del Desafío o Contexto *
                </label>
                <textarea
                  id="message"
                  rows={4}
                  placeholder="Describa brevemente la situación actual de la empresa, objetivos esperados y cronograma estimado..."
                  {...register('message', {
                    required: 'Por favor comparta un resumen de su proyecto',
                    minLength: { value: 15, message: 'El mensaje debe contener al menos 15 caracteres' }
                  })}
                  className="w-full bg-transparent border-0 border-b border-[var(--color-line)] pb-3 text-base text-[var(--color-ink)] transition-colors duration-200 placeholder:text-slate-400 focus:border-[var(--color-navy)] focus:outline-none resize-none"
                  aria-invalid={errors.message ? 'true' : 'false'}
                ></textarea>
                {errors.message && (
                  <span className="text-xs text-red-600 font-medium">{errors.message.message}</span>
                )}
              </div>

              {/* Inline Status Message */}
              <AnimatePresence>
                {formStatus === 'success' && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    className="flex items-start gap-3 p-4 bg-emerald-50 border border-emerald-200 rounded-[var(--radius-card)] text-emerald-900 text-sm"
                  >
                    <CheckCircle2 size={20} className="text-emerald-600 shrink-0 mt-0.5" />
                    <p>{statusMessage}</p>
                  </motion.div>
                )}

                {formStatus === 'error' && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    className="flex items-start gap-3 p-4 bg-red-50 border border-red-200 rounded-[var(--radius-card)] text-red-900 text-sm"
                  >
                    <AlertCircle size={20} className="text-red-600 shrink-0 mt-0.5" />
                    <p>{statusMessage}</p>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Submit Button */}
              <div>
                <Button
                  type="submit"
                  variant="primary"
                  disabled={formStatus === 'sending'}
                  className="w-full sm:w-auto min-w-[200px]"
                >
                  {formStatus === 'sending' ? 'Enviando solicitud...' : 'Enviar Solicitud Confidencial'}
                </Button>
              </div>

              <p className="text-xs text-[var(--color-slate)]">
                Sus datos están protegidos bajo estricto secreto profesional y confidencialidad comercial.
              </p>
            </form>
          </motion.div>

          {/* Right Column: Direct Contact & Office Details */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-5 bg-slate-50 border border-[var(--color-line)] rounded-[var(--radius-card)] p-8 space-y-8"
          >
            <div>
              <h3 className="text-lg font-bold text-[var(--color-ink)] mb-2">
                Atención Directa
              </h3>
              <p className="text-xs text-[var(--color-slate)] leading-relaxed">
                Si requiere asistencia inmediata o desea remitir documentación corporativa bajo NDA previo:
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="h-9 w-9 bg-white border border-[var(--color-line)] rounded-[var(--radius-btn)] flex items-center justify-center text-[var(--color-navy)] shrink-0">
                  <Mail size={18} />
                </div>
                <div>
                  <span className="block text-[0.7rem] font-bold uppercase tracking-wider text-[var(--color-slate)]">
                    Correo Institucional
                  </span>
                  <a
                    href={`mailto:${companyDetails.email}`}
                    className="text-sm font-semibold text-[var(--color-navy)] hover:underline"
                  >
                    {companyDetails.email}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="h-9 w-9 bg-white border border-[var(--color-line)] rounded-[var(--radius-btn)] flex items-center justify-center text-[var(--color-navy)] shrink-0">
                  <Phone size={18} />
                </div>
                <div>
                  <span className="block text-[0.7rem] font-bold uppercase tracking-wider text-[var(--color-slate)]">
                    Línea Ejecutiva
                  </span>
                  <a
                    href={`tel:${companyDetails.phone}`}
                    className="text-sm font-semibold text-[var(--color-navy)] hover:underline"
                  >
                    {companyDetails.phone}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="h-9 w-9 bg-white border border-[var(--color-line)] rounded-[var(--radius-btn)] flex items-center justify-center text-[var(--color-navy)] shrink-0">
                  <MapPin size={18} />
                </div>
                <div>
                  <span className="block text-[0.7rem] font-bold uppercase tracking-wider text-[var(--color-slate)]">
                    Oficina Principal
                  </span>
                  <address className="not-italic text-sm text-[var(--color-ink)] leading-relaxed mt-0.5">
                    {companyDetails.address}
                  </address>
                </div>
              </div>
            </div>

            <div className="border-t border-[var(--color-line)] pt-6">
              <span className="block text-[0.7rem] font-bold uppercase tracking-wider text-[var(--color-slate)] mb-2">
                Horario de Atención
              </span>
              <p className="text-xs text-[var(--color-ink)]">
                Lunes a Viernes: 08:30 – 18:30 (PST / EST / CET)
              </p>
              <p className="text-xs text-[var(--color-slate)] mt-1">
                Atención a comités de crisis disponible 24/7 para clientes con mandato activo.
              </p>
            </div>
          </motion.div>
        </div>
      </Section>
    </>
  );
};
