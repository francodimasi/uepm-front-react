import { Study } from '@models/study.types';

export type StudyProps = {
  params: { id: string; lang: string };
};

export type StudyCardProps = {
  study: Study;
};
