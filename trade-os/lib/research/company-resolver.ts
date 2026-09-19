/* eslint-disable @typescript-eslint/no-unused-vars */
import type { ResearchFinding, CompanyRole, VerifiedField, Evidence, VerificationState, VerificationLevel } from "./types";

export type CompanyCandidate = {
  key: string;
  name: string;
  website: string;
  role: VerifiedField<CompanyRole>;
  productConfirmed: VerifiedField<boolean>;
  gradeConfirmed: VerifiedField<string>;
  contactEmail: VerifiedField<string>;
  contactPhone: VerifiedField<string>;
  country: VerifiedField<string>;
  manufacturer: VerifiedField<string>;
  freshnessScore: number;
  verificationScore: number;
  relevanceScore: number;
  evidenceSources: Evidence[];
  totalScore: number;
  verificationLevel: VerificationLevel;
};

function createUnverifiedField<T>(value: T): VerifiedField<T> {
  return { value, state: "UNVERIFIED" as VerificationState };
}

function domainKey(hostname: string): string {
  const parts = hostname.replace(/^www\./, "").split(".");
  const suffix = parts.slice(-2).join(".");
  return ["com.tr", "org.tr", "net.tr", "co.uk"].includes(suffix)
    ? parts.slice(-3).join(".") : suffix;
}

export function resolveCompanies(findings: ResearchFinding[], productOrService: string | null): CompanyCandidate[] {
  const companies = new Map<string, CompanyCandidate>();

  for (const finding of findings) {
    let url: URL;
    try { url = new URL(finding.url); } catch { continue; }
    const key = domainKey(url.hostname);
    if (["alibaba.com", "made-in-china.com", "europages.com", "kompass.com"].includes(key)) continue;
    
    const name = finding.normalizedCompanyName || finding.companyName || key.split(".")[0].toUpperCase();
    
    // Create base evidence from finding
    const findingEvidence: Evidence = {
      url: finding.url,
      timestamp: new Date().toISOString(),
      type: finding.fetchedContent?.type === "PDF" ? "PDF" : "HTML",
      extractedText: finding.fetchedContent?.text?.substring(0, 300) || finding.snippet
    };

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

    if (!candidate.evidenceSources.some(e => e.url === finding.url)) {
      candidate.evidenceSources.push(findingEvidence);
    }

    candidate.freshnessScore = Math.max(candidate.freshnessScore, finding.freshnessScore);
    candidate.relevanceScore = Math.max(candidate.relevanceScore, finding.relevanceScore);
    
    // Merge verified fields safely. AI is NOT ALLOWED to output CONFIRMED without evidence (checked upstream).
    if (finding.role?.state === "CONFIRMED" && candidate.role.state !== "CONFIRMED") candidate.role = finding.role;
    if (finding.productConfirmed?.state === "CONFIRMED" && candidate.productConfirmed.state !== "CONFIRMED") candidate.productConfirmed = finding.productConfirmed;
    if (finding.gradeConfirmed?.state === "CONFIRMED" && candidate.gradeConfirmed.state !== "CONFIRMED") candidate.gradeConfirmed = finding.gradeConfirmed;
    if (finding.contactEmail?.state === "CONFIRMED" && candidate.contactEmail.state !== "CONFIRMED") candidate.contactEmail = finding.contactEmail;
    if (finding.contactPhone?.state === "CONFIRMED" && candidate.contactPhone.state !== "CONFIRMED") candidate.contactPhone = finding.contactPhone;
    if (finding.country?.state === "CONFIRMED" && candidate.country.state !== "CONFIRMED") candidate.country = finding.country;

    // Determine highest verification level
    let level: VerificationLevel = "DISCOVERED";
    if (finding.fetchedContent?.isLive) level = "SOURCE_FETCHED";
    if (candidate.productConfirmed.state === "CONFIRMED") level = "PRODUCT_CONFIRMED";
    if (candidate.role.state === "CONFIRMED" && level === "PRODUCT_CONFIRMED") level = "ROLE_CONFIRMED";
    
    candidate.verificationLevel = level;
    candidate.totalScore = candidate.relevanceScore + (candidate.evidenceSources.length * 5) + (level === "ROLE_CONFIRMED" ? 20 : level === "PRODUCT_CONFIRMED" ? 10 : 0);
  }

  return [...companies.values()].sort((a, b) => b.totalScore - a.totalScore);
}

