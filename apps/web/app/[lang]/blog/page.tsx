import { Layout } from '@components/core/layout/Layout';
import { EditorSelection } from '@components/shared/editorSelection';
import { TrendingTopics } from '@/components/shared/trendingTopics';
import { BlogCover } from './components/blogCover';
import {
  getPromotedArticle,
  getArticlesByCategory,
  getTrendingTopics,
  getCategories,
  getSuggestedArticles,
  getEditorSelection,
} from '@api/blog/requests';
import { defaultLocale } from 'intl';

const NEWS_SLUG = 'noticias';

export default async function Page({ params: { lang = defaultLocale } }) {
  const categories = await getCategories();
  const defaultCategoryId = categories.find(
    (category) => category.slug === NEWS_SLUG,
  )?.id;
  const news = categories.find((category) => category.slug === NEWS_SLUG)?.id;

  /**
   * @todo
   * Use Promise.all for all the following requests
   */
  const trendingTopics = await getTrendingTopics();
  const editorSelection = await getEditorSelection();
  const promotedArticle = await getPromotedArticle(defaultCategoryId);
  const suggestedArticles = await getSuggestedArticles();
  const articles = await getArticlesByCategory(news);

  return (
    <Layout>
      <div className="container grid grid-cols-12">
        <section className="col-span-12 py-2 pr-0 sm:col-span-9 sm:pr-8 sm:py-12">
          <BlogCover
            categories={categories}
            promotedArticle={promotedArticle}
            suggestedArticles={suggestedArticles}
            plainArticles={articles}
            initialCategory={defaultCategoryId}
            locale={lang}
          />
        </section>
        <aside className="col-span-12 sm:col-span-3 pr-2 py-12 flex-col justify-start items-start gap-8 inline-flex">
          <EditorSelection articles={editorSelection} locale={lang} />
          <TrendingTopics topics={trendingTopics} />
        </aside>
      </div>
    </Layout>
  );
}
