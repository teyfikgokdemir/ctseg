import { extractSubject, subjectVariants } from "./relevance";
import type { PlannedQuery, ResearchRequest } from "./types";

const sourcingTerms = ["supplier", "manufacturer", "distributor", "producer", "trader", "stockist", "product", "catalogue", "technical document"];
const buyerTerms = ["importer", "buyer", "distributor", "wholesaler", "retailer", "procurement", "industrial user", "sector user"];
const logisticsTerms = ["freight forwarder", "carrier", "road freight", "trucking", "shipping", "air cargo", "rail freight", "multimodal logistics"];

function sourceMarkets(request: ResearchRequest): string[] {
  const preferred = request.sourceRegion?.trim();
  const markets = [preferred || "Türkiye"];
  if (preferred && !/türkiye|turkey/i.test(preferred)) markets.unshift("Türkiye");
  markets.push("");
  return [...new Set(markets)];
}

function buyerMarkets(request: ResearchRequest): string[] {
  if (request.destinations?.length) return request.destinations;
  if (request.destination) return request.destination.split(/[,;]+/).map((value) => value.trim()).filter(Boolean);
  const raw = request.rawRequest.toLocaleLowerCase("tr-TR");
  const markets = ["Almanya", "Fransa", "İran", "Türkiye"].filter((country) => raw.includes(country.toLocaleLowerCase("tr-TR")));
  return markets.length ? markets : [""];
}

export function planResearchQueries(request: ResearchRequest): PlannedQuery[] {
  const maxQueries = Math.min(Math.max(request.maxQueries ?? 12, 4), 30);
  const subject = request.product?.trim() || extractSubject(request);
  const variants = request.aliases?.length ? request.aliases : subjectVariants(subject);
  const planned: PlannedQuery[] = [];
  let priority = 120;
  const push = (query: string, language: string, intent: string) =>
    planned.push({ query: query.replace(/\s+/g, " ").trim(), language, intent, priority: priority-- });

  if (request.type === "SOURCING") {
    for (const market of sourceMarkets(request)) {
      const turkey = /türkiye|turkey/i.test(market);
      const first = variants[0] || subject;
      const local = turkey ? variants.find((variant) => /treonin/i.test(variant)) || first : variants[1] || first;
      const terms = turkey ? ["tedarikçi", "üretici", "distribütör", "ürün", "supplier", "manufacturer"] : sourcingTerms;
      for (let index = 0; index < terms.length; index++) {
        const variant = index === 2 || index === 3 ? local : first;
        const grade = request.grade && index === 1 ? `"${request.grade}"` : "";
        const exclude = request.excludedCountries?.map((value) => `-${value}`).join(" ") || "";
        push([`"${variant}"`, market, grade, terms[index], exclude].filter(Boolean).join(" "),
          turkey ? "tr" : "en", `${turkey ? "turkey" : "global"}-${terms[index]}`);
      }
    }
  } else if (request.type === "BUYER_SEARCH") {
    for (const market of buyerMarkets(request)) {
      for (let index = 0; index < buyerTerms.length; index++) {
        const variant = variants[index % Math.max(1, variants.length)] || subject;
        push([`"${variant}"`, market, buyerTerms[index]].filter(Boolean).join(" "), "en", `buyer-${market}-${buyerTerms[index]}`);
      }
    }
  } else {
    const route = [request.sourceRegion, request.destination].filter(Boolean).join(" to ") || request.rawRequest;
    for (const term of logisticsTerms) push(`${route} ${term}`, "en", `logistics-${term}`);
    if (request.transportModes?.includes("road")) push(`${route} road transport company`, "en", "logistics-route-road");
    if (request.transportModes?.includes("sea")) push(`${route} sea freight forwarder`, "en", "logistics-route-sea");
  }

  const unique = new Map<string, PlannedQuery>();
  for (const item of planned) {
    const key = item.query.toLocaleLowerCase("tr-TR");
    if (!unique.has(key)) unique.set(key, item);
  }
  const all = [...unique.values()];
  if (request.type === "SOURCING") {
    const turkey = all.filter((item) => item.intent.startsWith("turkey-")).slice(0, Math.floor(maxQueries / 2));
    const global = all.filter((item) => item.intent.startsWith("global-")).slice(0, maxQueries - turkey.length);
    return [...turkey, ...global];
  }
  if (request.type === "BUYER_SEARCH" && buyerMarkets(request).length > 1) {
    const perMarket = Math.max(2, Math.floor(maxQueries / buyerMarkets(request).length));
    return all.filter((_, index) => index % buyerTerms.length < perMarket).slice(0, maxQueries);
  }
  return all.slice(0, maxQueries);
}
