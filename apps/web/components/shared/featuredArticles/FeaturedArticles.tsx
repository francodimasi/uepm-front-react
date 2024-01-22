import { Link } from '@intl/navigation';
import { FeaturedArticlesProps } from './FeaturedArticle.types';
import { BlogItem } from '../blogItem';
import { LocaleProps, useTranslations } from 'intl';
import clsx from 'clsx';
import { H4, L1 } from 'ui/core';

export const FeaturedArticles: React.FC<
  FeaturedArticlesProps & LocaleProps
> = ({ articles, tag, locale }) => {
  const t = useTranslations('shared.featuredArticles');
  const tActions = useTranslations('actions');

  if (!articles || articles.length === 0) return null;

  return (
    <div className="flex flex-col gap-8 pt-2">
      <div className="flex justify-between items-center">
        <H4 label={t('title')} className="text-primary" />
        <Link
          href={`/blog/${tag.name}` as any}
          locale={locale}
          className="flex"
        >
          <L1 label={`${tActions('seeMore')} →`} />
        </Link>
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
      <div className={clsx('hidden sm:flex flex-col gap-4 pb-10 xl:hidden')}>
        {articles.map((article) => (
          <BlogItem
            key={article.slug}
            locale={locale}
            article={article}
            layout={{
              orientation: 'horizontal',
              size: 'md',
              showDescription: false,
            }}
          />
        ))}
      </div>
      <div className={clsx('sm:hidden flex flex-col gap-4 pb-10 xl:hidden')}>
        {articles.map((article) => (
          <BlogItem
            key={article.slug}
            locale={locale}
            article={article}
            layout={{
              orientation: 'horizontal',
              size: 'sm',
              showDescription: false,
            }}
          />
        ))}
      </div>
    </div>
  );
};
