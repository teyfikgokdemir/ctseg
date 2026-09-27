/** Keep generated pages and links on the same deterministic slug contract. */
export function localizedSlug(slugs: Partial<Record<string, string>> | undefined, locale: string, id?: string): string {
  const slug = slugs?.[locale] || slugs?.en || id;
  if (!slug || /undefined|\[object Object\]/.test(slug)) {
    throw new Error(`Missing localized slug: locale=${locale}, id=${id ?? '(section)'}`);
  }
  return slug;
}
