import { getDomain } from "tldts";
import type { CompanyCandidate, ResearchFinding, VerifiedField, CompanyRole, VerificationLevel } from "./types";

export function domainKey(host: string): string {
  return getDomain(host, { allowPrivateDomains: true }) || host.replace(/^www\./, "").toLowerCase();
}

export function normalizedEntityName(name?: string): string {
  const words = (name || "").normalize("NFKC").toLocaleLowerCase("tr-TR")
    .replace(/[^\p{L}\p{N}]+/gu, " ").trim().split(/\s+/u)
    .filter((word) => word && !["ltd", "limited", "llc", "inc", "aş", "a", "ş", "co", "company"].includes(word));
  return words.map((word) => word === "chemicals" ? "chemical" : word).join(" ");
}

export function entityKey(domain: string, name?: string): string {
  const normalized = normalizedEntityName(name);
  return normalized ? `${domain}:${normalized}` : domain;
}

export function matchingPersistedCompany(candidate: CompanyCandidate,
  records: Array<{ id: string; name: string; website: string | null }>): string | undefined {
  const domain = domainKey(new URL(candidate.website).hostname);
  const key = entityKey(domain, candidate.name);
  return records.find((record) => {
    if (!record.website) return false;
    try { return entityKey(domainKey(new URL(record.website).hostname), record.name) === key; }
    catch { return false; }
  })?.id;
}

function unverified<T>(value: T): VerifiedField<T> {
  return { value, state: "UNVERIFIED", evidence: [] };
}

export function resolveCompanies(findings: ResearchFinding[]): CompanyCandidate[] {
  const companies = new Map<string, CompanyCandidate>();
  for (const finding of findings) {
    let url: URL;
    try { url = new URL(finding.url); } catch { continue; }
    const domain = domainKey(url.hostname);
    if (["alibaba.com", "made-in-china.com", "europages.com", "kompass.com"].includes(domain) ||
      ["cloudfront.net", "azureedge.net"].some((platform) => url.hostname === platform || url.hostname.endsWith(`.${platform}`))) continue;
    const explicitName = finding.normalizedCompanyName || finding.companyName;
    const key = entityKey(domain, explicitName);
    let candidate = companies.get(key);
    if (!candidate) {
      candidate = {
        key, name: explicitName || domain.split(".")[0].toUpperCase(), website: url.origin,
        role: unverified<CompanyRole>("UNKNOWN"), productConfirmed: unverified(false),
        gradeConfirmed: unverified(""), contactEmail: unverified(""), contactPhone: unverified(""),
        country: unverified(""), manufacturer: unverified(""), freshnessScore: 0,
        verificationScore: 0, relevanceScore: 0, totalScore: 0, verificationLevel: "DISCOVERED", evidenceSources: [],
        negativeSignals: [],
      };
      companies.set(key, candidate);
    }
    const mergeEvidence = (field: VerifiedField<unknown> | undefined) => {
      for (const evidence of field?.evidence || []) {
        if (!candidate!.evidenceSources.some((item) => item.url === evidence.url &&
          item.claimType === evidence.claimType && item.status === evidence.status)) {
          candidate!.evidenceSources.push(evidence);
        }
      }
    };
    for (const field of [finding.role, finding.productConfirmed, finding.gradeConfirmed,
      finding.contactEmail, finding.contactPhone, finding.country]) mergeEvidence(field);
    candidate.negativeSignals = [...new Set([...(candidate.negativeSignals || []), ...(finding.negativeSignals || [])])];
    candidate.freshnessScore = Math.max(candidate.freshnessScore, finding.freshnessScore || 0);
    candidate.relevanceScore = Math.max(candidate.relevanceScore, finding.relevanceScore || 0);
        if (candidate.negativeSignals.includes("WRONG_PRODUCT")) {
      candidate.relevanceScore = Math.max(0, candidate.relevanceScore - 30);
    }
    if (finding.role?.state === "CONFIRMED" && candidate.role.state !== "CONTRADICTED") candidate.role = finding.role;
    if (finding.role?.state === "CONTRADICTED") candidate.role = finding.role;
    if (finding.productConfirmed?.state === "CONFIRMED") candidate.productConfirmed = finding.productConfirmed;
    if (finding.gradeConfirmed?.state === "CONFIRMED") candidate.gradeConfirmed = finding.gradeConfirmed;
    if (finding.contactEmail?.state === "CONFIRMED") candidate.contactEmail = finding.contactEmail;
    if (finding.contactPhone?.state === "CONFIRMED") candidate.contactPhone = finding.contactPhone;
    if (finding.country?.state === "CONFIRMED") candidate.country = finding.country;
    let level: VerificationLevel = candidate.verificationLevel !== "DISCOVERED" || finding.fetchedContent?.isLive ? "SOURCE_FETCHED" : "DISCOVERED";
    if (candidate.productConfirmed.state === "CONFIRMED") level = "PRODUCT_CONFIRMED";
    if (candidate.role.state === "CONFIRMED" && level === "PRODUCT_CONFIRMED") level = "ROLE_CONFIRMED";
    candidate.verificationLevel = level;
    candidate.totalScore = candidate.relevanceScore + candidate.evidenceSources.length * 5 +
      (level === "ROLE_CONFIRMED" ? 20 : level === "PRODUCT_CONFIRMED" ? 10 : 0);
  }
  
  
  
  
  const validCompanies = [...companies.values()].filter(c => {
    if (c.evidenceSources.length === 0 && c.relevanceScore === 0 && (!c.negativeSignals || c.negativeSignals.length === 0)) return true;
    if (c.evidenceSources.length > 0 && c.relevanceScore >= 30) return true;
    if (c.productConfirmed.state === "CONFIRMED" || c.role.state === "CONFIRMED" || c.country.state === "CONFIRMED") return true;
    if (c.relevanceScore >= 60) return true;
    if (c.negativeSignals && c.negativeSignals.length > 0 && c.relevanceScore >= 10) return true;
    if (c.role.state === "CONTRADICTED") return true;
    return false;
  });
  
  return validCompanies.sort((a, b) => b.totalScore - a.totalScore);

}

