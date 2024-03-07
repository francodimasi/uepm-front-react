import { H4, Tag } from 'ui/core';
import { SiteSpecializationsProps } from '../Sites.types';

export const SiteSpecializations: React.FC<SiteSpecializationsProps> = ({
  specializations,
  title,
}) => {
  return (
    <div className="w-full flex-col justify-start items-start gap-4 inline-flex">
      <H4 label={title} className="text-primary my-0 lg:my-0" />
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
