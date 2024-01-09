import { Layout } from '@components/core/layout/Layout';
import { BlogFilter } from '../../components/blogFilter';
import { defaultLocale } from 'intl';

export default function Page({
  params: { query, lang = defaultLocale },
}: {
  params: { query: string; lang: string };
}) {
  return (
    <Layout locale={lang}>
      <div className="pb-12">
        <BlogFilter
          by={{
            key: 'query',
            value: query.toLocaleLowerCase(),
            name: 'Resultados para la búsqueda: ' + query,
          }}
          itemsPerPage={10}
          locale={lang}
        />
      </div>
    </Layout>
  );
}
