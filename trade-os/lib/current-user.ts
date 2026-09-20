import { headers } from "next/headers";
import { db } from "@/lib/db";
import { isAuthorizedEmail } from "@/lib/auth";

function adminEmail(): string | null {
  return process.env.PRIMARY_ADMIN_EMAIL?.trim().toLowerCase() || null;
}

export function identityForEmail(email: string, configuredAdmin = adminEmail()) {
  const normalized = email.trim().toLowerCase();
  if (normalized === "teyfik@teyfikgokdemir.com") {
    return { name: "Teyfik Gökdemir", firstName: "Teyfik", role: normalized === configuredAdmin ? "ADMIN" as const : "MANAGER" as const };
  }
  if (normalized === "minafakhimi@icloud.com") {
    return { name: "Mina Fakhimi", firstName: "Mina", role: "MANAGER" as const };
  }
  return null;
}

export async function currentUser() {
  const headerStore = await headers();
  const accessEmail = headerStore.get("x-ctseg-user-email");
  const developmentEmail =
    process.env.NODE_ENV === "development"
      ? process.env.DEV_USER_EMAIL?.trim().toLowerCase() || null
      : null;

  const email = (accessEmail || developmentEmail)?.trim().toLowerCase() || null;

  if (!email || !isAuthorizedEmail(email)) return null;

  const identity = identityForEmail(email);
  if (!identity) return null;
  const { name, role } = identity;

  return db.user.upsert({
    where: { email },
    update: {
      name,
      role,
      active: true,
    },
    create: {
      email,
      name,
      role,
      active: true,
    },
  });
}
