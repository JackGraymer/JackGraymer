import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
// https://astro.build/config
export default defineConfig({
  site: 'https://jackgraymer.github.io',
  base: '', 
  trailingSlash: 'always',
  outDir: 'public',
  publicDir: 'static', // Change source public dir to avoid conflict with outDir
  integrations: [
    tailwind(),
  ],
  compressHTML: true,
  build: {
    inlineStylesheets: 'always',
  }
});
