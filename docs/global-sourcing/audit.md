# Verified baseline — 2026-11-08

Repository: https://github.com/teyfikgokdemir/ctseg. Source checkout: `C:/Users/teyfi/Documents/Codex/2026-11-05/astro-showcase-ba-vurusu-x20-sitenin/work/ctseg`. It was clean on main, commit `10e8236782d2b75f013fdb33f2b80f2f22660a45`. After fetch, main and origin/main had zero divergence. The task uses an independent local clone on `codex/ctseg-global-trade-transformation`; the source checkout is untouched. No reset or force push.

Open PR at audit: #81, `seo/natural-oils-only-20261023`, a narrower historical portfolio proposal. Its changes are not merged into this transformation. Remote main was fetched again and remained at the same baseline commit.

Astro 7.4.7, @astrojs/sitemap 3.7.4, Playwright Core 1.65.0 and Sharp 0.35.5; npm/package-lock.json. No stack or dependency upgrade. Local Node 26; CI targets Node 22. Existing source is static Astro with dynamic static-path generation, Cloudflare Pages `dist` output, Pages contact function, custom image/build/SEO validation scripts. No separate repository lint or typecheck script exists.

Languages: TR EN DE IT FA RU ZH VI UK RO BG AR full sites and focused HE hub. FA/HE/AR use RTL. Shared chrome and BaseLayout own canonicals, alternate clusters, consent and Organization/WebSite metadata. Locale roots previously had country-specific commercial intent, especially FA; the transformation deliberately makes all homepages equivalent global sourcing pages. Non-equivalent retained detail pages keep intent-aware alternate groups.

Content: `src/data/site.ts` provides product/service locale dictionaries and route resolvers; PageContent templates consume these with completion/search/market data. Dedicated glass route generators create 349 URLs. Baseline emitted 1,181 HTML pages (1,180 indexable); full per-URL decisions and language counts are in `docs/migrations/`. Useful food product details have product-specific evidence and remain reachable from secondary food pages. No unverified mass product inventory is added.

Baseline executed: npm ci passed (309 audited packages, zero vulnerabilities); build passed; check:site passed (130,087 internal links); check:seo passed; check:form passed; check:images and check:locales passed within the original validation sequence. The long initial responsive run was not isolated from later rebuilds and ended with a selector timeout; it is not treated as a clean baseline pass. New final browser validation is run against a stable final dist instead. Complete final verification is recorded separately.

Brand: existing charcoal/lime/ivory, CTSEG logos and local DM Sans/Source Serif remain. Original product-heavy grids, flags, glass navigation and country-specific home narratives are replaced by a compact global editorial system. Image generation does not alter or imply company evidence.

Contact: existing `/api/contact` uses origin/payload validation, Turnstile, honeypot and rate limiting with optional atomic binding, then plain-text Resend delivery. New qualification data is serialized into its existing message contract; the existing whitelist is extended to seven current sectors. Analytics vendor initialization and Cansu conversion behavior remain consent-controlled. No operational credentials, CRM integration or real lead delivery is claimed from local mocks.

SEO/deployment: sitemap integration, robots, canonical trailing slash finalizer, explicit legacy redirects, structured schemas, llms and AI discovery files. Existing IndexNow code retained; no live submission performed. Production workflow is main-triggered. Branch/PR delivery does not authorize self-merge or production deployment.
