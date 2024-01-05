import { notFound } from 'next/navigation';
import { Layout } from '@components/core/layout/Layout';
import { ArticleContent, ArticleTitle, ArticleRelated } from './components';
import { BlogArticle, BlogFilterParams } from '@models/blog.types';
import { ArticleProps } from './Article.types';
import { defaultLocale } from 'intl';
import {
  getArticleBySlug,
  getEditorSelection,
  getArticles,
  getTagID,
  getTrendingTopics,
} from '@api/blog/requests';
import { BlogItem } from '@models/blog.types';
import { FeaturedArticles } from '@components/shared/featuredArticles';
import { BLOG } from '@api/blog/constants';

const getArticlesByTag = async function (tagName: string, lang: string) {
  const getArticlesParams: BlogFilterParams = {
    categories: [BLOG.LANG[lang.toUpperCase()]],
    per_page: 4,
    page: 1,
    context: 'view',
    order: 'desc',
  };

  if (tagName) {
    const tagID = await getTagID(tagName);
    getArticlesParams.tags = [tagID];
  }

  try {
    return await getArticles(getArticlesParams);
  } catch (error) {
    console.log(error);
    return null;
  }
};

/**
 * Gets next cronological article from the same category as current article
 * @param current
 * @returns
 */
const getNextArticle = async function (current: BlogArticle, lang: string) {
  try {
    const followingArticles: BlogItem[] = await getArticles({
      categories: [BLOG.LANG[lang.toUpperCase()]],
      context: 'view',
      page: 1,
      per_page: 1,
      order: 'desc',
      before: current.date,
    });

    return followingArticles?.length > 0 ? followingArticles[0] : null;
  } catch (error) {
    console.log(error);
    return null;
  }
};

const Page = async ({
  params: { lang = defaultLocale, slug },
}: ArticleProps) => {
  const article = await getArticleBySlug(slug);
  if (!article) notFound();

  const editorSelection = await getEditorSelection(lang);
  const tagArticles = await getArticlesByTag(article.tags[0], lang);
  const nextArticle = await getNextArticle(article, lang);
  const tags = await getTrendingTopics();

  return (
    <Layout locale={lang}>
      <div className="flex flex-col px-0">
        <ArticleTitle
          title={article.title.rendered}
          date={article.date}
          readingTime={
            article['yoast_head_json']['twitter_misc']['Tiempo de lectura']
          }
          tags={article.tags}
          locale={lang}
        />
        <div className="grid grid-cols-1 lg:grid-cols-3 xl:grid-cols-4">
          <ArticleContent article={article} />
          <ArticleRelated
            nextArticle={nextArticle}
            editorSelection={editorSelection}
            trendingTags={tags}
            locale={lang}
          />
        </div>
        <FeaturedArticles
          tag={article.tags[0]}
          articles={tagArticles}
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
// TODO: this may take a long time to build, maybe generate fewer static articles?

// export async function generateStaticParams() {
//   //Grab only the slug field for the 100 most recent articles
//   const queryParams = '?_fields=slug&status=publish&per_page=100&order=desc';

//   try {
//     const response = await fetch(`${ENDPOINTS.BLOG.POSTS}${queryParams}`, {
//       next: { revalidate: DAY_IN_SECONDS },
//     });
//     const data: BlogArticles[] = await response.json();
//     const articleSlugs = data?.map((article) => {
//       return { slug: article.slug };
//     });
//     return articleSlugs;
//   } catch (error) {
//     console.log(error);
//     return null;
//   }
// }
