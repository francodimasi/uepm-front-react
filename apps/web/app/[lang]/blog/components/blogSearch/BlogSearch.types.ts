import { Dispatch, SetStateAction } from 'react';

export type BlogSearchInputProps = {
  open: boolean;
  setCriteria: Dispatch<SetStateAction<string>>;
  criteria: string;
};
