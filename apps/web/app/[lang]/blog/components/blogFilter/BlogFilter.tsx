'use client';

import { useState, useEffect } from 'react';
import { Pagination } from 'ui/core';
import { getArticles } from '@api/blog/requests';
import { BlogFilterSkeleton } from './BlogFilterSkeleton';
import { BlogItem } from '@components/shared/blogItem';
import { BlogFilterProps } from './BlogFilter.types';
import { LocaleProps, useTranslations } from 'intl';
import { addLangCategory } from './helpers';
import { Link } from '@intl/navigation';
import { ArrowBackIcon } from 'ui/core/icons';
import { Error } from 'ui/components';

export const BlogFilter = ({
  by,
  itemsPerPage = 5,
  locale,
}: BlogFilterProps & LocaleProps) => {
  const t = useTranslations('blog.blogFilter.noResults');
  const [page, setPage] = useState(1);
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [pagesCount, setPagesCount] = useState(0);

  const fetchData = async () => {
    const res = await getArticles({
      page,
      [by.key]: [by.value],
      per_page: itemsPerPage,
      ...addLangCategory(by, locale),
    });
    const articles = res?.data || [];
    setPagesCount(res?.meta?.totalPages);
    setArticles(articles);
    setLoading(false);
  };

  useEffect(() => {
    setLoading(true);
    fetchData();
  }, [page]);

  return (
    <>
      <div className="flex text-black text-lg sm:text-3xl font-semibold font-['Lexend'] leading-7 sm:leading-10 w-100 mb-10 capitalize">
        <div className="flex items-center justify-center align-middle me-5 sm:me-0">
          <Link href="/blog" locale={locale}>
            <ArrowBackIcon />
          </Link>
        </div>
        <div className="flex text-start w-full justify-center">{by.name}</div>
      </div>
      {loading ? (
        <BlogFilterSkeleton entries={itemsPerPage} />
      ) : articles.length === 0 ? (
        <Error title={t('title')} description={t('description')} />
      ) : (
        <div className="flex flex-col">
          {articles?.map((article) => (
            <div
              key={article.slug}
              className="border-t border-gray-medium mb-6 pt-6"
            >
              <div className="flex sm:hidden">
                <BlogItem
                  locale={locale}
                  article={article}
                  layout={{ size: 'xs', contentClasses: 'self-start' }}
                />
              </div>
              <div className="hidden sm:flex xl:hidden">
                <BlogItem
                  locale={locale}
                  article={article}
                  layout={{ size: 'sm' }}
                />
              </div>
              <div className="hidden xl:flex">
                <BlogItem
                  locale={locale}
                  article={article}
                  layout={{ size: 'md', contentClasses: 'self-start' }}
                />
              </div>
            </div>
          ))}
        </div>
      )}
      {pagesCount > 1 && (
        <div className="mt-5 text-center">
          <Pagination
            actualPage={page}
            pagesCount={pagesCount}
            setPage={setPage}
          />
        </div>
      )}
    </>
  );
};
