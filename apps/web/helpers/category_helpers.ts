import { BlogCategory } from '@models/blog.types';

const CATEGORIES_ORDER = new Map([
  ['noticias', 1],
  ['ensayos-clinicos', 2],
  ['entrevistas', 3],
  ['testimonios', 4],
  ['DEFAULT', 5],
]);

export const orderCategories = (categories: BlogCategory[]) => {
  return categories.toSorted((a: BlogCategory, b: BlogCategory) => {
    const orderA =
      CATEGORIES_ORDER.get(a.slug) || CATEGORIES_ORDER.get('DEFAULT');
    const orderB =
      CATEGORIES_ORDER.get(b.slug) || CATEGORIES_ORDER.get('DEFAULT');
    return orderA - orderB;
  });
};
