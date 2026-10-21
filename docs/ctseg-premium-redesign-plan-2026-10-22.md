# CTSEG Premium Redesign — Implementation Plan
Date: 2026-10-22
Owner: CTSEG / QCT Studio
Status: approved for controlled development; not approved for production release
Repository: `teyfikgokdemir/ctseg` (Astro 7, Cloudflare Pages)

## Objective and non-negotiables
Reposition CTSEG as a premium international B2B sourcing and trade coordination brand, while retaining the existing CTSEG logo, the production site's working commercial enquiries, existing SEO equity and its multilingual/RTL structure. Use premium *restraint*, not oversized headlines or decorative animations. No imaginary certifications, manufacturers, stock, origin, success metrics or customer relationships. No reference to Buğrahan, Roseira or the historical France enquiry.

No direct pushes to `main` and no production deployment without post-review test gates. Separate the already-open Natural Oils PR #73 from the main redesign branch. PR #73 remains the owner of natural-oils product routes, content and product photography until explicitly merged; the redesign must integrate those routes without duplicating them.

## Baseline from 2026-10-22 repo + live read
- Main at `d02c83b87b9aea155b2bee41db513180328ecc7b`; PR #73 open, draft, head `e4e17b697215f6021450146c8a451e099fe35b4d` when audited.
- `src/styles/site.css` has 5,665 lines, including multiple generations of component overrides and `!important` rules. A cleanup is needed, but a mass rewrite would be high-risk.
- Root `h1,h2,h3,h4{word-break:break-word;hyphens:auto}` (line 35 on baseline) allows ugly mid-word heading splits. Screenshots show this in multiple pages.
- Root `.button:hover` changes the background but does not explicitly secure foreground contrast; later general `.button` uses light foreground, creating a plausible unreadable bright-button hover.
- In the live product portfolio, food and pistachio categories dominate. The entry-level category hierarchy does not communicate the full business scope.
- Existing company/founder card has internal editorial-instruction wording ("uydurma özgeçmiş...") that should be replaced with verified, professional copy.
- Multiple pages include low-contrast paragraph text, tall/fragmented heroes and repetitive large sector panels; screenshot evidence, not yet a browser-wide contrast audit.
- Production read verifies existing product catalogue and Iranian carpet links. These should be removed as a trade offering, with route retirement and SEO redirect mapping handled separately.

## Design direction
Style: Modern Corporate Luxury × Global Trade.
- Palette: charcoal/near-black ink; warm ivory; restrained CTSEG lime exclusively for primary CTA and select accents. Keep the red accent in the current brand mark. Use defined text-on-dark/text-on-light contrast tokens.
- Typography: choose/verify consistent variable font axes, real language glyph coverage and predictable weights; preserve a distinctive display serif for selected large headings and a clean sans for interface and body copy. Avoid awkward lone words, syllable splitting and giant 6-line headings. Avoid unsupported weight instances and fallback font mixing.
- Images: sector-specific genuine/editorial photography, preferably owned/licensed/controlled. Correct aspect ratios and accurate alt text, responsive WebP/AVIF and CLS/LCP controls. Do not show fictitious facilities/credentials.
- Layout: natural hierarchy, 12-column responsive grid, 2-3 column sector cards, readable text measures, consistent vertical rhythm, modest micro-interactions with reduced-motion support.
- Controls: uniform hover/focus/active/disabled states; minimum AA text contrast; clear tap targets and keyboard navigation.

