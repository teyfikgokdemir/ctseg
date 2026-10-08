const SITE_ORIGIN = 'https://ctseg.com.tr';
const MODEL = '@cf/meta/llama-3.1-8b-instruct-fp8';
const MAX_MESSAGE_LENGTH = 1_200;
const MAX_PAGE_PATH_LENGTH = 220;
const memoryRateLimit = new Map();

const allowedOrigins = [
  /^https:\/\/(?:www\.)?ctseg\.com\.tr$/,
  /^https:\/\/[a-z0-9-]+\.ctseg\.pages\.dev$/,
  /^http:\/\/(?:localhost|127\.0\.0\.1)(?::\d+)?$/
];

// These are only published CTSEG pages. The assistant never searches the open web.
const topicSources = {
  glass: ['/glass/', '/hizmetler/stratejik-tedarik/'],
  sourcing: ['/hizmetler/stratejik-tedarik/', '/hizmetler/tedarikci-bulma-ve-dogrulama/'],
  supplier: ['/hizmetler/tedarikci-bulma-ve-dogrulama/', '/nasil-calisiriz/'],
  rfq: ['/hizmetler/stratejik-tedarik/', '/nasil-calisiriz/'],
  export: ['/hizmetler/pazara-giris/', '/nasil-calisiriz/'],
  market: ['/hizmetler/pazara-giris/', '/pazarlar/'],
  trade_desk: ['/cozumler/dis-ticaret-masasi/', '/nasil-calisiriz/'],
  product: ['/ticaret-urunleri/', '/sektorler/'],
  pricing: ['/iletisim/', '/nasil-calisiriz/'],
  contact: ['/iletisim/', '/nasil-calisiriz/'],
  company: ['/hakkimizda/', '/nasil-calisiriz/']
};

const topicPatterns = {
  glass: /cam|float|temperli|lamine|low-?e|igu|isi ?cam|architectural glass|زجاج/i,
  sourcing: /tedarik|sourcing|satın alma|satinalma|üretici bul|uretic[iı] bul|توريد/i,
  supplier: /tedarikçi|tedarikci|supplier|manufacturer|üretici doğrula|uretic[iı] doğrula|مورد|مصنّع/i,
  rfq: /rfq|teklif|quotation|quote|fiyat talep|طلب تسعير/i,
  export: /ihracat|export|yurtdışı satış|yurtdisi satis|uluslararası satış|دخول الأسواق|تصدير/i,
  market: /pazar|market entry|buyer|alıcı|alici|distribütör|distributor|gulf|körfez|خليج/i,
  trade_desk: /dış ticaret masası|dis ticaret masasi|trade desk|operasyon.*yönet|operasyon.*yonet/i,
  product: /ürün|urun|portföy|portfoy|fıstık|fistik|gıda|gida|tekstil|medical|medikal|product/i,
  pricing: /fiyat|ücret|ucret|maliyet|price|cost|fee|كم السعر/i,
  contact: /iletişim|iletisim|whatsapp|e-?posta|email|telefon|contact|تواصل/i,
  company: /ctseg nedir|hakkınızda|hakkinda|şirket|sirket|company|من هي/i
};

const json = (body, status = 200) => new Response(JSON.stringify(body), {
  status,
  headers: { 'content-type': 'application/json; charset=utf-8', 'cache-control': 'no-store' }
});

const clean = (value, max) => typeof value === 'string'
  ? value.replace(/\u0000/g, '').trim().slice(0, max)
  : '';

const pageUrl = (path) => {
  if (!path.startsWith('/') || path.startsWith('//') || path.includes('\\')) return null;
  const url = new URL(path, SITE_ORIGIN);
  return url.origin === SITE_ORIGIN ? url : null;
};

