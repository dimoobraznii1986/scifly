// vite.config.js
import { resolve } from 'path';
import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    outDir: 'dist',
    rollupOptions: {
      input: {
        index: resolve(__dirname, 'index.html'),
        home_eng: resolve(__dirname, 'home-eng.html'),
        pelican: resolve(__dirname, 'pelican-project.html'),
        pelican_eng: resolve(__dirname, 'pelican-project-eng.html'),
        conference: resolve(__dirname, 'conference-publication.html'),
        conference_eng: resolve(__dirname, 'conference-publication-eng.html'),
      },
    },
  },
});
