import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
  ],
  // Prerender (vite build --ssr): react-helmet-async es CommonJS; se empaqueta para evitar
  // problemas de interop al importarlo desde Node en scripts/prerender.mjs
  ssr: {
    noExternal: ['react-helmet-async'],
  },
});
