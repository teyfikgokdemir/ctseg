import AppHeader from "@/components/app-header";
import { currentUser, identityForEmail } from "@/lib/current-user";
import ResearchClient from "@/app/cases/new/research-client";

export const dynamic = "force-dynamic";
export default async function NewResearchPage() {
  const user = await currentUser();
  if (!user) return <main className="shell"><div className="error-banner">Yetkisiz.</div></main>;
  return <><AppHeader /><ResearchClient name={user.name} firstName={identityForEmail(user.email)?.firstName || user.name.split(" ")[0]} /></>;
}
