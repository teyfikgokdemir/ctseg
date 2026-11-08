import overviewRedirects from '../docs/migrations/2026-11-08-overview-redirects.json' with { type: 'json' };

const overviewTargets = new Map(overviewRedirects.map(({from,to}) => [from,to]));

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
