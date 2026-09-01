# AOA Global Services — Spec de construcción en React + Tailwind

Documento de implementación. Sirve para dos cosas: (1) pegárselo a Claude Code / Cursor como brief único, o (2) ejecutarlo tú mismo componente por componente.

---

## 1. Stack

| Capa | Decisión | Por qué |
|---|---|---|
| Framework | **Vite + React 18** (`react-ts`) | Sitio de marketing de ~5 rutas, sin necesidad de SSR pesado. Build en segundos, deploy trivial. |
| Estilos | **Tailwind CSS v4** | Tokens de marca como variables CSS nativas, sin `tailwind.config.js`. |
| Rutas | **react-router-dom v6** | 5 rutas estáticas. |
| Iconos | **lucide-react** | Trazo fino, coherente con el logo geométrico. Nada de icon packs rellenos. |
| Formulario | **react-hook-form** + endpoint | Validación en cliente sin re-renders. |
| Animación | **Ninguna librería** | Solo transiciones CSS en hover/focus. Ver §7. |
| Fuente | Montserrat vía `@fontsource/montserrat` | Self-hosted; evita el flash de fuente y la dependencia de Google Fonts. |
| Deploy | Vercel | Dominio ya está en manos del usuario. |

**Si el sitio va a tener blog/Insights o el cliente pide SEO agresivo → cambiar Vite por Next.js 15 (App Router) desde el día 1.** Migrar después cuesta más que arrancar ahí. Con el alcance actual (hasta consultoría, sin contenido dinámico), Vite es suficiente.

---

## 2. Tokens de marca

`src/index.css`:

```css
@import "tailwindcss";
@import "@fontsource/montserrat/400.css";
@import "@fontsource/montserrat/500.css";
@import "@fontsource/montserrat/600.css";
@import "@fontsource/montserrat/700.css";

@theme {
  /* Paleta oficial — no añadir colores fuera de esta lista */
  --color-navy: #0B1D3A;
  --color-ink: #111111;
  --color-slate: #747474;
  --color-line: #D9D9D9;
  --color-paper: #FFFFFF;

  --font-sans: "Montserrat", ui-sans-serif, system-ui, sans-serif;

  /* Escala tipográfica */
  --text-display: 4rem;      /* 64px — H1 */
  --text-display--line-height: 1.05;
  --text-display--letter-spacing: -0.01em;
  --text-h2: 2.375rem;       /* 38px */
  --text-h2--line-height: 1.15;
  --text-h3: 1.375rem;       /* 22px */
  --text-body: 1.0625rem;    /* 17px */
  --text-body--line-height: 1.7;
  --text-eyebrow: 0.75rem;   /* 12px */
  --text-eyebrow--letter-spacing: 0.08em;

  --radius-card: 4px;
  --radius-btn: 2px;
}

@layer base {
  html { scroll-behavior: smooth; }
  body { @apply bg-paper text-slate font-sans text-body antialiased; }
  h1, h2, h3 { @apply text-ink font-semibold; }
  :focus-visible { @apply outline-2 outline-offset-2 outline-navy; }
}

@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after { animation: none !important; transition: none !important; }
}
```

**Regla de proporción cromática: 70% blanco / 20% navy / 10% grises.** El navy se usa como bloque sólido (secciones full-bleed, botón primario, footer band). Nunca como tinte, degradado ni overlay. Si una sección necesita "romper", se rompe con un bloque navy completo, no con un acento de color.

---

## 3. Estructura de archivos

```
src/
├── main.tsx
├── App.tsx                    # Router + Layout
├── index.css
├── data/
│   ├── services.ts            # 6 servicios: slug, title, summary, deliverables[]
│   ├── industries.ts          # 8 industrias: label, icon
│   ├── process.ts             # 5 pasos
│   └── nav.ts                 # links de header y footer
├── components/
│   ├── layout/
│   │   ├── Header.tsx
│   │   ├── Footer.tsx
│   │   └── Layout.tsx
│   ├── ui/
│   │   ├── Button.tsx         # variant: 'primary' | 'outline' | 'inverse'
│   │   ├── Section.tsx        # tone: 'paper' | 'line' | 'navy'
│   │   ├── Eyebrow.tsx
│   │   ├── Card.tsx
│   │   └── Divider.tsx
│   └── sections/
│       ├── Hero.tsx
│       ├── TrustBar.tsx
│       ├── ServicesGrid.tsx
│       ├── ValueSplit.tsx
│       ├── Metrics.tsx
│       ├── IndustriesGrid.tsx
│       ├── CaseTeaser.tsx
│       ├── Testimonial.tsx
│       ├── ProcessSteps.tsx
│       └── CtaBand.tsx
└── pages/
    ├── Home.tsx
    ├── Services.tsx
    ├── About.tsx
    └── Contact.tsx
```

