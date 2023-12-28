import { useBlog } from '@api/blog/useBlog';
import { Layout } from '@components/core/layout/Layout';
import {
  ArticleContent,
  ArticleTitle,
  ArticleRelated,
  FeaturedArticles,
} from './components';
// import { ENDPOINTS } from '@api/endpoints.conts';
import { BlogPost, BlogPostFilterParams } from '@api/blog/types/blog.types';
import { ArticleProps } from './Article.types';
import { defaultLocale } from 'intl';

// const DAY_IN_SECONDS = 86400;

const getRecommendedPosts = async function (
  tagName: string,
  getPostListFn: (_params: BlogPostFilterParams) => Promise<BlogPost[]>,
  getTagIDFn: (_tagName: string) => Promise<number>,
) {
  const getPostsParams: BlogPostFilterParams = {
    per_page: 4,
    page: 1,
    context: 'view',
    order: 'desc',
  };

  if (tagName) {
    const tagID = await getTagIDFn(tagName);
    getPostsParams.tags = [tagID];
  }

  try {
    return await getPostListFn(getPostsParams);
  } catch (error) {
    console.log(error);
    return null;
  }
};

// Gets next cronological post from the same category as current post
const getNextPost = async function (
  currentPost: BlogPost,
  getPostsFn: (_params: BlogPostFilterParams) => Promise<BlogPost[]>,
) {
  try {
    const nextPost: BlogPost[] = await getPostsFn({
      context: 'view',
      page: 1,
      per_page: 1,
      categories: currentPost.categories,
      order: 'desc',
      before: currentPost.date,
    });
    if (nextPost.length === 0) return null;
    return nextPost[0];
  } catch (error) {
    console.log(error);
    return null;
  }
};

const Page = async ({
  params: { lang = defaultLocale, slug },
}: ArticleProps) => {
  const { getOnePost, getPostList, getTagID, getTags } = useBlog();

  const article = await getOnePost(slug);
  const tagName = article.tags[0];
  const featuredArticles = await getRecommendedPosts(
    tagName,
    getPostList,
    getTagID,
  );
  const nextArticle = await getNextPost(article, getPostList);
  const tags = await getTags();

  return (
    <Layout>
      <div className="flex flex-col px-0">
        <ArticleTitle
          title={article.title.rendered}
          date={article.date}
          readingTime={
            article['yoast_head_json']['twitter_misc']['Tiempo de lectura']
          }
          tag={article.tags[0]}
          locale={lang}
        />
        <div className="grid grid-cols-1 lg:grid-cols-3 xl:grid-cols-4">
          <ArticleContent article={article} />
          <ArticleRelated
            nextArticle={nextArticle}
            trendingTags={tags}
            locale={lang}
          />
        </div>
        <FeaturedArticles
          tag={tagName}
          articles={featuredArticles}
          locale={lang}
        />
      </div>
    </Layout>
  );
};

export default Page;

/**
 * @author Lucas
 * Setting this as a comment due to build issue. We will need to do a spike on this
 */

// TODO: check if wordpress rate limits these requests, seeing some Socket closed errors during build
// TODO: this may take a long time to build, maybe generate fewer static posts?

// export async function generateStaticParams() {
//   //Grab only the slug field for the 100 most recent posts
//   const queryParams = '?_fields=slug&status=publish&per_page=100&order=desc';

//   try {
//     const response = await fetch(`${ENDPOINTS.BLOG.POSTS}${queryParams}`, {
//       next: { revalidate: DAY_IN_SECONDS },
//     });
//     const data: BlogPost[] = await response.json();
//     const postSlugs = data?.map((post) => {
//       return { slug: post.slug };
//     });
//     return postSlugs;
//   } catch (error) {
//     console.log(error);
//     return null;
//   }
// }
