import { PropsWithClassName, Size } from '../../types/core';

export type AccordionItem = {
  title: string;
  content: string;
};

export type AccordionProps = PropsWithClassName & {
  open: number;
  items: AccordionItem[];
  size?: Size;
};
