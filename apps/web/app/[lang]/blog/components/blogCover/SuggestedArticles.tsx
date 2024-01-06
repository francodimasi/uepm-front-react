import { LocaleProps } from 'intl';
import { BlogItem } from '@components/shared/blogItem';
import { BlogItem as BlogItemProps } from '@models/blog.types';
import { BlogItemOrientation } from '@components/shared/blogItem/BlogItem.types';

export const SuggestedArticles = ({
  articles,
  orientation = 'vertical',
  locale,
}: {
  articles: BlogItemProps[];
  orientation?: BlogItemOrientation;
} & LocaleProps) => {
  if (!articles || articles.length === 0) return null;

  return (
    <div className="pt-2 pb-4 lg:pt-0">
      <div className="hidden xl:flex flex-col">
        <div className="border-b border-gray-medium pt-4 pb-10">
          <BlogItem
            key={articles[0].slug}
            locale={locale}
            article={articles[0]}
            layout={{ orientation, size: 'lg' }}
          />
        </div>
        {articles.length > 1 && (
          <div className="xl:border-0 border-b border-gray-medium py-10">
            <BlogItem
              key={articles[1].slug}
              locale={locale}
              article={articles[1]}
              layout={{ orientation, size: 'lg' }}
            />
          </div>
        )}
      </div>
      <div className="hidden sm:flex xl:hidden flex-col">
        <div className="border-b border-gray-medium py-6">
          <BlogItem
            key={articles[0].slug}
            locale={locale}
            article={articles[0]}
            layout={{ orientation, size: 'md' }}
          />
        </div>
        {articles.length > 1 && (
          <div className="xl:border-0 border-b border-gray-medium py-6">
            <BlogItem
              key={articles[1].slug}
              locale={locale}
              article={articles[1]}
              layout={{ orientation, size: 'md' }}
            />
          </div>
        )}
      </div>
      <div className="flex sm:hidden flex-col">
        <div className="border-b border-gray-medium py-6">
          <BlogItem
            key={articles[0].slug}
            locale={locale}
            article={articles[0]}
            layout={{ orientation, size: 'sm', contentClasses: 'h-full' }}
          />
        </div>
        {articles.length > 1 && (
          <div className="xl:border-0 border-b border-gray-medium py-6">
            <BlogItem
              key={articles[1].slug}
              locale={locale}
              article={articles[1]}
              layout={{ orientation, size: 'sm' }}
            />
          </div>
        )}
      </div>
    </div>
  );
};
