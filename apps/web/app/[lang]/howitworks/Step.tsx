import { H3, P2 } from 'ui/core';
import { StepProps } from './HowItWorks.types';

export const Step: React.FC<StepProps> = ({
  icon,
  title,
  description,
  addSeparator = false,
}) => {
  return (
    <>
      {addSeparator && (
        <div className="w-full h-0 border border-gray-dark border-opacity-30"></div>
      )}
      <div className="gap-6 my-8">
        <div className="flex gap-4 w-full items-center">
          <span className="p-6">{icon}</span>
          <H3 label={title} className="!pb-0" />
        </div>
        <P2 label={description} />
      </div>
    </>
  );
};
