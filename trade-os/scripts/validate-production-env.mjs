const required = [
  "DATABASE_URL",
  "AUTHORIZED_EMAILS",
  "PRIMARY_ADMIN_EMAIL",
  "CLOUDFLARE_ACCESS_TEAM_DOMAIN",
  "CLOUDFLARE_ACCESS_AUD",
];

const missing = required.filter((key) => !process.env[key]?.trim());

if (missing.length) {
  console.error(`Missing required production environment variables: ${missing.join(", ")}`);
  process.exit(1);
}

const authorized = process.env.AUTHORIZED_EMAILS
  .split(",")
  .map((value) => value.trim().toLowerCase())
  .filter(Boolean);

const unique = [...new Set(authorized)];
const admin = process.env.PRIMARY_ADMIN_EMAIL.trim().toLowerCase();

if (unique.length !== 2) {
  console.error("AUTHORIZED_EMAILS must contain exactly two unique users.");
  process.exit(1);
}

if (!unique.includes(admin)) {
  console.error("PRIMARY_ADMIN_EMAIL must be one of the two AUTHORIZED_EMAILS.");
  process.exit(1);
}

if (process.env.DEV_USER_EMAIL?.trim()) {
  console.error("DEV_USER_EMAIL must not be configured in production.");
  process.exit(1);
}

for (const key of [
  "PAID_DATA_SOURCES_ENABLED",
  "PAID_SEARCH_PROVIDERS_ENABLED",
  "PAID_ENRICHMENT_ENABLED",
]) {
  if ((process.env[key] ?? "false").trim().toLowerCase() !== "false") {
    console.error(`${key} must remain false in production.`);
    process.exit(1);
  }
}

console.log("CTSEG Trade OS production configuration validated.");
