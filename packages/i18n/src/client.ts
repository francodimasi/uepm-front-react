'use client';

import i18next from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import Backend from 'i18next-chained-backend';
import resourcesToBackend from 'i18next-resources-to-backend';
import { useEffect } from 'react';
import { useTranslation } from 'next-i18next';
import { initReactI18next } from 'react-i18next';
import { getOptions, namespace, runsOnServerSide } from './options';

i18next
  .use(Backend)
  .use(LanguageDetector)
  .use(
    resourcesToBackend(
      (lng: string) => import(`/public/locales/${lng}/${namespace}.json`),
    ),
  )
  .use(initReactI18next)
  .init({
    ...getOptions(),
    lng: undefined, // let detect the language on client side
    detection: {
      order: ['path', 'htmlTag', 'cookie', 'navigator'],
    },
  });

export function useClientTranslation(
  lng: string,
  options: { keyPrefix: string } = { keyPrefix: '' },
) {
  const ret = useTranslation('', options);
  const { i18n } = ret;
  if (runsOnServerSide && i18n.resolvedLanguage !== lng) {
    i18n.changeLanguage(lng);
  } else {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    useEffect(() => {
      if (i18n.resolvedLanguage === lng) return;
      i18n.changeLanguage(lng);
    }, [lng, i18n]);
  }
  return ret;
}
