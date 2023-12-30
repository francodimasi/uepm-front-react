'use client';

import { useState, useEffect } from 'react';
import {
  BlogCategoryHeader,
  BlogCategoryHeaderSkeleton,
} from '../blogCategory';
import { getPromotedArticle, getArticlesByCategory } from '@api/blog/requests';
import { BlogCoverSkeleton } from './BlogCoverSkeleton';
import { BlogItem } from '../blogItem';
import { Button } from 'ui/core';
import { BlogFrontPageParam } from './BlogCover.types';
import { Link } from '@intl/navigation';
import { LocaleProps } from '../../../../../../../packages/intl/src/types';

export const BlogCover = ({
  categories,
  promotedArticle,
  suggestedArticles,
  plainArticles,
  initialCategory,
  locale,
}: BlogFrontPageParam & LocaleProps) => {
  const [category, setCategory] = useState(initialCategory);
  const [articles, setArticles] = useState(plainArticles);
  const [promoted, setPromoted] = useState(promotedArticle);
  const [loading, setLoading] = useState(true);
  const [loadingPage, setLoadingPage] = useState(true);

  const fetchData = async () => {
    const articles = await getArticlesByCategory(category);
    setPromoted(await getPromotedArticle(category));
    setArticles(articles);
    setLoading(false);
  };

  useEffect(() => {
    setLoading(true);
    fetchData();
  }, [category]);

  useEffect(() => {
    setLoadingPage(false);
  }, []);

  return (
    <div className="relative">
      {loadingPage ? (
        <BlogCategoryHeaderSkeleton />
      ) : (
        <BlogCategoryHeader
          category={category}
          setCategory={setCategory}
          categories={categories}
        />
      )}
      {loading ? (
        <BlogCoverSkeleton />
      ) : (
        <>
          {Object.keys(promoted).length > 0 && (
            <div className="col-span-12  mt-6 mb-5  sm:mt-10  border-b-1 border-gray-medium sm:border-0">
              <BlogItem type="bigger" locale={locale} {...promoted} />
            </div>
          )}
          <div className="flex flex-col mb-t sm:flex-row sm:gap-12 sm:mt-10 ">
            {Object.keys(articles).length > 0 && (
              <div className="sm:basis-2/3 order-2 sm:order-1">
                <div className="flex flex-col ">
                  {articles.map((article) => (
                    <div
                      key={article.slug}
                      className="sm:h-60 pb-6 mb-5 border-b border-gray-medium sm:mb-5 sm:mt-0 sm:pb-0"
                    >
                      <BlogItem
                        key={article.slug}
                        locale={locale}
                        type="large"
                        {...article}
                      />
                    </div>
                  ))}
                </div>
              </div>
            )}

            {suggestedArticles.length > 0 && (
              <div className="sm:basis-1/3 order-1 sm:order-2">
                <div className="flex flex-col">
                  <div className=" border-b border-gray-medium mb-6 pb-6 sm:pb-10">
                    <BlogItem
                      locale={locale}
                      type="vertical"
                      {...suggestedArticles[0]}
                    />
                  </div>
                  {suggestedArticles.length > 1 && (
                    <div className="sm:border-0 border-b border-gray-medium mb-6 pb-6 sm:pb-10">
                      <BlogItem
                        locale={locale}
                        type="vertical"
                        {...suggestedArticles[1]}
                      />
                    </div>
                  )}
                </div>
              </div>
            )}
          </div>
        </>
      )}
      <div className="mt-5 text-center ">
        {categories.find((cat) => cat.id === category)?.count > 7 && (
          <Link href={`/blog/${category}` as any} locale={locale}>
            <Button className="w-full sm:w-auto">Ver mas artículos</Button>
          </Link>
        )}
      </div>
    </div>
  );
};
