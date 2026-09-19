import { BingRssAdapter } from "./bing-rss";
import { ProductCatalogueAdapter } from "./product-catalogue";
import { SearxngAdapter } from "./searxng";
import type { SearchAdapter } from "./types";

export function getFreeSearchAdapters(): SearchAdapter[] {
  const adapters: SearchAdapter[] = [new ProductCatalogueAdapter(), new BingRssAdapter()];
  const searxngUrl = process.env.SEARXNG_URL?.trim();
  if (searxngUrl) adapters.unshift(new SearxngAdapter(searxngUrl));

  return adapters;
}

export * from "./types";
