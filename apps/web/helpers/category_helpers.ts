import { BlogCategory } from '@models/blog.types';

const CATEGORIES_ORDER = new Map([
  //[category_id => order]
  [3, 1], //'noticias'
  [4, 2], //'ensayos-clinicos'
  [5, 3], //'entrevistas'
  [2, 4], //'testimonios'
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
