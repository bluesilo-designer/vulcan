import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

/* BASE lets the site live under a sub-path (for example a GitHub Pages
   project site at /vulcan/). Set SITE_BASE at build time; default is root. */
export default defineConfig({
  base: process.env.SITE_BASE || '/',
  plugins: [react()],
  server: { port: 3100 },
});
