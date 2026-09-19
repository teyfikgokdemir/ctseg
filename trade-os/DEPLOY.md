# CTSEG Trade OS deployment

Target hostname: `trade.ctseg.com`

## Railway

Create a new Railway service from `teyfikgokdemir/ctseg`:

- Branch: `trade-os`
- Root directory: `trade-os`
- Builder: Dockerfile (detected from `railway.toml`)
- Add a PostgreSQL service and expose its `DATABASE_URL` to Trade OS.

Required environment variables:

```
DATABASE_URL=
AUTHORIZED_EMAILS=
PRIMARY_ADMIN_EMAIL=
CLOUDFLARE_ACCESS_TEAM_DOMAIN=
CLOUDFLARE_ACCESS_AUD=
SEARXNG_URL=
PAID_DATA_SOURCES_ENABLED=false
PAID_SEARCH_PROVIDERS_ENABLED=false
PAID_ENRICHMENT_ENABLED=false
```

Do not add `DEV_USER_EMAIL` in production.

## Search backend

Deploy the self-hosted SearXNG service from:

`trade-os/infra/searxng`

Keep that service private where possible and set its internal URL as `SEARXNG_URL`.

Without `SEARXNG_URL`, the free router still checks Bing RSS and a small live-verified
commercial catalogue. This catalogue covers known example products and routes; it is
not a general web index. `PUBLIC_SEARXNG_URL` is an optional, explicit opt-in for a
public SearX-compatible JSON endpoint whose operator permits automated requests.
Rate limits and provider failures appear in the per-query diagnostics.

The research parser and evidence review use local rules by default. An optional
localhost Ollama service can be connected with `LOCAL_RESEARCH_AI_URL` and
`LOCAL_RESEARCH_AI_MODEL`; no paid AI endpoint is called automatically. Model output
cannot mark an unsupported company or claim as verified.

## Cloudflare

1. Point `trade.ctseg.com` to the Railway Trade OS service.
2. Create a Cloudflare Access self-hosted application for `trade.ctseg.com`.
3. Allow only Teyfik Gökdemir and Mina Fakhimi.
4. Copy the Access application AUD tag to `CLOUDFLARE_ACCESS_AUD`.
5. Set the Cloudflare Access team domain in `CLOUDFLARE_ACCESS_TEAM_DOMAIN`.

The application validates the signed `Cf-Access-Jwt-Assertion` itself. Direct Railway-origin requests cannot authenticate by spoofing the email header.

## Health

Railway may access `/api/health` directly. All other application routes remain behind Access verification.
