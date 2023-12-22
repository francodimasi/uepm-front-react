import { Dispatch, SetStateAction } from 'react';
import { PropsWithClassName } from '../../types/core';

export type PagintationParams = PropsWithClassName & {
  actualPage: number;
  pagesCount: number;
  setPage: Dispatch<SetStateAction<number>>;
};
