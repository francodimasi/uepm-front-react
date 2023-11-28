
import { ENDPOINTS } from "@api/endpoints.conts";
import { Layout } from "@components/core/layout/Layout";
import { SuggestedPost } from "./components/SuggestedPost";
import { TrendingTopics } from "./components/TrendingTopics";
import { MainPostList } from "./components/MainPostList";


export default async function Page({ params }) {
  const newTags = await getTags()

  return (
    <Layout>
      <div className="container">
        <div className="grid grid-cols-12">
          <section className="col-span-9 pr-16 py-12">
            <MainPostList />
          </section>
          <aside className="col-span-3 flex-col justify-start items-start gap-8 inline-flex">
            <SuggestedPost />
            <TrendingTopics tags={newTags} />
          </aside>
        </div>
      </div>
    </Layout>
  );
}

async function getTags() {
  const res = await fetch(
    ENDPOINTS.BLOG.TAGS,
    {
      next: { revalidate: 3600 },// 60*60 = 1 hour
    }
  );
  const data = await res.json()
  const newTags: {id: number, text: string}[] = data.map( (tag) => {
    return {id: tag.id, text: tag.name} 
  })
  return newTags
}

// Return a list of `params` to populate the [lang] dynamic segment
export async function generateStaticParams() {
  return [
    //Should read available languages from i18n configuration
    { lang: "es" },
    { lang: "en" },
    { lang: "pg" },
    { lang: "fr" },
  ];
}