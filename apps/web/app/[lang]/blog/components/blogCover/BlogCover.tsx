'use client';

import { useState, useEffect } from 'react';
import { BlogFilterHeader } from '../blogFilter';
import { getPromotedArticle, getArticlesByCategory } from '@api/blog/requests';
import { BlogCoverSkeleton } from './BlogCoverSkeleton';
import { Button } from 'ui/core';
import { BlogFrontPageParam } from './BlogCover.types';
import { Link } from '@intl/navigation';
import { LocaleProps } from 'intl/src/types';
import { PromotedArticle } from './PromotedArticle';
import { SuggestedArticles } from './SuggestedArticles';
import { CategoryArticles } from './CategoryArticles';
import { useTranslations } from 'intl';

export const BlogCover = ({
  categories,
  promotedArticle,
  suggestedArticles,
  plainArticles,
  initialCategory,
  locale,
}: BlogFrontPageParam & LocaleProps) => {
  const t = useTranslations('actions');
  const [category, setCategory] = useState(initialCategory);
  const [articles, setArticles] = useState(plainArticles);
  const [promoted, setPromoted] = useState(promotedArticle);
  const [loading, setLoading] = useState(true);

  const fetchData = async () => {
    const articles = await getArticlesByCategory(category, locale);
    setPromoted(await getPromotedArticle(category, locale));
    setArticles(articles);
    setLoading(false);
  };

  useEffect(() => {
    setLoading(true);
    fetchData();
  }, [category]);

  return (
    <div className="relative col-span-1 lg:col-span-2 xl:col-span-3 pr-0 lg:pr-12 pb-12 lg:pb-16">
      <BlogFilterHeader
        category={category}
        setCategory={setCategory}
        categories={categories}
        locale={locale}
      />
      {loading ? (
        <BlogCoverSkeleton />
      ) : (
        <div className="flex flex-col">
          <PromotedArticle article={promoted} locale={locale} />
          <div className="grid grid-cols-1 xl:grid-cols-3 xl:gap-6">
            <div className="flex xl:hidden flex-col col-span-1 ">
              <SuggestedArticles
                articles={suggestedArticles}
                orientation="horizontal"
                locale={locale}
              />
            </div>
            <CategoryArticles articles={articles} locale={locale} />
            <div className="hidden xl:flex flex-col xl:gap-12 col-span-1 pt-8">
              <SuggestedArticles articles={suggestedArticles} locale={locale} />
            </div>
          </div>
        </div>
      )}
      <div className="mt-5 flex justify-center">
        {categories.find((cat) => cat.id === category)?.count > 7 && (
          <Link href={`/blog/category/${category}` as any} locale={locale}>
            <Button fill='clear' color='dark'>{t('seeMore')}</Button>
          </Link>
        )}
      </div>
    </div>
  );
};
