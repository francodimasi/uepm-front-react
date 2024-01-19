import { useTranslations } from 'intl';
import { H2 } from 'ui/core';
import { Step } from './Step';

import { HowItWorksProps } from './HowItWorks.types';
import { getIcon } from './helpers';

export const HowItWorks: React.FC<HowItWorksProps> = ({ steps }) => {
  const t = useTranslations('home.howitworks');

  if (!steps || steps.length === 0) return null;

  return (
    <div className="grid grid-flow-row  sm:grid-flow-col auto-rows-fr auto-cols-fr gap-4">
      <H2 label={t('title')} className="!mt-0 xl:!text-5xl sm:!text-3xl" />
      {steps.map((step, index) => {
        return (
          <Step
            key={index}
            addSeparator={index !== 0}
            icon={getIcon(step.icon)}
            title={step.title}
            description={step.description}
          />
        );
      })}
    </div>
  );
};
