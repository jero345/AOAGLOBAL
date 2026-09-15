import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle2, AlertCircle, ArrowRight } from 'lucide-react';
import { useTranslation } from '../../context/LanguageContext';
import { useQuote, GENERAL_SERVICE, type QuoteService } from '../../context/QuoteContext';
import { company } from '../../content';
import { Button } from '../ui/Button';
import { track } from '../../lib/analytics';

const WEB3FORMS_ENDPOINT = 'https://api.web3forms.com/submit';
const ACCESS_KEY = import.meta.env.VITE_WEB3FORMS_KEY as string | undefined;
const UTM_KEY = 'aoa_utm_source';

interface FormData {
  name: string;
  company: string;
  email: string;
  service: QuoteService;
  message: string;
  /** Honeypot de Web3Forms: debe quedar vacío */
  botcheck?: boolean;
}

type Status = 'idle' | 'sending' | 'success' | 'error';

/** utm_source de la URL de entrada; se conserva en sessionStorage si el usuario cambia de idioma/ancla. */
const readUtmSource = (): string => {
  try {
    const fromUrl = new URLSearchParams(window.location.search).get('utm_source');
    if (fromUrl) {
      sessionStorage.setItem(UTM_KEY, fromUrl);
      return fromUrl;
    }
    return sessionStorage.getItem(UTM_KEY) ?? '';
  } catch {
    return '';
  }
};

const fieldClass =
  'w-full rounded-[var(--radius-btn)] border border-line bg-paper px-4 py-3 text-base text-ink placeholder:text-slate/70 transition-colors duration-200 focus:border-navy focus:outline-none aria-[invalid=true]:border-red-600';
const labelClass = 'text-eyebrow font-semibold uppercase tracking-[0.08em] text-slate';

