import { Layout } from '@components/core/layout/Layout';
import { BlogFilter } from '../../components/blogFilter';
import { notFound } from 'next/navigation';
import { getCategories } from '@api/blog/requests';
import { defaultLocale } from 'intl';

export default async function Page({
  params: { id, lang = defaultLocale },
}: {
  params: { id: string; lang: string };
}) {
  if (isNaN(Number(id))) notFound();

  const categories = await getCategories(lang);
  const category = categories.find((category) => category.id === Number(id));

  return (
    <Layout locale={lang}>
      <div className="pb-12">
        <BlogFilter
          by={{
            key: 'categories',
            value: category.id,
            name: category.name,
          }}
          itemsPerPage={10}
          locale={lang}
        />
      </div>
    </Layout>
  );
}
