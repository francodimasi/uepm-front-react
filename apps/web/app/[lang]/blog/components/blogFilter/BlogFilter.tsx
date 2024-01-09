'use client';

import { useState, useEffect } from 'react';
import { Pagination } from 'ui/core';
import { getArticles } from '@api/blog/requests';
import { BlogFilterSkeleton } from './BlogFilterSkeleton';
import { BlogItem } from '@components/shared/blogItem';
import { BlogFilterProps } from './BlogFilter.types';
import { LocaleProps } from 'intl';
import { addLangCategory } from './helpers';
import { Link } from '@intl/navigation';
import { ArrowBackIcon } from 'ui/core/icons';

export const BlogFilter = ({
  by,
  itemsPerPage = 5,
  locale,
}: BlogFilterProps & LocaleProps) => {
  const [page, setPage] = useState(1);
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);

  const pages = Math.ceil(by.value?.count / itemsPerPage);

  const fetchData = async () => {
    const articles = await getArticles({
      page,
      [by.key]: [by.value],
      per_page: itemsPerPage,
      ...addLangCategory(by, locale),
    });
    setArticles(articles);
    setLoading(false);
  };

  useEffect(() => {
    setLoading(true);
    fetchData();
  }, [page]);

  return (
    <>
      <div className="relative text-black text-3xl font-semibold font-['Lexend'] leading-10 text-center w-100 mb-10 capitalize">
        <div className="absolute left-0 h-full flex items-center">
          <Link href="/blog" locale={locale}>
            <ArrowBackIcon />
          </Link>
        </div>
        {by.name}
      </div>
      {loading ? (
        <BlogFilterSkeleton entries={itemsPerPage} />
      ) : (
        <div className="flex flex-col">
          {articles?.map((article) => (
            <div
              key={article.slug}
              className="border-t border-gray-medium mb-6 pt-6"
            >
              <div className="hidden xl:flex">
                <BlogItem
                  locale={locale}
                  article={article}
                  layout={{ size: 'md', contentClasses: 'self-start' }}
                />
              </div>
              <div className="xl:hidden">
                <BlogItem
                  locale={locale}
                  article={article}
                  layout={{ size: 'sm' }}
                />
              </div>
            </div>
          ))}
        </div>
      )}
      <div className="mt-5 text-center">
        {pages > 1 && (
          <Pagination actualPage={page} pagesCount={pages} setPage={setPage} />
        )}
      </div>
    </>
  );
};
