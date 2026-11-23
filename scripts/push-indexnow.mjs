import fs from 'node:fs';
import path from 'node:path';
import { hubConfig } from '../src/config/hub.config.mjs';

if (!hubConfig.indexNowKey) {
  console.log('Set hubConfig.indexNowKey in src/config/hub.config.mjs before pushing IndexNow.');
  process.exit(0);
}

const sitemapFile = path.resolve('dist/sitemap-0.xml');
if (!fs.existsSync(sitemapFile)) {
  console.error('Run npm run build first so dist/sitemap-0.xml exists.');
  process.exit(1);
}

const xml = fs.readFileSync(sitemapFile, 'utf8');
const urls = Array.from(xml.matchAll(/<loc>(.*?)<\/loc>/g)).map((m) => m[1]);

const payload = {
  host: hubConfig.domain,
  key: hubConfig.indexNowKey,
  keyLocation: `${hubConfig.siteUrl}/${hubConfig.indexNowKey}.txt`,
  urlList: urls,
};

const res = await fetch('https://api.indexnow.org/indexnow', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json; charset=utf-8' },
  body: JSON.stringify(payload),
});
console.log(`IndexNow response: HTTP ${res.status} for ${urls.length} URLs.`);
