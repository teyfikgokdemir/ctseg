import { extractSubject } from "./relevance";
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
    "manufacturer",
    "supplier",
    "distributor",
    "wholesaler",
    "trader",
    "product catalogue",
    "technical data sheet",
  ],
  BUYER_SEARCH: [
    "importer",
    "buyer",
    "distributor",
    "wholesaler",
    "procurement",
    "private label",
    "industry user",
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
    if (haystack.toLocaleLowerCase().includes(place.toLocaleLowerCase())) {
      languages.forEach((language) => inferred.add(language));
    }
  }

  if (/[çğıöşüİı]/i.test(haystack)) inferred.add("tr");
  return [...inferred];
}

export function planResearchQueries(request: ResearchRequest): PlannedQuery[] {
  const maxQueries = Math.min(Math.max(request.maxQueries ?? 18, 6), 40);
  const languages = inferLanguages(request);
  const subject = extractSubject(request);
  const exactSubject = request.type === "LOGISTICS" ? subject : `"${subject}"`;
  const geography = [request.sourceRegion, request.destination].filter(Boolean).join(" ");
  const year = new Date().getUTCFullYear();

  const planned: PlannedQuery[] = [];
  let priority = 100;

  for (const language of languages) {
    for (const term of typeTerms[request.type]) {
      planned.push({
        query: [exactSubject, geography, term, year].filter(Boolean).join(" "),
        language,
        intent: term,
        priority: priority--,
      });
    }
  }

  planned.push(
    {
      query: [exactSubject, geography, "official company", "catalog", year].filter(Boolean).join(" "),
      language: "en",
      intent: "official-evidence",
      priority: 99,
    },
    {
      query: [exactSubject, geography, "PDF", "catalogue", "2025 OR 2026"].filter(Boolean).join(" "),
      language: "en",
      intent: "recent-document",
      priority: 98,
    },
  );

  const unique = new Map<string, PlannedQuery>();
  for (const item of planned.sort((a, b) => b.priority - a.priority)) {
    const key = `${item.language}:${item.query.toLowerCase()}`;
    if (!unique.has(key)) unique.set(key, item);
  }

  return [...unique.values()].slice(0, maxQueries);
}
