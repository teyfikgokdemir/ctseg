import type { IntentProvider, ParsedIntent } from "./intent-parser";
import { LocalIntentProvider } from "./intent-parser";
import type { CompanyCandidate } from "./company-resolver";
import type { ResearchReview, ResearchReviewProvider } from "./research-review";
import { LocalResearchReviewProvider } from "./research-review";
import type { ResearchCaseType } from "./types";

function localEndpoint(): URL | null {
  const base = process.env.LOCAL_RESEARCH_AI_URL?.trim();
  if (!base || !process.env.LOCAL_RESEARCH_AI_MODEL?.trim()) return null;
  try {
    const url = new URL(base);
    if (url.protocol !== "http:" || !["localhost", "127.0.0.1", "::1"].includes(url.hostname)) return null;
    return new URL("/api/chat", url);
  } catch { return null; }
}

async function chatJson(prompt: string): Promise<Record<string, unknown>> {
  const endpoint = localEndpoint();
  if (!endpoint) throw new Error("LOCAL_AI_NOT_CONFIGURED");
  const response = await fetch(endpoint, {
    method: "POST", headers: { "content-type": "application/json" },
    body: JSON.stringify({ model: process.env.LOCAL_RESEARCH_AI_MODEL,
      messages: [{ role: "user", content: prompt }], format: "json", stream: false }),
    signal: AbortSignal.timeout(12_000), cache: "no-store",
  });
  if (!response.ok) throw new Error(`LOCAL_AI_HTTP_${response.status}`);
  const payload = await response.json() as { message?: { content?: string } };
  return JSON.parse(payload.message?.content || "{}") as Record<string, unknown>;
}

export class LocalModelProvider implements IntentProvider, ResearchReviewProvider {
  name = "local-model";
  async parse(rawRequest: string, preferredType?: ResearchCaseType): Promise<ParsedIntent> {
    const fallback = await new LocalIntentProvider().parse(rawRequest, preferredType);
    try {
      const proposal = await chatJson(`Parse this trade request as JSON. Return only fields grade, specification, quantity, quantityUnit, recurrence, transportModes, specialConstraints. Do not invent a company, product, country or verified claim. Request: ${rawRequest}`);
      const grade = typeof proposal.grade === "string" && /feed|food|pharma|yem|gÄ±da|ilaÃ§/i.test(rawRequest) ? proposal.grade.slice(0, 80) : fallback.grade;
      const constraints = Array.isArray(proposal.specialConstraints)
        ? proposal.specialConstraints.filter((value): value is string => typeof value === "string" && value.length < 120).slice(0, 5)
        : fallback.specialConstraints;
      return { ...fallback, grade, specification: grade || fallback.specification,
        specialConstraints: [...new Set([...fallback.specialConstraints, ...constraints])], parser: this.name };
    } catch { return fallback; }
  }

  async review(parsed: ParsedIntent, type: ResearchCaseType, companies: CompanyCandidate[]): Promise<ResearchReview> {
    const fallback = await new LocalResearchReviewProvider().review(parsed, type, companies);
    try {
      const evidence = companies.slice(0, 12).map((company) => ({ name: company.name,
        sources: company.evidenceSources.map((source) => ({ title: source.type, status: "VERIFIED", claim: source.url })) }));
      const proposal = await chatJson(`Review only this evidence as JSON with fields followUpQueries (array of search strings) and limitations (array of strings). Do not create companies. Do not call any unverified claim verified. Requested grade: ${parsed.grade || "none"}. Task: ${type}. Evidence: ${JSON.stringify(evidence)}`);
      const strings = (value: unknown) => Array.isArray(value)
        ? value.filter((item): item is string => typeof item === "string" && item.length < 180).slice(0, 3) : [];
      return { ...fallback, provider: this.name,
        followUpQueries: [...new Set([...fallback.followUpQueries, ...strings(proposal.followUpQueries)])].slice(0, 5),
        limitations: [...new Set([...fallback.limitations, ...strings(proposal.limitations)])].slice(0, 5) };
    } catch { return fallback; }
  }
}

export function getResearchAIProvider(): IntentProvider & ResearchReviewProvider {
  return localEndpoint() ? new LocalModelProvider() : new LocalIntentProviderWithReview();
}

class LocalIntentProviderWithReview implements IntentProvider, ResearchReviewProvider {
  name = "local-evidence-rules";
  parse(rawRequest: string, preferredType?: ResearchCaseType) { return new LocalIntentProvider().parse(rawRequest, preferredType); }
  review(parsed: ParsedIntent, type: ResearchCaseType, companies: CompanyCandidate[]) {
    return new LocalResearchReviewProvider().review(parsed, type, companies);
  }
}

