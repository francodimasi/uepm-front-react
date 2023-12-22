import { PropsWithClassName } from '../../types/core';

export type SelectItem = {
  name: string;
  id: number;
};

export type SelectProps = PropsWithClassName & {
  items: SelectItem[];
  selected: number;
  onChange: (_id: number) => void;
  label?: string;
};
