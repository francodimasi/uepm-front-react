import { BlogCategory } from '@models/blog.types';
import { Dispatch, SetStateAction } from 'react';

export type BlogCategoryProps = {
  categories: BlogCategory[];
  category: number;
  itemsPerPage?: number;
};

export type BlogCategoryHeaderProps = {
  category: number;
  categories: BlogCategory[];
  setCategory: Dispatch<SetStateAction<number>>;
};
