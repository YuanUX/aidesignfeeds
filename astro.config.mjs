import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import tailwind from '@astrojs/tailwind';
// ❌ remove or comment this out
// import cloudflare from '@astrojs/cloudflare';

export default defineConfig({
  output: 'static',
  site: 'https://aidesignfeeds.com',
  // ❌ remove or comment this whole block
  // adapter: cloudflare({
  //   platform: 'workers',
  //   sessions: { storage: 'cookie' },
  // }),
  integrations: [mdx(), sitemap(), tailwind()],
  vite: {
    ssr: { external: ['rss-parser'] },
    optimizeDeps: { exclude: ['rss-parser'] },
  },
});
