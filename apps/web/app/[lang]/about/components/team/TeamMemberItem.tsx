'use client';

import { useState } from 'react';
import Link from 'next/link';
import clsx from 'clsx';
import { Avatar } from 'ui/core';
import { TeamMemberItemProps } from './Team.types';
import { useTranslations } from 'intl';

export const TeamMemerItem: React.FC<TeamMemberItemProps> = ({
  member,
  size,
  alignment = 'center',
  className,
}) => {
  const t = useTranslations('actions');
  const { image, name, role, about } = member;

  const [hover, setHover] = useState(false);

  return (
    <div
      className={clsx(
        'flex flex-col mb-8 lg:mb-16 gap-2 sm:gap-3 lg:gap-4 font-bold',
        className,
      )}
      onMouseOver={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <Avatar imageUrl={image} alt={name} size={size} className="grayscale" />
      <div className="flex flex-col gap-4 sm:gap-6 mt-2 lg:mt-6">
        {name && (
          <span className={`flex-wrap text-xl lg:text-2xl text-${alignment} `}>
            {name}
          </span>
        )}
        {role && (
          <span
            className={`flex-wrap text-base text-${alignment} text-dark font-normal`}
          >
            {role}
          </span>
        )}
        {about && (
          <Link
            href={about}
            target="_blank"
            className={`flex justify-${alignment}`}
          >
            <span
              className={clsx("flex text-base font-['DMSans'] leading-none", {
                'lg:text-transparent': !hover,
              })}
            >
              {t('seeMore')} →
            </span>
          </Link>
        )}
      </div>
    </div>
  );
};
