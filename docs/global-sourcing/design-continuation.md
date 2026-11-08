# CTSEG / PR #88 — Premium iç sayfa tasarım devam kaydı

## Kapsam ve koruma sınırları
- Kullanıcı onayı: PR #88 ana sayfasının mevcut hero, metin, görsel, kömür siyahı/lime marka kimliği ve CTA yapısı korunur.
- İç sayfaların görsel standardı yetersiz bulundu: /solutions, /solutions/oem-odm, /industries ve sektör/uzmanlık sayfaları.
- Eski /hizmetler ile yeni /solutions yolları aynı içerik taksonomisine zorla birleştirilmemelidir; gerçek eşdeğerlik analizi sonrası ancak uygun 301 uygulanmalıdır.
- PR birleştirilmez, production deploy yapılmaz. Eski cam 410/301 yönlendirmeleri ve 13 dilin SEO altyapısı korunur.
- Codex yerel oturumu kota nedeniyle durdu. GitHub dışındaki Codex yerel WIP değişiklikleri **erişilebilir değildi**. Yerel checkout'a reset/clean uygulanmamalıdır.

## Bu devam çalışmasında GitHub üzerinde kaydedilen değişiklikler
1. `5c9cfa5`: `GlobalSourcing.astro` iç sayfalarında hero için mevcut ilgili görselleri gösterme, taşan dev başlıkları dengeleme, çözüm dizinini editoryal yerleşime taşıma, sektör dizinini asimetrik düzenleme, satışa yönelik bölüm açıklamalarını sadeleştirme. Ana sayfa `PageContent.astro` değiştirilmedi.
2. `3fa2d62`: Çözüm detaylarında tüm çözümleri tekrar listelemek yerine hizmetle ilişkili 3 sektör görseli ve içerik bağlantıları gösterme.
3. `31f4cd2`: `[specialization].astro` üzerinde 24 konu × 13 dilde kullanılan ortak şablonun tipografisini, teknik listelerini, süreç ve ilişkili içerik bölümlerini editoryal düzene taşıma; dekoratif kategori kart numaralarını kaldırma.

## Doğrulama sınırları
- GitHub güncelleme işlemleri commit SHA döndürdü; PR #88 üzerinde kayıtlıdır.
- Bunlar **önizleme görsel onayı değildir**. Değişiklik sonrası gerçek tarayıcı ekran görüntüleri henüz bağımsız incelenmedi.
- En yeni commit için GitHub CI sonucu ayrıca kontrol edilmelidir. Ara commitlerin CI koşuları sonraki pushlarla iptal edilebilir.
- Lokal npm/Astro build ve Playwright çalıştırılamadı: GitHub deposuna bu oturumun yerel kabından ağ erişimi yok; değerlendirme GitHub kaynak kodu ve CI çıktıları üzerinden yapılır.
- Bağımsız ana dili içerik incelemesi ve canlı form teslimatı kapsam dışıdır.

## Kalan iş listesi
1. Son SHA ve GitHub CI'yi kontrol et; hata varsa nokta atışı düzelt.
2. Güncel PR/Cloudflare preview üzerinde 390/768/1440 ekran görüntüleriyle hero, sektör, çözümler ve uzmanlık sayfalarını denetle.
3. Kullanıcının onayladığı tek satırlık hero lead düzeltmesini güvenli şekilde yap; `site.css` içinde çok sayıda eski `!important` override bulunduğundan önce gerçek kaskadı denetle.
4. Eski `/hizmetler/` ve yeni `/solutions/` URL envanterini çıkar; kesin eşdeğerlik olmayan eski sayfaları silme veya alakasız 301 ile yönlendirme. Menü etiketlerini/net akışları tasarımsal olarak birleştir.
5. Görsel/UX denetimine göre gerçek ihtiyaç halinde ilave sektöre özgü fotoğraf/hero yerleşimleri planla. Kaynağı ve temsil niteliğini doğru belirt.
6. Tüm 13 dil için LTR/RTL, kanonik, hreflang, sitemap, 301/410 ve form testlerini doğrula.

## Nihai yayın ilkesi
PR #88 kullanıcı görsel onayı, CI ve SEO/URL kontrolleri tamamlanmadan merge/deploy edilmemeli.

