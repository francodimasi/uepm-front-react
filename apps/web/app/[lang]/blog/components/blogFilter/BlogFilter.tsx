'use client';

import { Pagination } from 'ui/core/pagination';
import { useState, useEffect } from 'react';
import { getArticles } from '@api/blog/requests';
import { BlogFilterSkeleton } from './BlogFilterSkeleton';
import { BlogItem } from '@components/shared/blogItem';
import { BlogFilterProps } from './BlogFilter.types';
import { LocaleProps } from 'intl';

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
      [by.key]: [by.value.id],
      per_page: itemsPerPage,
    });
    setArticles(articles);
    setLoading(false);
  };

  useEffect(() => {
    setLoading(true);
    fetchData();
  }, [page]);

  return (
    <div className="relative">
      <div className="text-black text-4xl font-semibold font-['Lexend'] leading-10 text-center w-100 border-b-1 border-b-gray-medium pb-5 mb-5 capitalize">
        {by.value.name}
      </div>
      {loading ? (
        <BlogFilterSkeleton entries={itemsPerPage} />
      ) : (
        <div className="flex flex-col">
          {articles?.map((article) => (
            <div
              key={article.slug}
              className="border-b border-gray-medium mb-6 pb-6 sm:pb-10"
            >
              <BlogItem locale={locale} article={article} layout={{}} />
            </div>
          ))}
        </div>
      )}
      <div className="mt-5 text-center">
        {pages > 1 && (
          <Pagination actualPage={page} pagesCount={pages} setPage={setPage} />
        )}
      </div>
    </div>
  );
};