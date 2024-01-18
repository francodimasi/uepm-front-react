export type Step = {
  icon: string;
  title: string;
  description: string;
};

export type HowItWorksProps = {
  steps: Step[];
};

export type StepProps = {
  icon: JSX.Element;
  title: string;
  description: string;
};
