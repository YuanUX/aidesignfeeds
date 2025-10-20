import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  site: 'https://aidesignfeeds.com',
  output: 'static',
  integrations: [mdx(), sitemap(), tailwind()],
  vite: {
    ssr: { external: ['rss-parser'] },
    optimizeDeps: { exclude: ['rss-parser'] },
  },
});
