# CTSEG SEO URL architecture

## Turkish home page

The preferred Turkish homepage is `https://ctseg.com.tr/`. It is a `200` page with a self-referencing canonical. The historical `/tr` and `/tr/` variants permanently redirect to `/` in one hop and are intentionally absent from the sitemap.

This avoids keeping `/` and `/tr/` as two indexable copies while preserving the established root homepage and existing user experience. Google Search Console may continue to classify `/tr/` as a redirect page; that is the intended result, not an indexing error.

## Languages and hreflang

The core multilingual set is Turkish, English, German, Italian and French. Each route advertises only counterparts that actually exist, including itself. Reciprocal mappings use the localized route tables rather than assuming identical slugs.

English is the intentional `x-default` because CTSEG serves an international B2B audience and English is the neutral fallback when no supported language matches. The standalone Persian sourcing landing page is not a full site locale and remains outside the global hreflang cluster.

## Canonical URL standard

Indexable URLs use:

- HTTPS
- the non-`www` host
- a trailing slash
- a self-referencing canonical

Astro generates the canonical sitemap from public routes. The post-build finalizer adds explicit one-hop `301` rules for slashless forms. Legacy routes redirect directly to a built canonical target and are excluded from the sitemap.
