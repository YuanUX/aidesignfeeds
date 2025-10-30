import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  output: 'static',                // Generate a purely static site
  outDir: 'dist',                  // Ensure Cloudflare uses this folder
  site: 'https://aidesignfeeds.com',
  integrations: [mdx(), sitemap(), tailwind()],
  vite: {
    ssr: { external: ['rss-parser'] },
    optimizeDeps: { exclude: ['rss-parser'] },
  },
});
