# CTSEG SEO URL architecture

## Turkish home page

The preferred Turkish homepage is `https://ctseg.com.tr/`. It is a `200` page with a self-referencing canonical. The historical `/tr` and `/tr/` variants permanently redirect to `/` in one hop and are intentionally absent from the sitemap.

This avoids keeping `/` and `/tr/` as two indexable copies while preserving the established root homepage and existing user experience. Google Search Console may continue to classify `/tr/` as a redirect page; that is the intended result, not an indexing error.

## Languages and hreflang

The core multilingual set is Turkish, English, German, Italian, Persian, Russian, Simplified Chinese and Vietnamese. Each core route advertises only counterparts that actually exist, including itself. Reciprocal mappings use the localized route tables rather than assuming identical slugs. The REFLEX medical catalogue additionally exposes Albanian, Macedonian and Serbian routes from its dedicated medical locale registry.

English is the intentional `x-default` because CTSEG serves an international B2B audience and English is the neutral fallback when no supported language matches. Persian sourcing pages are part of the current localized route surface. The additional Albanian, Macedonian and Serbian routes are limited to the REFLEX medical catalogue and are not general site locales.

## Canonical URL standard

Indexable URLs use:

- HTTPS
- the non-`www` host
- a trailing slash
- a self-referencing canonical

Astro generates the canonical sitemap from public routes. The post-build finalizer adds explicit one-hop `301` rules for slashless forms. Legacy routes redirect directly to a built canonical target and are excluded from the sitemap.
