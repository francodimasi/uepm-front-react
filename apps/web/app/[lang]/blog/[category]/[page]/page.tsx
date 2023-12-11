import { Layout } from "@components/core/layout/Layout";
import { SuggestedPost } from "../../components/SuggestedPost";
import { TrendingTopics } from "../../components/TrendingTopics";
import { MainPostList } from "../../components/MainPostList";
import { notFound } from "next/navigation";
import {
  BlogCategory,
} from "../../../../../api/blog/types/blog.types";
import { getCategories, getPostList, getTags } from "@api/blog/requests";

const POSTS_PER_PAGE = 10

export default async function Page({
  params,
}: {
  params: { category: string; page: string };
}) {
  const categoryId = params.category ? params.category : "37"; //"Ciencia"

  const newTags = await getTags();
  
  const suggestedPosts = await getPostList({
    page: 1,
    per_page: 3,
    categories: [1], //"General"
  });

  const categories = await getCategories();
  const categoryObj = categories.find(
    (category: BlogCategory) => category.id.toString() === categoryId
  );

  if (!categoryObj) {
    return notFound();
  }

  const mainPosts = await getPostList({
    page: Number(params.page),
    per_page: POSTS_PER_PAGE,
    categories: [categoryObj.id],
  });

  //TODO: Show a "no posts" message instead of a 404 page  
  if(mainPosts.length === 0) {
    return notFound();
  }

  return (
    <Layout>
      <div className="container">
        <div className="grid grid-cols-12">
          <section className="col-span-9 pr-16 py-12">
            <MainPostList
              posts={mainPosts}
              category={categoryObj}
              categories={categories}
            />
          </section>
          <aside className="col-span-3 pr-2 py-12 flex-col justify-start items-start gap-8 inline-flex">
            <SuggestedPost posts={suggestedPosts} />
            <TrendingTopics tags={newTags} />
          </aside>
        </div>
      </div>
    </Layout>
  );
}

export async function generateStaticParams() {
  const categories = await getCategories();
  const _return = []
  categories.forEach(async (category) => {
    const pages = Math.ceil(category.count / POSTS_PER_PAGE);
    for (let i = 1 ; i <= pages; i++) {
      _return.push(
        {
          category: category.id.toString(),
          page: i.toString()
        }
      )
    }
  });
  return _return;
}