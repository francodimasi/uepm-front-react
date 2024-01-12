import { ArticleOfInterestProps } from '../Article.types';
import { LocaleProps, useTranslations } from 'intl';
import { BlogItem } from '@components/shared/blogItem';

export const ArticleOfInterest: React.FC<
  ArticleOfInterestProps & LocaleProps
> = ({ article, locale }) => {
  const t = useTranslations('blog.articleOfInterest');
  if (!article) return null;

  return (
    <div className="flex flex-col pb-6 border-b border-dark border-opacity-20">
      <div className="pb-8 text-primary text-2xl font-semibold font-['Lexend'] leading-7">
        {t('title')}
      </div>
      <BlogItem
        key={article.slug}
        locale={locale}
        article={article}
        layout={{ orientation: 'vertical', showDescription: false, size: 'lg' }}
      />
    </div>
  );
};
