import { Layout } from '@components/core/layout/Layout';
import {
  defaultLocale,
  getTranslations,
  locales,
  unstable_setRequestLocale,
} from 'intl';
import { H2, P1 } from 'ui/core';

export default async function Page({ params: { lang = defaultLocale } }) {
  unstable_setRequestLocale(lang);
  const t = await getTranslations({ lang, namespace: 'maintenance' });

  return (
    <Layout locale={lang}>
      <div className="w-full flex flex-col items-center">
        <H2 className="tracking-tight">{t('title')}</H2>
        <P1 className="mt-6 text-base leading-7 text-gray-600">
          {t('description')}
        </P1>
      </div>
    </Layout>
  );
}

export function generateStaticParams() {
  return locales.map((locale) => ({ lang: locale }));
}
