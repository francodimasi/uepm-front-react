import { PropsWithClassName, Theme } from '../../types/core';

export type SelectItem = {
  name: string;
  id: number | string;
};

export type SelectMenuPlacement = 'bottom' | 'top';

export type SelectProps = PropsWithClassName & {
  items: SelectItem[];
  selected: number | string;
  onChange: (_id: number | string) => void;
  label?: string;
  color?: Theme;
  menuPlacement?: SelectMenuPlacement;
};
