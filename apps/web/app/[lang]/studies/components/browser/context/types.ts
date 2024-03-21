import { AlgoliaStudy } from '@models/study.types';

export type StudiesBrowserState = {
  selectedStudy: AlgoliaStudy;
  studies: AlgoliaStudy[];
};
