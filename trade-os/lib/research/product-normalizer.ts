export type NormalizedProduct = { name: string; aliases: string[]; cas: string | null; hsCode: string | null };

// Synonyms are additive; CAS and HS remain unknown until backed by evidence.
const names = [
  { pattern: /\b(?:l[\s-]?)?(?:threonine|treonin)\b/i, name: "L-Threonine",
    aliases: ["L-Threonine", "L Threonine", "Threonine", "L-Treonin", "L Treonin"] },
  { pattern: /\b(?:safran|saffron)\b/i, name: "Safran", aliases: ["Safran", "Saffron"] },
];

export function normalizeProduct(text: string): NormalizedProduct | null {
  const known = names.find((entry) => entry.pattern.test(text));
  if (known) return { name: known.name, aliases: known.aliases, cas: null, hsCode: null };
  const generic = text.trim().replace(/\s+/g, " ");
  if (!generic) return null;
  return { name: generic, aliases: [...new Set([generic, generic.replace(/-/g, " ")])], cas: null, hsCode: null };
}
