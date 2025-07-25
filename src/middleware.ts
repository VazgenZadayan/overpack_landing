// middleware.ts
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { i18n } from "./i18n-config";

export function middleware(request: NextRequest) {
  const { nextUrl } = request;

  const pathname = nextUrl.pathname;
  const allowedLocales = i18n.locales;
  const isRoot = pathname === "/";
  const isAllowedLocale = allowedLocales.some(
    (locale) => pathname === `/${locale}` || pathname.startsWith(`/${locale}/`)
  );

  if (isRoot || isAllowedLocale) {
    return NextResponse.next();
  }

  const isLangPath = /^\/[a-zA-Z]{2}(\/|$)/.test(pathname);
  if (isLangPath) {
    return NextResponse.rewrite(new URL("/not-found", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
};
