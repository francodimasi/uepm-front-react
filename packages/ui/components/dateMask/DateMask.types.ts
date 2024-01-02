import { LocaleProps } from 'intl';
import { PropsWithClassName } from '../../types/core';

export type DateMaskProps = PropsWithClassName &
  LocaleProps & {
    date: string;
    mask?: string;
  };
