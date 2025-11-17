// vite.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/Dragon-s-Designs-Website/',
  plugins: [react()],
  server: { port: 3000 },
  preview: {
    port: 5173
  }
});

