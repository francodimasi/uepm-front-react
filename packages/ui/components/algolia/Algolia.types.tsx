import { PropsWithClassName } from '../../types/core';

export type AlgoliaProps = PropsWithClassName & {
  appId: string;
  apiKey: string;
  indexName: string;
};
