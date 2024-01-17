import { LocaleProps } from 'intl';
import { promises as fs } from 'fs';
import { H2 } from 'ui/core';
import { Step } from './Step';

import { ApplyIcon, SearchIcon, TakePartIcon } from './icons';

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

  const steps: any[] = await getHowItWorksSteps();
  return (
    <>
      <H2 label={'¿Como funciona?'} />
      <div className="flex flex-col">
        {steps.map((step, index) => (
          <Step
            addSeparator={index != 0}
            key={index}
            icon={getIcon(step.icon)}
            title={step[locale]?.title}
            description={step[locale]?.description}
          />
        ))}
      </div>
    </>
  );
};
