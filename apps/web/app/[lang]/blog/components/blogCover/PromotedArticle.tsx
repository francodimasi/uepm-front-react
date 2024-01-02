import { LocaleProps } from 'intl';
import { BlogItem } from '@components/shared/blogItem';
import { BlogItemContentProps } from '@components/shared/blogItem/BlogItem.types';

export const PromotedArticle = ({
  article,
  locale,
}: BlogItemContentProps & LocaleProps) => {
  if (!article) return null;

  return (
    <>
      <div className="hidden xl:flex pt-4 xl:pt-6 border-b-1 border-gray-medium xl:border-0">
        <BlogItem
          locale={locale}
          article={article}
          layout={{
            orientation: 'vertical',
            size: 'xl',
            imgClasses: 'absolute inset-0 h-full w-full object-cover pt-8',
            imgPosition: 'end',
          }}
          className="h-[640px]"
        />
      </div>
      <div className="xl:hidden pt-8 border-b-1 border-gray-medium xl:border-0">
        <BlogItem
          locale={locale}
          article={article}
          layout={{
            orientation: 'vertical',
            size: 'xl',
            imgPosition: 'start',
            contentClasses: 'py-4',
          }}
        />
      </div>
    </>
  );
};
