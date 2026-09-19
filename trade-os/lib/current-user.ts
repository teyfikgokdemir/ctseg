import { headers } from "next/headers";
import { db } from "@/lib/db";
import { isAuthorizedEmail } from "@/lib/auth";

function adminEmail(): string | null {
  return process.env.PRIMARY_ADMIN_EMAIL?.trim().toLowerCase() || null;
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

  const isAdmin = email === adminEmail();
  const role = isAdmin ? "ADMIN" : "MANAGER";
  const name = isAdmin ? "Teyfik Gökdemir" : "Mina Fakhimi";

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
