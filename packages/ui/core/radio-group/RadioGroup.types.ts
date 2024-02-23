import { PropsWithClassName } from '../../types/core';

export type RadioGroupItem = {
  title: string;
  description?: string;
  id: number | string;
};

export type RadioGroupOrientation = 'vertical' | 'horizontal';
export type RadioGroupDisposition = 'inline' | 'block';

export type RadioGroupProps = PropsWithClassName & {
  items: RadioGroupItem[];
  selected?: number | string | undefined;
  onChange?: (_id: number | string | undefined) => void;
  orientation?: RadioGroupOrientation;
  disposition?: RadioGroupDisposition;
  name?: string;
  circleClassName?: string;
  titleClassName?: string;
  descriptionClassName?: string;
};
