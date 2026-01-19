import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
// https://astro.build/config
export default defineConfig({
  // site: 'https://JackGraymer.github.io', // Removed for standalone
  base: '', // Relative paths for standalone file:// access
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
