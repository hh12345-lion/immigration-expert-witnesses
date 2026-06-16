import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { SLUG_REDIRECTS } from "@/lib/seo/slug-redirects";

const PRIMARY_HOST = "www.immigrationexpertwitnesses.com";
const PRIMARY_ORIGIN = `https://${PRIMARY_HOST}`;
const REDIRECT_HOSTS = new Set(["immigrationexpertwitnesses.com"]);

export function middleware(request: NextRequest) {
  const host = request.headers.get("host")?.split(":")[0] ?? "";
  const pathname = request.nextUrl.pathname;

  if (REDIRECT_HOSTS.has(host)) {
    const url = new URL(pathname + request.nextUrl.search, PRIMARY_ORIGIN);
    return NextResponse.redirect(url, 301);
  }

  const slugRedirect = SLUG_REDIRECTS[pathname];
  if (slugRedirect) {
    const url = new URL(slugRedirect + request.nextUrl.search, request.url);
    return NextResponse.redirect(url, 301);
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico|.*\\..*).*)"],
};
