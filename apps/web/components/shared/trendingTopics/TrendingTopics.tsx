'use client';

import { Tag } from 'ui/core';
import { TrendingTopicsSkeleton } from './TrendingTopicsSkeleton';
import { TrendingTopicsProps } from './TrendingTopics.types';
import { defaultLocale, LocaleProps } from 'intl';
import { LocaleProps } from 'intl';
import { useRouter } from '@intl/navigation';
import clsx from 'clsx';

export const TrendingTopics = ({
  topics,
  locale = defaultLocale,
  orientation = 'horizontal',
}: TrendingTopicsProps & LocaleProps) => {
  const router = useRouter();

  if (!topics) return <TrendingTopicsSkeleton />;
  if (topics.length === 0) return null;

  const handleClick = (id: number) => {
    router.push(
      {
        pathname: '/blog/tag/[id]',
        params: { id },
      },
      {
        locale,
      },
    );
  };

  return (
    <div className="flex-col justify-start items-start gap-8 flex">
      <div className="text-2xl font-semibold font-['Lexend'] leading-7 text-primary">
        {/*@todo i18nPending translation*/}
        Temas más buscados
      </div>
      <div className="relative overflow-hidden">
        <div
          className={clsx(
            'flex ',
            orientation === 'horizontal' ? 'flex-row' : 'flex-col',
            'flex-wrap -ml-1',
          )}
        >
          {topics.map((topic) => (
            <Tag
              text={topic.name}
              key={topic.id}
              onClickHandler={() => handleClick(topic.id)}
              className="flex-grow basis-auto my-1.5 sm:my-2 mx-0 px-0 sm:px-1 py-0 text-center  border-l-1 border-solid border-l-gray-medium bg-white leading-none text-sm font-normal capitalize cursor-pointer "
            />
          ))}
        </div>
      </div>
    </div>
  );
};
