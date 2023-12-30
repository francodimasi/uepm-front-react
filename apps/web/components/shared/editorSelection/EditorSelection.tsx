import { EditorSelectionSkeleton } from './EditorSelectionSkeleton';
import { BlogItem } from '../blogItem/BlogItem';
import { EditorSelectionProps } from './EditorSelection.types';
import { LocaleProps } from 'intl';

export const EditorSelection = ({
  articles,
  locale,
}: EditorSelectionProps & LocaleProps) => {
  if (!articles)
    return (
      <div className="space-y-6 lg:space-y-6">
        <EditorSelectionSkeleton />
      </div>
    );
  if (articles.length === 0) return null;

  return (
    <div className="flex-col justify-start items-start gap-8 flex">
      <div className="text-2xl font-medium font-['Lexend'] leading-7 text-primary ">
        {/*@todo i18nPending translation*/}
        Selección del editor
      </div>
      {/*@todo Pending translation*/}
      <div className=" space-y-6 lg:space-y-6">
        {articles.map((article) => (
          <div className="flex-1  last:mr-0" key={article.slug}>
            <BlogItem locale={locale} type="small" {...article} />
          </div>
        ))}
      </div>
    </div>
  );
};
