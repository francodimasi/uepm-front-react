import { Tag } from 'ui/core';
import { ArticleTagsProps } from './ArticleTags.types';
import clsx from 'clsx';

export const ArticleTags: React.FC<ArticleTagsProps> = ({
  tags,
  className,
}) => {
  if (!tags || tags.length === 0) return null;

  return (
    <div className="relative overflow-hidden">
      <div className={clsx('flex flex-row flex-wrap -ml-2 ', className)}>
        {tags?.map((tag, index) => (
          <Tag
            key={index}
            text={tag.name}
            className='my-1.5 sm:my-2 mx-0 px-2 py-0.5 sm:py-0 text-start border-l-1 border-solid border-l-gray-medium leading-none text-primary-dark text-xs font-normal font-["DMSans"] uppercase'
          />
        ))}
      </div>
    </div>
  );
};
