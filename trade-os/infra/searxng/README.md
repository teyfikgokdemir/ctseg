# CTSEG free search backend

CTSEG Trade OS uses a self-hosted SearXNG instance as its first free metasearch adapter.

Official docs:
- https://docs.searxng.org/admin/installation-docker
- https://docs.searxng.org/dev/search_api

## Requirements

1. Deploy SearXNG with Docker/Compose on infrastructure controlled by CTSEG.
2. Enable JSON in SearXNG `search.formats`.
3. Keep the instance private or otherwise protected from public abuse.
4. Set the Trade OS environment variable:

```
SEARXNG_URL=https://your-private-search-host.example
```

Trade OS never falls back to a paid search provider automatically. If a paid source is discovered later, it is stored only as an optional alternative.
