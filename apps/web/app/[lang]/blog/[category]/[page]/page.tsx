import { ENDPOINTS } from "@api/endpoints.conts";
import { Layout } from "@components/core/layout/Layout";
import { SuggestedPost } from "../../components/SuggestedPost";
import { TrendingTopics } from "../../components/TrendingTopics";
import { MainPostList } from "../../components/MainPostList";
import { notFound } from "next/navigation";
import {
  BlogCategory,
  BlogPost,
  BlogPostFilterParams,
  BlogPostParams,
} from "../../../../../api/blog/types/blog.types";
import { blogParser } from "../../hooks/useBlogParser";

export default async function Page({
  params,
}: {
  params: { category: string; page: string };
}) {

  const newTags = await getTags();

  const categoryId = params.category ? params.category : "37";

  const suggestedPosts = await getPostList({
    page: 1,
    per_page: 3,
    categories: [1],
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
    per_page: 10,
    categories: [categoryObj.id],
  });

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

async function getTags() {
  const res = await fetch(ENDPOINTS.BLOG.TAGS, {
    next: { revalidate: 7200 }, // 60*60*2= 2 hour
  });
  const data = await res.json();
  const newTags: { id: number; text: string }[] = data.map(
    (tag: { id: any; name: any }) => {
      return { id: tag.id, text: tag.name };
    }
  );
  return newTags;
}

async function getPostList(params: BlogPostFilterParams) {
  const { postToPostItem } = blogParser();
  const defaultParams = {
    context: "embed",
    status: "publish",
    per_page: 3,
  };

  const allParams: BlogPostParams = { ...defaultParams, ...params };
  let queryParams = "?";
  const keys = Object.keys(allParams);

  keys.forEach((key, index) => {
    if (allParams[key]) {
      const and = index < keys.length - 1 ? "&" : "";
      let query = `${key}=${allParams[key]}`;
      queryParams += `${query}${and}`;
    }
  });

  const res = await fetch(`${ENDPOINTS.BLOG.POSTS}${queryParams}`, {
    next: { revalidate: 7200 }, // 2 hour
  });

  if (!res.ok) {
    return []
  }

  const data = await res.json();

  const items = data?.map((post: BlogPost) => postToPostItem(post)) ?? [];
  return items;
}

async function getCategories() {
  const response = await fetch(ENDPOINTS.BLOG.CATEGORIES);
  const data = await response.json();
  const categoryToId = data.map(
    (category: { name: any; id: any; slug: any, count: number }): BlogCategory => {
      return {
        name: category.name,
        id: category.id,
        slug: category.slug,
        count: category.count
      };
    }
  );
  return categoryToId;
}

export async function generateStaticParams() {
  // const posts = await getAllPost()
  const categories = await getCategories();
  const postsPerPage = 10;
  const _return = []
  categories.forEach(async (category) => {
    const pages = Math.ceil(category.count / postsPerPage);
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