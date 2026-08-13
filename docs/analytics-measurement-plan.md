# CTSEG Analytics Measurement Plan

Updated: 2026-08-13

## Purpose

Measure which language, landing page, channel, commercial intent, trade direction and product family produce qualified CTSEG enquiries without sending personal or free-text form data to analytics.

## Consent boundary

- GA4 loads only after the visitor accepts analytics cookies.
- Form delivery remains available without analytics consent.
- No name, company, email, phone, product free text, message or other personal data is sent to GA4.
- First-touch attribution is stored in `sessionStorage`, not a persistent advertising cookie.
- The contact email receives only bounded attribution fields: submission path, first landing path, referrer hostname, UTM fields and optional ad click ID.

## Event contract

| Event | Trigger | Main parameters | Recommended use |
|---|---|---|---|
| `generate_lead` | Contact form delivered successfully | `trade_intent`, `trade_direction`, `product_family`, `form_type`, page and first-touch attribution | Primary key event |
| `contact_form_success` | Contact form delivered successfully | Same as above | Diagnostic continuity |
| `contact_form_start` | First focus inside the form | `trade_intent`, `trade_direction`, `product_family`, `form_type` | Funnel start |
| `contact_form_open` | Detailed request panel opened | `trade_intent`, `trade_direction`, `product_family`, `form_type` | Intent depth |
| `form_fallback_download` | Visitor downloads the request summary | `trade_intent`, `form_type` | Delivery fallback monitoring |
| `direct_contact_click` | WhatsApp or email card clicked | `contact_channel` | Assisted conversion |
| `trade_intent_click` | Buyer/producer or commercial-intent CTA clicked | `trade_intent` | Intent-path analysis |
| `product_quote_click` | Product quote CTA clicked | `page_type` | Product demand signal |
| `catalog_download` | Trade catalogue downloaded | `catalog_language` | Catalogue engagement |
| `how_we_work_cta_click` | Method CTA clicked | Global context | Trust-path engagement |
| `case_scenario_cta_click` | Scenario CTA clicked | Global context | Evidence-path engagement |
| `language_change` | Locale switch selected | `target_locale` | Language journey analysis |
| `fa_landing_referral_click` | Persian business entry clicked | `page_type` | Iranian-business pathway |

Every event also receives these bounded global parameters when available:

- `page_language`
- `page_path`
- `landing_path`
- `referrer_host`
- `utm_source`
- `utm_medium`
- `utm_campaign`
- `utm_content`
- `utm_term`
- `click_id`

## GA4 administration checklist

1. In **Admin → Events / Key events**, mark `generate_lead` as the primary key event.
2. Keep `contact_form_success` as a diagnostic event; do not count both as separate business leads in executive reporting.
3. Register event-scoped custom dimensions for `trade_intent`, `trade_direction`, `product_family`, `contact_channel`, `catalog_language`, `target_locale`, `page_language` and `landing_path`.
4. Build a funnel exploration:
   - `trade_intent_click` or `product_quote_click`
   - `contact_form_open`
   - `contact_form_start`
   - `generate_lead`
5. Build an acquisition table using session source/medium and campaign, broken down by `landing_path`, `page_language`, `trade_intent`, `trade_direction` and `product_family`.
6. Exclude internal team traffic through GA4 internal-traffic rules before interpreting conversion rates.
7. Validate in DebugView with one accepted-consent session and one rejected-consent session.

## Acceptance checks

- Rejecting analytics consent produces no GA4 request.
- Accepting analytics consent loads GA4 once and preserves navigation events.
- A successful form submission emits one `generate_lead` event.
- The contact email shows landing and UTM context when present.
- No personal or free-text form value appears in GA4 DebugView or network requests.

## Reporting cadence

Review monthly once sufficient traffic exists. Do not draw landing-page conclusions from a handful of sessions. Prioritise qualified enquiries and commercial relevance over raw event volume.
