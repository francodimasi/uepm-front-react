import { BlogCategory } from '@api/blog/types/blog.types';
import { Dispatch, SetStateAction } from 'react';

export type MainPostListProp = {
  categories: BlogCategory[];
  category: number;
  itemsPerPage?: number;
};

export type PostListHeaderProp = {
  category: number;
  categories: BlogCategory[];
  setCategory: Dispatch<SetStateAction<number>>;
};
