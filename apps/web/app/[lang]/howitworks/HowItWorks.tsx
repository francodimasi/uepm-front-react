import { LocaleProps } from 'intl';
import { promises as fs } from 'fs';
import { H2 } from 'ui/core';
import { Step } from './Step';

import { ApplyIcon, SearchIcon, TakePartIcon } from './icons';
import { Fragment } from 'react';

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

export const HowItWorks: React.FC<LocaleProps> = async ({ locale }) => {
  //TODO: replace with real fetch
  const getHowItWorksSteps = async () => {
    const team = await fs.readFile(
      process.cwd() + '/api/mocks/howItWorksSteps.json',
      'utf8',
    );
    return JSON.parse(team);
  };

  //TODO: tighten typing
  const steps: any[] = await getHowItWorksSteps();
  return (
    <div className="flex flex-col sm:flex-row sm:items-stretch gap-4">
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
