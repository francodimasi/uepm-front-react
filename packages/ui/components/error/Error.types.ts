import { PropsWithClassName } from 'ui/types/core';

export type ErrorProps = PropsWithClassName & {
  title: string;
  description?: string;
};
