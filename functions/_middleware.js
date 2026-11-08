// Retired commercial portfolio, with no equivalent replacement offering.
// Pages _redirects does not support 410; return the HTTP status at the edge.
export async function onRequest(context) {
  const pathname = new URL(context.request.url).pathname;
  if (/^\/(?:[a-z]{2}\/)?glass(?:\/|$)/i.test(pathname)) {
    return new Response(context.request.method === 'HEAD' ? null : '<!doctype html><html lang="en"><meta charset="utf-8"><meta name="robots" content="noindex"><title>Offering retired | CTSEG</title><main><h1>This offering has been retired</h1><p>CTSEG no longer offers commercial glass sourcing.</p><a href="/en/global-markets/">Explore current industries</a></main></html>', {
      status: 410,
      headers: { 'Content-Type': 'text/html; charset=utf-8', 'X-Robots-Tag': 'noindex', 'Cache-Control': 'public, max-age=3600' }
    });
  }
  return context.next();
}
