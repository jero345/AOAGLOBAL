# Cómo editar textos y precios sin tocar componentes

Todo el texto visible del sitio vive en **dos archivos**, uno por idioma:

| Idioma | Archivo | Mercado |
|---|---|---|
| Inglés (raíz `/`) | `src/content/en.ts` | Australia — ortografía AU, "you" |
| Español (`/es`) | `src/content/es.ts` | LATAM — tuteo |

Los componentes solo leen de ahí. No hay texto en `src/components/`.

## Reglas

1. **Los dos archivos tienen exactamente las mismas claves.** El contrato está en `src/content/types.ts`. Si borras o renombras una clave en un idioma, `npm run build` falla con un error de TypeScript que te dice qué falta. Eso es intencional: nunca sale a producción un texto vacío.
2. **No traduzcas literal.** Cada idioma está escrito para su mercado (ver comentario al inicio de cada archivo).
3. **Comillas:** los textos van entre comillas simples `'...'`. Si el texto lleva un apóstrofo (`can't`), usa el tipográfico `’` o escápalo `\'`.
4. Después de editar: `npm run build`. Si compila, está bien.

## Datos de ejemplo

Testimonios, precios y plazos son **ficticios** (hay un comentario al inicio de `en.ts` y `es.ts`). Reemplázalos por los reales antes de publicar: secciones `pricing.plans`, `socialProof` y las respuestas de `faq` sobre garantía (30 días) y ventana horaria.

## Precios (`pricing.plans`)

Cada plan tiene:

```ts
{
  slug: 'web',                 // NO cambiar: enlaza servicio ↔ formulario
  name: 'Website design & development',
  problem: 'For businesses whose site isn’t bringing in enquiries.',
  deliverables: ['...', '...'],
  priceUsd: '1,500',           // solo el número; "From USD" lo pone el componente
  priceAud: '2,300',           // solo en en.ts; en es.ts déjalo ''
  timeline: '3–4 weeks',
  featured: true               // exactamente UNO en true: es la tarjeta destacada
}
```

- `pricing.disclaimer` es la nota de "precios referenciales".
- `pricing.secondaryCurrencyNote` (`'≈ AUD'` en EN, `''` en ES) controla si se muestra la segunda moneda.

## Servicios (`services.items`)

Mismo `slug` que en `pricing.plans` y que en el `<select>` del formulario. Si añades un servicio nuevo:

1. Añade el slug a `ServiceSlug` en `src/content/types.ts`.
2. Añádelo a `services.items` y `pricing.plans` en **ambos** idiomas.
3. Añádelo a `VALID` en `src/context/QuoteContext.tsx`.

## Preguntas frecuentes (`faq.items`)

Lista de `{ q, a }`. Se renderizan en el acordeón **y** en el JSON-LD `FAQPage` automáticamente.

## SEO (`meta`)

`meta.title` y `meta.description` alimentan `<title>`, meta description, Open Graph y Twitter. La imagen social es `public/og-image.png` (1200×630).

## Variables de entorno

Copia `.env.example` a `.env`:

| Variable | Para qué |
|---|---|
| `VITE_WEB3FORMS_KEY` | Access key del formulario. Sin ella el formulario muestra un aviso y no envía. |
| `VITE_GA4_ID` | Google Analytics 4 (opcional). Vacío = inactivo. |
| `VITE_META_PIXEL_ID` | Meta Pixel (opcional). Vacío = inactivo. |

En Vercel: *Settings → Environment Variables*, y redeploy.
