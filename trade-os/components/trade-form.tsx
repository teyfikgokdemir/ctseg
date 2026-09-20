"use client";

import { useRouter } from "next/navigation";
import { useState, type FormEvent } from "react";

export type Field = { name: string; label: string; type?: "text" | "number" | "date" | "datetime-local" | "url" | "email" | "textarea" | "select"; required?: boolean; value?: string; options?: Array<{ value: string; label: string }> };

export function TradeForm({ action, fields, hidden = {}, submit = "Kaydet", onSaved }: { action: string; fields: Field[]; hidden?: Record<string, string>; submit?: string; onSaved?: string }) {
  const router = useRouter();
  const [error, setError] = useState("");
  const [saving, setSaving] = useState(false);
  const [result, setResult] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSaving(true); setError(""); setResult("");
    const formData = new FormData(event.currentTarget);
    const payload = Object.fromEntries(formData.entries());
    try {
      const response = await fetch("/api/trade-desk", { method: "POST", headers: { "content-type": "application/json" }, body: JSON.stringify({ ...payload, ...hidden, action }) });
      const data = await response.json();
      if (!response.ok) throw new Error(data.error || "İşlem tamamlanamadı.");
      setResult(action === "rfq.prepare" ? `${data.draft.subject}\n\n${data.draft.body}` : "Kaydedildi.");
      if (action === "case.create" && data.case?.id) router.push(`/cases/${data.case.id}`);
      else if (onSaved) router.push(onSaved);
      router.refresh();
    } catch (cause) { setError(cause instanceof Error ? cause.message : "İşlem tamamlanamadı."); }
    finally { setSaving(false); }
  }

  return <form className="desk-form" onSubmit={handleSubmit}>
    {fields.map((field) => <label key={field.name}><span>{field.label}</span>{field.type === "textarea" ?
      <textarea name={field.name} defaultValue={field.value} required={field.required} rows={4} /> : field.type === "select" ?
      <select name={field.name} defaultValue={field.value || ""} required={field.required}><option value="">Seçin</option>{field.options?.map((option) => <option key={option.value} value={option.value}>{option.label}</option>)}</select> :
      <input name={field.name} type={field.type || "text"} defaultValue={field.value} required={field.required} step={field.type === "number" ? "any" : undefined} />}</label>)}
    {error && <p className="error-banner" role="alert">{error}</p>}
    {result && <pre className="desk-result" role="status">{result}</pre>}
    <button className="primary-button" type="submit" disabled={saving}>{saving ? "Kaydediliyor…" : submit}</button>
  </form>;
}
