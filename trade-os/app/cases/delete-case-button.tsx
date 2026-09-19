"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

export function DeleteCaseButton({ id, title }: { id: string; title: string }) {
  const router = useRouter();
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState("");

  async function removeCase() {
    const confirmed = window.confirm(
      `"${title}" vakasını ve araştırma geçmişini kalıcı olarak silmek istiyor musunuz?`,
    );

    if (!confirmed) return;

    setBusy(true);
    setError("");

    const response = await fetch(`/api/cases/${id}`, { method: "DELETE" });
    const data = await response.json().catch(() => ({}));

    if (!response.ok) {
      setError(data.error || "Vaka silinemedi.");
      setBusy(false);
      return;
    }

    router.refresh();
  }

  return (
    <div className="delete-case-wrap">
      <button
        type="button"
        className="delete-case-button"
        onClick={removeCase}
        disabled={busy}
        aria-label="Vakayı sil"
      >
        {busy ? "Siliniyor…" : "Sil"}
      </button>
      {error && <span className="delete-case-error">{error}</span>}
    </div>
  );
}
