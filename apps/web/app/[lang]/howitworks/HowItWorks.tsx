import { useTranslations } from 'intl';
import { H2 } from 'ui/core';
import { Step } from './Step';

import { Fragment } from 'react';
import { HowItWorksProps } from './HowItWorks.types';
import { getIcon } from './helpers';

export const HowItWorks: React.FC<HowItWorksProps> = ({ steps }) => {
  const t = useTranslations('home.howitworks');

  return (
    <div className="flex flex-col sm:flex-row gap-4">
      <H2 label={t('title')} className="!mt-0" />
      {steps.map((step, index) => {
        return (
          <Fragment key={index}>
            {index !== 0 && (
              <div className="w-full h-0 sm:w-px sm:h-auto sm:mx-4 border border-gray-dark border-opacity-30"></div>
            )}
            <Step
              icon={getIcon(step.icon)}
              title={step.title}
              description={step.description}
            />
          </Fragment>
        );
      })}
    </div>
  );
};
