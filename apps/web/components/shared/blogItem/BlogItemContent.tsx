import { BlogItem as BlogItemProps } from '@models/blog.types';
import { BlogItemLayoutProps } from './BlogItem.types';
import { ArticleTags } from '../articleTags';
import {
  getDateClasses,
  getDescriptionClasses,
  getTagClasses,
  getTitleClasses,
} from './helpers';
import clsx from 'clsx';
import { DateMask } from 'ui/components';
import { LocaleProps, useTranslations } from 'intl';

const MAX_LENGTH = 90;

export const BlogItemContent = ({
  content,
  date,
  tags,
  title: rawTitle,
  layout: { showDescription, size, orientation },
  className,
  locale,
}: Partial<BlogItemProps> & BlogItemLayoutProps & LocaleProps) => {
  const t = useTranslations('commonTerms');
  const title =
    rawTitle.length > MAX_LENGTH
      ? `${rawTitle.slice(0, MAX_LENGTH)}...`
      : rawTitle;

  return (
    <div className={clsx('flex flex-col w-full justify-between', className)}>
      <ArticleTags tags={tags?.slice(0, 1)} className={getTagClasses(size)} />
      <span className={getTitleClasses(size, orientation)}>{title}</span>
      <DateMask
        date={date}
        mask={`DD [${t('of')}] MMMM, YYYY`}
        locale={locale}
        className={getDateClasses(size)}
      />
      {showDescription && (
        <span className={getDescriptionClasses(size)}>{content}</span>
      )}
    </div>
  );
};
