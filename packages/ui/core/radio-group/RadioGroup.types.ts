import { PropsWithClassName } from '../../types/core';

export type RadioGroupItem = {
  title: string;
  description?: string;
  id: number | string;
};

export type RadioGroupDisposition = 'vertical' | 'horizontal' | 'inline';

export type RadioGroupProps = PropsWithClassName & {
  items: RadioGroupItem[];
  selected?: number | string | undefined;
  onChange?: (_id: number | string | undefined) => void;
  radioDisposition?: RadioGroupDisposition;
  name?: string;
  circleClassName?: string;
  titleClassName?: string;
  descriptionClassName?: string;
};
