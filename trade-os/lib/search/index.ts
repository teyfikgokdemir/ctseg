import { SearxngAdapter } from "./searxng";
import type { SearchAdapter } from "./types";

export function getFreeSearchAdapters(): SearchAdapter[] {
  const adapters: SearchAdapter[] = [];
  const searxngUrl = process.env.SEARXNG_URL?.trim();

  if (searxngUrl) adapters.push(new SearxngAdapter(searxngUrl));

  return adapters;
}

export * from "./types";
