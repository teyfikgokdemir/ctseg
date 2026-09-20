import { DealStage, QuotationStatus, TradePriority, type Prisma } from "@prisma/client";
import { domainKey, normalizedEntityName } from "@/lib/research/company-resolver";

export const stageLabels: Record<DealStage, string> = {
  NEW_REQUEST: "Yeni Talep", RESEARCH: "Araştırma", SUPPLIERS_FOUND: "Firmalar Bulundu",
  RFQ_SENT: "RFQ Gönderildi", QUOTATIONS_RECEIVED: "Teklifler Geldi", NEGOTIATION: "Pazarlık",
  SAMPLE: "Numune", ORDER_PENDING: "Sipariş Bekleniyor", ORDER_CONFIRMED: "Sipariş Onaylandı",
  LOGISTICS: "Lojistik", COMPLETED: "Tamamlandı", LOST: "Kaybedildi", ON_HOLD: "Beklemede",
};

const closedStages = new Set<DealStage>([DealStage.COMPLETED, DealStage.LOST, DealStage.ON_HOLD]);
export const activeStages: DealStage[] = Object.values(DealStage).filter((stage) => !closedStages.has(stage));

export function text(value: unknown, max = 500): string {
  return typeof value === "string" ? value.trim().slice(0, max) : "";
}

export function optionalText(value: unknown, max = 500): string | null {
  return text(value, max) || null;
}

export function validUrl(value: unknown): string | null {
  const raw = text(value, 2000);
  if (!raw) return null;
  try {
    const url = new URL(raw);
    return url.protocol === "https:" || url.protocol === "http:" ? url.toString() : null;
  } catch { return null; }
}

export function date(value: unknown): Date | null {
  if (!value) return null;
  const result = new Date(String(value));
  return Number.isNaN(result.getTime()) ? null : result;
}

export function enumValue<T extends Record<string, string>>(values: T, value: unknown, fallback: T[keyof T]): T[keyof T] {
  return Object.values(values).includes(value as string) ? value as T[keyof T] : fallback;
}

export function money(value: unknown): string | null {
  const raw = String(value ?? "").trim();
  return /^\d{1,14}(?:\.\d{1,4})?$/.test(raw) ? raw : null;
}

export function companyIdentity(name: string, website: string | null): string {
  const domain = website ? domainKey(new URL(website).hostname) : "";
  return `${domain}:${normalizedEntityName(name)}`;
}

export function nextReference(): string {
  return `CTSEG-${new Date().getUTCFullYear()}-${crypto.randomUUID().slice(0, 8).toUpperCase()}`;
}

export function draftRfq(tradeCase: { title: string; productName: string | null; productSpecification: string | null; quantity: string | null; quantityUnit: string | null; destinationCountry: string | null }, company: { name: string; country: string | null }, channel: "EMAIL" | "WHATSAPP") {
  const turkish = /^(türkiye|turkey|tr)$/i.test(company.country?.trim() || "");
  const product = tradeCase.productName || tradeCase.title;
  const quantity = [tradeCase.quantity, tradeCase.quantityUnit].filter(Boolean).join(" ");
  const details = [quantity, tradeCase.productSpecification, tradeCase.destinationCountry].filter(Boolean).join(" · ");
  return turkish ? {
    language: "tr", channel, subject: `${product} için fiyat talebi`,
    body: `Merhaba ${company.name},\n\n${product} için teklifinizi rica ederiz.${details ? `\nDetaylar: ${details}` : ""}\nLütfen birim fiyat, para birimi, Incoterm, termin, MOQ ve ödeme koşullarını belirtin.\n\nCTSEG`,
  } : {
    language: "en", channel, subject: `Request for quotation: ${product}`,
    body: `Dear ${company.name},\n\nPlease send your quotation for ${product}.${details ? `\nDetails: ${details}` : ""}\nPlease include unit price, currency, Incoterm, lead time, MOQ and payment terms.\n\nCTSEG`,
  };
}

export function todayBounds(now = new Date()) {
  const start = new Date(now);
  start.setHours(0, 0, 0, 0);
  const end = new Date(start);
  end.setDate(end.getDate() + 1);
  return { start, end };
}

export function dashboardWhere(now = new Date()) {
  const { end } = todayBounds(now);
  return {
    activeCases: { stage: { in: activeStages } },
    pendingQuotations: { stage: DealStage.RFQ_SENT, quotations: { none: { deletedAt: null } } },
    todayTasks: { status: "OPEN" as const, dueAt: { lt: end } },
    openTasks: { status: "OPEN" as const },
  } satisfies Record<string, Prisma.TradeCaseWhereInput | Prisma.TradeTaskWhereInput>;
}

export function caseQuotationWhere(caseId: string, currency?: string, status?: string): Prisma.QuotationWhereInput {
  return {
    caseId, deletedAt: null, currency: currency || undefined,
    status: Object.values(QuotationStatus).includes(status as QuotationStatus) ? status as QuotationStatus : undefined,
  };
}

export async function loadDashboardMetrics(client: {
  tradeCase: { count: (args: { where: Prisma.TradeCaseWhereInput }) => Promise<number> };
  tradeTask: { count: (args: { where: Prisma.TradeTaskWhereInput }) => Promise<number> };
}, now = new Date()) {
  const where = dashboardWhere(now);
  const [activeCases, pendingQuotations, todayTasks, openTasks] = await Promise.all([
    client.tradeCase.count({ where: where.activeCases }), client.tradeCase.count({ where: where.pendingQuotations }),
    client.tradeTask.count({ where: where.todayTasks }), client.tradeTask.count({ where: where.openTasks }),
  ]);
  return { activeCases, pendingQuotations, todayTasks, openTasks };
}

export const priorities = Object.values(TradePriority);
