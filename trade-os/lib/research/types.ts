import type { SearchResult } from "@/lib/search";

export type ResearchCaseType = "SOURCING" | "BUYER_SEARCH" | "LOGISTICS" ;

export type ResearchMode = "QUICK" | "DEEP";

export type ResearchRequest = {
  type: ResearchCaseType;
  mode?: ResearchMode;
  rawRequest: string;
  product?: string;
  sourceRegion?: string;
  destination?: string;
  destinations?: string[];
  aliases?: string[];
  grade?: string;
  excludedCountries?: string[];
  transportModes?: string[];
  languages?: string[];
  maxQueries?: number;
};

export type PlannedQuery = {
  query: string;
  language: string;
  intent: string;
  priority: number;
};

export type Evidence = {
  url: string;
  extractedText?: string;
  timestamp: string;
  type: "HTML" | "PDF" | "STRUCTURED_DATA";
};

export type VerificationLevel = 
  | "DISCOVERED" 
  | "SOURCE_FETCHED"
  | "PRODUCT_CONFIRMED"
  | "ROLE_CONFIRMED"
  | "CONTACT_CONFIRMED"
  | "SPEC_CONFIRMED"
  | "RECENT_ACTIVITY_CONFIRMED"
  | "FULLY_VERIFIED";

export type VerificationState = "CONFIRMED" | "PROBABLE" | "UNVERIFIED" | "CONTRADICTED";

export type CompanyRole = 
  | "MANUFACTURER" 
  | "DISTRIBUTOR" 
  | "AUTHORIZED_DISTRIBUTOR" 
  | "TRADER" 
  | "IMPORTER" 
  | "WHOLESALER" 
  | "RETAILER" 
  | "LOGISTICS_PROVIDER" 
  | "FORWARDER" 
  | "CARRIER"
  | "UNKNOWN";

export type VerifiedField<T> = {
  value: T;
  state: VerificationState;
  evidence?: Evidence[];
};

export type ResearchFinding = SearchResult & {
  adapter: string;
  query: string;
  language: string;
  domain: string;
  freshnessScore: number;
  verificationLevel?: VerificationLevel;
  verificationScore: number;
  relevanceScore: number;
  totalScore: number;
  historicalOnly: boolean;
  
  // Entity resolution
  normalizedCompanyName?: string;
  role?: VerifiedField<CompanyRole>;
  productConfirmed?: VerifiedField<boolean>;
  gradeConfirmed?: VerifiedField<string>;
  contactEmail?: VerifiedField<string>;
  contactPhone?: VerifiedField<string>;
  country?: VerifiedField<string>;
  manufacturer?: VerifiedField<string>;
  
  fetchedContent?: {
    title?: string;
    text?: string;
    headings?: string[];
    pdfLinks?: string[];
    isLive: boolean;
    type?: "PDF" | "HTML";
  };
};

export type ResearchRun = {
  request: ResearchRequest;
  queries: PlannedQuery[];
  findings: ResearchFinding[];
  diagnostics: { adapter: string; query: string; rawCount: number; acceptedCount: number; status: "success" | "error" | "rate-limited" | "temporarily_blocked" | "degraded"; error?: string }[];
  searchedAt: string;
  paidFallbackUsed: false;
  clarification?: {
    confidence: number;
    missingCriticalFields: string[];
    missingUsefulFields: string[];
    assumptions: string[];
    clarificationRequired: boolean;
    question?: string;
  };
  gapAnalysis?: string;
  followUpQueries?: PlannedQuery[];
  round?: number;
};




