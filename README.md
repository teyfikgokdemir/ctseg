# CTSEG Corporate Website

Premium multilingual Astro website for CTSEG's international B2B sourcing, market-entry and trade coordination operations.

The global sourcing architecture is service-led and demand-driven: manufacturing and buying countries may both be outside Türkiye. Seven industries and seven capabilities share localized editorial pages across all 13 active languages. Vietnam and South Korea are research markets, not claims of an established supplier network.

- `src/data/global-sourcing-locales.ts`: explicit localized commercial copy.
- `src/data/global-sourcing.ts` and `src/components/GlobalSourcing.astro`: shared global page model and editorial template.
- `/{lang}/industries/`, `/{lang}/solutions/`, `/{lang}/global-markets/`: canonical global directories.
- `docs/migrations/`: complete baseline URL decisions, 39 equivalent overview redirects and 349 retired glass URLs.
- `functions/_middleware.js`: HTTP 410 for the retired glass namespace; contact API continues through the existing endpoint.
- `docs/global-sourcing-assets.json`: generated-image provenance, prompts, variants and review record. Images illustrate categories and do not depict CTSEG inventory or facilities.

Run `npm run check:global` and `npm run check:migration` in addition to existing validation. Generated high-resolution masters remain local and are delivered separately; only responsive web variants are versioned.

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
npm run check:performance
npm run check:responsive
npm run validate
```

## Locale and intent architecture

The active locale registry contains 13 languages: Turkish, English, German, Italian, Persian, Russian, Chinese, Vietnamese, Ukrainian, Romanian, Bulgarian, Hebrew and Arabic. Hebrew is a focused `/he/` trade hub; the other 12 locales use the full route matrix. Ukrainian is part of the full site.

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
