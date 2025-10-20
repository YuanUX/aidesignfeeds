import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://aidesignfeeds.com',
  output: 'static',                 // build to /dist for Cloudflare Pages
  integrations: [mdx(), sitemap()]
});
