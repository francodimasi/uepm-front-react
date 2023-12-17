export type TabItem = {
  name: string;
  id: number;
};

export type TabsProps = {
  items: TabItem[];
  selected: number;
  onChange: Function;
};
