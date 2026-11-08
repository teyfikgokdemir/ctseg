# Verification record

## Baseline

The baseline build, site, SEO, form, image and locale checks passed. The initial aggregate validation's browser phase overlapped later rebuilds and timed out; it is not claimed as a stable baseline browser pass. See audit.md.

## Current implementation

Fresh final core checks recorded exit code 0 for all of: `check:site`, `check:seo`, `check:global`, `check:migration`, `check:locales`, `check:parity`, `check:images`, `check:analytics`, `check:form`. Build emitted 1,014 HTML pages, including 1,013 indexable canonical URLs. Site check traversed 97,594 internal links. Migration tests cover 349 recorded retired URLs, slashless/HEAD variants, 39 direct overview redirects and 792 retained baseline URLs. The new global route test includes retained contact/privacy language-switch regressions.

`check:responsive`: 95 browser page cases, zero failures. Covers all 13 homes at 390/768/1440, textile/beauty pages, contact pages, representative capabilities/market/legacy pages, working keyboard menu/locale selection, loaded images, intrinsic dimensions, RTL and horizontal overflow, consent accept/reject and two mocked commercial submissions. No real inquiry was sent.

`check:performance`: 28 page/viewport combinations passed. TR mobile home measured 218,944 image bytes and CLS 0. Lighthouse three-run median on the redesigned homepage: performance 93, accessibility 100, best practices 100, SEO 100; FCP 1,538ms, LCP 3,225ms, TBT 0, CLS 0. Lab results are not field Core Web Vitals. Chrome emitted non-fatal EPERM cleanup warnings; the measurements and threshold checks completed successfully.

`npm audit --audit-level=high`: zero vulnerabilities. No standalone repository lint/typecheck/unit script is available. Existing contact integration/security and analytics tests are retained and exercised.

## Failures investigated and resolved

- Global content contract failed against the baseline, then passed after implementation.
- Duplicate old/new overview pages resolved through 39 direct, equivalent 301 migrations.
- Missing FA/HE alternates corrected without mixing historical Iran corridor pages with global homes.
- Hebrew food/service detail orphans and duplicate process metadata corrected.
- Reviewer found retained-page language switching fell back to home; fixed using actual page alternates. Link validation then detected raw alternate dictionaries included non-emitted RO/BG insight details; header now receives the same filtered alternate set actually published in the head. Full site checks passed afterward.
- Two generated photos were superseded because sheep and bricks did not meet the equipment brief; replacements were reviewed against manufacturer reference photography.

## Design heuristic limitations

The independent design-taste inspector is not a passing acceptance check: its served production-build run recorded 3 stylistic FAIL and 7 WARN. The remaining rules flag footer/consent hairlines, temporary text coverage by the un-dismissed preserved cookie banner, and an animation count below its gallery-style preference. The site deliberately preserves consent and restrained/reduced-motion behavior instead of adding unrelated footage or excessive animation. Other warnings concern inherited brand ivory, size variety and minor consent text measures. Production browser screenshots were visually reviewed. Report these heuristic results separately from the passing repository/SEO/accessibility checks; do not claim a perfect design gate.

## Delivery boundaries

No production deployment, merge, live form email delivery, field CWV observation or live 410 verification has been performed. Local middleware tests prove handler behavior, not account deployment configuration. Native-speaker review remains advisable for 13-language commercial/legal copy. Supplier networks, distribution authorization, production capacity and brand partnerships are not asserted.
