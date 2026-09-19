import { createRemoteJWKSet } from "jose/jwks/remote";
import { jwtVerify } from "jose/jwt/verify";
import { NextRequest, NextResponse } from "next/server";
import { isAuthorizedEmail } from "./lib/auth";

let cachedJwksUrl = "";
let cachedJwks: ReturnType<typeof createRemoteJWKSet> | null = null;

function jwksFor(teamDomain: string) {
  const url = `${teamDomain.replace(/\/$/, "")}/cdn-cgi/access/certs`;

  if (!cachedJwks || cachedJwksUrl !== url) {
    cachedJwksUrl = url;
    cachedJwks = createRemoteJWKSet(new URL(url));
  }

  return cachedJwks;
}

export async function middleware(request: NextRequest) {
  if (process.env.NODE_ENV === "development") {
    return NextResponse.next();
  }

  const teamDomain = process.env.CLOUDFLARE_ACCESS_TEAM_DOMAIN?.trim().replace(/\/$/, "");
  const audience = process.env.CLOUDFLARE_ACCESS_AUD?.trim();
  const token = request.headers.get("cf-access-jwt-assertion");

  if (!teamDomain || !audience || !token) {
    return new NextResponse("Forbidden", {
      status: 403,
      headers: {
        "cache-control": "no-store",
        "x-robots-tag": "noindex, nofollow",
      },
    });
  }

  try {
    const { payload } = await jwtVerify(token, jwksFor(teamDomain), {
      issuer: teamDomain,
      audience,
    });

    const email = typeof payload.email === "string" ? payload.email.trim().toLowerCase() : null;

    if (!email || !isAuthorizedEmail(email)) {
      return new NextResponse("Forbidden", {
        status: 403,
        headers: {
          "cache-control": "no-store",
          "x-robots-tag": "noindex, nofollow",
        },
      });
    }

    const requestHeaders = new Headers(request.headers);
    requestHeaders.set("x-ctseg-user-email", email);

    return NextResponse.next({
      request: { headers: requestHeaders },
    });
  } catch {
    return new NextResponse("Forbidden", {
      status: 403,
      headers: {
        "cache-control": "no-store",
        "x-robots-tag": "noindex, nofollow",
      },
    });
  }
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico|api/health).*)"],
};
