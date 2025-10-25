import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import tailwind from '@astrojs/tailwind';
import cloudflare from '@astrojs/cloudflare';

export default defineConfig({
  output: 'server',
    site: 'https://aidesignfeeds.com', // must be full URL with protocol
  adapter: cloudflare({
    platform: 'workers',
    sessions: { storage: 'cookie' }, // <-- no KV needed
  }),
  integrations: [mdx(), sitemap(), tailwind()],
  vite: {
    ssr: { external: ['rss-parser'] },
    optimizeDeps: { exclude: ['rss-parser'] },
  },
});

