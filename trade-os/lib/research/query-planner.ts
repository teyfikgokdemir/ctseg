import { extractSubject, subjectVariants } from "./relevance";
import type { PlannedQuery, ResearchRequest } from "./types";

export type QueryFamily = "PRODUCT_EXACT" | "COMMERCIAL" | "GEO_LOCAL" | "DOCUMENT" | "CONTACT" | "LOGISTICS" | "BUYER";

export interface FamilyQuery extends PlannedQuery {
  family: QueryFamily;
}

const sourcingTerms = ["supplier", "manufacturer", "distributor", "producer", "trader", "stockist"];
const documentTerms = ["catalog", "catalogue", "product list", "technical document", "pdf"];
const buyerTerms = ["importer", "buyer", "distributor", "wholesaler", "retailer", "procurement", "industrial user"];
const logisticsTerms = ["freight forwarder", "carrier", "road freight", "trucking", "shipping", "air cargo", "multimodal logistics"];

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

export function planResearchQueries(request: ResearchRequest): FamilyQuery[] {
  const maxQueries = Math.min(Math.max(request.maxQueries ?? 20, 4), 30);
  const subject = request.product?.trim() || extractSubject(request);
  const variants = request.aliases?.length ? request.aliases : subjectVariants(subject);
  const planned: FamilyQuery[] = [];
  let priority = 200;

  const push = (query: string, language: string, intent: string, family: QueryFamily) =>
    planned.push({ query: query.replace(/\s+/g, " ").trim(), language, intent, priority: priority--, family });

  if (request.type === "SOURCING") {
    // 1. Exact & Variants
    push(`"${subject}"`, "en", "global-exact", "PRODUCT_EXACT");
    if (request.grade) push(`"${subject}" "${request.grade}"`, "en", "global-exact-grade", "PRODUCT_EXACT");
    for (let i = 0; i < Math.min(variants.length, 2); i++) {
      if (variants[i] !== subject) push(`"${variants[i]}"`, "en", `global-variant-${i}`, "PRODUCT_EXACT");
    }

    // 2. Commercial & Geo
    for (const market of sourceMarkets(request)) {
      const turkey = /türkiye|turkey/i.test(market);
      const language = turkey ? "tr" : "en";
      
      const terms = turkey ? ["üretici", "tedarikçi", "distribütör", "fabrika"] : sourcingTerms;
      
      for (const term of terms) {
        const exclude = request.excludedCountries?.map((value) => `-${value}`).join(" ") || "";
        push([`"${subject}"`, market, term, exclude].filter(Boolean).join(" "), language, `commercial-${term}`, turkey ? "GEO_LOCAL" : "COMMERCIAL");
      }
    }

    // 3. Document
    for (const doc of documentTerms.slice(0, 3)) {
      push(`"${subject}" ${doc}`, "en", `doc-${doc}`, "DOCUMENT");
      push(`"${subject}" ext:pdf`, "en", `doc-ext-pdf`, "DOCUMENT");
    }
  } else if (request.type === "BUYER_SEARCH") {
    for (const market of buyerMarkets(request)) {
      for (let index = 0; index < buyerTerms.length; index++) {
        push([`"${subject}"`, market, buyerTerms[index]].filter(Boolean).join(" "), "en", `buyer-${market}-${buyerTerms[index]}`, "BUYER");
      }
    }
  } else {
    const route = [request.sourceRegion, request.destination].filter(Boolean).join(" to ") || request.rawRequest;
    for (const term of logisticsTerms) push(`${route} ${term}`, "en", `logistics-${term}`, "LOGISTICS");
    if (request.transportModes?.includes("road")) push(`${route} road transport company`, "en", "logistics-route-road", "LOGISTICS");
    if (request.transportModes?.includes("sea")) push(`${route} sea freight forwarder`, "en", "logistics-route-sea", "LOGISTICS");
  }

  const unique = new Map<string, FamilyQuery>();
  for (const item of planned) {
    const key = item.query.toLocaleLowerCase("tr-TR");
    if (!unique.has(key)) unique.set(key, item);
  }
  return [...unique.values()].slice(0, maxQueries);
}

export function generateFollowUpQueries(companyName: string, domain: string, missingClaims: string[]): FamilyQuery[] {
  const queries: FamilyQuery[] = [];
  let priority = 100;
  const push = (query: string, intent: string, family: QueryFamily) =>
    queries.push({ query, language: "en", intent, priority: priority--, family });

  if (missingClaims.includes("ROLE")) {
    push(`"${companyName}" manufacturer`, "followup-role-mfg", "COMMERCIAL");
    push(`site:${domain} manufacturer`, "followup-role-site-mfg", "COMMERCIAL");
    push(`site:${domain} supplier`, "followup-role-site-sup", "COMMERCIAL");
  }
  if (missingClaims.includes("GRADE")) {
    push(`"${companyName}" grade specification`, "followup-grade", "PRODUCT_EXACT");
    push(`site:${domain} specification`, "followup-grade-site", "DOCUMENT");
  }
  if (missingClaims.includes("CONTACT")) {
    push(`"${companyName}" contact`, "followup-contact", "CONTACT");
    push(`site:${domain} contact email`, "followup-contact-site", "CONTACT");
  }
  if (missingClaims.includes("PRODUCT")) {
    push(`site:${domain} product`, "followup-product", "DOCUMENT");
  }
  return queries;
}
