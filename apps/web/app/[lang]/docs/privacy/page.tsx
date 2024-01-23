import { Layout } from '@components/core/layout/Layout';
import { defaultLocale, locales, unstable_setRequestLocale } from 'intl';
import { Document } from '../components/Document';
import { getDocument } from '@api/documents/requests';
import { notFound } from 'next/navigation';

export default async function Page({ params: { lang = defaultLocale } }) {
  unstable_setRequestLocale(lang);
  const document = await getDocument({ type: 'privacy', lang });
  if (!document) notFound();

  return (
    <Layout locale={lang}>
      <Document content={document} />
    </Layout>
  );
}

export function generateStaticParams() {
  return locales.map((locale) => ({ lang: locale }));
}
