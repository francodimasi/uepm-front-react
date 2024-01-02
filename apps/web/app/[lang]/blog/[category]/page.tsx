import { Layout } from '@components/core/layout/Layout';
import { BlogCategory } from '../components/blogCategory';
import { notFound } from 'next/navigation';
import { getCategories } from '@api/blog/requests';
import { defaultLocale } from 'intl';

export default async function Page({
  params: { category, lang = defaultLocale },
}: {
  params: { category: string; lang: string };
}) {
  const categories = await getCategories();

  if (
    isNaN(Number(category)) ||
    !categories.find((cat) => cat.id === Number(category))
  ) {
    notFound();
  }

  return (
    <Layout>
      <div className="pb-12">
        <BlogCategory
          categories={categories}
          category={Number(category)}
          itemsPerPage={10}
          locale={lang}
        />
      </div>
    </Layout>
  );
}
