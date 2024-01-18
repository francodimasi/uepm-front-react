import { useTranslations } from 'intl';
import { H2 } from 'ui/core';
import { Step } from './Step';

import { HowItWorksProps } from './HowItWorks.types';
import { getIcon } from './helpers';

export const HowItWorks: React.FC<HowItWorksProps> = ({ steps }) => {
  const t = useTranslations('home.howitworks');

  return (
    <div className="flex flex-col sm:flex-row gap-4">
      <H2 label={t('title')} className="!mt-0" />
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
