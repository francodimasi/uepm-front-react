export type StepDefinition = {
  title: string;
  description: string;
};
export type Step = {
  icon: string;
  es?: StepDefinition;
  en?: StepDefinition;
  pt?: StepDefinition;
};

export type HowItWorksProps = {
  steps: Step[];
};

export type StepProps = {
  icon: JSX.Element;
  title: string;
  description: string;
};
