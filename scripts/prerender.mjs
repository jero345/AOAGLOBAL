/**
 * Prerender estático de las rutas públicas.
 *
 * Se ejecuta después de `vite build` (cliente) y `vite build --ssr` (servidor):
 *   1. lee dist/index.html (plantilla con los assets del cliente),
 *   2. renderiza cada ruta con entry-server (React + Helmet),
 *   3. escribe dist/<ruta>/index.html con el HTML completo y las etiquetas <head>.
 *
 * Resultado: Google (y cualquier crawler) recibe título, meta, JSON-LD y
 * contenido sin ejecutar JavaScript. El cliente hidrata sobre ese HTML.
 */
import { readFileSync, writeFileSync, mkdirSync, rmSync } from 'node:fs';
import { resolve, dirname } from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const dist = resolve(root, 'dist');
const ssrDir = resolve(root, 'dist-ssr');

/** Rutas a prerenderizar → archivo de salida (relativo a dist/) */
const ROUTES = [
  ['/', 'index.html'],
  ['/es/', 'es/index.html'],
  ['/ai-consulting', 'ai-consulting/index.html'],
  ['/ai-consulting-australia', 'ai-consulting-australia/index.html'],
  ['/es/consultoria-inteligencia-artificial', 'es/consultoria-inteligencia-artificial/index.html'],
  ['/es/consultoria-ia-latinoamerica', 'es/consultoria-ia-latinoamerica/index.html'],
  ['/privacy-policy', 'privacy-policy/index.html'],
  ['/es/politica-de-privacidad', 'es/politica-de-privacidad/index.html']
];

const template = readFileSync(resolve(dist, 'index.html'), 'utf8');
const { render } = await import(pathToFileURL(resolve(ssrDir, 'entry-server.js')).href);

for (const [url, out] of ROUTES) {
  const { html, helmet } = render(url);
  // Helmet serializa los props tal cual (hrefLang, crossOrigin); en HTML estático van en minúsculas
  const head = [helmet.title, helmet.meta, helmet.link, helmet.script]
    .map((h) => h.toString())
    .join('\n    ')
    .replace(/hrefLang=/g, 'hreflang=')
    .replace(/crossOrigin=/g, 'crossorigin=');
  const htmlAttrs = helmet.htmlAttributes.toString();

  let page = template
    // El <title> estático solo era fallback: lo sustituye el de Helmet
    .replace(/<title>[\s\S]*?<\/title>\s*/, '')
    .replace('<html lang="en">', `<html ${htmlAttrs}>`)
    .replace('</head>', `    ${head}\n  </head>`)
    .replace('<div id="root"></div>', `<div id="root">${html}</div>`);

  const file = resolve(dist, out);
  mkdirSync(dirname(file), { recursive: true });
  writeFileSync(file, page, 'utf8');
  console.log(`prerender ${url} → dist/${out} (${(page.length / 1024).toFixed(0)} KB)`);
}

rmSync(ssrDir, { recursive: true, force: true });
