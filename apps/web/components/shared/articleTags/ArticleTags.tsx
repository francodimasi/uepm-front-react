import { Tag } from 'ui/core';
import { ArticleTagsProps } from './ArticleTags.types';
import clsx from 'clsx';

export const ArticleTags: React.FC<ArticleTagsProps> = ({
  tags,
  className,
}) => {
  if (!tags) return null;

  return (
    <div
      className={clsx(
        'flex flex-wrap divide-x-2 divide-dark divide-opacity-20 ',
        className,
      )}
    >
      {tags?.map((tag, index) => (
        <Tag
          key={index}
          text={tag}
          className={clsx(
            'px-2 py-1 text-primary-dark text-xs font-normal font-["DMSans"] uppercase',
            { 'ps-0': index === 0 },
          )}
        />
      ))}
    </div>
  );
};
