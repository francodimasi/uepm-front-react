'use client';

import { Pagination } from 'ui/core/pagination';
import { useState, useEffect } from 'react';
import { getArticles } from '@api/blog/requests';
import { BlogCategorySkeleton } from './BlogCategorySkeleton';
import { BlogItem } from '@components/shared/blogItem';
import { BlogCategoryProps } from './BlogCategory.types';
import { LocaleProps } from 'intl';

export const BlogCategory = ({
  categories,
  category,
  itemsPerPage = 5,
  locale,
}: BlogCategoryProps & LocaleProps) => {
  const [page, setPage] = useState(1);
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchData = async () => {
    const articles = await getArticles({
      page,
      categories: [category],
      per_page: itemsPerPage,
    });
    setArticles(articles);
    setLoading(false);
  };

  useEffect(() => {
    setLoading(true);
    fetchData();
  }, [page]);

  const pageCount = Math.ceil(
    categories.find((c) => c.id === category).count / itemsPerPage,
  );
  const categoryObj = categories.find((cat) => cat.id === category);

  return (
    <div className="relative">
      <div className="text-black text-4xl font-semibold font-['Lexend'] leading-10 text-center w-100 border-b-1 border-b-gray-medium pb-5 mb-5">
        {categoryObj.name}
      </div>
      {loading ? (
        <BlogCategorySkeleton entries={itemsPerPage} />
      ) : (
        <div className="flex flex-col">
          {articles?.map((article) => (
            <div
              key={article.slug}
              className="border-b border-gray-medium mb-6 pb-6 sm:pb-10"
            >
              <BlogItem locale={locale} type="large" {...article} />
            </div>
          ))}
        </div>
      )}
      <div className="mt-5 text-center">
        {pageCount > 1 && (
          <Pagination
            actualPage={page}
            pagesCount={pageCount}
            setPage={setPage}
          />
        )}
      </div>
    </div>
  );
};
