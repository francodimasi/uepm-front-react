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
  '/about': {
    en: '/about',
    es: '/nosotros',
    pt: '/sobre-nos',
  },
  '/sites': {
    en: '/sites',
    es: '/sitios',
    pt: '/sitios',
  },
  '/sites/[id]': {
    en: '/sites/[id]',
    es: '/sitios/[id]',
    pt: '/sitios/[id]',
  },
  '/studies': {
    en: '/studies',
    es: '/ensayos',
    pt: '/ensaios',
  },
  '/studies/[id]': {
    en: '/studies/[id]',
    es: '/ensayos/[id]',
    pt: '/ensaios/[id]',
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
  '/maintenance': {
    en: '/maintenance',
    es: '/mantenimiento',
    pt: '/mantenimento',
  },
} satisfies Pathnames<typeof locales>;

export const { Link, redirect, usePathname, useRouter, getPathname } =
  createLocalizedPathnamesNavigation({ locales, localePrefix, pathnames });
