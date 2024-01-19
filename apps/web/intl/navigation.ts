import {
  createLocalizedPathnamesNavigation,
  Pathnames,
} from 'next-intl/navigation';
import { locales } from 'intl/src/constants';

export const localePrefix = 'always';

export const pathnames = {
  '/': '/',
  '/blog': '/blog',
  '/blog/category/[id]': {
    en: '/blog/category/[id]',
    es: '/blog/categoria/[id]',
    pt: '/blog/categoria/[id]',
  },
  '/blog/tag/[id]': {
    en: '/blog/tag/[id]',
    es: '/blog/asunto/[id]',
    pt: '/blog/asunto/[id]',
  },
  '/blog/article/[slug]': {
    en: '/blog/article/[slug]',
    es: '/blog/articulo/[slug]',
    pt: '/blog/artigo/[slug]',
  },
  '/blog/search/[query]': {
    en: '/blog/search/[query]',
    es: '/blog/buscar/[query]',
    pt: '/blog/procurar/[query]',
  },
  '/partners': '/partners',
  '/about': {
    en: '/about',
    es: '/nosotros',
    pt: '/sobre-nos',
  },
  '/docs/terms': {
    en: '/docs/terms',
    es: '/documentos/terminos',
    pt: '/documentos/termos',
  },
  '/docs/privacy': {
    en: '/docs/privacy',
    es: '/documentos/privacidad',
    pt: '/documentos/privacidade',
  },
} satisfies Pathnames<typeof locales>;

export const { Link, redirect, usePathname, useRouter, getPathname } =
  createLocalizedPathnamesNavigation({ locales, localePrefix, pathnames });
