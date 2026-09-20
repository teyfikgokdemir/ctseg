import type { ParsedIntent } from "./intent-parser";
import type { ClaimType, Evidence, ResearchFinding, VerifiedField } from "./types";

const lower = (value: string) => value.toLocaleLowerCase("tr-TR");
const escape = (value: string) => value.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
const blocks = (value: string) => value.split(/(?<=[.!?])\s+|\n+/).map((part) => part.trim()).filter(Boolean);
const commercial = /\b(?:our products|products include|we (?:manufacture|produce|supply|distribute|offer|sell)|(?:manufactures|produces|supplies|distributes|offers|sells)|product catalogue|product catalog)\b|ürünlerimiz|üretiriz|tedarik ederiz/iu;
const roleWords = /\b(?:manufacturer|producer|distributor|forwarder|logistics provider)\b|üretici|distribütör|nakliye/iu;

export function extractEvidence(finding: ResearchFinding, intent: ParsedIntent): void {
  const source = finding.fetchedContent;
  if (!source?.isLive || !source.text || (source.status ?? 200) >= 400) {
    finding.negativeSignals = [source?.status === 404 ? "NOT_FOUND" : "INACCESSIBLE_SOURCE"];
    return;
  }
  const text = lower(source.text);
  const product = intent.product ? lower(intent.product).trim() : undefined;
  const grade = intent.grade ? lower(intent.grade).trim() : undefined;
  const segments = blocks(text);
  const negatives = finding.negativeSignals ?? [];
  if (finding.historicalOnly) negatives.push("STALE_PAGE");
  const excerpt = (term: string) => {
    const index = text.indexOf(term);
    return index < 0 ? "" : source.text!.slice(Math.max(0, index - 100), index + term.length + 150);
  };
  const confirmed = <T>(value: T, claimType: ClaimType, term: string, support?: string): VerifiedField<T> => {
    const evidence: Evidence = { url: source.finalUrl || finding.url, timestamp: source.fetchedAt || new Date().toISOString(),
      type: source.type === "PDF" ? "PDF" : "HTML", claimType, status: "CONFIRMED", excerpt: support || excerpt(term) };
    return { value, state: "CONFIRMED", evidence: [evidence] };
  };

  const productHeading = !!product && [source.title, ...(source.headings || [])]
    .some((heading) => lower(heading || "").includes(product) &&
      (/\b(?:product|catalog|sku|specification)\b|ürün/iu.test(lower(heading || "")) ||
        /\/(?:products?|catalog(?:ue)?|sku)\//i.test(source.finalUrl || finding.url)));
  const company = lower(finding.normalizedCompanyName || finding.companyName || "").trim();
  const localProductClaim = !!product && segments.find((segment) => segment.includes(product) &&
    (commercial.test(segment) ||
      (company.length >= 4 && segment.includes(company) && roleWords.test(segment) &&
        new RegExp(`${escape(company)}\\s+(?:is|are)\\b`, "u").test(segment)) ||
      (!!grade && segment.includes(grade) && /\b\d+(?:[.,]\d+)?\s*%/.test(segment))));
  if (product && text.includes(product) && (productHeading || localProductClaim) &&
    !/\b(?:not|no|does not|unavailable)\s+(?:supply|sell|produce|offer)\b/i.test(text)) {
    finding.productConfirmed = confirmed(true, "PRODUCT", product, localProductClaim || undefined);
  } else if (product) negatives.push("WRONG_PRODUCT");

  const gradeTogether = !!product && !!grade && [
    ...segments,
    ...(source.headings || []).map(lower),
  ].find((segment) => segment.includes(product) && segment.includes(grade) &&
    Math.abs(segment.indexOf(product) - segment.indexOf(grade)) <= product.length + grade.length + 32 &&
    !/\b(?:other|unrelated)\s+products\b/.test(segment));
  if (grade && finding.productConfirmed?.state === "CONFIRMED" && gradeTogether) {
    finding.gradeConfirmed = confirmed(intent.grade!, "GRADE", grade, gradeTogether || undefined);
  } else if (grade && /feed\s*grade|food\s*grade|pharma\s*grade/i.test(text)) {
    negatives.push("CONFLICTING_GRADE");
  }

  const roleTerms = [
    { pattern: /\b(manufacturer|producer)\b|üretici/iu, value: "MANUFACTURER" as const },
    { pattern: /\b(distributor|authorized distributor)\b|distribütör/iu, value: "DISTRIBUTOR" as const },
    { pattern: /\b(forwarder|logistics provider)\b|nakliye/iu, value: "LOGISTICS" as const },
  ];
  const pageIdentity = company.length >= 4 && [source.title, ...(source.headings || [])]
    .some((label) => lower(label || "").includes(company));
  let roleProven = false;
  for (const role of roleTerms) {
    const match = segments.find((segment) => role.pattern.test(segment) &&
      ((company.length >= 4 && new RegExp(`${escape(company)}\\s+(?:is|are|manufactures|produces|supplies|distributes)\\b`, "u").test(segment) &&
        !!product && segment.includes(product)) ||
       (pageIdentity && !!product && segment.includes(product) &&
        /\b(?:we are|we manufacture|we produce|we supply|our manufacturing|authorized distributor)\b/iu.test(segment))));
    if (match && !/\b(?:manufactured|produced|supplied)\s+by\b/iu.test(match)) {
      const roleTerm = role.pattern.exec(match)?.[0] || "";
      finding.role = confirmed(role.value, "ROLE", roleTerm, match);
      roleProven = true;
      break;
    }
  }
  if (!roleProven) negatives.push("ROLE_NOT_PROVEN");
  if (finding.role?.value === "MANUFACTURER" && segments.some((segment) =>
    (company && segment.includes(company) || pageIdentity && /\b(?:we|our)\b/.test(segment)) &&
    /not\s+(?:a\s+)?manufacturer|not\s+the\s+manufacturer|distributor\s+only/i.test(segment))) {
    finding.role = { value: "MANUFACTURER", state: "CONTRADICTED", evidence: finding.role.evidence.map((item) => ({ ...item, status: "CONTRADICTED" })) };
    negatives.push("MANUFACTURER_CONTRADICTED");
  }
  finding.negativeSignals = [...new Set(negatives)];
}
