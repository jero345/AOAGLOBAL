# Cómo editar los textos sin tocar componentes

Todo el texto visible del sitio vive en **dos archivos**, uno por idioma:

| Idioma | Archivo |
|---|---|
| Inglés (raíz `/`) | `src/content/en.ts` |
| Español (`/es`) | `src/content/es.ts` |

Los componentes solo leen de ahí. No hay texto en `src/components/`.

## Reglas

1. **Los dos archivos tienen exactamente las mismas claves.** El contrato está en `src/content/types.ts`. Si borras o renombras una clave en un idioma, `npm run build` falla con un error de TypeScript que dice qué falta. Es intencional: nunca sale a producción un texto vacío.
2. **No traducir literal.** Cada idioma está escrito para su lector; mantén el tono (usted en español, neutro ejecutivo en inglés).
3. **Comillas:** los textos van entre comillas simples `'...'`. Si el texto lleva apóstrofo (`don't`), usa el tipográfico `’`.
4. Después de editar: `npm run build`. Si compila, está bien.

## Reglas de posicionamiento (no romperlas al editar)

- **Sin geografía**: no mencionar países, ciudades, oficinas ni dónde está cada área del equipo. Solo `AOA Global Services LLC` y, de forma discreta, `US-registered · Global delivery` (`footer.legalLine`).
- **Sin precios públicos**: nada de cifras, paquetes, tarifas ni "desde". La inversión se define por propuesta (`investment`).
- **48 horas** solo para requerimientos claramente definidos ("propuesta inicial en hasta 48 horas hábiles"). Nunca prometer precio sin comprender el alcance.
- Evitar lenguaje defensivo: "sin sorpresas", "antes de gastar", "barato", "competitivo".

## Datos de ejemplo

Los testimonios (`socialProof.items`) son **ficticios** — hay un comentario al inicio de `en.ts` y `es.ts`. Reemplázalos por reales antes de publicar, o elimina `<SocialProof />` de `src/pages/Home.tsx` hasta tenerlos.

## Soluciones (`services.items`)

Cinco categorías fijas, identificadas por `slug`: `strategy`, `ai`, `platforms`, `data`, `web`. El mismo slug enlaza la tarjeta con el `<select>` del formulario. Cada tarjeta tiene `problem` → `what` → `outcome`, y `details` (lo que se despliega con "Explorar solución").

Si añades una categoría:

1. Añade el slug a `ServiceSlug` en `src/content/types.ts`.
2. Añádela a `services.items` en **ambos** idiomas.
3. Añádela a `VALID` en `src/context/QuoteContext.tsx`.

## Imágenes

En `public/img/` (WebP). Para cambiar una foto, reemplaza el archivo con el mismo nombre; los textos alternativos (`imageAlt`, `alt`) están en los archivos de contenido. `public/og-image.png` (1200×630) es la imagen al compartir en redes.

## SEO (`meta`)

`meta.title` y `meta.description` alimentan `<title>`, meta description, Open Graph y Twitter. El FAQ se publica también como JSON-LD `FAQPage` automáticamente.

## Variables de entorno

Copia `.env.example` a `.env`:

| Variable | Para qué |
|---|---|
| `VITE_WEB3FORMS_KEY` | Access key del formulario. Sin ella el formulario muestra un aviso y no envía. |
| `VITE_GA4_ID` | Google Analytics 4 (opcional). Vacío = inactivo. |
| `VITE_META_PIXEL_ID` | Meta Pixel (opcional). Vacío = inactivo. |

En Vercel: *Settings → Environment Variables*, y redeploy.
