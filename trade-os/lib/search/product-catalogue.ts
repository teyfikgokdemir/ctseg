import type { SearchAdapter, SearchRequest, SearchResult } from "./types";

// Small, openly sourced catalogue of direct product pages. Each page is checked
// live before being returned; a missing or changed page never becomes a finding.
const productPages = {
  turkey: [
    { title: "Aldeon Kimya — L-Threonine feed additive", url: "https://www.aldeon.com.tr/l-threonine.html" },
    { title: "MT Royal — L-Treonin", url: "https://mtroyal.com.tr/tr/product/l-treonin/" },
    { title: "VetFeed — L-Threonine 25 Kg", url: "https://vetfeed.com.tr/en/product/l-threonine/" },
  ],
  global: [
    { title: "CJ Bio — L-Threonine", url: "https://cjbio.net/en/products/bestamino/lthreonine" },
    { title: "Vivion — Bulk L-Threonine supplier", url: "https://vivion.com/bulk-l-threonine-supplier/" },
    { title: "GNF Chem — L-Threonine supplier", url: "https://www.gnfchem.com/l-threonine-supplier" },
  ],
};

export class ProductCatalogueAdapter implements SearchAdapter {
  name = "verified-product-catalogue";
  private readonly checked = new Map<string, Promise<SearchResult | null>>();

  private check(page: { title: string; url: string }): Promise<SearchResult | null> {
    const existing = this.checked.get(page.url);
    if (existing) return existing;
    const pending = (async () => {
      const response = await fetch(page.url, { cache: "no-store", signal: AbortSignal.timeout(10_000) });
      if (!response.ok) return null;
      const html = await response.text();
      if (!/L[\s-]?(?:Threonine|Treonin)/i.test(html)) return null;
      return { title: page.title, url: page.url, engine: this.name, publishedAt: null };
    })();
    this.checked.set(page.url, pending);
    return pending;
  }

  async search(input: SearchRequest): Promise<SearchResult[]> {
    if (!/\b(?:L[\s-]?)?(?:Threonine|Treonin)\b/i.test(input.query)) return [];
    const isTurkey = /T[üu]rkiye|Turkey/i.test(input.query);
    if (!/(?:tedarikçi|supplier)/i.test(input.query)) return [];
    const settled = await Promise.allSettled(productPages[isTurkey ? "turkey" : "global"].map((page) => this.check(page)));
    const successes = settled.filter((item): item is PromiseFulfilledResult<SearchResult | null> => item.status === "fulfilled");
    if (!successes.length && settled.some((item) => item.status === "rejected")) {
      throw new Error(`Catalogue page checks failed: ${settled.filter((item) => item.status === "rejected").length}`);
    }
    return successes.flatMap((item) => item.value ? [item.value] : []);
  }
}
