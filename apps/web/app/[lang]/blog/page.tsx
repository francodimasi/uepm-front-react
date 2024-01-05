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
import { orderCategories } from '@helpers/category_helpers';

const NEWS_SLUG = 'noticias';

export default async function Page({ params: { lang = defaultLocale } }) {
  const categories = await getCategories();
  const orderedCategories = orderCategories(categories);
  const defaultCategoryId = categories.find(
    (category) => category.slug === NEWS_SLUG,
  )?.id;
  const news = categories.find((category) => category.slug === NEWS_SLUG)?.id;

  /**
   * @todo
   * Use Promise.all for all the following requests
   */
  const trendingTopics = await getTrendingTopics();
  const editorSelection = await getEditorSelection(lang);
  const promotedArticle = await getPromotedArticle(defaultCategoryId, lang);
  const suggestedArticles = await getSuggestedArticles(lang);
  const articles = await getArticlesByCategory(news, lang);

  return (
    <Layout locale={lang}>
      <div className="grid grid-cols-1 lg:grid-cols-3 xl:grid-cols-4">
        <BlogCover
          categories={orderedCategories}
          promotedArticle={promotedArticle}
          suggestedArticles={suggestedArticles}
          plainArticles={articles}
          initialCategory={defaultCategoryId}
          locale={lang}
        />
        <div className="col-span-1 pb-12 lg:pb-16 pl-0 lg:pl-12 flex flex-col gap-12 lg:gap-10">
          <EditorSelection articles={editorSelection} locale={lang} />
          <TrendingTopics topics={trendingTopics} />
        </div>
      </div>
    </Layout>
  );
}
