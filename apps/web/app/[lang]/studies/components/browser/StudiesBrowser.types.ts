import { LocaleProps } from 'intl';
import { PropsWithClassName } from 'ui/types/core';

export type StudiesBrowserProps = PropsWithClassName &
  LocaleProps & {
    appId: string;
    apiKey: string;
    indexName: string;
  };

export type StudyPreviewProps = {};
