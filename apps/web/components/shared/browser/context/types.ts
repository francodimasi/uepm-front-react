export type QueryType = 'suggestion' | 'free';

export type BrowserState = {
  query: string;
  format: QueryType;
};
