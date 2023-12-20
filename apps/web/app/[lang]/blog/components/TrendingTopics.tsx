'use client';

import { Tag } from 'ui';
import { TrendingTopicsSkeleton } from './TrendingTopicsSkeleton';
import { useState, useEffect } from 'react';

export const TrendingTopics = ({
  tags,
}: {
  tags: { id: number; text: string }[];
}) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(false);
  }, []);

  return (
    <div className="flex-col justify-start items-start gap-6 flex">
      <div className="text-2xl font-medium font-['Lexend'] leading-7 text-primary self-start">
        {/*@todo i18nPending translation*/}
        Temas más buscados
      </div>
      {loading ? (
        <TrendingTopicsSkeleton />
      ) : (
        <div className=" relative overflow-hidden">
          <ul className=" flex flex-row flex-wrap justify-between -ml-px">
            {tags.map((tag) => (
              <Tag
                text={tag.text}
                key={tag.id}
                className=" text-sm lowercase"
              />
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};
