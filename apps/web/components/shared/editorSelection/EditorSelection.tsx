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
    <div className="flex flex-col justify-start items-start">
      <div className="text-2xl font-medium font-['Lexend'] leading-7 text-primary pb-5">
        {/*@todo i18nPending translation*/}
        Selección del editor
      </div>
      {articles.map((article) => (
        <div
          className="flex-1 last:mr-0 border-b-1 border-gray-medium py-3"
          key={article.slug}
        >
          <BlogItem
            locale={locale}
            article={article}
            layout={{ size: 'xs', showDescription: false }}
          />
        </div>
      ))}
    </div>
  );
};
