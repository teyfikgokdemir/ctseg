const CURRENT_YEAR = new Date().getUTCFullYear();

function yearsFromText(value: string): number[] {
  return [...value.matchAll(/\b(20\d{2})\b/g)]
    .map((match) => Number(match[1]))
    .filter((year) => year >= 2000 && year <= CURRENT_YEAR + 1);
}

export function scoreFreshness(input: {
  title?: string;
  snippet?: string;
  publishedAt?: string | null;
}): { score: number; historicalOnly: boolean } {
  const text = [input.title, input.snippet, input.publishedAt].filter(Boolean).join(" ");
  const years = yearsFromText(text);
  const newestYear = years.length ? Math.max(...years) : null;

  if (input.publishedAt) {
    const date = new Date(input.publishedAt);
    if (!Number.isNaN(date.getTime())) {
      const ageMonths = Math.max(
        0,
        (Date.now() - date.getTime()) / (1000 * 60 * 60 * 24 * 30.44),
      );
      if (ageMonths <= 6) return { score: 100, historicalOnly: false };
      if (ageMonths <= 18) return { score: 90, historicalOnly: false };
      if (ageMonths <= 36) return { score: 72, historicalOnly: false };
      return { score: 35, historicalOnly: true };
    }
  }

  if (newestYear === CURRENT_YEAR || newestYear === CURRENT_YEAR - 1) {
    return { score: 88, historicalOnly: false };
  }
  if (newestYear && newestYear >= CURRENT_YEAR - 2) {
    return { score: 72, historicalOnly: false };
  }
  if (newestYear && newestYear <= CURRENT_YEAR - 4) {
    return { score: 30, historicalOnly: true };
  }

  return { score: 55, historicalOnly: false };
}

export function scoreVerification(url: string): number {
  try {
    const { hostname, pathname } = new URL(url);
    let score = 55;

    if (!hostname.includes("facebook.") && !hostname.includes("linkedin.")) score += 10;
    if (/product|products|catalog|catalogue|about|company|contact|technical|tds|sds/i.test(pathname)) score += 15;
    if (/\.pdf($|\?)/i.test(pathname)) score += 8;
    if (/\.gov\.|\.gov$|\.org\.|\.edu\./i.test(hostname)) score += 7;

    return Math.min(score, 95);
  } catch {
    return 35;
  }
}
