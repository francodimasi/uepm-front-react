import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

import { match as matchLocale } from "@formatjs/intl-localematcher";
import Negotiator from "negotiator";

import cookie from "react-cookies";

/**
 * @todo define locales
 */

const locales = ["en", "es"];
let defaultLocale = "en";

function getLocale(request: NextRequest): string | undefined {
  // Negotiator expects plain object so we need to transform headers
  const negotiatorHeaders: Record<string, string> = {};
  request.headers.forEach((value, key) => (negotiatorHeaders[key] = value));

  // Use negotiator and intl-localematcher to get best locale
  let languages = new Negotiator({ headers: negotiatorHeaders }).languages();
  return (
    cookie.load("NEXT_LOCALE") ?? matchLocale(languages, locales, defaultLocale)
  );
}

export function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname;
  let tempLocale;

  // Check if there is any supported locale in the pathname
  const pathnameIsMissingLocale = locales.every((locale) => {
    if (!pathname.startsWith(`/${locale}/`) && pathname !== `/${locale}`) {
      return true;
    } else {
      tempLocale = locale;
      return false;
    }
  });

  // Save locale in cookies
  if (!pathnameIsMissingLocale) {
    cookie.save("NEXT_LOCALE", tempLocale);
  }

  // Redirect if there is no locale
  if (pathnameIsMissingLocale) {
    const locale = getLocale(request);
    return NextResponse.redirect(
      new URL(`/${locale}/${pathname}`, request.url)
    );
  }
}

export const config = {
  // Matcher ignoring `/_next/` and `/api/`
  matcher: ['/((?!api|_next/static|_next/image|public|favicon.ico).*)',],
};
