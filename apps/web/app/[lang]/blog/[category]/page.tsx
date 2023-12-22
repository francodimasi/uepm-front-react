import { Layout } from '@components/core/layout/Layout';
import { MainPostList } from '../components/postList/MainPostList';
import { notFound } from 'next/navigation';
import { getCategories } from '@api/blog/blogRequests';

export default async function Page({
  params,
}: {
  params: { category: string };
}) {
  const categories = await getCategories();

  if (
    isNaN(Number(params.category)) ||
    !categories.find((category) => category.id === Number(params.category))
  ) {
    notFound();
  }

  return (
    <Layout>
      <div className="container">
        <div className="grid grid-cols-12">
          <section className="col-span-12 pr-8 py-12">
            <MainPostList
              categories={categories}
              category={Number(params.category)}
              itemsPerPage={10}
            />
          </section>
        </div>
      </div>
    </Layout>
  );
}