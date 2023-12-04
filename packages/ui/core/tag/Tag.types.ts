import { PropsWithClassName } from "../../types/core";

export type TagProps = PropsWithClassName & {
  text: string;
  onClickHandler?: () => void;
};
