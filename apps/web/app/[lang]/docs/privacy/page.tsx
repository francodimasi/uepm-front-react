import { Layout } from '@components/core/layout/Layout';
import { defaultLocale } from 'intl';
import { Document } from '../components/Document';
import { getDocument } from '@api/documents/requests';

export default async function Page({ params: { lang = defaultLocale } }) {
  const document = await getDocument({ type: 'privacy', lang });

  return (
    <Layout locale={lang}>
      <Document content={document} />
    </Layout>
  );
}
