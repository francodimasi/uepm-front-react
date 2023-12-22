import { Layout } from '@components/core/layout/Layout';
import { SuggestedPosts } from '../../../components/shared/suggestedPosts/SuggestedPosts';
import { TrendingTopics } from '../../../components/shared/trendingTopics/TrendingTopics';
import { BlogFrontPage } from './components/frontPage/BlogFrontPage';
import {
  getFeaturedPost,
  getBlogCategoryPostList,
  getTrendingTopics,
  getCategories,
  getSuggestedPosts,
  getEditorChoicePosts,
} from '@api/blog/blogRequests';

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
            <SuggestedPosts posts={editorChoicePosts} />
            <TrendingTopics tags={trendingTopics} />
          </aside>
        </div>
      </div>
    </Layout>
  );
}
