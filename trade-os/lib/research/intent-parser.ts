import { extractSubject } from "./relevance";
import { normalizeProduct } from "./product-normalizer";
import type { ResearchCaseType } from "./types";

export type Intent = ResearchCaseType | "MIXED";
export type ParsedIntent = {
  intent: Intent;
  tasks: ResearchCaseType[];
  product: string | null;
  normalizedProduct: string | null;
  aliases: string[];
  grade: string | null;
  specification: string | null;
  quantity: number | null;
  quantityUnit: string | null;
  recurrence: string | null;
  sourceCountry: string | null;
  preferredSourcingRegion: string | null;
  destinations: string[];
  excludedCountries: string[];
  targetCompanyProfiles: string[];
  transportModes: string[];
  specialConstraints: string[];
  parser: string;
};

export interface IntentProvider {
  name: string;
  parse(rawRequest: string, preferredType?: ResearchCaseType): Promise<ParsedIntent>;
}

const countries: Array<[RegExp, string]> = [
  [/(?<!\p{L})(?:türkiye|turkiye|turkey|tr)(?!\p{L})/iu, "Türkiye"],
  [/(?<!\p{L})(?:iran|iran'a|irana|iranda|iranın)(?!\p{L})/iu, "İran"],
  [/(?<!\p{L})(?:almanya|almanyada|germany)(?!\p{L})/iu, "Almanya"],
  [/(?<!\p{L})(?:fransa|fransada|france)(?!\p{L})/iu, "Fransa"],
  [/(?<!\p{L})(?:bulgaristan|bulgaristandan|bulgaria)(?!\p{L})/iu, "Bulgaristan"],
  [/(?<!\p{L})(?:çin|cin|china)(?!\p{L})/iu, "Çin"],
];
const profiles: Array<[RegExp, string]> = [
  [/üretici|uretici|manufacturer|producer/i, "manufacturer"],
  [/tedarikçi|tedarikci|supplier/i, "supplier"],
  [/distribütör|distributor|bayi/i, "distributor"],
  [/ithalatçı|ithalatci|importer/i, "importer"],
  [/toptancı|toptanci|wholesaler/i, "wholesaler"],
  [/trader|stokçu|stokcu|stockist/i, "trader"],
  [/alıcı|alici|buyer/i, "buyer"],
];
const modes: Array<[RegExp, string]> = [
  [/(?<!\p{L})(?:kara|tır|tir|trucking|road)(?!\p{L})/iu, "road"],
  [/deniz|shipping|sea/i, "sea"],
  [/hava|air cargo|air freight/i, "air"],
  [/demir|rail/i, "rail"],
  [/multimodal|alternatif taşıma/i, "multimodal"],
];

function findCountries(text: string): string[] {
  const normalized = text.toLocaleLowerCase("tr-TR");
  return countries.filter(([pattern]) => pattern.test(normalized)).map(([, country]) => country);
}

export class LocalIntentProvider implements IntentProvider {
  name = "local-structured-parser";

  async parse(rawRequest: string, preferredType?: ResearchCaseType): Promise<ParsedIntent> {
    const raw = rawRequest.trim();
    const knownProduct = /\b(?:l[\s-]?)?(?:threonine|treonin|safran|saffron)\b/i.test(raw);
    const inferred = knownProduct ? normalizeProduct(raw)?.name : extractSubject({ type: preferredType ?? "SOURCING", rawRequest: raw });
    let product = preferredType === "LOGISTICS" && !knownProduct ? null : inferred || null;
    const quantityMatch = raw.match(/\b(\d+(?:[.,]\d+)?)\s*(mt|ton|tonne|tons?|kg|kilogram)\b/i);
    const quantity = quantityMatch ? Number(quantityMatch[1].replace(",", ".")) : null;
    const quantityUnit = quantityMatch ? (/kg|kilogram/i.test(quantityMatch[2]) ? "KG" : "MT") : null;
    const grade = /feed[\s-]?grade|yem[\s-]?kalite/i.test(raw) ? "Feed Grade" :
      /food[\s-]?grade|gıda[\s-]?kalite/i.test(raw) ? "Food Grade" :
      /pharma[\s-]?grade|ilaç[\s-]?kalite/i.test(raw) ? "Pharma Grade" : null;
    const source = raw.match(/(?:bulgaristan|türkiye|turkiye|tr|çin|cin|china)[\s'’]*(?:dan|den|tan|ten)\b/i);
    const sourceCountry = source ? findCountries(source[0])[0] ?? null : null;
    const mentioned = findCountries(raw);
    const buyer = /alıcı(?:sı)?\s*(?:bul|araştır)|ithalatçı(?:sı)?|müşteri\s*(?:bul|araştır)|buyer|importer/i.test(raw);
    const logistics = /nakliye|taşıma|lojistik|forwarder|freight|\byük\b|shipping|transport/i.test(raw);
    const sourcingCue = /tedarik|üretici|uretici|supplier|lazım|arıyoruz|istiyor|\b(?:tr|türkiye)[\s'’]*den\s*bul/i.test(raw);
    if (logistics && !knownProduct && !buyer && !sourcingCue) product = null;
    const normalized = product ? normalizeProduct(product) : null;
    const sourcing = Boolean(product) && (!buyer || sourcingCue) && (!logistics || knownProduct || sourcingCue);
    const tasks: ResearchCaseType[] = [];
    if (sourcing) tasks.push("SOURCING");
    if (buyer && !/müşteri\s+var/i.test(raw)) tasks.push("BUYER_SEARCH");
    if (logistics) tasks.push("LOGISTICS");
    if (!tasks.length) tasks.push(preferredType ?? (product ? "SOURCING" : "LOGISTICS"));
    const preferredSourcingRegion = /önce\s*(?:tr|türkiye)|first\s*turkey|\btr[\s'’]*den\s*bul/i.test(raw)
      ? "Türkiye" : sourceCountry ?? (tasks.includes("SOURCING") ? "Türkiye" : null);
    const destinations = mentioned.filter((country) => country !== sourceCountry &&
      (tasks.includes("BUYER_SEARCH") || country === "İran" || /için|hedef|pazar|varış/i.test(raw)) &&
      !(tasks.includes("SOURCING") && country === preferredSourcingRegion));
    const excludedCountries = [...raw.matchAll(/(?:hariç|dışında|exclude|except)\s+([\p{L}]+)/giu)]
      .flatMap((match) => findCountries(match[1]));
    return {
      intent: tasks.length > 1 ? "MIXED" : tasks[0], tasks,
      product, normalizedProduct: normalized?.name ?? null,
      aliases: normalized?.aliases ?? [],
      grade, specification: grade, quantity, quantityUnit,
      recurrence: /haftalık|haftalik|weekly|per week/i.test(raw) ? "weekly" : /aylık|monthly/i.test(raw) ? "monthly" : null,
      sourceCountry, preferredSourcingRegion, destinations, excludedCountries,
      targetCompanyProfiles: profiles.filter(([pattern]) => pattern.test(raw)).map(([, value]) => value),
      transportModes: modes.filter(([pattern]) => pattern.test(raw)).map(([, value]) => value),
      specialConstraints: [/alternatif/i.test(raw) ? "alternative routes" : "",
        /önce\s*(?:tr|türkiye)/i.test(raw) ? "Türkiye first" : ""].filter(Boolean),
      parser: this.name,
    };
  }
}

export async function parseIntent(rawRequest: string, preferredType?: ResearchCaseType): Promise<ParsedIntent> {
  return new LocalIntentProvider().parse(rawRequest, preferredType);
}