const plainText = (html) => html
  .replace(/<script\b[^>]*>[\s\S]*?<\/script>/gi, ' ')
  .replace(/<style\b[^>]*>[\s\S]*?<\/style>/gi, ' ')
  .replace(/<[^>]+>/g, ' ')
  .replace(/&nbsp;/gi, ' ')
  .replace(/&amp;/gi, '&')
  .replace(/&quot;/gi, '"')
  .replace(/&#39;/gi, "'")
  .replace(/\s+/g, ' ')
  .trim()
  .slice(0, 7_000);

const limited = async (context) => {
  const ip = context.request.headers.get('cf-connecting-ip') || 'unknown';
  const key = `assistant:${ip}`;
  if (context.env.ASSISTANT_RATE_LIMITER?.limit) {
    const decision = await context.env.ASSISTANT_RATE_LIMITER.limit({ key });
    return !decision?.success;
  }
  if (context.env.ASSISTANT_RATE_LIMIT?.get) {
    const current = Number(await context.env.ASSISTANT_RATE_LIMIT.get(key) || 0);
    if (current >= 12) return true;
    await context.env.ASSISTANT_RATE_LIMIT.put(key, String(current + 1), { expirationTtl: 3600 });
    return false;
  }
  const now = Date.now();
  const current = memoryRateLimit.get(key) || { count: 0, expires: now + 3_600_000 };
  if (current.expires < now) Object.assign(current, { count: 0, expires: now + 3_600_000 });
  current.count += 1;
  memoryRateLimit.set(key, current);
  return current.count > 12;
};

const sourcePathsFor = (message, currentPath) => {
  const paths = [currentPath];
  for (const [topic, pattern] of Object.entries(topicPatterns)) {
    if (pattern.test(message)) paths.push(...topicSources[topic]);
  }
  return [...new Set(paths)].slice(0, 3);
};

async function fetchSources(message, currentPath) {
  const paths = sourcePathsFor(message, currentPath);
  const results = await Promise.all(paths.map(async (path) => {
    const url = pageUrl(path);
    if (!url) return null;
    try {
      const response = await fetch(url, { headers: { accept: 'text/html' }, cf: { cacheTtl: 300, cacheEverything: true } });
      if (!response.ok) return null;
      const text = plainText(await response.text());
      return text ? { path: url.pathname, text } : null;
    } catch {
      return null;
    }
  }));
  return results.filter(Boolean);
}

const textFromContent = (content) => {
  if (typeof content === 'string') return content;
  if (Array.isArray(content)) return content.map(textFromContent).filter(Boolean).join('\n');
  if (content && typeof content === 'object') {
    return textFromContent(content.text)
      || textFromContent(content.content)
      || textFromContent(content.value)
      || textFromContent(content.response)
      || textFromContent(content.choices?.[0]?.message?.content)
      || textFromContent(content.choices?.[0]?.text);
  }
  return '';
};

// Workers AI text models can return either a string or OpenAI-style content parts.
const extractAnswer = (result) => [
  result?.response,
  result?.choices?.[0]?.message?.content,
  result?.choices?.[0]?.text,
  result?.output_text,
  result?.result?.response
].map(textFromContent).find(Boolean) || '';

export async function onRequestPost(context) {
  const origin = context.request.headers.get('origin') || '';
  if (!allowedOrigins.some((rule) => rule.test(origin))) return json({ code: 'origin_rejected' }, 403);
  if (await limited(context)) return json({ code: 'rate_limited' }, 429);
  if (!context.env.AI?.run) return json({ code: 'assistant_not_configured' }, 503);

  let payload;
  try { payload = await context.request.json(); } catch { return json({ code: 'invalid_json' }, 400); }
  if (!payload || typeof payload !== 'object' || Array.isArray(payload)) return json({ code: 'invalid_payload' }, 400);

  const message = clean(payload.message, MAX_MESSAGE_LENGTH);
  const currentPath = clean(payload.pagePath, MAX_PAGE_PATH_LENGTH) || '/';
  if (!message) return json({ code: 'missing_message' }, 400);
  if (!pageUrl(currentPath)) return json({ code: 'invalid_page_path' }, 400);

  const sources = await fetchSources(message, currentPath);
  const contextText = sources.length
    ? sources.map((source) => `SOURCE: ${source.path}\n${source.text}`).join('\n\n---\n\n')
    : 'No CTSEG source could be retrieved. Do not answer with unverified facts.';

  const system = `You are CTSEG's public website assistant. Detect the visitor's language and answer in that same language; Arabic and Persian must use their native scripts. You are not a sales representative, lawyer, customs broker, or medical adviser. Answer only from the CTSEG source material supplied below. Never invent pricing, stock, lead times, certifications, supplier identities, legal/customs outcomes, or service availability. If the answer is not clearly supported, say so briefly and invite the visitor to submit a commercial request via the CTSEG contact form. Do not ask for personal data in chat. Keep the answer concise (maximum 150 words), practical, and B2B-focused. When useful, recommend the relevant CTSEG flow: strategic sourcing, supplier verification, market entry, glass RFQ, or external trade desk. End with a short 'Relevant CTSEG pages:' list of only the supplied source paths.\n\nCTSEG SOURCE MATERIAL:\n${contextText}`;

  try {
    const result = await context.env.AI.run(MODEL, {
      prompt: `${system}\n\nVISITOR QUESTION:\n${message}`,
      temperature: 0.1,
      max_tokens: 350
    }));
    const answer = clean(extractAnswer(result), 4_000);
    if (!answer) return json({ code: 'empty_model_response' }, 502);
    return json({ answer, sources: sources.map(({ path }) => path) });
  } catch (error) {
    console.error('CTSEG assistant inference failed', error);
    return json({ code: 'assistant_unavailable' }, 503);
  }
}

export function onRequest() {
  return json({ code: 'method_not_allowed' }, 405);
}