## 9 Kasım devam çalışması — PR aynı branch
- `d172155`: Yedi yeni çözüm sayfasının hero fotoğrafı hizmetle daha ilişkili sektöre bağlandı; alt metin görüntü ile eşleştirildi.
- `5e1a187`: Yeni global çözüm sayfalarında "Küresel Ticaret" menüsünün aktif durumu düzeltildi.
- `3b500ca` + `45f46d7`: Gerçek bir mimari/SEO sorunu giderildi. Eski `/tr/hizmetler/` (ve yerelleştirilmiş karşılıkları) ile yeni `/tr/solutions/` önceden aynı `GlobalSourcing mode=solutions` bileşenini sunuyordu. Eski danışmanlık indeksinin özgün hizmet dizini premium bir yerleşimle geri getirildi; yeni global sourcing çözümlerinin ayrı indeks ve URL yapısı korundu. Eski hizmet detaylarının adresleri değiştirilmedi; riskli 301 oluşturulmadı. Bağlantılar iki dizine de erişim sağlar.
- Değişiklikler `PageContent.astro`, `SiteHeader.astro`, `GlobalSourcing.astro`, `site.css` üzerinde sınırlı tutuldu.
- Bu devam çalışması görsel onay değildir: ekran görüntüsü ve gerçek Cloudflare preview taraması bağımsız doğrulanamadı.
- Son seri CI Core validation başarıyla tamamlandı, responsive workflow durumu nihai raporda ayrıca kontrol edilmeli.

## 9 Kasım rota denetimi düzeltmesi — önemli bulgu
- Önceki kayıtta `/hizmetler/` ve `/solutions/` için iki ayrı aktif indeks olduğu belirtilmişti. Bu **yanlıştı**: `getRouteRecords()` eski hizmet indekslerini yayımlamıyor; `localizedPath(lang,'services')` yeni `/solutions/` yolunu döndürüyor ve `public/_redirects` eski indeksleri yeniye 301 yönlendiriyor.
- Eski hizmet **detay** sayfaları (`/tr/hizmetler/stratejik-tedarik/` vb.) korunuyor. Bu içerikler yeni çözüm detaylarından farklı olabilir ve otomatik birleştirilmemelidir.
- Bu nedenle daha önce eklenen **erişilemeyen** legacy indeks markup ve CSS'i `c6217c2` + `9387511` ile geri alındı. Yönlendirmeler değiştirilmedi.
- Yeni Çözümler menüsündeki birbirinin aynısı iki indeks bağlantısı `2fc8ba4` ile tekilleştirildi.
- `check:global` içerisine legacy indekslerin 301 sözleşmesi, eski detay sayfalarının korunması ve menü bağlantısının tekilliği için regresyon denetimi eklendi (`6502de3`).
- Bu kayıt önceki hata tespitini açıklığa kavuşturur; kanıtlanmamış iki aktif indeks veya bağımsız legacy hub iddiası kullanılmamalıdır.

## 9 Kasım — yeni iç sayfaların eksik hero ve pazar düzeni
- `9d84dca`: `GlobalSourcing.astro` içinde Pazarlar, Hakkımızda ve Çalışma Süreci gibi yeni global iç sayfalara görselli hero desteği eklendi; 5 coğrafi araştırma bölgesinin sunumu çerçevesiz, dengeli editoryal ızgaraya dönüştürüldü. Yeni tedarikçi varlığı iddiası eklenmedi.
- Genişletme yalnızca global sourcing bileşeninin iç sayfa modlarını etkiler; üretim ana sayfası kodu ve `PageContent` bileşeni değiştirilmedi.
- Kod GitHub branch'ine gönderildi. Gerçek tarayıcı/Cloudflare preview görsel denetimi bu oturumda başarısız erişim nedeniyle **tamamlanamadı**. CI Core ve Responsive koşularının nihai sonucu ilgili GitHub Actions commit'inden kontrol edilmeli.

## Son tasarım checkpoint — iç sayfa hero
- `9586449`: Yeni global sourcing iç sayfalarında başlık/eyebrow, açıklama ve talep CTA'ları solda; sektöre özgü fotoğraf sağda olacak şekilde masaüstü editoryal hero yerleşimi CSS ile düzeltildi. 761px altında eski tek sütunlu mobil akış korunur. `data-global-mode="home"` açıkça kapsam dışında tutuldu; ana sayfa düzenine dokunulmadı.
- Uygulama GitHub PR #88 branch'ine commit edildi. Gerçek tarayıcıda güncel Cloudflare önizlemesi henüz doğrulanamadı; en son GitHub CI ve Responsive Visual QA koşularının sonuçları kontrol edilmelidir. Başarılı geçmeden merge veya deploy yapılmaz.

