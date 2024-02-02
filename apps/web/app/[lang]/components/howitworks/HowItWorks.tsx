import { useTranslations } from 'intl';
import { H2 } from 'ui/core';
import { Step } from './Step';

import { HowItWorksProps } from './HowItWorks.types';
import { getIcon } from './helpers';

export const HowItWorks: React.FC<HowItWorksProps> = ({ steps }) => {
  const t = useTranslations('home.howitworks');

  if (!steps || steps.length === 0) return null;

  return (
    <div className="flex flex-col">
      <H2 label={t('title')} className="flex xl:hidden" />
      <div className="grid grid-flow-row sm:grid-flow-col auto-rows-fr auto-cols-fr">
        <H2
          label={t('title')}
          className="hidden xl:flex !mt-0 xl:text-5xl 2xl:max-w-xs"
        />
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
    </div>
  );
};
