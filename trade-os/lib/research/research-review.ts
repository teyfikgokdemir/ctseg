import type { ParsedIntent } from "./intent-parser";
import type { CompanyCandidate } from "./types";
import type { ResearchCaseType } from "./types";

export type ResearchReview = { summary: string; followUpQueries: string[]; limitations: string[]; provider: string };
export interface ResearchReviewProvider {
  name: string;
  review(parsed: ParsedIntent, type: ResearchCaseType, companies: CompanyCandidate[]): Promise<ResearchReview>;
}

export class LocalResearchReviewProvider implements ResearchReviewProvider {
  name = "deterministic-evidence-review";
  async review(parsed: ParsedIntent, type: ResearchCaseType, companies: CompanyCandidate[]): Promise<ResearchReview> {
    const total = companies.length;
    let productConfirmed = 0;
    let roleConfirmed = 0;
    let fullyVerified = 0;
    let partial = 0;
    let unverified = 0;
    let contradicted = 0;

    for (const c of companies) {
      const prod = c.productConfirmed.state === "CONFIRMED";
      const role = c.role.state === "CONFIRMED";
      if (prod) productConfirmed++;
      if (role) roleConfirmed++;
      if (prod && role) fullyVerified++;
      else if (prod || role) partial++;
      else if (c.evidenceSources.length > 0) unverified++;
      
      if (c.negativeSignals && c.negativeSignals.length > 0) contradicted++;
    }

    const geoContext = parsed.preferredSourcingRegion || parsed.sourceCountry || "Global";
    const geoText = geoContext !== "Global" ? `${geoContext} öncelikli araştırmada` : "Araştırmada";
    
    let summary = `${geoText} toplam ${total} anlamlı şirket adayı bulundu. `;
    if (total === 0) {
      summary += "Eşleşen sonuç bulunamadı.";
    } else {
      summary += `${fullyVerified} şirket ürün ve ticari rol açısından doğrulandı; ${partial} şirkette kısmi doğrulama (sadece ürün veya sadece rol) yapıldı; ${unverified} aday henüz tam doğrulanamadı.`;
    }

    const followUpQueries: string[] = [];
    const limitations: string[] = [];
    
    if (type === "SOURCING" && parsed.grade && productConfirmed > 0 && fullyVerified === 0) {
      limitations.push("Ürün sayfası bulunması, istenen spesifik kalite (grade) veya üretim kapasitesinin doğrulandığı anlamına gelmez.");
    }
    
    if (contradicted > 0) {
      limitations.push(`${contradicted} adayda üretim durdurma, yanlış ürün veya bayi doğrulama hatası gibi negatif sinyaller (contradictions) tespit edildi.`);
    }

    if (total === 0) limitations.push("Ücretsiz kaynaklardan doğrulanabilir ticari aday çıkmadı.");

    return { 
      provider: this.name,
      summary,
      followUpQueries: [...new Set(followUpQueries)].slice(0, 3), 
      limitations 
    };
  }
}
