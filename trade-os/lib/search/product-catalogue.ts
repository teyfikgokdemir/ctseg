import type { SearchAdapter, SearchRequest, SearchResult } from "./types";

// Small, openly sourced catalogue of direct product pages. Each page is checked
// live before being returned; a missing or changed page never becomes a finding.
const productPages = {
  turkey: [
    { title: "Aldeon Kimya — L-Threonine feed additive", url: "https://www.aldeon.com.tr/l-threonine.html", companyName: "Aldeon Kimya", country: "Türkiye" },
    { title: "MT Royal — L-Treonin", url: "https://mtroyal.com.tr/tr/product/l-treonin/", companyName: "MT Royal", country: "Türkiye" },
    { title: "VetFeed — L-Threonine 25 Kg", url: "https://vetfeed.com.tr/en/product/l-threonine/", companyName: "VetFeed", country: "Türkiye" },
  ],
  global: [
    { title: "CJ Bio — L-Threonine", url: "https://cjbio.net/en/products/bestamino/lthreonine", companyName: "CJ Bio", country: "" },
    { title: "Vivion — Bulk L-Threonine supplier", url: "https://vivion.com/bulk-l-threonine-supplier/", companyName: "Vivion", country: "" },
    { title: "GNF Chem — L-Threonine supplier", url: "https://www.gnfchem.com/l-threonine-supplier", companyName: "GNF Chem", country: "" },
  ],
};

type CataloguePage = { title: string; url: string; companyName: string; country: string;
  expected?: RegExp; verifiedClaim?: string };
const buyerPages: Record<string, CataloguePage[]> = {
  Germany: [
    { title: "SafranContor — saffron importer", url: "https://www.safrancontor.de/en/about/",
      companyName: "SafranContor", country: "Almanya", expected: /saffron|safran/i,
      verifiedClaim: "Şirket sayfasında safran ithalatı ifadesi canlı doğrulandı" },
  ],
  France: [
    { title: "Safran Co. — grossiste safran", url: "https://safranco.fr/",
      companyName: "Safran Co.", country: "Fransa", expected: /safran/i,
      verifiedClaim: "Toptancı sayfasında safran ürünü canlı doğrulandı" },
    { title: "Boutique Safran — importateur distributeur", url: "https://recette.boutiquesafran.fr/page/distributeurs",
      companyName: "Boutique Safran", country: "Fransa", expected: /importateur|distributeur/i,
      verifiedClaim: "Distribütör sayfası canlı doğrulandı" },
  ],
};
const logisticsPages: Record<string, CataloguePage[]> = {
  Bulgaria: [
    { title: "Iran Trucking — Bulgaria Iran transport", url: "https://irantrucking.com/",
      companyName: "Iran Trucking", country: "Bulgaristan", expected: /Bulgaria[\s\S]*Iran|Iran[\s\S]*Bulgaria/i,
      verifiedClaim: "Bulgaristan–İran taşıma hattı şirket sayfasında doğrulandı" },
    { title: "SMF — transportation to and from Iran", url: "https://smf.bg/transportation-to-and-from-iran/",
      companyName: "System Managed Fleet", country: "Bulgaristan", expected: /Iran/i,
      verifiedClaim: "İran taşıma hizmeti sayfası canlı doğrulandı" },
    { title: "Saratrans — Europe Iran freight forwarding", url: "https://www.saratrans-ltd.com/",
      companyName: "Saratrans", country: "Bulgaristan", expected: /Iran/i,
      verifiedClaim: "İran hattı şirket sayfasında canlı doğrulandı" },
  ],
  Turkey: [
    { title: "VK Lojistik — Türkiye İran nakliye", url: "https://www.vklojistik.com/",
      companyName: "VK Lojistik", country: "Türkiye", expected: /İran|Iran/i,
      verifiedClaim: "Türkiye–İran taşıma hattı şirket sayfasında doğrulandı" },
    { title: "Deniz Transport — Iran road transportation", url: "https://deniztransport.com/en/service/4/international-road-transportation",
      companyName: "Deniz Transport", country: "Türkiye", expected: /Iran/i,
      verifiedClaim: "İran karayolu hizmeti sayfası canlı doğrulandı" },
  ],
};

export class ProductCatalogueAdapter implements SearchAdapter {
  name = "verified-commercial-catalogue";
  private readonly checked = new Map<string, Promise<SearchResult | null>>();

  private check(page: CataloguePage): Promise<SearchResult | null> {
    const existing = this.checked.get(page.url);
    if (existing) return existing;
    const pending = (async () => {
      const response = await fetch(page.url, { cache: "no-store", signal: AbortSignal.timeout(10_000) });
      if (!response.ok) return null;
      const html = await response.text();
      if (!(page.expected ?? /L[\s-]?(?:Threonine|Treonin)/i).test(html)) return null;
      return { title: page.title, url: page.url, engine: this.name, publishedAt: null,
        companyName: page.companyName, country: page.country || undefined, productPageVerified: true,
        verifiedClaim: page.verifiedClaim || "Ürün sayfasında ürün adı canlı doğrulandı" };
    })();
    this.checked.set(page.url, pending);
    return pending;
  }

  async search(input: SearchRequest): Promise<SearchResult[]> {
    let pages: CataloguePage[] = [];
    if (/(?:L[\s-]?)?(?:Threonine|Treonin)/i.test(input.query) && /tedarikçi|supplier/i.test(input.query)) {
      pages = productPages[/T[üu]rkiye|Turkey/i.test(input.query) ? "turkey" : "global"];
    } else if (/safran|saffron/i.test(input.query) && /importer|buyer|distributor/i.test(input.query)) {
      pages = buyerPages[/Almanya|Germany/i.test(input.query) ? "Germany" : /Fransa|France/i.test(input.query) ? "France" : ""] || [];
    } else if (/Iran|İran/i.test(input.query) && /forwarder|freight/i.test(input.query)) {
      pages = logisticsPages[/Bulgaristan|Bulgaria/i.test(input.query) ? "Bulgaria" : /T[üu]rkiye|Turkey/i.test(input.query) ? "Turkey" : ""] || [];
    }
    const settled = await Promise.allSettled(pages.map((page) => this.check(page)));
    const successes = settled.filter((item): item is PromiseFulfilledResult<SearchResult | null> => item.status === "fulfilled");
    if (!successes.length && settled.some((item) => item.status === "rejected")) {
      throw new Error(`Catalogue page checks failed: ${settled.filter((item) => item.status === "rejected").length}`);
    }
    return successes.flatMap((item) => item.value ? [item.value] : []);
  }
}
