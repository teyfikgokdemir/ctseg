import type { ParsedIntent } from "./intent-parser";
import type { ClaimType, Evidence, ResearchFinding, VerifiedField } from "./types";

function nearby(text: string, left: string, right: string, distance: number): boolean {
  const a = text.indexOf(left);
  const b = text.indexOf(right);
  return a >= 0 && b >= 0 && Math.abs(a - b) <= distance;
}

export function extractEvidence(finding: ResearchFinding, intent: ParsedIntent): void {
  const source = finding.fetchedContent;
  if (!source?.isLive || !source.text || (source.status ?? 200) >= 400) {
    finding.negativeSignals = [source?.status === 404 ? "NOT_FOUND" : "INACCESSIBLE_SOURCE"];
    return;
  }
  const text = source.text.toLocaleLowerCase("tr-TR");
  const product = intent.product?.toLocaleLowerCase("tr-TR").trim();
  const grade = intent.grade?.toLocaleLowerCase("tr-TR").trim();
  const negatives = finding.negativeSignals ?? [];
  if (finding.historicalOnly) negatives.push("STALE_PAGE");
  const excerpt = (term: string) => {
    const index = text.indexOf(term);
    return index < 0 ? "" : source.text!.slice(Math.max(0, index - 100), index + term.length + 150);
  };
  const confirmed = <T>(value: T, claimType: ClaimType, term: string): VerifiedField<T> => {
    const evidence: Evidence = { url: source.finalUrl || finding.url, timestamp: source.fetchedAt || new Date().toISOString(),
      type: source.type === "PDF" ? "PDF" : "HTML", claimType, status: "CONFIRMED", excerpt: excerpt(term) };
    return { value, state: "CONFIRMED", evidence: [evidence] };
  };

  const productInHeading = !!product && [source.title, ...(source.headings || [])]
    .some((heading) => heading?.toLocaleLowerCase("tr-TR").includes(product));
  const productInTradeContext = !!product && /\b(product|products|offer|offers|supply|supplies|manufacture|manufacturer|produces|catalogue|catalog)\b|ürün|tedarik|üretim/iu
    .test(excerpt(product).toLocaleLowerCase("tr-TR"));
  if (product && text.includes(product) && (productInHeading || productInTradeContext) &&
    !/\b(?:not|no|does not|unavailable)\s+(?:supply|sell|produce|offer)\b/i.test(text)) {
    finding.productConfirmed = confirmed(true, "PRODUCT", product);
  } else if (product) negatives.push("WRONG_PRODUCT");

  if (grade && finding.productConfirmed?.state === "CONFIRMED" && nearby(text, product!, grade, 350)) {
    finding.gradeConfirmed = confirmed(intent.grade!, "GRADE", grade);
  } else if (grade && /feed\s*grade|food\s*grade|pharma\s*grade/i.test(text)) {
    negatives.push("CONFLICTING_GRADE");
  }

  const roleTerms = [
    { pattern: /\b(manufacturer|producer)\b|üretici/iu, value: "MANUFACTURER" as const },
    { pattern: /\b(distributor|authorized distributor)\b|distribütör/iu, value: "DISTRIBUTOR" as const },
    { pattern: /\b(forwarder|logistics provider)\b|nakliye/iu, value: "LOGISTICS" as const },
  ];
  const company = (finding.normalizedCompanyName || finding.companyName || "").toLocaleLowerCase("tr-TR").trim();
  let roleProven = false;
  for (const role of roleTerms) {
    const match = role.pattern.exec(source.text);
    if (!match) continue;
    const roleTerm = match[0].toLocaleLowerCase("tr-TR");
    const companyContext = company.length >= 4 && nearby(text, company, roleTerm, 250);
    const ownClaim = !!product && finding.productConfirmed?.state === "CONFIRMED" &&
      nearby(text, product, roleTerm, 180) && /\b(we|our|us)\s+(?:are\s+)?(?:a\s+)?(?:manufacturer|producer|distributor)\b/i.test(source.text);
    if (companyContext || ownClaim) {
      finding.role = confirmed(role.value, "ROLE", roleTerm);
      roleProven = true;
      break;
    }
  }
  if (!roleProven) negatives.push("ROLE_NOT_PROVEN");
  if (finding.role?.value === "MANUFACTURER" && /not\s+(?:a\s+)?manufacturer|not\s+the\s+manufacturer|distributor\s+only/i.test(text)) {
    finding.role = { value: "MANUFACTURER", state: "CONTRADICTED", evidence: finding.role.evidence };
    negatives.push("MANUFACTURER_CONTRADICTED");
  }
  finding.negativeSignals = [...new Set(negatives)];
}
