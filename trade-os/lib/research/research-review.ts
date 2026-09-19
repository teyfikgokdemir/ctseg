import type { ParsedIntent } from "./intent-parser";
import type { CompanyCandidate } from "./company-resolver";
import type { ResearchCaseType } from "./types";

export type ResearchReview = { summary: string; followUpQueries: string[]; limitations: string[]; provider: string };
export interface ResearchReviewProvider {
  name: string;
  review(parsed: ParsedIntent, type: ResearchCaseType, companies: CompanyCandidate[]): Promise<ResearchReview>;
}

// Evidence-bounded local fallback. A model provider can implement the same contract,
// but no paid or external AI endpoint is called by default.
export class LocalResearchReviewProvider implements ResearchReviewProvider {
  name = "local-evidence-review";
  async review(parsed: ParsedIntent, type: ResearchCaseType, companies: CompanyCandidate[]): Promise<ResearchReview> {
    const verified = companies.filter((company) => company.evidenceSources.some((source) => source.status === "VERIFIED"));
    const followUpQueries: string[] = [];
    const limitations: string[] = [];
    if (type === "SOURCING" && parsed.grade && verified.some((company) =>
      !company.evidenceSources.some((source) => source.title.toLowerCase().includes(parsed.grade!.toLowerCase())))) {
      followUpQueries.push(`"${parsed.normalizedProduct}" "${parsed.grade}" official product specification`);
      limitations.push("Ürün sayfası bulunması, istenen grade veya kapasitenin doğrulandığı anlamına gelmez.");
    }
    if (companies.some((company) => /Distribütör adayı/.test(company.companyType) && !company.typeVerified)) {
      followUpQueries.push(`${parsed.normalizedProduct || "product"} official distributor authorization`);
    }
    if (companies.some((company) => company.freshnessScore < 50)) {
      followUpQueries.push(`${parsed.normalizedProduct || "company"} current activity contact`);
      limitations.push("Bazı kaynakların güncel faaliyet sinyali zayıf.");
    }
    if (!companies.length) limitations.push("Ücretsiz kaynaklardan doğrulanabilir ticari aday çıkmadı; adapter tanısını inceleyin.");
    return { provider: this.name,
      summary: `${companies.length} şirket adayı; ${verified.length} şirketin ürün sayfası canlı doğrulandı. Firma tipi, stok ve ticari kapasite ayrıca teyit gerektirir.`,
      followUpQueries: [...new Set(followUpQueries)].slice(0, 3), limitations };
  }
}
