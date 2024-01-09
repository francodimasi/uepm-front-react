'use client';

import { useState } from 'react';
import Link from 'next/link';
import clsx from 'clsx';
import { Avatar } from 'ui/core';
import { PartnerItemProps } from './Partners.types';

export const PartnerItem: React.FC<PartnerItemProps> = ({
  partner,
  size,
  className,
}) => {
  const { image, name, about } = partner;

  const [hover, setHover] = useState(false);

  return (
    <div
      className={clsx(
        'flex p-3 lg:p-4 justify-center',
        { 'scale-125': hover && about },
        className,
      )}
      onMouseOver={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      {about ? (
        <Link href={about} target="_blank" className='flex'>
          <Avatar imageUrl={image} alt={name} size={size} />
        </Link>
      ) : (
        <Avatar imageUrl={image} alt={name} size={size} />
      )}
    </div>
  );
};
