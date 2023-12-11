import { Layout } from "@components/core/layout/Layout";
import { SuggestedPost } from "./components/SuggestedPost";
import { TrendingTopics } from "./components/TrendingTopics";
import { MainPostList } from "./components/MainPostList";
import { notFound } from "next/navigation";
import { BlogCategory } from "../../../api/blog/types/blog.types";
import { getPostList, getTrandingTopics, getCategories } from "@api/blog/requests";

export default async function Page({
  params,
}: {
  params: { category: string; page: string };
}) {

  const trendingTopics = await getTrandingTopics();
  const suggestedPosts = await getPostList({
    page: 1,
    per_page: 3,
    categories: [1],
  });

  const categories = await getCategories()
  return (
    <Layout>
      <div className="container">
        <div className="grid grid-cols-12">
          <section className="col-span-9 pr-16 py-12">
            <MainPostList categories={categories}/>
          </section>
          <aside className="col-span-3 pr-2 py-12 flex-col justify-start items-start gap-8 inline-flex">
            <SuggestedPost posts={suggestedPosts} />
            <TrendingTopics tags={trendingTopics} />
          </aside>
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