import { BlogCategory } from '@models/blog.types';
import { blogCategories } from './constants';

const CATEGORIES_ORDER = new Map([
  [blogCategories.NEWS, 1],
  [blogCategories.STUDIES, 2],
  [blogCategories.INTERVIEWS, 3],
  [blogCategories.TESTIMONIES, 4],
]);

export const orderCategories = (categories: BlogCategory[]) => {
  return [...categories]
    .filter((category) => CATEGORIES_ORDER.has(category.id))
    .sort((a, b) => {
      const orderA = CATEGORIES_ORDER.get(a.id);
      const orderB = CATEGORIES_ORDER.get(b.id);
      return orderA - orderB;
    });
};
