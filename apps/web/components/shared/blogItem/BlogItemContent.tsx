// import clsx from 'clsx';
// import dayjs from 'dayjs';
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

export const BlogItemContent = ({
  content,
  date,
  tags,
  title,
  layout: { showDescription, size },
  className,
}: Partial<BlogItemProps> & BlogItemLayoutProps) => {
  return (
    <div className={clsx('flex flex-col w-full', className)}>
      <ArticleTags tags={tags?.slice(0, 1)} className={getTagClasses(size)} />
      <span className={getTitleClasses(size)}>{title}</span>
      <span className={getDateClasses(size)}>{date}</span>
      {showDescription && (
        <span className={getDescriptionClasses(size)}>{content}</span>
      )}
    </div>
  );
};
