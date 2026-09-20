import Link from "next/link";
import { currentUser, identityForEmail } from "@/lib/current-user";

export default async function AppHeader() {
  const user = await currentUser();
  if (!user) return null;

  const identity = identityForEmail(user.email);
  const firstName = identity?.firstName || user.name.split(" ")[0];
  const role = user.role || "MANAGER";

  const nameParts = user.name.split(" ").filter(Boolean);
  const monogram = nameParts.length >= 2
    ? (nameParts[0][0] + nameParts[nameParts.length - 1][0]).toUpperCase()
    : nameParts[0].substring(0, 2).toUpperCase();

  return (
    <header className="topbar">
      <div className="topbar-left">
        <Link href="/" className="brand">CTSEG <span>Trade Desk</span></Link>
        <div className="workspace-caption">PRIVATE TRADE OPERATIONS</div>
      </div>

      <div className="topbar-center">
        <div className="header-greeting">
          <span className="status-dot"></span>
          İyi çalışmalar, {firstName}
        </div>
        <div className="header-greeting-sub">Günlük ticaret operasyonu</div>
      </div>

      <nav className="topbar-right">
        <Link className="top-nav-link" href="/">Dashboard</Link>
        <Link className="top-nav-link" href="/cases">Vakalar</Link>
        <Link className="top-nav-link" href="/companies">Firmalar</Link>
        <Link className="top-nav-link" href="/quotations">Teklifler</Link>
        <Link className="top-nav-link" href="/tasks">Görevler</Link>
        <Link className="top-nav-link" href="/documents">Belgeler</Link>
        <Link className="top-new-case" href="/cases/new">Yeni Talep +</Link>
        <div className="user-pill">
          <div className="user-monogram">{monogram}</div>
          <div className="user-info">
            <span className="user-name">{user.name}</span>
            <span className="user-role">{role}</span>
          </div>
        </div>
      </nav>
    </header>
  );
}
