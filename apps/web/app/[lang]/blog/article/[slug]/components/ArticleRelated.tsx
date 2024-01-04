import { EditorSelection } from '@components/shared/editorSelection';
import { TrendingTopics } from '@components/shared/trendingTopics';
import { ArticleOfInterest } from './ArticleOfInterest';
import { ArticleRelatedProps } from '../Article.types';
import { LocaleProps } from 'intl';

export const ArticleRelated: React.FC<ArticleRelatedProps & LocaleProps> = ({
  nextArticle,
  editorSelection,
  trendingTags,
  locale,
}) => {
  return (
    <div className="pb-12 lg:pb-16 pl-0 lg:pl-12 col-span-1 hidden lg:flex flex-col items-start gap-12 lg:gap-10">
      <EditorSelection articles={editorSelection} locale={locale} />
      <ArticleOfInterest article={nextArticle} locale={locale} />
      <TrendingTopics topics={trendingTags} locale={locale} />
    </div>
  );
};
