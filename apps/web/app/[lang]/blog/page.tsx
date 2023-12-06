
import { ENDPOINTS } from "@api/endpoints.conts";
import { Layout } from "@components/core/layout/Layout";
import { SuggestedPost } from "./components/SuggestedPost";
import { TrendingTopics } from "./components/TrendingTopics";
import { MainPostList } from "./components/MainPostList";


export default async function Page({ params }) {
  const newTags = await getTags()
  const posts = await getPosts()
  const categoriesToID = await getCategoryIDs()

  return (
    <Layout>
      <div className="container">
        <div className="grid grid-cols-12">
          <section className="col-span-9 pr-16 py-12">
            <MainPostList posts={posts} categoriesToID={categoriesToID}/>
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
      next: { revalidate: 30 },// 60*60 = 1 hour
    }
  );
  const data = await res.json()
  const newTags: {id: number, text: string}[] = data.map( (tag) => {
    return {id: tag.id, text: tag.name} 
  })
  return newTags
}


async function getPosts(){
  const res = await fetch(
    ENDPOINTS.BLOG.POSTS+"?context=embed&status=publish",
    {
      next: { revalidate: 60 },// 60*60 = 1 hour
    }
  );
  const data = await res.json()
  const posts = data.map( (post) => postToPostItem(post) )

  return posts
}


const postToPostItem = (post) => {
  const { title, date, featured_image_src, slug, yoast_head_json, category } = post;
  const postItem  = {
    category, 
    content: yoast_head_json.description,
    date,
    image: featured_image_src,
    slug,
    title: title.rendered,
  };

  return postItem;
};


async function getCategoryIDs() {
  const response = await fetch(ENDPOINTS.BLOG.CATEGORIES);
  const data = await response.json()
  const categoryToID = new Map()
  data.forEach(category => {
    categoryToID.set(category.name, category.id)
  });
  return categoryToID;
}

