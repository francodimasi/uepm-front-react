import { H3, P2 } from 'ui/core';
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
      className={clsx(
        'block sm:flex sm:flex-col sm:gap-6 sm:px-4',
        addSeparator
          ? 'border-t-1 sm:border-t-0 sm:border-l-1 border-gray-dark border-opacity-30'
          : '',
      )}
    >
      <div className="flex sm:flex-col gap-4 w-full items-center sm:items-start">
        <span className="p-6">{icon}</span>
        <H3 label={title} className="!pb-0 sm:!text-2xl" />
      </div>
      <P2 label={description} />
    </div>
  );
};
