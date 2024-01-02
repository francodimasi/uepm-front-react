import { LocaleProps } from 'intl';
import { BlogItem } from '@components/shared/blogItem';
import { BlogItem as BlogItemProps } from '@models/blog.types';

export const CategoryArticles = ({
  articles,
  locale,
}: { articles: BlogItemProps[] } & LocaleProps) => {
  if (!articles || articles.length === 0) return null;

  return (
    <div className="flex flex-col xl:mt-10 col-span-1 xl:col-span-2">
      <div className="hidden xl:flex flex-col xl:pe-6">
        {articles.map((article) => (
          <div key={article.slug} className="py-4 border-b border-gray-medium">
            <BlogItem
              key={article.slug}
              locale={locale}
              article={article}
              layout={{ size: 'lg' }}
            />
          </div>
        ))}
      </div>
      <div className="flex xl:hidden flex-col">
        {articles.map((article) => (
          <div key={article.slug} className="py-4 border-b border-gray-medium">
            <BlogItem
              key={article.slug}
              locale={locale}
              article={article}
              layout={{ size: 'lg', showImg: false }}
            />
          </div>
        ))}
      </div>
    </div>
  );
};
