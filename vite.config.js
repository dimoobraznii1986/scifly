// vite.config.js
import { copyFileSync, cpSync } from 'fs';
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
    // Publication PDFs are linked by absolute URL, so Vite does not bundle them.
    cpSync(resolve(__dirname, 'assets/publications'),
           resolve(__dirname, 'dist/assets/publications'), { recursive: true });
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
        publications: resolve(__dirname, 'publications.html'),
        publications_eng: resolve(__dirname, 'publications-eng.html'),
        manych_populations_2024: resolve(__dirname, 'publications/manych-populations-2024.html'),
        manych_populations_2024_eng: resolve(__dirname, 'publications/manych-populations-2024-eng.html'),
        sarpa_pelicans_2021: resolve(__dirname, 'publications/sarpa-pelicans-2021.html'),
        sarpa_pelicans_2021_eng: resolve(__dirname, 'publications/sarpa-pelicans-2021-eng.html'),
        zooculture_breeding_2019: resolve(__dirname, 'publications/zooculture-breeding-2019.html'),
        zooculture_breeding_2019_eng: resolve(__dirname, 'publications/zooculture-breeding-2019-eng.html'),
        manych_factors: resolve(__dirname, 'publications/manych-factors.html'),
        manych_factors_eng: resolve(__dirname, 'publications/manych-factors-eng.html'),
        eaza_programme_report_2023: resolve(__dirname, 'publications/eaza-programme-report-2023.html'),
        eaza_programme_report_2023_eng: resolve(__dirname, 'publications/eaza-programme-report-2023-eng.html'),
        eaza_programme_2020: resolve(__dirname, 'publications/eaza-programme-2020.html'),
        eaza_programme_2020_eng: resolve(__dirname, 'publications/eaza-programme-2020-eng.html'),
      },
    },
  },
});
