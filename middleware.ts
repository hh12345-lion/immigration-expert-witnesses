import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { SLUG_REDIRECTS } from "@/lib/seo/slug-redirects";

export function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname;

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
