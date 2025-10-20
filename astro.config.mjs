import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://aidesignfeeds.com',
  output: 'static',                // we’re deploying static HTML to Pages
  integrations: [mdx(), sitemap()],
  // Keep rss-parser out of the bundle so it resolves correctly at build time.
  vite: {
    ssr: { external: ['rss-parser'] },
    optimizeDeps: { exclude: ['rss-parser'] }
  }
});
