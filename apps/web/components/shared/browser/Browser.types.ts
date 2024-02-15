import { LocaleProps } from 'intl';
import { PropsWithClassName } from 'ui/types/core';

export type BrowserProps = PropsWithClassName &
  LocaleProps & {
    title: string;
    subtitle: string;
    placeholder: string;
  };
