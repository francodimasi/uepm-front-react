import { Layout } from '@components/core/layout/Layout';
import { BlogFilter } from '../../components/blogFilter';
import { notFound } from 'next/navigation';
import { getTags } from '@api/blog/requests';
import { defaultLocale } from 'intl';

export default async function Page({
  params: { id, lang = defaultLocale },
}: {
  params: { id: string; lang: string };
}) {
  if (isNaN(Number(id))) notFound();

  const tags = await getTags();
  const tag = tags.find((tag) => tag.id === Number(id));

  return (
    <Layout locale={lang}>
      <div className="pb-12">
        <BlogFilter
          by={{ key: 'tags', value: tag.id, name: tag.name.toLocaleUpperCase() }}
          itemsPerPage={10}
          locale={lang}
        />
      </div>
    </Layout>
  );
}
