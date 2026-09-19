export const researchPolicy = {
  freeFirst: true,
  evidenceRequired: true,
  freshnessRequired: true,
  paidSourcesEnabled: false,
  paidSearchProvidersEnabled: false,
  paidEnrichmentEnabled: false,
  paidSourceBehavior: "suggest-only" as const,
  defaultFreshnessMonths: 24,
};

export const sourcePriority = [
  "ctseg-internal",
  "official",
  "company-website",
  "open-web",
  "free-directory",
  "public-document",
  "free-trade-statistics",
  "local-listing",
  "paid-alternative",
] as const;
