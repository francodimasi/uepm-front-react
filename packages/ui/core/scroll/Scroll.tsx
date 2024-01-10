'use client';

import clsx from 'clsx';
import ScrollContainer from 'react-indiana-drag-scroll';
import { ScrollProps } from './Scroll.types';

export const Scroll: React.FC<ScrollProps> = ({
  orientation = 'hozizontal',
  className,
  children,
}) => {
  return (
    <ScrollContainer
      className={clsx('flex flex-nowrap', 'scroll-container', className)}
      horizontal={orientation === 'hozizontal'}
      vertical={orientation === 'vertical'}
    >
      {children}
    </ScrollContainer>
  );
};
