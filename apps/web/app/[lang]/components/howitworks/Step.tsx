import { H3, P1 } from 'ui/core';
import { StepProps } from './HowItWorks.types';
import clsx from 'clsx';

export const Step: React.FC<StepProps> = ({
  icon,
  title,
  description,
  addSeparator = true,
}) => {
  return (
    <div
      className={clsx('flex flex-col sm:gap-6 sm:px-12 py-8 sm:py-0', {
        'border-t-1 sm:border-t-0 sm:border-l-1 border-gray-medium':
          addSeparator,
      })}
    >
      <div className="flex sm:flex-col gap-4 w-full pb-6 sm:pb-0 items-center sm:items-start">
        <span className="flex justify-center items-center w-20 h-20 rounded-full p-6 bg-white">
          {icon}
        </span>
        <H3 label={title} className="!pb-0 !sm:text-2xl" />
      </div>
      <P1
        label={description}
        className="text-lg leading-6 !sm:text-xl !sm:leading-8"
      />
    </div>
  );
};
