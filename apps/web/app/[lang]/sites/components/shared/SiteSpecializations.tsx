import { H4, Tag } from 'ui/core';
import { SiteSpecializationsProps } from '../../Sites.types';
import { twMerge } from 'tailwind-merge';

export const SiteSpecializations: React.FC<SiteSpecializationsProps> = ({
  specializations,
  title,
  className,
  titleClassName,
}) => {
  return (
    <div
      className={twMerge(
        'w-full flex-col justify-start items-start inline-flex',
        className,
      )}
    >
      <H4
        label={title}
        className={twMerge('text-primary my-0 lg:my-0', titleClassName)}
      />
      <div className="flex-col sm:flex-row justify-start items-start gap-2 flex flex-wrap">
        {specializations?.map((keyword, index) => (
          <Tag
            text={keyword}
            key={index}
            className="p-4 bg-stone-200 rounded-full justify-end items-center inline-flex text-base text-dark font-normal font-['DMSans'] leading-none whitespace-nowrap mt-2"
          />
        ))}
      </div>
    </div>
  );
};
