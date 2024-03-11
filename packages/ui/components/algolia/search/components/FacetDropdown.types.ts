import { PropsWithChildren } from 'react';

export type DropdownProps = PropsWithChildren<{
  buttonText?: string;
  closeOnChange?: boolean | (() => boolean);
  facetAttribute?: string;
  facetText?: string;
}>;
