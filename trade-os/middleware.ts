import { NextRequest, NextResponse } from "next/server";
import { isAuthorizedEmail } from "./lib/auth";

export function middleware(request: NextRequest) {
  if (process.env.NODE_ENV === "development") {
    return NextResponse.next();
  }

  const email = request.headers.get("cf-access-authenticated-user-email");

  if (!isAuthorizedEmail(email)) {
    return new NextResponse("Forbidden", {
      status: 403,
      headers: {
        "cache-control": "no-store",
        "x-robots-tag": "noindex, nofollow",
      },
    });
  }

  const response = NextResponse.next();
  if (email) response.headers.set("x-ctseg-user-email", email);
  return response;
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico).*)"],
};
