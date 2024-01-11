// import fallbackImg from 'public/images/fallback.jpg';
// import Image from 'next/image';
import clsx from 'clsx';

export const BlogItemSkeleton = ({ type = 'large' }) => {
  const containerClasses = clsx('animate-pulse isolate ', {
    'border-b-1 border-gray-medium w-full pb-4 h-28 justify-start items-start inline-flex':
      type === 'small',
    'flex-col inline-flex w-full gap-6 lg:flex-row ': type === 'large',
    'inline-flex sm:flex-col w-full': type === 'vertical',
    'flex-col inline-flex w-full sm:flex-col-reverse mt-5': type === 'bigger',
  });
  const imageContentClasses = clsx('opacity-10', {
    'relative w-16 h-24 shrink-0 me-4': type === 'small',
    'hidden sm:block relative aspect-[16/9] sm:aspect-[2/1] lg:aspect-square w-36 lg:shrink-0 ':
      type === 'large',
    'relative h-32 w-32 sm:w-full me-5 sm:me-0 sm:h-64 sm:w-64 self-center mb-2':
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
        <svg
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          viewBox="0 0 20 18"
        >
          <path d="M18 0H2a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm-5.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm4.376 10.481A1 1 0 0 1 16 15H4a1 1 0 0 1-.895-1.447l3.5-7A1 1 0 0 1 7.468 6a.965.965 0 0 1 .9.5l2.775 4.757 1.546-1.887a1 1 0 0 1 1.618.1l2.541 4a1 1 0 0 1 .028 1.011Z" />
        </svg>
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
