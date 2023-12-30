import fallbackImg from 'public/images/fallback.jpg';
import Image from 'next/image';
import clsx from 'clsx';

export const BlogItemSkeleton = ({ type = 'large' }) => {
  const containerClasses = clsx('animate-pulse isolate ', {
    'border-b-1 border-gray-medium w-full pb-4 h-28 justify-start items-start inline-flex':
      type === 'small',
    'flex-col inline-flex w-full gap-6 lg:flex-row ': type === 'large',
    'inline-flex sm:flex-col w-full': type === 'vertical',
    'flex-col inline-flex w-full sm:flex-col-reverse mt-5': type === 'bigger',
  });
  const imageContentClasses = clsx('', {
    'relative w-16 h-24 shrink-0 me-4': type === 'small',
    'hidden sm:block relative aspect-[16/9] sm:aspect-[2/1] lg:aspect-square w-36 lg:shrink-0 ':
      type === 'large',
    'relative h-32 w-40 sm:w-full sm:h-42 self-center mb-4':
      type === 'vertical',
    'relative w-64 h-64 self-center': type === 'bigger',
  });

  const contentClasses = clsx({
    hidden: type === 'small',
    "hidden sm:block sm:mt-3 text-dark text-base font-normal font-['DMSans'] leading-normal line-clamp-2":
      type === 'large',
    "hidden sm:block sm:mt-3 text-dark text-base font-normal font-['DMSans'] leading-normal line-clamp-2 ":
      type === 'vertical',
    "mt-3 text-dark font-normal font-['DMSans'] leading-normal line-clamp-2 sm:line-clamp-3 mb-5":
      type === 'bigger',
  });

  const mainContent = clsx('w-full', {
    'grow shrink basis-0 flex-col justify-start items-start sm:block ':
      type === 'small',
    'grow shrink basis-0 flex-col justify-start items-start sm:block':
      type === 'vertical',
  });

  const categoryContent = clsx(
    'h-3 bg-primary-dark opacity-60 rounded-full w-48 mb-4',
    {
      'w-14': type === 'small',
      'w-16': type === 'vertical',
    },
  );

  const titleClass = clsx(
    'bg-gray-medium opacity-80 rounded-full w-full mb-6',
    {
      'h-8 ': type !== 'small',
      'h-4 ': type === 'small',
    },
  );

  return (
    <div className={containerClasses}>
      <div className={imageContentClasses}>
        <Image
          src={fallbackImg}
          fill
          aria-hidden="true"
          className="opacity-20 text-gray-light"
          alt="Placeholder"
        />
      </div>
      <div className={mainContent}>
        <div className="flex items-center gap-x-4 text-xs">
          <div className={categoryContent}></div>
        </div>
        <div className="group relative">
          <div className={titleClass}></div>
        </div>
        <span className="text-xs font-normal font-['DMSans'] uppercase leading-normal">
          <div className="h-2 bg-gray-light opacity-80 rounded-full w-32 mb-5"></div>
        </span>
        <div className={contentClasses}>
          <div className="h-3 bg-gray-light opacity-80 rounded-full w-full mb-4"></div>
          <div className="h-3 bg-gray-light opacity-80 rounded-full w-full mb-4"></div>
          <div className="h-3 bg-gray-light opacity-80 rounded-full w-full"></div>
        </div>
      </div>
    </div>
  );
};
