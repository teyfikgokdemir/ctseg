import type { SearchResult } from "@/lib/search";

export type ResearchCaseType = "SOURCING" | "BUYER_SEARCH" | "LOGISTICS";

export type ResearchRequest = {
  type: ResearchCaseType;
  rawRequest: string;
  product?: string;
  sourceRegion?: string;
  destination?: string;
  languages?: string[];
  maxQueries?: number;
};

export type PlannedQuery = {
  query: string;
  language: string;
  intent: string;
  priority: number;
};

export type ResearchFinding = SearchResult & {
  adapter: string;
  query: string;
  language: string;
  domain: string;
  freshnessScore: number;
  verificationScore: number;
  historicalOnly: boolean;
};

export type ResearchRun = {
  request: ResearchRequest;
  queries: PlannedQuery[];
  findings: ResearchFinding[];
  searchedAt: string;
  paidFallbackUsed: false;
};
