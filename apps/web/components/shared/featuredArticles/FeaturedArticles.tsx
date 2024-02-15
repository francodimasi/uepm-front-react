import { Link } from '@intl/navigation';
import { FeaturedArticlesProps } from './FeaturedArticle.types';
import { BlogItem } from '../blogItem';
import { LocaleProps, useTranslations } from 'intl';
import clsx from 'clsx';
import { H4, L1 } from 'ui/core';
import { PropsWithClassName } from 'ui/types/core';
import { twMerge } from 'tailwind-merge';

export const FeaturedArticles: React.FC<
  FeaturedArticlesProps & LocaleProps & PropsWithClassName
> = ({ articles, tag, alwaysVertical = false, title, locale, className }) => {
  const t = useTranslations('shared.featuredArticles');
  const tActions = useTranslations('actions');

  if (!articles || articles.length === 0) return null;

  return (
    <div className={twMerge(`flex flex-col gap-8 pt-2 ${className}`)}>
      <div className="flex justify-between items-center">
        {title ?? <H4 label={t('title')} className="text-primary" />}
        {tag && (
          <Link
            href={`/blog/${tag.name}` as any}
            locale={locale}
            className="flex"
          >
            <L1 label={`${tActions('seeMore')} →`} />
          </Link>
        )}
      </div>
      <div className={clsx('hidden xl:grid grid-cols-4 gap-6 pb-10')}>
        {articles.map((article) => (
          <BlogItem
            key={article.slug}
            locale={locale}
            article={article}
            layout={{
              orientation: 'vertical',
              size: 'lg',
              showDescription: false,
            }}
          />
        ))}
      </div>
      <div className={clsx('hidden lg:grid xl:hidden grid-cols-3 gap-6 pb-10')}>
        {articles.slice(0, 3).map((article) => (
          <BlogItem
            key={article.slug}
            locale={locale}
            article={article}
            layout={{
              orientation: 'vertical',
              size: 'lg',
              showDescription: false,
            }}
          />
        ))}
      </div>
      <div className={clsx('hidden md:grid lg:hidden grid-cols-2 gap-6 pb-10')}>
        {articles.slice(0, 2).map((article) => (
          <BlogItem
            key={article.slug}
            locale={locale}
            article={article}
            layout={{
              orientation: 'vertical',
              size: 'lg',
              showDescription: false,
            }}
          />
        ))}
      </div>
      <div className={clsx('hidden sm:flex flex-col gap-4 pb-4 md:hidden')}>
        {alwaysVertical ? (
          <>
            {articles.slice(0, 3).map((article) => (
              <BlogItem
                key={article.slug}
                locale={locale}
                article={article}
                layout={{
                  orientation: 'vertical',
                  size: 'xl',
                  showDescription: false,
                }}
                className="pt-8"
              />
            ))}
          </>
        ) : (
          <>
            {articles.map((article) => (
              <BlogItem
                key={article.slug}
                locale={locale}
                article={article}
                layout={{
                  orientation: 'horizontal',
                  size: 'sm',
                  showDescription: false,
                  contentClasses: 'self-start',
                }}
              />
            ))}
          </>
        )}
      </div>
      <div className={clsx('sm:hidden flex flex-col gap-4 pb-2 xl:hidden')}>
        {alwaysVertical ? (
          <>
            {articles.slice(0, 3).map((article) => (
              <BlogItem
                key={article.slug}
                locale={locale}
                article={article}
                layout={{
                  orientation: 'vertical',
                  size: 'lg',
                  showDescription: false,
                }}
                className="pt-5"
              />
            ))}
          </>
        ) : (
          <>
            {articles.map((article) => (
              <BlogItem
                key={article.slug}
                locale={locale}
                article={article}
                layout={{
                  orientation: 'horizontal',
                  size: 'xs',
                  showDescription: false,
                }}
              />
            ))}
          </>
        )}
      </div>
    </div>
  );
};
