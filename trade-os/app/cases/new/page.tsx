import AppHeader from "@/components/app-header";
import { currentUser, identityForEmail } from "@/lib/current-user";
import ResearchClient from "./research-client";

export const dynamic = "force-dynamic";

export default async function NewCasePage() {
  const user = await currentUser();
  if (!user) return <main className="shell"><div className="error-banner">Bu alan yalnızca yetkili CTSEG kullanıcılarına açıktır.</div></main>;
  return (
    <main className="shell research-shell">
      <AppHeader />
      <ResearchClient name={user.name} firstName={identityForEmail(user.email)?.firstName || user.name.split(" ")[0]} />
    </main>
  );
}
