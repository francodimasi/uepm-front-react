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
import { defaultLocale, locales, unstable_setRequestLocale } from 'intl';
import { orderCategories } from './helpers';
import { notFound } from 'next/navigation';

const NEWS_SLUG = 'noticias';

export default async function Page({ params: { lang = defaultLocale } }) {
  unstable_setRequestLocale(lang);
  const categories = await getCategories(lang);
  const orderedCategories = orderCategories(categories);
  const defaultCategoryId = categories.find(
    (category) => category.slug === NEWS_SLUG,
  )?.id;

  if (!defaultCategoryId) notFound();

  const [
    trendingTopics,
    editorSelection,
    promotedArticle,
    suggestedArticles,
    articlesByCategory,
  ] = await Promise.all([
    getTrendingTopics(lang),
    getEditorSelection(lang),
    getPromotedArticle(defaultCategoryId, lang),
    getSuggestedArticles(lang),
    getArticlesByCategory(defaultCategoryId, lang),
  ]);

  return (
    <Layout locale={lang}>
      <div className="grid grid-cols-1 lg:grid-cols-3 xl:grid-cols-4">
        <BlogCover
          categories={orderedCategories}
          promotedArticle={promotedArticle}
          suggestedArticles={suggestedArticles}
          plainArticles={articlesByCategory}
          initialCategory={defaultCategoryId}
          locale={lang}
        />
        <div className="col-span-1 pb-12 lg:pb-16 pl-0 flex flex-col gap-12 lg:gap-10">
          <EditorSelection articles={editorSelection} locale={lang} />
          <TrendingTopics topics={trendingTopics} locale={lang} />
        </div>
      </div>
    </Layout>
  );
}

export function generateStaticParams() {
  return locales.map((locale) => ({ lang: locale }));
}
