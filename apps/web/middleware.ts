import { defaultLocale, locales } from 'intl/src/constants';
import { localePrefix, pathnames } from './intl/navigation';

import createIntlMiddleware from 'next-intl/middleware';
import { NextRequest, NextResponse } from 'next/server';

export default async function middleware(request: NextRequest) {
  const [, locale, ...segments] = request.nextUrl.pathname.split('/');

  if (locale !== null && !locales.includes(locale)) {
    request.nextUrl.pathname = `/${defaultLocale}/${segments.join('/')}`;
    return NextResponse.redirect(
      new URL(`/${defaultLocale}/${segments.join('/')}`, request.url),
    );
  }

  const handleI18nRouting = createIntlMiddleware({
    locales,
    defaultLocale,
    localePrefix,
    pathnames,
  });
  return handleI18nRouting(request);
}

export const config = {
  matcher: ['/((?!api|_next|.*\\..*).*)'],
};
