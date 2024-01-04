import { Tag } from 'ui/core';
import { TrendingTopicsSkeleton } from './TrendingTopicsSkeleton';
import { TrendingTopicsProps } from './TrendingTopics.types';
import clsx from 'clsx';

export const TrendingTopics = ({
  topics,
  orientation = 'horizontal',
}: TrendingTopicsProps) => {
  if (!topics) return <TrendingTopicsSkeleton />;
  if (topics.length === 0) return null;

  return (
    <div className="flex-col justify-start items-start gap-8 flex">
      <div className="text-2xl font-semibold font-['Lexend'] leading-7 text-primary">
        {/*@todo i18nPending translation*/}
        Temas más buscados
      </div>
      <div
        className={clsx(
          'flex',
          orientation === 'horizontal' ? 'flex-row' : 'flex-col',
          'flex-wrap divide-x-2 divide-dark divide-opacity-20',
        )}
      >
        {topics.map((topic, index) => (
          <Tag
            text={topic.name}
            key={topic.id}
            className={clsx(
              'px-2 py-1 my-1 text-dark text-base font-medium font-["DMSans"] capitalize cursor-pointer',
              { 'ps-0': index === 0 },
            )}
          />
        ))}
      </div>
    </div>
  );
};
