import { PropsWithClassName } from 'ui/types/core';

export type FAQsItem = {
  question: string;
  answer: string;
};

export type FAQsTopic = {
  id: string;
  name: string;
  items: FAQsItem[];
};

export type FAQsProps = PropsWithClassName & {
  faqs: FAQsTopic[];
};
