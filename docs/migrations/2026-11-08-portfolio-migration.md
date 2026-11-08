# Global sourcing portfolio migration

## Retirement decision

Commercial glass sourcing is withdrawn; construction is a new industry and is not a like-for-like glass replacement. Every baseline glass URL in [the exact route inventory](2026-11-08-retired-glass-routes.json) returns HTTP 410 through Cloudflare Pages Functions middleware, including slashless forms. No homepage redirect or unsupported Pages 410 redirect rule is used. Dedicated source route files are removed, so retired content is absent from static output and the generated sitemap. Other URLs continue through the existing request pipeline, including /api/contact.

| Locale | Baseline retired URLs | HTTP action |
|---|---:|---|
| ar | 26 | 410 |
| bg | 27 | 410 |
| de | 27 | 410 |
| en | 27 | 410 |
| fa | 27 | 410 |
| tr | 27 | 410 |
| he | 26 | 410 |
| it | 27 | 410 |
| ro | 27 | 410 |
| ru | 27 | 410 |
| uk | 27 | 410 |
| vi | 27 | 410 |
| zh | 27 | 410 |

Total: 349 URLs. The JSON file is the per-route migration record; all entries share the explicit 410 decision. Previously unknown URLs in the retired glass namespace also return 410.

## Food consolidation

Nuts and dried fruit are retained as secondary food categories. Useful existing product detail URLs remain available with their specific content; they are not redirected to a generic category. The portfolio no longer presents nuts as a peer industry. New food pages are the category entry points. Specific product URLs are not redirected. The 39 old service, portfolio and market overview URLs consolidate via explicit 301 to their equivalent solution, industry and global-market index pages. Existing legacy redirects pointing to those overviews are flattened to the final canonical target, avoiding chains. See the complete baseline decision inventory and overview redirect manifest. Legitimate product packaging references to glass containers remain permissible.

## Market context

Global navigation and machine-readable summaries use broad market coverage. Existing country and corridor pages may retain factual contextual information; historical origin information does not imply promotional priority, current availability or a guaranteed trade route.

## Validation

Run the normal build and node scripts/check-portfolio-migration.mjs. The regression check tests all recorded slash and slashless URLs, HEAD behavior, noindex headers, non-retired/API passthrough, emitted HTML links and XML sitemap absence. Edge behavior is tested through the actual middleware handler locally; production status requires deployment and live verification.

Local verification after the global rebuild: migration regression passed (349 retirements, 39 overview redirects, 792 retained baseline URLs). Site check passed for 1,014 HTML pages and 97,289 internal links, including metadata and reciprocal hreflang. A text-content scan found no active glass sourcing advertisements and no remaining scanned translated legal-company claims; six existing author credits remain. Deployment and live HTTP verification were not performed.