## Target information architecture
1. Homepage: one concise hero + two clear intents (sourcing RFQ / market entry), three main services, preview of major sourcing sectors, credible 4-step process, international corridors in a compact layout, one prominent RFQ conversion area.
2. Trade portfolio: sector-first hub. Card order and grouping are editorial choices, *not* claims of verified inventory:
   - Glass & Building Materials
   - Natural Oils & Cosmetic Raw Materials (from PR #73; main hub + seven sub-products in 13 languages)
   - Food & Agricultural Products
   - Nuts, Seeds, Dates & Dried Fruit (consolidated hub; existing food product descriptions beneath it)
   - Poultry Feed & Feed Ingredients
   - Industrial Materials, Machinery & Equipment
   - Packaging & Production Inputs
   - Textiles & Private Label
   Each card: photograph, one-sentence scope, view-category and RFQ CTA. Sourcing on request, no unsupported stock assertions.
3. Remove Iranian carpets and hand-knotted silk carpet marketing, offers, images and navigation from all languages and legacy content. Audit incoming links and indexed paths before mapping 301 to a genuinely equivalent category; otherwise use 410. Do not blindly redirect to homepage or invent replacements.
4. About: rewrite founder text as a measured institutional bio; remove editorial-instruction language and evaluate the "Institutional Transparency" link. Translate through the existing locale data.
5. Sector, market and specialist pages: consistent headline hierarchy, responsive hero heights, contrast, CTAs and proof blocks. Keep their unique search intent and content where valid.

## Delivery sequence / gates
**Phase 0 — Baseline and risk register (this PR):** inventory code, URLs, fonts, QA gaps and CSS conflicts. Define the design tokens and acceptance criteria. Capture user-reported defects separately from verified root causes.
**Phase 1 — Accessibility + typography foundation (start in separate reviewable PR):** fix shared heading word wrapping; button foreground-background contrast; identify glyph coverage/variable-font weights in DevTools; audit normal/hover/focus contrast, headings and keyboard accessibility across representative pages. Do not make unverified claims about root cause of all apparent font inconsistencies.
**Phase 2 — Reusable components + concept approval:** create compact display type scale, hero variants, sector cards, RFQ variants and an image treatment on homepage + /tr/ticari-urunler/ as reference implementations. Avoid independent one-off page CSS. Visual review at 320/390/768/1024/1440/1920 widths.
**Phase 3 — Sector portfolio and content:** implement localized data-backed sector hub. Keep 18 food items in a nuts/dates category rather than as the primary face of CTSEG. Integrate the PR #73 natural oils routes and 24 images *after verifying the actual merge base*. Remove Iranian carpet content and route links with an SEO migration map.
**Phase 4 — Sitewide rollout:** apply approved reusable components to services, markets, About, glass, poultry, corridor and specialist pages. Validate all 13 languages, including TR EN DE IT FA RU ZH VI UK RO BG HE AR and RTL.
**Phase 5 — Release QA and staged launch:** CI green; check site/seo/form/images/locales/responsive; Lighthouse/Core Web Vitals and visual proof on representative LTR/RTL pages; contrast WCAG AA (4.5:1 normal, 3:1 large); correct self-canonical, reciprocal hreflang, x-default, sitemap, 404/301/410, OG, structured data and RFQ submission. Compare before/after page coverage and track RFQ conversions. Merge/deploy only after review and go/no-go.

## Current defect register / acceptance
| ID | Severity | Symptom | Minimum acceptance |
| --- | --- | --- | --- |
| TYPO-01 | P0 | uneven/inconsistent perceived letter weights across site | audit actual loaded font and fallback per locale; inspect CSS computed weights; match weight axes and remove accidental mismatches |
| TYPO-02 | P0 | headings split words, lone-letter/syllable lines | no mid-word splits on mainstream breakpoints; fit with fluid size/measure rather than splitting |
| CONTRAST-01 | P0 | unreadable text on dark cards and information panels | AA color ratios; verify using computed colors, screenshot and keyboard focus |
| CTA-01 | P0 | neon hover hides CTA label | text remains readable during hover, focus and active; keyboard and touch verified |
| HERO-01 | P1 | extremely tall hero, oversized and fragmented heading | balanced first-screen composition on desktop; no clipping or bad midword wraps on mobile |
| PORTFOLIO-01 | P1 | product page looks like a nuts-only wholesaler | sector-first category hub with natural oils integrated |
| CONTENT-01 | P1 | Iranian carpets appear in card, two links and specialist routes | removed across locales, URLs intentionally retired and SEO redirects documented |
| ABOUT-01 | P1 | founder card publicly displays an editorial instruction | human, factual, brand-appropriate copy across locales |
| REPETITION-01 | P2 | repetitive oversized trade/corridor sections | compact reusable patterns and consistent hierarchy |
| SEO-01 | P0 | redesign risks lost existing page rankings | URL inventory, redirects, internal-link, indexing, metadata and hreflang checks |

## PR/branch strategy and verification rules
- PR #73: natural-oils workstream; never overwrite by redesign.
- `design/ctseg-premium-foundation-20261022`: baseline and core safe foundation; PR to `main`, not deployed.
- Subsequent scoped PRs for homepage/portfolio, about copy, deprecated carpets, and broader rollout. Rebase on the latest main after #73 is merged.
- Tests already defined in `package.json`: `npm run build`, `check:site`, `check:seo`, `check:form`, `check:images`, `check:locales`, `check:responsive`, `check:analytics`. CI also validates on PR. Passing overflow checks alone does not prove visual correctness or typography.
- Do not change user data, contact endpoint, lead/rate-limiter, analytics/consent or Cloudflare infrastructure in a design PR.

## Decisions to validate during implementation, not block Phase 1
- Final choice of heading font after observing Windows Chrome rendering and Turkish + all other character sets.
- Which imagery is owned/licensed and appropriate for each sector.
- Which Iranian carpet URLs have SEO equity/backlinks, and their correct 301 versus 410 disposition.
- Portfolio card sequence and corresponding localized destinations after all route owners exist.
