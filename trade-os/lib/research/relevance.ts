import type { ResearchCaseType, ResearchRequest } from "./types";
import { normalizeProduct } from "./product-normalizer";

const geographyTerms = new Set([
  "iran","iranda","irana","iran'ın","iranin",
  "turkey","türkiye","turkiyede","türkiyeden",
  "germany","almanya","almanyada",
  "france","fransa","fransada",
  "china","çin","çinde",
  "bulgaria","bulgaristan","bulgaristandan",
  "global",
]);

const stopWords = new Set([
  "için","icin","haftalık","haftalik","aylık","aylik","güncel","guncel",
  "arıyoruz","ariyoruz","bul","önce","once","sonra","ve","veya","ile",
  "alabilecek","satabilecek","alıcı","alici","ithalatçı","ithalatci",
  "distribütörleri","distributorleri","tedarikçi","tedarikci",
  "üretici","uretici","supplier","manufacturer","distributor","importer",
  "buyer","wholesaler","trader","feed","food","pharma","grade",
  "ton","mt","kg","adet","yük","yuk","kara","deniz","hava","alternatif",
  "taşıma","tasima","çözümleri","cozumleri","freight","logistics",
]);

function normalizeToken(value: string): string {
  return value
    .toLocaleLowerCase("tr-TR")
    .replace(/[’']/g, "")
    .replace(/^[^\p{L}\p{N}]+|[^\p{L}\p{N}-]+$/gu, "");
}

function stemTurkishObjectSuffix(token: string): string {
  if (token.length < 7) return token;
  return token
    .replace(/(ını|ini|unu|ünü)$/u, "")
    .replace(/(nı|ni|nu|nü)$/u, "")
    .replace(/(ı|i|u|ü)$/u, "");
}

export function extractSubject(request: ResearchRequest): string {
  if (request.product?.trim()) return request.product.trim();

  const raw = request.rawRequest.trim();

  const threonine = raw.match(/\bL[\s-]?(?:Threonine|Treonin)|\bThreonine\b|\bTreonin\b/i);
  if (threonine) return threonine[0];

  const quoted = raw.match(/["“”']([^"“”']{2,80})["“”']/);
  if (quoted?.[1]) return quoted[1].trim();

  const chemicalLike = raw.match(/\b[A-Za-zÀ-ž0-9]+(?:-[A-Za-zÀ-ž0-9]+)+\b/u);
  if (chemicalLike?.[0]) return chemicalLike[0];

  if (request.type === "LOGISTICS") {
    return raw;
  }

  const tokens = raw
    .split(/\s+/)
    .map(normalizeToken)
    .map(stemTurkishObjectSuffix)
    .filter(Boolean)
    .filter((token) => !geographyTerms.has(token))
    .filter((token) => !stopWords.has(token))
    .filter((token) => !/^\d+(?:[.,]\d+)?$/.test(token))
    .filter((token) => token.length >= 3);

  return tokens.slice(0, 3).join(" ") || raw;
}

export function coreTerms(subject: string): string[] {
  return subject
    .split(/\s+/)
    .map(normalizeToken)
    .filter((token) => token.length >= 2)
    .filter((token) => !stopWords.has(token));
}

function compact(value: string): string {
  return value
    .toLowerCase()
    .normalize("NFKD")
    .replace(/[^\p{L}\p{N}]+/gu, "")
    .replace(/treonin/g, "threonine");
}

export function subjectVariants(subject: string): string[] {
  return normalizeProduct(subject)?.aliases ?? [subject];
}

const lowValueDomains = [
  "wikipedia.org",
  "youtube.com",
  "youtu.be",
  "dailymotion.com",
  "britannica.com",
  "thefreedictionary.com",
  "dictionary.com",
  "encyclopedia.com",
  "cnn.com",
  "reuters.com",
  "aljazeera.com",
  "jpost.com",
  "iranintl.com",
];

function isLowValueDomain(url: string): boolean {
  try {
    const hostname = new URL(url).hostname.replace(/^www\./, "").toLowerCase();
    return lowValueDomains.some((domain) => hostname === domain || hostname.endsWith(`.${domain}`));
  } catch {
    return true;
  }
}

const intentSignals: Record<ResearchCaseType, string[]> = {
  SOURCING: [
    "supplier","manufacturer","distributor","wholesaler","trader","producer",
    "tedarik","üretici","distribütör","product","catalog","catalogue",
    "feed additive","25 kg",
  ],
  BUYER_SEARCH: [
    "importer","buyer","distributor","wholesaler","procurement","retailer",
    "ithalat","alıcı","distribütör","toptancı","grossiste","importateur",
  ],
  LOGISTICS: [
    "logistics","freight","forwarder","transport","shipping","cargo",
    "lojistik","nakliye","taşıma","karayolu","denizyolu","havayolu","rail",
  ],
};

export function scoreRelevance(input: {
  type: ResearchCaseType;
  subject: string;
  title: string;
  snippet?: string;
  url: string;
}): number {
  if (isLowValueDomain(input.url)) return 0;
  if (input.type === "SOURCING" && /capsules?|supplements?|healthy joints|100 grams|100 gr\b/i.test(
    `${input.title} ${input.url}`)) return 0;

  const haystack = `${input.title} ${input.snippet ?? ""} ${input.url}`
    .toLocaleLowerCase("tr-TR");

  if (input.type === "LOGISTICS") {
    const signals = intentSignals.LOGISTICS;
    return signals.some((signal) => haystack.includes(signal)) ? 65 : 0;
  }

  const terms = coreTerms(input.subject);
  if (!terms.length) return 0;

  const subjectMatch = terms.every((term) => haystack.includes(term));
  const strongSubjectMatch =
    compact(input.title).includes(compact(input.subject)) ||
    compact(input.url).includes(compact(input.subject));

  const variantMatch = subjectVariants(input.subject).some((variant) =>
    compact(haystack).includes(compact(variant)));
  if (!subjectMatch && !strongSubjectMatch && !variantMatch) return 0;

  const intentMatch = intentSignals[input.type].some((signal) => haystack.includes(signal));

  if (input.type === "BUYER_SEARCH") {
    const titleUrl = `${input.title} ${input.url}`.toLocaleLowerCase("tr-TR");
    const exactProduct = subjectVariants(input.subject).some((variant) => {
      const escaped = variant.toLocaleLowerCase("tr-TR").replace(/[.*+?^${}()|[\]\\]/g, "\\$&").replace(/[\s-]+/g, "[\\s-]+");
      return new RegExp(`(?<![\\p{L}])${escaped}(?![\\p{L}])`, "u").test(titleUrl);
    });
    if (!exactProduct || !intentMatch) return 0;
  }

  if (input.type === "SOURCING") {
    const technicalPage =
      /product|products|catalog|catalogue|tds|sds|technical|feed-additive|amino-acid|aminoacid/i.test(input.url);
    return Math.min(100, (strongSubjectMatch ? 50 : variantMatch ? 42 : 30) +
      (intentMatch ? 25 : 0) + (technicalPage ? 25 : 0));
  }

  return (strongSubjectMatch ? 55 : variantMatch ? 45 : 30) + (intentMatch ? 30 : 0);
}

export function isRelevantFinding(input: Parameters<typeof scoreRelevance>[0]): boolean {
  return scoreRelevance(input) >= (input.type === "SOURCING" ? 60 : 55);
}
