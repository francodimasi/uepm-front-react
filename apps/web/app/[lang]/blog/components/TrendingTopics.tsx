import { Tag } from 'ui/core';
import { FormattedTag } from '../article/[slug]/Article.types';
import clsx from 'clsx';

type TrendingTopicsProps = {
  topics: FormattedTag[];
};

export const TrendingTopics = ({ topics }: TrendingTopicsProps) => {
  if (!topics || topics.length === 0) return null;

  return (
    <div className="flex-col justify-start items-start gap-8 flex">
      <div className="text-2xl font-semibold font-['Lexend'] leading-7 text-primary">
        {/*@todo i18nPending translation*/}
        Temas más buscados
      </div>
      <div className="flex flex-wrap divide-x-2 divide-dark divide-opacity-20">
        {topics.map((tag, index) => (
          <Tag
            text={tag.text}
            key={tag.id}
            className={clsx(
              'px-4 py-1 my-1 text-dark text-base font-medium font-["DMSans"] capitalize cursor-pointer',
              { 'ps-0': index === 0 },
            )}
          />
        ))}
      </div>
    </div>
  );
};
