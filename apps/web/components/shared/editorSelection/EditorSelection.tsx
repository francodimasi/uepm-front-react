import { EditorSelectionSkeleton } from './EditorSelectionSkeleton';
import { BlogItem } from '../blogItem/BlogItem';
import { EditorSelectionProps } from './EditorSelection.types';
import { LocaleProps, useTranslations } from 'intl';
import { H4 } from 'ui/core';

export const EditorSelection = ({
  articles,
  locale,
}: EditorSelectionProps & LocaleProps) => {
  const t = useTranslations('shared.editorSelection');
  if (!articles)
    return (
      <div className="space-y-6 lg:space-y-6">
        <EditorSelectionSkeleton />
      </div>
    );
  if (articles.length === 0) return null;

  return (
    <div className="flex flex-col justify-start items-start">
      <H4 label={t('title')} className="text-primary my-0 lg:my-0" />
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
