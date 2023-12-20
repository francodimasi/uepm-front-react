import { PropsWithClassName } from '../../types/core';

export type SelectItem = {
  name: string;
  id: number;
};

export type SelectProp = PropsWithClassName & {
  items: SelectItem[];
  selected: number;
  onChange: Function;
  label?: string;
};
