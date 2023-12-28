import { SuggestedPost } from '@app/[lang]/blog/components/SuggestedPost';
import { TrendingTopics } from '@app/[lang]/blog/components/TrendingTopics';
import { ArticleOfInterest } from './ArticleOfInterest';
import { ArticleRelatedProps } from '../Article.types';
import { LocaleProps } from 'intl';

export const ArticleRelated: React.FC<ArticleRelatedProps & LocaleProps> = ({
  nextArticle,
  trendingTags,
  locale,
}) => {
  return (
    <div className="pb-12 lg:pb-16 pl-0 lg:pl-12 col-span-1 hidden lg:flex flex-col items-start gap-12">
      <SuggestedPost />
      <ArticleOfInterest article={nextArticle} locale={locale} />
      <TrendingTopics topics={trendingTags} />
    </div>
  );
};
