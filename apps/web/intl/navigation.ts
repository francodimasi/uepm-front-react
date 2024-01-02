import {
  createLocalizedPathnamesNavigation,
  Pathnames,
} from 'next-intl/navigation';
import { locales } from 'intl/src/constants';

export const localePrefix = 'always';

export const pathnames = {
  '/': '/',
  '/blog': '/blog',
  '/blog/[category]': '/blog/[category]',
  '/blog/article/[slug]': {
    en: '/blog/article/[slug]',
    es: '/blog/articulo/[slug]',
    pt: '/blog/artigo/[slug]',
  },
  '/partners': '/partners',
  '/about': {
    en: '/about',
    es: '/nosotros',
    pt: '/sobre-nos',
  },
} satisfies Pathnames<typeof locales>;

export const { Link, redirect, usePathname, useRouter, getPathname } =
  createLocalizedPathnamesNavigation({ locales, localePrefix, pathnames });
