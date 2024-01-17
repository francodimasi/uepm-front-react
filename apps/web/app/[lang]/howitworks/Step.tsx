import { H3, P2 } from 'ui/core';
import { StepProps } from './HowItWorks.types';

export const Step: React.FC<StepProps> = ({ icon, title, description }) => {
  return (
    <div className="block my-8 sm:flex sm:flex-col sm:gap-6 ">
      <div className="flex sm:flex-col gap-4 w-full items-center sm:items-start">
        <span className="p-6">{icon}</span>
        <H3 label={title} className="!pb-0" />
      </div>
      <P2 label={description} />
    </div>
  );
};
