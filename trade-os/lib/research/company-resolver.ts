import type { CompanyCandidate, ResearchFinding, VerifiedField, CompanyRole, VerificationLevel } from "./types";

function domainKey(host: string): string {
  const parts = host.replace(/^www\./, "").split(".");
  return parts.length > 2 ? parts.slice(-2).join(".") : parts.join(".");
}

function createUnverifiedField<T>(value: T): VerifiedField<T> {
  return { value, state: "UNVERIFIED", evidence: [] };
}

export function resolveCompanies(findings: ResearchFinding[]): CompanyCandidate[] {
  const companies = new Map<string, CompanyCandidate>();

  for (const finding of findings) {
    let url: URL;
    try { url = new URL(finding.url); } catch { continue; }
    const key = domainKey(url.hostname);
    if (["alibaba.com", "made-in-china.com", "europages.com", "kompass.com"].includes(key)) continue;
    
    const name = finding.normalizedCompanyName || finding.companyName || key.split(".")[0].toUpperCase();
    
    let candidate = companies.get(key);
    if (!candidate) {
      candidate = {
        key, name, website: url.origin,
        role: createUnverifiedField<CompanyRole>("UNKNOWN"),
        productConfirmed: createUnverifiedField<boolean>(false),
        gradeConfirmed: createUnverifiedField<string>(""),
        contactEmail: createUnverifiedField<string>(""),
        contactPhone: createUnverifiedField<string>(""),
        country: createUnverifiedField<string>(""),
        manufacturer: createUnverifiedField<string>(""),
        freshnessScore: 0, verificationScore: 0, relevanceScore: 0, totalScore: 0,
        verificationLevel: "DISCOVERED",
        evidenceSources: []
      };
      companies.set(key, candidate);
    }

    // Merge evidence arrays
    const mergeEvidence = (field: VerifiedField<unknown> | undefined) => {
      if (field && field.evidence) {
        for (const e of field.evidence) {
          if (!candidate!.evidenceSources.some(x => x.url === e.url && x.claimType === e.claimType)) {
            candidate!.evidenceSources.push(e);
          }
        }
      }
    };

    mergeEvidence(finding.role);
    mergeEvidence(finding.productConfirmed);
    mergeEvidence(finding.gradeConfirmed);
    mergeEvidence(finding.contactEmail);
    mergeEvidence(finding.contactPhone);
    mergeEvidence(finding.country);

    candidate.freshnessScore = Math.max(candidate.freshnessScore, finding.freshnessScore || 0);
    candidate.relevanceScore = Math.max(candidate.relevanceScore, finding.relevanceScore || 0);
    
    // Merge verified fields safely
    if (finding.role?.state === "CONFIRMED") candidate.role = finding.role;
    if (finding.productConfirmed?.state === "CONFIRMED") candidate.productConfirmed = finding.productConfirmed;
    if (finding.gradeConfirmed?.state === "CONFIRMED") candidate.gradeConfirmed = finding.gradeConfirmed;
    if (finding.contactEmail?.state === "CONFIRMED") candidate.contactEmail = finding.contactEmail;
    if (finding.contactPhone?.state === "CONFIRMED") candidate.contactPhone = finding.contactPhone;
    if (finding.country?.state === "CONFIRMED") candidate.country = finding.country;

    // Determine highest verification level
    let level: VerificationLevel = "DISCOVERED";
    if (finding.fetchedContent?.isLive) level = "SOURCE_FETCHED";
    if (candidate.productConfirmed.state === "CONFIRMED") level = "PRODUCT_CONFIRMED";
    if (candidate.role.state === "CONFIRMED" && level === "PRODUCT_CONFIRMED") level = "ROLE_CONFIRMED";
    
    candidate.verificationLevel = level;
    candidate.totalScore = candidate.relevanceScore + (candidate.evidenceSources.length * 5) + (level === "ROLE_CONFIRMED" ? 20 : level === "PRODUCT_CONFIRMED" ? 10 : 0);
  }

  return Array.from(companies.values()).sort((a, b) => b.totalScore - a.totalScore);
}


