import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { headers } from 'next/headers';
import { Layout } from '@components/core/layout/Layout';
import { ArticleContent, ArticleTitle, ArticleRelated } from './components';
import { ArticleProps } from './Article.types';
import { defaultLocale } from 'intl';
import {
  getArticleBySlug,
  getEditorSelection,
  getTrendingTopics,
} from '@api/blog/requests';
import { FeaturedArticles } from '@components/shared/featuredArticles';
import { getArticlesByTag, getNextArticle } from './helpers';

const Page = async ({
  params: { lang = defaultLocale, slug },
}: ArticleProps) => {
  const article = await getArticleBySlug(slug);
  if (!article) notFound();

  const [editorSelection, tagArticles, nextArticle, tags] = await Promise.all([
    getEditorSelection(lang),
    getArticlesByTag(article.tags[0], lang),
    getNextArticle(article, lang),
    getTrendingTopics(lang),
  ]);

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

export async function generateMetadata({
  params: { slug },
}: ArticleProps): Promise<Metadata> {
  const article = await getArticleBySlug(slug);
  const yoast_head_json = article['yoast_head_json'];
  const headersInstance = headers();
  const url = headersInstance.get('x-url');

  return {
    title: yoast_head_json.title
      ? yoast_head_json.title + ' - Un Ensayo para Mí Yoast'
      : article.title.rendered + ' - Un Ensayo para Mí Rendered',
    description: yoast_head_json.description
      ? yoast_head_json.description
      : article['excerpt'].rendered,
    openGraph: {
      title: yoast_head_json.og_title
        ? yoast_head_json.og_title + ' - Un Ensayo para Mí'
        : article.title.rendered + ' - Un Ensayo para Mí',
      description: yoast_head_json.og_description
        ? yoast_head_json.og_description
        : article['excerpt'].rendered,
      type: 'article',
      siteName: 'Un Ensayo para Mí',
      images:
        typeof yoast_head_json.og_image !== typeof undefined &&
        yoast_head_json.og_image[0].url
          ? yoast_head_json.og_image[0].url
          : 'https://www.unensayoparami.org/img/logo.png',
      url: url,
    },
    other: {
      image: article.featured_image_src
        ? article.featured_image_src
        : 'https://www.unensayoparami.org/img/logo.png',
    },
  };
}
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
