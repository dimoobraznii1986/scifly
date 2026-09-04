// vite.config.js
import { copyFileSync } from 'fs';
import { resolve } from 'path';
import { defineConfig } from 'vite';

// GitHub Pages serves this repo from its root, so robots.txt and sitemap.xml live
// at the root. Copy them into dist/ as well so a built deploy keeps working.
const ROOT_FILES = ['robots.txt', 'sitemap.xml', 'CNAME'];

const copyRootFiles = () => ({
  name: 'copy-root-files',
  closeBundle() {
    for (const f of ROOT_FILES) {
      copyFileSync(resolve(__dirname, f), resolve(__dirname, 'dist', f));
    }
  },
});

export default defineConfig({
  plugins: [copyRootFiles()],
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
