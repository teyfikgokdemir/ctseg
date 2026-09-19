export function authorizedEmails(): Set<string> {
  return new Set(
    (process.env.AUTHORIZED_EMAILS ?? "")
      .split(",")
      .map((email) => email.trim().toLowerCase())
      .filter(Boolean),
  );
}

export function isAuthorizedEmail(email: string | null): boolean {
  if (!email) return false;
  return authorizedEmails().has(email.trim().toLowerCase());
}
