import { BlogCategory } from '@models/blog.types';
import { Dispatch, SetStateAction } from 'react';

export type BlogFilterProps = {
  by: { key: string; value: any; name: string };
  itemsPerPage?: number;
};

export type BlogFilterHeaderProps = {
  category: number;
  categories: BlogCategory[];
  setCategory: Dispatch<SetStateAction<number>>;
};