Regla: **las páginas no contienen JSX de layout visual**, solo componen secciones y les pasan datos desde `data/`. Así el cliente puede pedir cambios de copy sin tocar componentes.

---

## 4. Componentes base (contratos)

### `Section.tsx`
Envoltorio único para el ritmo vertical. Evita que cada sección invente su propio padding.

```tsx
type SectionProps = {
  tone?: 'paper' | 'line' | 'navy';   // fondo
  children: React.ReactNode;
  id?: string;
  className?: string;
};
// paper → bg-paper | line → bg-[--color-line] | navy → bg-navy text-white
// padding: py-20 md:py-30 (80px móvil / 120px desktop)
// contenedor interno: mx-auto max-w-[1200px] px-6
```

### `Button.tsx`

```tsx
type ButtonProps = {
  variant?: 'primary' | 'outline' | 'inverse';
  href?: string;      // renderiza <Link> si es interno, <a> si es externo
  children: React.ReactNode;
};
// primary : bg-navy text-white hover:bg-ink
// outline : border border-navy text-navy hover:bg-navy hover:text-white
// inverse : bg-white text-navy hover:bg-line   (solo sobre fondo navy)
// base    : rounded-[--radius-btn] px-7 py-3.5 text-sm font-semibold
//           transition-colors duration-200
```

Sin sombras. Sin `rounded-full`. Sin flechas `→` dentro del texto del botón: la flecha va solo en los links de texto (`Learn more`), no en CTAs.

### `Card.tsx`
`bg-paper border border-[--color-line] rounded-[--radius-card] p-8`. Sin `shadow`. En hover: `hover:border-navy transition-colors`. Nada de `translate-y` en hover — es el tell más común de plantilla generada.

---

## 5. Secciones de la Home (orden y comportamiento)