export const ContactForm: React.FC = () => {
  const { language, t } = useTranslation('contact');
  const { t: services } = useTranslation('services');
  const { service, setService } = useQuote();
  const [status, setStatus] = useState<Status>('idle');
  const f = t.form;

  const {
    register,
    handleSubmit,
    setValue,
    reset,
    formState: { errors }
  } = useForm<FormData>({
    defaultValues: { name: '', company: '', email: '', service, message: '' },
    shouldFocusError: true
  });

  // CTA dentro de una tarjeta de solución → preselección del área de interés
  useEffect(() => {
    setValue('service', service, { shouldValidate: false });
  }, [service, setValue]);

  const serviceName = (slug: QuoteService) =>
    slug === GENERAL_SERVICE ? f.service.generalOption : services.items.find((s) => s.slug === slug)?.name ?? slug;

  const onSubmit = async (data: FormData) => {
    if (data.botcheck) {
      // Bot: fingimos éxito sin enviar nada
      setStatus('success');
      return;
    }
    if (!ACCESS_KEY) {
      setStatus('error');
      track('form_error', { service: data.service, locale: language, reason: 'missing_key' });
      return;
    }

    setStatus('sending');
    track('form_submit', { service: data.service, locale: language });

    const payload = {
      access_key: ACCESS_KEY,
      subject: `${f.subjectPrefix} — ${serviceName(data.service)} [${language.toUpperCase()}]`,
      from_name: `${data.name} · ${data.company}`,
      name: data.name,
      company: data.company,
      email: data.email,
      service: serviceName(data.service),
      service_slug: data.service,
      message: data.message,
      locale: language,
      utm_source: readUtmSource(),
      page: window.location.href,
      botcheck: ''
    };

    try {
      const res = await fetch(WEB3FORMS_ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify(payload)
      });
      const json = await res.json().catch(() => ({}));
      if (!res.ok || json?.success === false) throw new Error(json?.message || `HTTP ${res.status}`);

      setStatus('success');
      track('form_success', { service: data.service, locale: language });
      reset({ name: '', company: '', email: '', service: '', message: '' });
      setService('');
    } catch (err) {
      setStatus('error');
      track('form_error', { service: data.service, locale: language, reason: (err as Error).message });
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate className="space-y-6" aria-describedby="form-status">
      {/* Honeypot Web3Forms: oculto para humanos, tentador para bots */}
      <input type="checkbox" tabIndex={-1} autoComplete="off" aria-hidden="true" className="hidden" {...register('botcheck')} />

      <div className="grid gap-6 sm:grid-cols-2">
        <div className="flex flex-col gap-2">
          <label htmlFor="name" className={labelClass}>{f.name.label}</label>
          <input
            id="name"
            type="text"
            autoComplete="name"
            placeholder={f.name.placeholder}
            aria-invalid={!!errors.name}
            aria-describedby={errors.name ? 'name-error' : undefined}
            className={fieldClass}
            {...register('name', { required: f.name.required })}
          />
          {errors.name && <span id="name-error" className="text-xs font-medium text-red-700">{errors.name.message}</span>}
        </div>

        <div className="flex flex-col gap-2">
          <label htmlFor="company" className={labelClass}>{f.company.label}</label>
          <input
            id="company"
            type="text"
            autoComplete="organization"
            placeholder={f.company.placeholder}
            aria-invalid={!!errors.company}
            aria-describedby={errors.company ? 'company-error' : undefined}
            className={fieldClass}
            {...register('company', { required: f.company.required })}
          />
          {errors.company && <span id="company-error" className="text-xs font-medium text-red-700">{errors.company.message}</span>}
        </div>
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="email" className={labelClass}>{f.email.label}</label>
        <input
          id="email"
          type="email"
          autoComplete="email"
          inputMode="email"
          placeholder={f.email.placeholder}
          aria-invalid={!!errors.email}
          aria-describedby={errors.email ? 'email-error' : undefined}
          className={fieldClass}
          {...register('email', {
            required: f.email.required,
            pattern: { value: /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i, message: f.email.invalid }
          })}
        />
        {errors.email && <span id="email-error" className="text-xs font-medium text-red-700">{errors.email.message}</span>}
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="service" className={labelClass}>{f.service.label}</label>
        <select
          id="service"
          aria-invalid={!!errors.service}
          aria-describedby={errors.service ? 'service-error' : undefined}
          className={`${fieldClass} cursor-pointer`}
          {...register('service', {
            required: f.service.required,
            // Cambio manual del select → el contexto también se entera
            onChange: (e) => setService(e.target.value as QuoteService)
          })}
        >
          <option value="">{f.service.placeholder}</option>
          {services.items.map((s) => (
            <option key={s.slug} value={s.slug}>{s.name}</option>
          ))}
          <option value={GENERAL_SERVICE}>{f.service.generalOption}</option>
        </select>
        {errors.service && <span id="service-error" className="text-xs font-medium text-red-700">{errors.service.message}</span>}
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="message" className={labelClass}>{f.message.label}</label>
        <textarea
          id="message"
          rows={5}
          placeholder={f.message.placeholder}
          aria-invalid={!!errors.message}
          aria-describedby={errors.message ? 'message-error' : undefined}
          className={`${fieldClass} resize-y`}
          {...register('message', {
            required: f.message.required,
            minLength: { value: 20, message: f.message.minLength }
          })}
        />
        {errors.message && <span id="message-error" className="text-xs font-medium text-red-700">{errors.message.message}</span>}
      </div>

      {/* Estado: anunciado a lectores de pantalla */}
      <div id="form-status" aria-live="polite" aria-atomic="true">
        <AnimatePresence mode="wait">
          {status === 'success' && (
            <motion.div
              key="ok"
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              className="flex items-start gap-3 rounded-[var(--radius-card)] border border-emerald-200 bg-emerald-50 p-4 text-sm text-emerald-900"
            >
              <CheckCircle2 size={20} aria-hidden className="mt-0.5 shrink-0 text-emerald-600" />
              <div>
                <p className="font-bold">{f.success.title}</p>
                <p className="mt-0.5">{f.success.text}</p>
              </div>
            </motion.div>
          )}
          {status === 'error' && (
            <motion.div
              key="err"
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              className="flex items-start gap-3 rounded-[var(--radius-card)] border border-red-200 bg-red-50 p-4 text-sm text-red-900"
            >
              <AlertCircle size={20} aria-hidden className="mt-0.5 shrink-0 text-red-600" />
              <div>
                <p className="font-bold">{f.error.title}</p>
                <p className="mt-0.5">
                  {ACCESS_KEY ? f.error.text : f.missingKey}{' '}
                  <a href={`mailto:${company.email}`} className="font-semibold underline">{company.email}</a>
                </p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <Button type="submit" variant="accent" disabled={status === 'sending'} track="form_submit_button" className="w-full sm:w-auto min-w-[220px]">
          {status === 'sending' ? f.submitting : f.submit}
          {status !== 'sending' && <ArrowRight size={16} aria-hidden />}
        </Button>
        <p className="text-xs text-slate">{f.privacy}</p>
      </div>
    </form>
  );
};
