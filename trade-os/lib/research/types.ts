export type ResearchCaseType = "SOURCING" | "BUYER_SEARCH" | "LOGISTICS";
export type ResearchMode = "QUICK" | "DEEP";

export type ClaimType = "ROLE" | "PRODUCT" | "CONTACT" | "COUNTRY" | "GRADE" | "ROUTE" | "CAPACITY" | "AVAILABILITY";
export type VerificationState = "CONFIRMED" | "PARTIAL" | "PROBABLE" | "UNVERIFIED" | "CONTRADICTED";
export type NegativeSignal = "NOT_FOUND" | "WRONG_PRODUCT" | "STALE_PAGE" | "CONFLICTING_GRADE" | "ROLE_NOT_PROVEN" | "MANUFACTURER_CONTRADICTED" | "INACCESSIBLE_SOURCE";

export interface Evidence {
  url: string;
  extractedText?: string;
  timestamp: string;
  type?: "HTML" | "PDF" | "STRUCTURED_DATA";
  claimType: ClaimType;
  status: VerificationState;
  excerpt?: string;
}

export type VerificationLevel = 
  | "DISCOVERED" 
  | "SOURCE_FETCHED"
  | "PRODUCT_CONFIRMED"
  | "ROLE_CONFIRMED"
  | "CONTACT_CONFIRMED"
  | "SPEC_CONFIRMED"
  | "RECENT_ACTIVITY_CONFIRMED"
  | "FULLY_VERIFIED";

export interface VerifiedField<T> {
  value: T;
  state: VerificationState;
  evidence: Evidence[];
}

export interface ResearchRequest {
  rawRequest: string;
  type: ResearchCaseType;
  mode?: ResearchMode;
  product?: string;
  aliases?: string[];
  grade?: string;
  sourceRegion?: string;
  destination?: string;
  destinations?: string[];
  excludedCountries?: string[];
  transportModes?: string[];
  languages?: string[];
  maxQueries?: number;
  budgetTracker?: { fetchesUsed: number };
}

export interface ResearchRun {
  request: ResearchRequest;
  queries: PlannedQuery[];
  findings: ResearchFinding[];
  diagnostics: AdapterDiagnostic[];
  searchedAt: string;
  paidFallbackUsed: boolean;
  round: number;
  clarification?: {
    confidence: number;
    missingCriticalFields: string[];
    missingUsefulFields: string[];
    assumptions: string[];
    clarificationRequired: boolean;
    question: string;
  };
}

export interface PlannedQuery {
  query: string;
  language: string;
  intent: string;
  priority: number;
}

export interface AdapterDiagnostic {
  adapter: string;
  query: string;
  rawCount: number;
  acceptedCount: number;
  status: string;
  error?: string;
}

export interface ResearchFinding {
  url: string;
  title: string;
  snippet?: string;
  domain: string;
  adapter: string;
  query: string;
  language: string;
  freshnessScore: number;
  companyName?: string;
  contactEmail?: VerifiedField<string>;
  contactPhone?: VerifiedField<string>;
  country?: VerifiedField<string>;
  relevanceScore?: number;
  totalScore?: number;
  normalizedCompanyName?: string;
  historicalOnly: boolean;
  negativeSignals?: NegativeSignal[];
  
  fetchedContent?: {
    title?: string;
    text?: string;
    headings?: string[];
    pdfLinks?: string[];
    isLive: boolean;
    type?: 'PDF' | 'HTML' | 'UNKNOWN';
    status?: number | null;
    finalUrl?: string;
    contentType?: string | null;
    fetchedAt?: string;
    error?: string;
  };
  
  productConfirmed?: VerifiedField<boolean>;
  gradeConfirmed?: VerifiedField<string>;
  role?: VerifiedField<CompanyRole>;
  verificationScore: number;
}

export type CompanyRole = "MANUFACTURER" | "DISTRIBUTOR" | "TRADING_COMPANY" | "LOGISTICS" | "BUYER" | "UNKNOWN";

export interface CompanyCandidate {
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
  totalScore: number;
  verificationLevel: VerificationLevel;
  evidenceSources: Evidence[];
}
