import { Tag } from 'ui';
import { ArticleTagsProps } from '../Article.types';
import clsx from 'clsx';

export const ArticleTags: React.FC<ArticleTagsProps> = ({
  tags,
  className,
}) => {
  if (!tags) return null;

  return (
    <div
      className={clsx(
        'flex flex-wrap divide-x-2 divide-dark divide-opacity-20',
        className,
      )}
    >
      {tags?.map((tag, index) => (
        <Tag
          key={index}
          text={tag}
          className={clsx(
            'px-4 py-1 my-1 text-dark text-xs font-medium font-["DMSans"] uppercase',
            { 'ps-0': index === 0 },
          )}
        />
      ))}
    </div>
  );
};
