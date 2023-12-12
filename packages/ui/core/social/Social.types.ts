import { PropsWithClassName } from "../../types/core";

export type SocialNetwork = {
  icon: string;
  alt: string;
  link: string;
};

export type SocialProps = PropsWithClassName & {
  networks?: SocialNetwork[];
};
