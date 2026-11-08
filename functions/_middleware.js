// Exact approved overview decisions; check:migration verifies every entry against docs/migrations.
const overviewTargets = new Map([
  ["/tr/hizmetler/", "/tr/solutions/"],
  ["/tr/ticari-urunler/", "/tr/industries/"],
  ["/tr/pazarlar/", "/tr/global-markets/"],
  ["/en/services/", "/en/solutions/"],
  ["/en/trade-products/", "/en/industries/"],
  ["/en/markets/", "/en/global-markets/"],
  ["/de/dienstleistungen/", "/de/solutions/"],
  ["/de/handelsprodukte/", "/de/industries/"],
  ["/de/maerkte/", "/de/global-markets/"],
  ["/it/servizi/", "/it/solutions/"],
  ["/it/prodotti-commerciali/", "/it/industries/"],
  ["/it/mercati/", "/it/global-markets/"],
  ["/ru/uslugi/", "/ru/solutions/"],
  ["/ru/tovary/", "/ru/industries/"],
  ["/ru/rynki/", "/ru/global-markets/"],
  ["/fa/services/", "/fa/solutions/"],
  ["/fa/trade-products/", "/fa/industries/"],
  ["/fa/markets/", "/fa/global-markets/"],
  ["/zh/services/", "/zh/solutions/"],
  ["/zh/trade-products/", "/zh/industries/"],
  ["/zh/markets/", "/zh/global-markets/"],
  ["/vi/services/", "/vi/solutions/"],
  ["/vi/trade-products/", "/vi/industries/"],
  ["/vi/markets/", "/vi/global-markets/"],
  ["/uk/posluhy/", "/uk/solutions/"],
  ["/uk/torhovi-produkty/", "/uk/industries/"],
  ["/uk/rynky/", "/uk/global-markets/"],
  ["/ro/servicii/", "/ro/solutions/"],
  ["/ro/produse-comerciale/", "/ro/industries/"],
  ["/ro/piete/", "/ro/global-markets/"],
  ["/bg/uslugi/", "/bg/solutions/"],
  ["/bg/targovski-produkti/", "/bg/industries/"],
  ["/bg/pazari/", "/bg/global-markets/"],
  ["/ar/services/", "/ar/solutions/"],
  ["/ar/trade-products/", "/ar/industries/"],
  ["/ar/markets/", "/ar/global-markets/"],
  ["/he/שירותים/", "/he/solutions/"],
  ["/he/מוצרים-מסחריים/", "/he/industries/"],
  ["/he/שווקים/", "/he/global-markets/"],
]);

// Retired commercial portfolio, with no equivalent replacement offering.
// Pages _redirects does not support 410; return the HTTP status at the edge.
export async function onRequest(context) {
  const url = new URL(context.request.url);
  const pathname = url.pathname;
  if (/^\/(?:[a-z]{2}\/)?glass(?:\/|$)/i.test(pathname)) {
    return new Response(context.request.method === 'HEAD' ? null : '<!doctype html><html lang="en"><meta charset="utf-8"><meta name="robots" content="noindex"><title>Offering retired | CTSEG</title><main><h1>This offering has been retired</h1><p>CTSEG no longer offers commercial glass sourcing.</p><a href="/en/global-markets/">Explore current industries</a></main></html>', {
      status: 410,
      headers: { 'Content-Type': 'text/html; charset=utf-8', 'X-Robots-Tag': 'noindex', 'Cache-Control': 'public, max-age=3600' }
    });
  }
  // Pages asset redirects do not cover every slashless request handled by a
  // Function. Apply only the approved equivalent overview migrations here.
  let decodedPath;
  try { decodedPath = decodeURI(pathname); } catch { return context.next(); }
  const overviewTarget = overviewTargets.get(decodedPath.endsWith('/') ? decodedPath : `${decodedPath}/`);
  if (overviewTarget) {
    return new Response(null, {status:301,headers:{Location:`${overviewTarget}${url.search}`}});
  }
  return context.next();
}
