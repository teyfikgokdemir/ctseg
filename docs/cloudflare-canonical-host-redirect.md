# Cloudflare canonical host redirect

The repository controls path redirects and trailing-slash normalization. The `www` and HTTP host variants must be normalized at the Cloudflare edge so a request never reaches a duplicate 200 page or a multi-hop scheme/host chain.

In **Cloudflare Dashboard → ctseg.com.tr → Rules → Redirect Rules → Single Redirects**, create a rule before other redirect rules:

- Name: `Canonical HTTPS non-www`
- Incoming request expression:
  `(http.host eq "www.ctseg.com.tr") or (http.request.scheme eq "http")`
- Type: Dynamic
- Target URL expression:
  `concat("https://ctseg.com.tr", http.request.uri.path)`
- Status code: `301`
- Preserve query string: enabled

Expected edge behaviour:

- `http://ctseg.com.tr/` → `https://ctseg.com.tr/`
- `https://www.ctseg.com.tr/` → `https://ctseg.com.tr/`
- `https://www.ctseg.com.tr/en/?source=test` → `https://ctseg.com.tr/en/?source=test`
- `http://www.ctseg.com.tr/tr/hizmetler/stratejik-tedarik/?source=test` → `https://ctseg.com.tr/tr/hizmetler/stratejik-tedarik/?source=test`

Each response must be a single `301` hop, retain its query string and never return `200` on `www`. This rule is an explicit post-merge manual action; repository changes do not activate Cloudflare settings.
