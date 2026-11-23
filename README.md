# Game Tools & Database Umbrella Hub (`game-tools-hub`)

Production-ready multi-game Astro 5 static tool hub designed for single-domain SEO authority compounding (`/[game]/calculator/`, `/[game]/map/`, `/[game]/database/`, `/[game]/values/`).

## Quick Start & Domain Switch

1. Edit `src/config/hub.config.mjs` and set `brandName`, `domain`, and `siteUrl` to your chosen domain (e.g. `dropcodex.com`, `dexanvil.com`, `gamedexhq.com`, `metacalchq.com`, `minmaxdex.com`).
2. Drop Unity (`AssetRipper`) or Unreal (`FModel`) extracted item/recipe/coordinate arrays into `src/data/games.ts`.
3. Fill partner tracking URLs or AdSense client ID in `src/config/monetization.ts`.
4. Build static pages:
   ```powershell
   $env:ASTRO_TELEMETRY_DISABLED="1"
   npm run build
   ```
