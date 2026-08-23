# CTSEG Corporate Website

Premium multilingual Astro website for CTSEG in Turkish, English, German, Italian, Persian, Russian, Simplified Chinese and Vietnamese. The REFLEX medical catalogue also exposes dedicated Albanian, Macedonian and Serbian routes.

## Commands

```bash
npm install
npm run dev
npm run build
npm run check:site
npm run validate
```

`check:site` validates generated internal links, page language, title, description, canonical, reciprocal multilingual hreflang coverage, and single header/footer rendering.

## Architecture

- `src/data/site.ts`: shared locale dictionaries, product catalogue and route slugs
- `src/lib/routes.ts`: static route matrix and metadata resolution
- `src/components/PageContent.astro`: reusable page templates
- `src/components/SiteHeader.astro` and `SiteFooter.astro`: single shared site chrome
- `src/pages/[lang]/[...path].astro`: multilingual static route generator

Cloudflare Pages uses `npm run build`, outputs `dist`, and requires Node.js 20+.
