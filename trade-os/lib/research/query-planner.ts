import { extractSubject, subjectVariants } from "./relevance";
import type { PlannedQuery, ResearchRequest } from "./types";

const languageHints: Record<string, string[]> = {
  Turkey: ["tr", "en"],
  Türkiye: ["tr", "en"],
  Iran: ["fa", "en"],
  İran: ["fa", "en"],
  China: ["zh", "en"],
  Çin: ["zh", "en"],
  Germany: ["de", "en"],
  Almanya: ["de", "en"],
  France: ["fr", "en"],
  Fransa: ["fr", "en"],
  Bulgaria: ["bg", "en"],
  Bulgaristan: ["bg", "en"],
};

const typeTerms = {
  SOURCING: [
    "supplier",
    "manufacturer",
    "distributor",
    "wholesaler",
    "trader",
    "product",
    "catalogue",
  ],
  BUYER_SEARCH: [
    "importer",
    "buyer",
    "distributor",
    "wholesaler",
    "procurement",
    "retailer",
  ],
  LOGISTICS: [
    "freight forwarder",
    "logistics",
    "road freight",
    "sea freight",
    "air freight",
    "rail freight",
    "multimodal",
  ],
} as const;

function inferLanguages(request: ResearchRequest): string[] {
  if (request.languages?.length) return [...new Set(request.languages)];

  const haystack = [request.rawRequest, request.sourceRegion, request.destination]
    .filter(Boolean)
    .join(" ");

  const inferred = new Set<string>(["en"]);
  for (const [place, languages] of Object.entries(languageHints)) {
    if (haystack.toLocaleLowerCase("tr-TR").includes(place.toLocaleLowerCase("tr-TR"))) {
      languages.forEach((language) => inferred.add(language));
    }
  }

  if (/[çğıöşüİı]/i.test(haystack)) inferred.add("tr");
  return [...inferred];
}

function sourcingMarkets(request: ResearchRequest): string[] {
  if (request.sourceRegion?.trim()) return [...new Set(["Turkey", request.sourceRegion.trim(), ""])];

  const raw = request.rawRequest.toLocaleLowerCase("tr-TR");
  const markets: string[] = [];

  if (
    raw.includes("önce türkiye") ||
    raw.includes("once turkiye") ||
    raw.includes("türkiye, sonra global") ||
    raw.includes("turkey first")
  ) {
    markets.push("Turkey", "");
    return markets;
  }

  if (raw.includes("türkiye") || raw.includes("turkey")) markets.push("Turkey");
  if (raw.includes("çin") || raw.includes("china")) markets.push("China");
  if (raw.includes("almanya") || raw.includes("germany")) markets.push("Germany");
  if (raw.includes("fransa") || raw.includes("france")) markets.push("France");
  if (raw.includes("bulgaristan") || raw.includes("bulgaria")) markets.push("Bulgaria");

  if (!markets.length) markets.push("Turkey");
  markets.push("");
  return [...new Set(markets)];
}

function buyerMarkets(request: ResearchRequest): string[] {
  if (request.destination?.trim()) return [request.destination.trim()];

  const raw = request.rawRequest.toLocaleLowerCase("tr-TR");
  const markets: string[] = [];
  const pairs: Array<[string, string]> = [
    ["almanya", "Germany"],
    ["germany", "Germany"],
    ["fransa", "France"],
    ["france", "France"],
    ["iran", "Iran"],
    ["türkiye", "Turkey"],
    ["turkey", "Turkey"],
  ];

  for (const [needle, market] of pairs) {
    if (raw.includes(needle)) markets.push(market);
  }

  return [...new Set(markets.length ? markets : [""])];
}

function logisticsGeography(request: ResearchRequest): string {
  if (request.sourceRegion || request.destination) {
    return [request.sourceRegion, request.destination].filter(Boolean).join(" ");
  }
  return request.rawRequest.trim();
}

export function planResearchQueries(request: ResearchRequest): PlannedQuery[] {
  const maxQueries = Math.min(Math.max(request.maxQueries ?? 12, 6), 40);
  const languages = inferLanguages(request);
  const subject = extractSubject(request);
  const exactSubject = request.type === "LOGISTICS" ? subject : `"${subject}"`;

  const planned: PlannedQuery[] = [];
  let priority = 120;

  if (request.type === "SOURCING") {
    const markets = sourcingMarkets(request);
    const variants = subjectVariants(subject);
    for (const market of markets) {
      const isTurkey = market === "Turkey";
      const pairs = isTurkey
        ? [[variants[0], "tedarikçi"], [variants[0], "üretici"],
          [variants.find((v) => v === "L-Treonin") ?? variants[0], "tedarikçi"],
          [variants.find((v) => v === "L Treonin") ?? variants[0], "distribütör"],
          [variants[0], "ürün"], [variants[0], "supplier"]]
        : [[variants[0], "supplier"], [variants[0], "feed grade manufacturer"],
          [variants.find((v) => v === "L Threonine") ?? variants[0], "distributor"],
          [variants.find((v) => v === "Threonine") ?? variants[0], "producer"],
          [variants[0], "trader"], [variants[0], "product"]];
      for (const [variant, term] of pairs) planned.push({
        query: [`"${variant}"`, isTurkey ? "Türkiye" : market, term].filter(Boolean).join(" "),
        language: isTurkey ? "tr" : "en",
        intent: `${isTurkey ? "turkey" : "global"}-${term}`,
        priority: priority--,
      });
    }
  } else if (request.type === "BUYER_SEARCH") {
    for (const market of buyerMarkets(request)) {
      for (const language of languages) {
        for (const term of typeTerms.BUYER_SEARCH) {
          planned.push({
            query: [exactSubject, market, term].filter(Boolean).join(" "),
            language,
            intent: term,
            priority: priority--,
          });
        }
      }
    }
  } else {
    const geography = logisticsGeography(request);
    for (const language of languages) {
      for (const term of typeTerms.LOGISTICS) {
        planned.push({
          query: [geography, term].filter(Boolean).join(" "),
          language,
          intent: term,
          priority: priority--,
        });
      }
    }
  }

  const unique = new Map<string, PlannedQuery>();
  for (const item of planned.sort((a, b) => b.priority - a.priority)) {
    const key = `${item.language}:${item.query.toLocaleLowerCase("tr-TR")}`;
    if (!unique.has(key)) unique.set(key, item);
  }

  return [...unique.values()].slice(0, maxQueries);
}
