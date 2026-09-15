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

- Principio de marca: **Estrategia · Tecnología · Ejecución**. La tecnología es un medio para mejorar cómo opera una organización.
- **Sin geografía**: no mencionar países, ciudades, oficinas ni dónde está el equipo. Solo `AOA Global Services LLC` y, discretamente, `US-registered company` (`footer.legal`).
- **Sin precios públicos**: nada de cifras, paquetes ni tarifas. Si hace falta hablar de inversión: "Antes de comenzar, se establecen claramente alcance, entregables, cronograma e inversión."
- **48 horas** solo como microcopy de baja jerarquía y solo para requerimientos claramente definidos (`hero.note`). No es la promesa de marca.
- **IA** solo como tecnología dentro de "Automatización y soluciones inteligentes" o en capacidades concretas. Nunca en hero, claim, menú, footer ni como pregunta de FAQ.
- **Sin testimonios ni cifras inventadas**: la sección `projects` presenta tipos de solución, no clientes.
- **Voz**: institucional, sin tutear (la organización, la operación, el proyecto…). Sin lenguaje de agencia rápida ni de precio.
- **CTAs permitidos**: Explorar soluciones · Iniciar un proyecto · Enviar requerimiento. No inventar otros.

## Capacidades (`capabilities.items`)

Cinco categorías fijas, identificadas por `slug`: `strategy`, `automation`, `platforms`, `data`, `web`. El mismo slug enlaza la tarjeta con el campo "Tipo de proyecto" del formulario (`contact.form.projectType.options`). Cada tarjeta tiene `challenge` → `what` → `outcome` y `capabilities` (chips).

Si añades una categoría:

1. Añade el slug a `ServiceSlug` en `src/content/types.ts`.
2. Añádela a `capabilities.items`, `contact.form.projectType.options` y `footer.solutions` en **ambos** idiomas.
3. Añádela a `VALID` en `src/context/QuoteContext.tsx`.

La sección `projects` (Proyectos y soluciones) describe **tipos de solución**; no afirmar que corresponden a clientes concretos.

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
