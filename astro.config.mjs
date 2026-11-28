import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import { hubConfig } from './src/config/hub.config.mjs';

const NO_MAP_SLUGS = new Set(['marvel-rivals', 'gta-6', 'we-march-as-one', 'hero-clash']);
const TRADING_SLUGS = new Set([]); // Only enable /values/ in sitemap for games with live player trading

export default defineConfig({
  site: hubConfig.siteUrl,
  trailingSlash: 'always',
  integrations: [
    sitemap({
      filter: (page) => {
        const u = new URL(page);
        const parts = u.pathname.split('/').filter(Boolean);
        if (parts[0] === '404') return false;
        if (parts.length === 2) {
          const [slug, sub] = parts;
          if (sub === 'map' && NO_MAP_SLUGS.has(slug)) return false;
          if (sub === 'values' && !TRADING_SLUGS.has(slug)) return false;
        }
        return true;
      },
      serialize: (item) => {
        item.lastmod = new Date('2026-11-28T00:00:00Z').toISOString();
        return item;
      },
    }),
  ],
});
