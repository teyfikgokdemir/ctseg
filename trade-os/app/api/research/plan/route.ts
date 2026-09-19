import { NextRequest, NextResponse } from "next/server";
import { researchPolicy, sourcePriority } from "@/lib/policy";

type CaseType = "SOURCING" | "BUYER_SEARCH" | "LOGISTICS";

const typeTasks: Record<CaseType, string[]> = {
  SOURCING: [
    "Ürünün teknik kimliğini, eş anlamlılarını, CAS/HS adaylarını çıkar",
    "Üretici, distribütör, ithalatçı, trader ve stokçu profillerini ayrı ayrı ara",
    "Şirket sitesi, güncel ürün sayfası, katalog ve teknik doküman kanıtlarını doğrula",
    "İletişim bilgilerini ve son faaliyet sinyallerini doğrula",
    "Eski kaynakları yalnızca güncel faaliyet kanıtı varsa aktif aday kabul et",
  ],
  BUYER_SEARCH: [
    "Ürün için olası alıcı profillerini ve sektörleri üret",
    "İthalatçı, distribütör, toptancı, private-label ve son kullanıcı şirketlerini ara",
    "Şirketin ürünü gerçekten satın alma ihtimalini güncel kanıtlarla açıkla",
    "Satın alma/tedarik iletişimlerini bul ve doğrula",
    "Eski veya kapanmış şirketleri aktif adaylardan çıkar",
  ],
  LOGISTICS: [
    "Çıkış-varış için kara, deniz, hava, demiryolu ve multimodal alternatifleri oluştur",
    "Güzergâhta aktif çalışan forwarder ve taşıyıcıları ara",
    "Hat, ekipman, parsiyel/komple, özel yük ve transit uygunluğunu doğrula",
    "Firma iletişimlerini ve son faaliyet sinyallerini doğrula",
    "Ücretli navlun/veri servislerini kullanma; bulunursa yalnızca alternatif olarak göster",
  ],
};

export async function POST(request: NextRequest) {
  const body = await request.json();
  const type = String(body.type || "SOURCING") as CaseType;
  const rawRequest = String(body.rawRequest || "").trim();

  if (!rawRequest || !typeTasks[type]) {
    return NextResponse.json({ error: "Geçerli vaka tipi ve talep metni gerekli." }, { status: 400 });
  }

  return NextResponse.json({
    type,
    rawRequest,
    policy: researchPolicy,
    sourcePriority,
    tasks: typeTasks[type],
    generatedAt: new Date().toISOString(),
  });
}
