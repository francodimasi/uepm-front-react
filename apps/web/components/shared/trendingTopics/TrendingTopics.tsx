'use client';

import { Tag } from 'ui/core';
import { TrendingTopicsSkeleton } from './TrendingTopicsSkeleton';
import { TrendingTopicsProps } from './TrendingTopics.types';
import { defaultLocale } from 'intl';
import { LocaleProps } from 'intl';
import { useRouter } from '@intl/navigation';

import clsx from 'clsx';

export const TrendingTopics = ({
  topics,
  locale = defaultLocale,
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
        <div className="flex flex-row flex-wrap justify-between -ml-2">
          {topics.map((topic) => (
            <Tag
              text={topic.name}
              key={topic.id}
              onClickHandler={() => handleClick(topic.id)}
              className={clsx('text-sm font-normal capitalize cursor-pointer')}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
