# CTSEG Corporate Website

Premium multilingual Astro website for CTSEG's international B2B sourcing, market-entry and trade coordination operations.

## Commands

```bash
npm ci
npm run dev
npm run build
npm run check:site
npm run check:seo
npm run check:form
npm run check:images
npm run check:locales
npm run check:responsive
npm run validate
```

## Locale and intent architecture

Full-site locales: Turkish, English, German, Italian, Persian, Russian, Chinese and Vietnamese.

A focused Ukrainian entry is published at `/uk/` without promoting Ukrainian into the full generic route matrix.

Locale roots are intent-specific where appropriate. They must not be forced into one translation hreflang cluster when commercial search intent differs.

## Architecture

- `src/data/site.ts`: shared locale dictionaries, product catalogue and route slugs
- `src/data/locales.ts`: active locale registry and normalized schema-language mapping
- `src/lib/routes.ts`: static route matrix, metadata and canonical helpers
- `src/components/PageContent.astro`: reusable page templates
- `src/components/SiteHeader.astro` and `SiteFooter.astro`: shared full-site chrome
- `src/pages/[lang]/[...path].astro`: multilingual static route generator
- `src/pages/uk/index.astro`: focused Ukrainian market entry
- `functions/api/contact.js`: commercial lead endpoint

Cloudflare Pages uses `npm run build`, outputs `dist`, and CI runs on Node.js 22.

## Contact rate limiting

The contact function supports an atomic Cloudflare rate-limiter binding named `CONTACT_RATE_LIMITER` when available. The repository also retains a serialized fallback for environments without that binding. Production edge configuration should provide an atomic/shared limiter or equivalent Cloudflare rate-limiting rule before relying on the application limit as a hard global quota.
