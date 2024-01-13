import { ArticleOfInterestProps } from '../Article.types';
import { LocaleProps, useTranslations } from 'intl';
import { BlogItem } from '@components/shared/blogItem';
import { H4 } from 'ui/core';

export const ArticleOfInterest: React.FC<
  ArticleOfInterestProps & LocaleProps
> = ({ article, locale }) => {
  const t = useTranslations('blog.articleOfInterest');
  if (!article) return null;

  return (
    <div className="flex flex-col pb-6 border-b border-dark border-opacity-20">
      <H4 label={t('title')} className='text-primary'/>
      <BlogItem
        key={article.slug}
        locale={locale}
        article={article}
        layout={{ orientation: 'vertical', showDescription: false, size: 'lg' }}
      />
    </div>
  );
};
