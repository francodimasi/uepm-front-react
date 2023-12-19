import { Layout } from '@components/core/layout/Layout';
import { SuggestedPost } from './components/SuggestedPost';
import { TrendingTopics } from './components/TrendingTopics';
import { BlogFrontPage } from './components/BlogFrontPage';
import {
  getFeaturedPost,
  getBlogCategoryPostList,
  getTrendingTopics,
  getCategories,
  getSuggestedPosts,
  getEditorChoicePosts
} from '@api/blog/requests';

export default async function Page() {
  const categories = await getCategories();
  const defaultCategoryId = categories.find(
    (category) => category.slug === 'noticias',
  ).id;
  const defaultsuggestedPostCategoryId = categories.find(
    (category) => category.slug === 'noticias',
  ).id;

  const trendingTopics = await getTrendingTopics();
  const editorChoicePosts = await getEditorChoicePosts();
  
  const featuredPost = await getFeaturedPost(defaultCategoryId);
  const suggestedPosts = await getSuggestedPosts();

  const posts = await getBlogCategoryPostList(defaultsuggestedPostCategoryId);

  return (
    <Layout>
      <div className="container">
        <div className="grid grid-cols-12">
          <section className="col-span-12 py-2 pr-0 sm:col-span-9 sm:pr-8 sm:py-12">
            <BlogFrontPage
              categories={categories}
              featuredPost={featuredPost}
              suggestedPosts={suggestedPosts}
              posts={posts}
              defaultCategoryId={defaultCategoryId}
            />
          </section>
          <aside className="col-span-12 sm:col-span-3 pr-2 py-12 flex-col justify-start items-start gap-8 inline-flex">
            <SuggestedPost posts={editorChoicePosts} />
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