| # | Componente | Fondo | Nota de implementación |
|---|---|---|---|
| 1 | `Header` | paper, sticky | `sticky top-0 z-50 border-b border-[--color-line] h-20`. Menú móvil: drawer full-screen navy, no dropdown. |
| 2 | `Hero` | paper | Grid `md:grid-cols-[55fr_45fr]`, `min-h-[85vh]`, `items-center`. Imagen con `aspect-[4/5] object-cover`. |
| 3 | `TrustBar` | line | Logos en `grayscale opacity-60`. Fila con `flex-wrap justify-between`. |
| 4 | `ServicesGrid` | paper | `grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-[--color-line]` con cards `bg-paper` → produce una rejilla de 1px sin bordes dobles. |
| 5 | `ValueSplit` | **navy** | Único bloque oscuro del scroll superior. Texto blanco, cuerpo en `text-line`. |
| 6 | `Metrics` | paper | 4 columnas con `divide-x divide-[--color-line]`. Número en `text-5xl font-bold text-navy`. |
| 7 | `IndustriesGrid` | line | 8 tiles blancos, `grid grid-cols-2 md:grid-cols-4`. |
| 8 | `CaseTeaser` | paper | 2 columnas, imagen a la izquierda. |
| 9 | `Testimonial` | paper | `max-w-[720px] mx-auto text-center`, cita en `text-[28px] font-medium text-navy leading-snug`. Sin comillas decorativas. |
| 10 | `CtaBand` | **navy** | `py-24 text-center`, botón `variant="inverse"`. |
| 11 | `Footer` | ink (#111111) | 4 columnas → 2 en móvil. Barra inferior con `border-t border-white/10`. |

**Numeración `01 / 02 / 03`:** úsala **solo** en `ProcessSteps` (Discover → Diagnose → Design → Deploy → Scale), que sí es una secuencia real. En `ValueSplit` los tres diferenciadores no son secuenciales — ahí van con divisores horizontales, no con números.

---

## 6. Responsive

- Breakpoints: solo `md` (768px) y `lg` (1024px). No inventar más.
- Móvil: `Section` baja a `py-20`, `--text-display` a `2.5rem` (40px), grids a 1 columna, hero pasa a stack con imagen debajo del texto.
- Contenedor: `px-6` móvil, `px-8` desktop, `max-w-[1200px]`.

---

## 7. Movimiento

Solo tres transiciones en todo el sitio:

1. `transition-colors` en botones, links y borde de cards (200ms).
2. Drawer del menú móvil (slide, 250ms).
3. Foco visible en teclado.

**Nada de fade-and-slide-up por sección al hacer scroll.** Es el patrón que delata una web generada y contradice el "sobrio y elegante" de la guía de marca.

---

## 8. Accesibilidad y calidad (piso no negociable)

- Contraste: `#747474` sobre blanco da 4.6:1 — pasa AA para texto normal. **No usarlo por debajo de 16px** ni para texto sobre `#D9D9D9`.
- Sobre navy, el cuerpo va en `#D9D9D9` o blanco, nunca en `#747474`.
- Toda imagen con `alt` descriptivo; las decorativas con `alt=""`.
- Formulario: `<label>` real asociado por `htmlFor`, no placeholder como etiqueta.
- Navegación completa por teclado, `:focus-visible` con outline navy.
- `prefers-reduced-motion` respetado (ya está en el CSS base).

---

## 9. Formulario de contacto

Campos: nombre completo, email corporativo, empresa, servicio de interés (select con los 6 servicios), mensaje.

Estilo: `border-b border-[--color-line]` únicamente, sin caja completa. Focus: `border-navy`. Label en `text-eyebrow uppercase text-slate`.

Backend, en orden de preferencia:
1. **Vercel Serverless Function** (`/api/contact`) → Resend para el correo. Control total, sin marca de terceros.
2. Formspree o Web3Forms si se necesita algo en producción hoy mismo.

Validación: email con regex + campo honeypot oculto contra bots. Estados: idle → sending → success → error, con mensaje inline (no alert, no toast flotante).

**Automatización posterior:** el endpoint debería disparar un webhook a n8n para (a) crear el lead en el CRM, (b) enviar auto-respuesta al prospecto, (c) notificar por Slack/WhatsApp al equipo. Diseña la función serverless devolviendo el payload completo desde el día 1 para no reescribirla después.

---

## 10. SEO técnico

- `react-helmet-async` para title y meta por ruta (o metadata nativa si se migra a Next).
- Title pattern: `{Página} | AOA Global Services`.
- JSON-LD `ProfessionalService` en la Home con nombre legal *AOA Global Services LLC*, dirección, teléfono y `sameAs` a LinkedIn.
- `sitemap.xml` y `robots.txt` en `public/`.
- Imágenes en WebP, `loading="lazy"` en todo lo que esté bajo el fold, `width`/`height` explícitos para evitar CLS.
- Objetivo Lighthouse: 95+ en Performance y 100 en Accessibility. Es alcanzable porque no hay JS pesado.

---

## 11. Orden de ejecución

1. Scaffold Vite + Tailwind v4 + tokens (§2) y verificar que Montserrat carga.
2. `ui/` completo (Button, Section, Eyebrow, Card, Divider) — es la base de todo lo demás.
3. `Header` + `Footer` + `Layout` + router.
4. Home sección por sección, en el orden de la tabla §5.
5. Services, About, Contact.
6. Responsive pass, accesibilidad pass, SEO pass.
7. Deploy a Vercel + dominio.

---

## 12. Prompt para pegar en Claude Code / Cursor

```
Build the AOA Global Services marketing website following the attached spec
(AOA-React-Spec.md) exactly.

Rules:
- Follow the token system in §2 verbatim. Do not introduce any color outside
  the five brand hex values.
- No shadows, no gradients, no rounded-full, no scroll-triggered animations.
- Build in the order defined in §11. After each step, stop and show me the
  files you created before continuing.
- Use real copy, not lorem ipsum. Tone: direct, plain verbs, sentence case,
  B2B consulting. No superlatives, no "revolutionary", no "cutting-edge".
- Every section must be responsive and keyboard accessible before you move on.

Start with step 1 and stop.
```

El `stop` explícito es importante: sin él, la herramienta genera las 4 páginas de golpe y revisar 30 archivos a la vez es más lento que revisar 5.
