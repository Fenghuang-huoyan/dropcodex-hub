import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import { hubConfig } from './src/config/hub.config.mjs';

export default defineConfig({
  site: hubConfig.siteUrl,
  trailingSlash: 'always',
  integrations: [sitemap()],
});
