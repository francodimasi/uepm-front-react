import { PropsWithClassName } from "ui/types/core";

export type FooterSectionLinkProps = PropsWithClassName & {
  label: string;
  link: string;
};

export type FooterSectionProps = PropsWithClassName & {
  title: string;
  links: FooterSectionLinkProps[];
};
