import type { ResearchFinding } from "./types";

export type CompanyEvidence = {
  title: string;
  url: string;
  adapter: string;
  status: "VERIFIED" | "UNVERIFIED";
  claim: string;
};
export type CompanyCandidate = {
  key: string;
  name: string;
  country: string | null;
  companyType: string;
  typeVerified: boolean;
  productOrService: string | null;
  website: string;
  productPage: string | null;
  contactPage: string | null;
  email: string | null;
  phone: string | null;
  freshnessScore: number;
  verificationScore: number;
  relevanceScore: number;
  evidenceCount: number;
  evidenceSources: CompanyEvidence[];
};

function companyType(text: string): string {
  if (/manufacturer|producer|üretici/i.test(text)) return "Üretici adayı";
  if (/distributor|distribütör|bayi/i.test(text)) return "Distribütör adayı";
  if (/importer|ithalatçı/i.test(text)) return "İthalatçı adayı";
  if (/freight|forwarder|lojistik|nakliye|transport|carrier/i.test(text)) return "Lojistik sağlayıcı adayı";
  if (/wholesaler|toptancı/i.test(text)) return "Toptancı adayı";
  if (/trader|stockist|stokçu/i.test(text)) return "Trader adayı";
  return "Ticari aday";
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
    if (["alibaba.com", "made-in-china.com", "europages.com"].includes(key)) continue;
    const name = finding.companyName || key.split(".")[0].replace(/(^\w|[-_]\w)/g, (part) => part.replace(/[-_]/, "").toUpperCase());
    const evidence: CompanyEvidence = { title: finding.title, url: finding.url, adapter: finding.adapter,
      status: finding.productPageVerified ? "VERIFIED" : "UNVERIFIED",
      claim: finding.productPageVerified ? finding.verifiedClaim || "Kaynak sayfası canlı doğrulandı" : "Arama sonucu; sayfa henüz doğrulanmadı" };
    const existing = companies.get(key);
    if (existing) {
      if (!existing.evidenceSources.some((source) => source.url === finding.url)) existing.evidenceSources.push(evidence);
      existing.evidenceCount = existing.evidenceSources.length;
      existing.freshnessScore = Math.max(existing.freshnessScore, finding.freshnessScore);
      existing.verificationScore = Math.max(existing.verificationScore, finding.verificationScore);
      existing.relevanceScore = Math.max(existing.relevanceScore, finding.relevanceScore);
      if (!existing.productPage && finding.productPageVerified) existing.productPage = finding.url;
      if (!existing.country && finding.country) existing.country = finding.country;
      if (finding.companyName) existing.name = finding.companyName;
      continue;
    }
    const text = `${finding.title} ${finding.snippet ?? ""}`;
    companies.set(key, {
      key, name, country: finding.country || null,
      companyType: companyType(text), typeVerified: false,
      productOrService, website: url.origin, productPage: finding.productPageVerified ? finding.url : null,
      contactPage: /contact|iletisim|iletişim/i.test(url.pathname) ? finding.url : null,
      email: finding.snippet?.match(/[\w.+-]+@[\w.-]+\.[a-z]{2,}/i)?.[0] || null,
      phone: null, freshnessScore: finding.freshnessScore,
      verificationScore: finding.verificationScore, relevanceScore: finding.relevanceScore,
      evidenceCount: 1, evidenceSources: [evidence],
    });
  }
  return [...companies.values()].sort((a, b) =>
    (b.relevanceScore + b.verificationScore + b.evidenceCount * 3) -
    (a.relevanceScore + a.verificationScore + a.evidenceCount * 3));
}
