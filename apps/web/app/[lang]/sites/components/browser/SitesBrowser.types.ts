import { LocaleProps } from 'intl';
import { PropsWithClassName } from 'ui/types/core';

export type SitesBrowserProps = PropsWithClassName &
  LocaleProps & {
    appId: string;
    apiKey: string;
    indexName: string;
  };
