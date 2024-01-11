import fallbackImg from 'public/images/fallback.svg';
import Image from 'next/image';
import clsx from 'clsx';
import { BlogItemSkeletonProps } from './BlogItem.types';

export const BlogItemSkeleton = ({
  size = 'lg',
  orientation = 'horizontal',
  showImg = true,
  position = 'start',
}: BlogItemSkeletonProps) => {
  const containerClasses = clsx(
    'animate-pulse isolate inline-flex w-full justify-start items-start',
    {
      'sm:flex-col-reverse mb-5 sm:mb-0': position === 'end',

      'flex-col': orientation === 'vertical' && size === 'xl',
      'sm:flex-col': orientation === 'vertical' && size !== 'xl',
      'lg:flex-row': orientation === 'horizontal',

      'w-full gap-3': size === 'sm',
      'w-full gap-5': size === 'md',
      'w-full gap-6': size === 'lg',
      'w-full gap-8': size === 'xl',
    },
  );
  const imageContentClasses = clsx('opacity-10 relative shrink-0 ', {
    'mb-3 self-center': orientation === 'vertical',
    'hidden sm:block': orientation === 'horizontal',

    'w-16 h-16 shrink-0': size === 'sm',
    'h-32 w-32 shrink-0': size === 'md',
    'h-44 w-44 shrink-0': size === 'lg',
    'h-64 w-64 shrink-0': size === 'xl',
  });

  const titleClass = clsx(
    'bg-gray-medium opacity-70 rounded-full w-full mb-6',
    {
      'h-4': size === 'sm',
      'h-6': size === 'md',
      'h-8': size === 'lg' || size === 'xl',
    },
  );

  const descriptionClass = clsx('', {
    'hidden sm:block': size === 'sm' || size === 'md',
  });

  return (
    <div className={containerClasses}>
      {showImg && (
        <div className={imageContentClasses}>
          <Image src={fallbackImg} fill aria-hidden="true" alt="Placeholder" />
        </div>
      )}
      <div className="w-full grow shrink basis-0 flex-col justify-start items-start sm:block ">
        <div className="flex items-center gap-x-4 text-xs">
          <div className="h-3 w-32 bg-primary-dark opacity-40 rounded-full mb-4"></div>
        </div>
        <div className="group relative">
          <div className={titleClass}></div>
        </div>
        <span className="text-xs font-normal font-['DMSans'] uppercase leading-normal">
          <div className="h-2 bg-gray-light opacity-80 rounded-full w-32 mb-5"></div>
        </span>
        <div className={descriptionClass}>
          <div className="h-3 bg-gray-light opacity-80 rounded-full w-full mb-4"></div>
          <div className="h-3 bg-gray-light opacity-80 rounded-full w-full mb-4"></div>
          <div className="h-3 bg-gray-light opacity-80 rounded-full w-full"></div>
        </div>
      </div>
    </div>
  );
};
