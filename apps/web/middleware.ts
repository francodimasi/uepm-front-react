import { defaultLocale, locales } from 'intl/src/constants';
import { localePrefix, pathnames } from './intl/navigation';

import createIntlMiddleware from 'next-intl/middleware';
import { NextRequest, NextResponse } from 'next/server';

export default function middleware(request: NextRequest) {
  const url = new URL(request.url);
  const origin = url.origin;
  const pathname = url.pathname;

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

  const response = handleI18nRouting(request);

  response.headers.set('x-url', request.url);
  response.headers.set('x-origin', origin);
  response.headers.set('x-pathname', pathname);

  return response;
}

export const config = {
  matcher: ['/((?!api|_next|.*\\..*).*)'],
};
