import { Link } from '@intl/navigation';
import { FeaturedArticlesProps } from '../Article.types';
import { LocaleProps } from 'intl';
import clsx from 'clsx';
import { ImageWithFallback } from '@components/utils/ImageWithFallback';
import { ArticleTags } from './ArticleTags';

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
        {/* TODO: check if this link should go to /blog/category? */}
        <Link href={`/blog/${tag}` as any} locale={locale}>
          <span className="text-dark text-base font-bold font-['DMSans'] leading-none">
            Ver más →
          </span>
        </Link>
      </div>
      {/* TODO: The next two bloks should use some implementation of ArticleItem */}
      <div className={clsx('hidden lg:flex grid lg:grid-cols-4 gap-6')}>
        {articles.map((article) => {
          return (
            <div
              key={article.slug}
              className="flex flex-col col-span-1 pb-6 justify-start"
            >
              <ImageWithFallback
                src={article.image}
                alt={article.title}
                style={{
                  width: '100%',
                  height: 'auto',
                  maxWidth: '512px',
                  maxHeight: '384px',
                }}
                width={512}
                height={384}
              />
              <ArticleTags tags={article.tags?.slice(0, 1)} className="pt-4" />
              <Link
                href={`/blog/article/${article.slug}` as any}
                locale={locale}
              >
                <span className="text-dark text-base font-semibold font-['Lexend']">
                  {article.title}
                </span>
              </Link>
              <span className="pt-2 text-dark text-xs font-normal font-['DMSans'] uppercase">
                {article.date}
              </span>
            </div>
          );
        })}
      </div>
      <div className={clsx('flex flex-col lg:hidden')}>
        {articles.map((article) => {
          return (
            <div
              key={article.slug}
              className="flex flex-row py-4 justify-start items-center"
            >
              <ImageWithFallback
                src={article.image}
                alt={article.title}
                style={{
                  width: '100%',
                  height: 'auto',
                  maxWidth: '112px',
                  maxHeight: '96px',
                }}
                width={112}
                height={96}
              />
              <div className="flex flex-col gap-1 ps-4">
                <ArticleTags tags={article.tags?.slice(0, 1)} />
                <Link
                  href={`/blog/article/${article.slug}` as any}
                  locale={locale}
                >
                  <span className="text-dark text-base font-semibold font-['Lexend']">
                    {article.title}
                  </span>
                </Link>
                <span className="text-dark text-xs font-normal font-['DMSans'] uppercase">
                  {article.date}
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
