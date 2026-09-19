import type { ResearchCaseType, ResearchRequest } from "./types";

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
    .toLocaleLowerCase("tr-TR")
    .normalize("NFKD")
    .replace(/[^\p{L}\p{N}]+/gu, "");
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
  ],
  BUYER_SEARCH: [
    "importer","buyer","distributor","wholesaler","procurement","retailer",
    "ithalat","alıcı","distribütör","toptancı",
  ],
  LOGISTICS: [
    "logistics","freight","forwarder","transport","shipping","cargo",
    "lojistik","nakliye","taşıma","karayolu","denizyolu","havayolu","rail",
  ],
};

export function isRelevantFinding(input: {
  type: ResearchCaseType;
  subject: string;
  title: string;
  snippet?: string;
  url: string;
}): boolean {
  if (isLowValueDomain(input.url)) return false;

  const haystack = `${input.title} ${input.snippet ?? ""} ${input.url}`
    .toLocaleLowerCase("tr-TR");

  if (input.type === "LOGISTICS") {
    const signals = intentSignals.LOGISTICS;
    return signals.some((signal) => haystack.includes(signal));
  }

  const terms = coreTerms(input.subject);
  if (!terms.length) return false;

  const subjectMatch = terms.every((term) => haystack.includes(term));
  const strongSubjectMatch =
    compact(input.title).includes(compact(input.subject)) ||
    compact(input.url).includes(compact(input.subject));

  if (!subjectMatch && !strongSubjectMatch) return false;

  const intentMatch = intentSignals[input.type].some((signal) => haystack.includes(signal));

  if (input.type === "SOURCING") {
    const technicalPage =
      /product|products|catalog|catalogue|tds|sds|technical|feed-additive|amino-acid|aminoacid/i.test(input.url);
    return strongSubjectMatch || intentMatch || technicalPage;
  }

  return intentMatch || strongSubjectMatch;
}
