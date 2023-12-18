import { Layout } from "@components/core/layout/Layout";
import { SuggestedPost } from "./../components/SuggestedPost";
import { TrendingTopics } from "./../components/TrendingTopics";
import { MainPostList } from "./../components/MainPostList";
import { notFound } from "next/navigation";
import { BlogCategory } from "../../../../api/blog/types/blog.types";
import { getPostList, getTrendingTopics, getCategories } from "@api/blog/requests";

export default async function Page({
  params,
}: {
  params: { category: string;};
}) {
  const categories = await getCategories()

  if(isNaN(Number(params.category)) || !categories.find((category) => category.id === Number(params.category))) {
    notFound()
  }

  return (
    <Layout>
      <div className="container">
        <div className="grid grid-cols-12">
          <section className="col-span-12 pr-8 py-12">
            <MainPostList categories={categories} category={Number(params.category)} itemsPerPage={10}/>
          </section>
        </div>
      </div>
    </Layout>
  );
}

// export async function generateStaticParams() {
//   // const posts = await getAllPost()
//   const categories = await getCategories();
//   const postsPerPage = 10;
//   const _return = []
//   categories.forEach(async (category) => {
//     const pages = Math.ceil(category.count / postsPerPage);
//     for (let i = 1 ; i <= pages; i++) {
//       _return.push(
//         {
//           category: category.id.toString(),
//           page: i.toString()
//         }
//       )
//     }
//   });
//   return _return;
// }  