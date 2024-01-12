import { Link } from '@intl/navigation';
import { FeaturedArticlesProps } from './FeaturedArticle.types';
import { BlogItem } from '../blogItem';
import { LocaleProps } from 'intl';
import clsx from 'clsx';

export const FeaturedArticles: React.FC<
  FeaturedArticlesProps & LocaleProps
> = ({ articles, tag, locale }) => {
  if (!articles || articles.length === 0) return null;

  return (
    <div className="flex flex-col gap-8 pt-2">
      <div className="flex justify-between items-center">
        <span className="text-primary lg:text-dark text-2xl font-semibold font-['Lexend'] leading-8 lg:leading-7">
          Más sobre el tema
        </span>
        <Link href={`/blog/${tag.name}` as any} locale={locale}>
          <span className="text-dark text-base font-bold font-['DMSans'] leading-none">
            Ver más →
          </span>
        </Link>
      </div>
      <div className={clsx('hidden xl:grid grid-cols-4 gap-6')}>
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
      <div className={clsx('hidden sm:flex flex-col gap-4 xl:hidden')}>
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
      <div className={clsx('sm:hidden flex flex-col gap-4 xl:hidden')}>
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
