import { BLOG } from '@api/blog/constants';

export const addLangCategory = (
  filter: { key: string; value: any },
  lang: string,
) => {
  if (filter.key === 'categories') {
    return {
      [filter.key]: [filter.value.id, BLOG.LANG[lang.toUpperCase()]],
    };
  }
  if (filter.key === 'tags') {
    return {
      [filter.key]: [filter.value.id],
      categories: [BLOG.LANG[lang.toUpperCase()]],
    };
  }
  return {};
};
