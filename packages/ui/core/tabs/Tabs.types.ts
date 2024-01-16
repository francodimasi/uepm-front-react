import { PropsWithClassName, Size } from '../../types/core';

type TabId = string | number;

export type TabItem = {
  id: TabId;
  name: string;
  count?: number;
};

export type TabsProps = PropsWithClassName & {
  items: TabItem[];
  selected: TabId;
  size?: Size;
  orientation?: 'horizontal' | 'vertical';
  onChange: (_id: TabId) => void;
};
