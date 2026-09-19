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
    const verified = companies.filter((company) => company.evidenceSources.some((source) => Boolean(source.url)));
    const followUpQueries: string[] = [];
    const limitations: string[] = [];
    if (type === "SOURCING" && parsed.grade && verified.some((company) =>
      !company.evidenceSources.some((source) => source.url.toLowerCase().includes(parsed.grade!.toLowerCase())))) {
      followUpQueries.push(`"${parsed.normalizedProduct}" "${parsed.grade}" official product specification`);
      limitations.push("ÃœrÃ¼n sayfasÄ± bulunmasÄ±, istenen grade veya kapasitenin doÄŸrulandÄ±ÄŸÄ± anlamÄ±na gelmez.");
    }
    if (companies.some((company) => /DistribÃ¼tÃ¶r adayÄ±/.test(company.role.value) && company.role.state !== "CONFIRMED")) {
      followUpQueries.push(`${parsed.normalizedProduct || "product"} official distributor authorization`);
    }
    if (companies.some((company) => company.freshnessScore < 50)) {
      followUpQueries.push(`${parsed.normalizedProduct || "company"} current activity contact`);
      limitations.push("BazÄ± kaynaklarÄ±n gÃ¼ncel faaliyet sinyali zayÄ±f.");
    }
    if (!companies.length) limitations.push("Ãœcretsiz kaynaklardan doÄŸrulanabilir ticari aday Ã§Ä±kmadÄ±; adapter tanÄ±sÄ±nÄ± inceleyin.");
    return { provider: this.name,
      summary: `${companies.length} ÅŸirket adayÄ±; ${verified.length} ÅŸirketin Ã¼rÃ¼n sayfasÄ± canlÄ± doÄŸrulandÄ±. Firma tipi, stok ve ticari kapasite ayrÄ±ca teyit gerektirir.`,
      followUpQueries: [...new Set(followUpQueries)].slice(0, 3), limitations };
  }
}