## 9 Kasım: Kanatlı Yemi referanslı tasarım ve iki ayrı menü

### Kullanıcı onaylı yeni kapsam
- Kullanıcı, `/tr/turkiyeden-kanatli-yemi-tedariki/` sayfasının hero ve içerik yerleşimini tüm yeni global sourcing sektör / hizmet / uzmanlık sayfalarına örnek gösterdi.
- Ana menüdeki `Uluslararası Tedarik Sektörleri` ile `Ticaret Portföyü` içerikleri aynı olmamalıdır. Birincisi 7 sektörlük uluslararası araştırma dizini; ikincisi gerçek ticari ürün grupları / tedarik portföyüdür.
- Kullanıcı yeni sayfaları canlıya alma veya eski cam sourcing'i geri getirme talimatı vermedi. Merge/deploy yok.

### Yapılanlar
- `TradePortfolio.astro`: ticaret portföyüne ayrı, PoultryFeedPage örneğinden esinlenen fotoğraflı tam ekran hero, editoryal ürün/portföy alanları, sağ görsel paneli ve CTA hazırlandı. Kuruyemiş ikincil gösterilir; cam tedariki aktif olarak gösterilmez.
- `PageContent.astro`, `src/data/site.ts`, `src/lib/routes.ts`: portföy gerçek ayrı, locale-temelli indexe bağlandı; sektörel dizin artık portföyü taklit etmiyor. Meta description yeni ticari kapsamla eşitlendi.
- `public/_redirects`, `functions/_middleware.js`: yeni içerik eşdeğerliği artık mevcut olmadığı için 13 portföy→sektör yönlendirmesi kaldırıldı. Eski hizmet/market migrasyonları ve cam 410 kuralları korundu.
- `src/pages/he/[...path].astro`: İbranice bağımsız portföy indexi eklendi.
- `docs/migrations/2026-11-08-baseline-url-decisions.json` ve `docs/migrations/2026-11-08-overview-redirects.json`: önceki 13 birleşim kararı güncellendi (39 yerine 26 kalıcı overview 301; 792 yerine 805 eski indexlenebilir URL).
- `GlobalSourcing.astro`: ana sayfa hariç yeni iç sayfa hero'ları PoultryFeedPage benzeri karanlık örtülü, fotoğraf odaklı tam ekran yerleşime geçirildi. Sektör/hizmet sayfası devamına detay, hizmet kapsamı, görsel aside ve CTA eklendi.
- `src/pages/[lang]/industries/[industry]/[specialization].astro`: 24 uzmanlık sayfasının hero'su aynı görsel dile uyarlandı.
- `src/pages/[lang]/industries/[industry]/index.astro`: uzmanlık alanları, final talep CTA'sından önce gösterilecek şekilde slot'a taşındı.
- `check:site`, `check:global`, `check:locales`: portföyün eski 18 ürünlü geniş katalog yerine ayrıştırılmış sektör odaklı portföy olduğu gerçeğini, yeni 200 URL'leri ve 301/410 korumasını test edecek şekilde güncellendi. Testlerdeki eski beklentiler ancak gerçek ürün/URL davranışı değiştiğinde güncellendi.

### Kanıt sınırları ve riskler
- Son GitHub CI koşularının bütün sonuçları raporlama anında ayrıca kontrol edilmeli.
- UI ekran görüntülerinin gerçek insan gözüyle görsel incelemesi henüz tamamlanmadı.
- 13 portföy sayfasının yeni 200 statüsü eski SEO konsolidasyon kararının yeni kullanıcı talimatı ile değiştirilmesidir; sitemap/canonical/redirect regression kontrolleri zorunludur.
- Cloudflare preview URL, commit SHA ve gerçek HTTP kodları ayrı doğrulanmalı; sadece GitHub push'u deploy olarak raporlanmamalı.
- Ana sayfa hero'su ve üretim branch'i değiştirilmedi.
