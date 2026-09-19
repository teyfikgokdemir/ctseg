# CTSEG Trade OS

Private trade intelligence and operations workspace for CTSEG.

## Core rules

- Free-first research.
- Every commercial claim must keep evidence/source metadata.
- Freshness verification is mandatory.
- Paid data/search/enrichment sources are disabled by default.
- Paid sources may only be shown as optional alternatives.
- Operational data must never be committed to Git.
- Production access is restricted to Teyfik Gökdemir and Mina Fakhimi.

## Modules

1. Sourcing
2. Buyer discovery
3. Logistics
4. Cases
5. Companies & contacts
6. Evidence / freshness / verification

## Local setup

```bash
cd trade-os
npm install
cp .env.example .env
npm run db:generate
npm run dev
```

## Production security

Put the deployment behind Cloudflare Access and allow only the two authorized user email addresses. Keep app-level authorization enabled as a second layer when authentication is implemented.
