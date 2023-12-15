import { PropsWithClassName } from "../../types/core";
import { Dispatch, SetStateAction } from "react";

export type SelectItem = {
  name: string;
  id: number;
};

export type SelectProp = PropsWithClassName & {
  items: SelectItem[];
  selected: number;
  onChange: (id: number) => void;
  label?: string;
};
