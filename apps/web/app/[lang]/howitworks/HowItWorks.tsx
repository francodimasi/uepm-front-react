import { LocaleProps } from 'intl';
import { H2 } from 'ui/core';
import { Step } from './Step';

import { ApplyIcon, SearchIcon, TakePartIcon } from './icons';
import { Fragment } from 'react';
import { HowItWorksProps } from './HowItWorks.types';

const getIcon = (iconName: string) => {
  switch (iconName) {
    case 'apply': {
      return <ApplyIcon />;
    }
    case 'search': {
      return <SearchIcon />;
    }
    case 'takepart': {
      return <TakePartIcon />;
    }
    default: {
      return <ApplyIcon />;
    }
  }
};

export const HowItWorks: React.FC<HowItWorksProps & LocaleProps> = ({
  steps,
  locale,
}) => {
  return (
    <div className="flex flex-col sm:flex-row gap-4">
      <H2 label={'¿Como funciona?'} className="!mt-0" />
      {steps.map((step, index) => {
        return (
          <Fragment key={index}>
            {index != 0 && (
              <div className="w-full h-0 sm:w-px sm:h-auto sm:mx-4 border border-gray-dark border-opacity-30"></div>
            )}
            <Step
              icon={getIcon(step.icon)}
              title={step[locale]?.title}
              description={step[locale]?.description}
            />
          </Fragment>
        );
      })}
    </div>
  );
};
