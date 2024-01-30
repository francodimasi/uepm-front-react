import { useTranslations } from 'intl';

import { NewsProps } from './News.types';
import { FeaturedArticles } from '@components/shared/featuredArticles';
import { H2 } from 'ui/core';

export const News: React.FC<NewsProps> = ({ articles, locale }) => {
  const t = useTranslations('home.news');

  if (!articles || articles.length === 0) return null;

  return (
    <div className="flex flex-col">
      <FeaturedArticles
        title={<H2 label={t('title')} className="mt-0 xl:text-5xl" />}
        articles={articles}
        alwaysVertical
        locale={locale}
        className="gap-0"
      />
    </div>
  );
};
