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
  const { logo, name, website } = partner;

  const [hover, setHover] = useState(false);

  return (
    <div
      className={clsx(
        'flex p-3 lg:p-4 justify-center',
        { 'scale-110': hover && website },
        className,
      )}
      onMouseOver={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      {website ? (
        <Link href={website} target="_blank">
          <Avatar imageUrl={logo} alt={name} size={size} />
        </Link>
      ) : (
        <Avatar imageUrl={logo} alt={name} size={size} />
      )}
    </div>
  );
};
