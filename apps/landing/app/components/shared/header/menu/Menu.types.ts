export type MenuItemProps = {
  title: string;
  url: string;
};
export type MenuProps = {
  links: MenuItemProps[];
  opened?: boolean;
};
