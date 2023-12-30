import { ENDPOINTS } from '@api/endpoints';
import {
  BlogArticle,
  BlogCategory,
  BlogFilterParams,
  BlogItem,
  FormattedTag,
} from '@models/blog.types';
import { BLOG } from './constants';
import { parseArticleItem } from './helpers';

const _1D = 86400;
const _5H = 18000;
const _2H = 7200;

export const getCategories = async (): Promise<BlogCategory[]> => {
  try {
    const response = await fetch(
      ENDPOINTS.BLOG.CATEGORIES + `?slug=${BLOG.CATEGORY.SLUG}`,
      {
        next: { revalidate: _5H },
      },
    );
    const data = await response.json();
    const categories = data?.map((category: BlogCategory) => {
      return {
        name: category.name,
        id: category.id,
        slug: category.slug,
        count: category.count,
      };
    });
    return categories;
  } catch (error) {
    console.error(error);
    return [];
  }
};

export const getTrendingTopics = async (): Promise<FormattedTag[]> => {
  try {
    const res = await fetch(
      ENDPOINTS.BLOG.TAGS + '?order=desc&orderby=count&per_page=10&page=1',
      {
        next: { revalidate: _2H },
      },
    );
    const data = await res.json();
    return data?.map((tag: { id: number; name: string }) => {
      return { id: tag.id, text: tag.name };
    });
  } catch (error) {
    console.error(error);
    return [];
  }
};

export const getArticles = async (
  params: BlogFilterParams,
): Promise<BlogItem[]> => {
  try {
    const defaultParams = {
      context: 'embed',
      status: 'publish',
      per_page: 3,
    };

    const allParams: BlogFilterParams = { ...defaultParams, ...params };
    let queryParams = '?';
    const keys = Object.keys(allParams);

    keys.forEach((key, index) => {
      if (allParams[key]) {
        let keyStr = key;
        const and = index < keys.length - 1 ? '&' : '';
        let query = `${keyStr}=${allParams[key]}`;

        if (keyStr === 'categories') {
          query = `categories[terms]=${allParams[key]}`;
          query += '&categories[operator]=AND';
        }
        if (keyStr === 'tags') {
          query = `tags[terms]=${allParams[key]}`;
          query += '&tags[operator]=AND';
        }

        queryParams += `${query}${and}`;
      }
    });
    const res = await fetch(`${ENDPOINTS.BLOG.POSTS}${queryParams}`, {
      next: { revalidate: _2H },
    });

    if (!res.ok) {
      return [];
    }

    const data = await res.json();

    const items =
      data?.map((article: BlogArticle) => parseArticleItem(article)) ?? [];
    return items;
  } catch (error) {
    console.error(error);
    return [];
  }
};

export const getArticleBySlug = async (slug: string): Promise<BlogArticle> => {
  try {
    const res = await fetch(
      `${ENDPOINTS.BLOG.POSTS}?slug=${slug}&_embed=1&context=view`,
    );
    const data = await res.json();
    return data && data.length > 0 ? data[0] : null;
  } catch (error) {
    console.log(error);
    return null;
  }
};

export const getPromotedArticle = async (
  category: number,
): Promise<BlogItem> => {
  try {
    const promotedArticles = await getArticles({
      page: 1,
      per_page: 1,
      context: BLOG.POST.CONTEXT,
      status: BLOG.POST.STATUS,
      tags: [BLOG.FEATURED_POSTS.TAG_ID],
      order: BLOG.FEATURED_POSTS.ORDER,
      orderby: BLOG.FEATURED_POSTS.ORDER_BY,
      categories: [category],
    });
    return promotedArticles && promotedArticles.length > 0
      ? promotedArticles[0]
      : undefined;
  } catch (error) {
    console.error(error);
    return undefined;
  }
};

export const getArticlesByCategory = async (
  category: number,
): Promise<BlogItem[]> => {
  try {
    return await getArticles({
      page: 1,
      per_page: 4,
      context: BLOG.POST.CONTEXT,
      status: BLOG.POST.STATUS,
      categories: [category],
      order: BLOG.POST.ORDER,
      orderby: BLOG.POST.ORDER_BY,
    });
  } catch (error) {
    console.error(error);
    return [];
  }
};

export const getEditorSelection = async (): Promise<BlogItem[]> => {
  try {
    return await getArticles({
      page: 1,
      per_page: 3,
      context: BLOG.POST.CONTEXT,
      status: BLOG.POST.STATUS,
      tags: [BLOG.EDITOR_CHOICE_POSTS.TAG_ID],
      order: BLOG.EDITOR_CHOICE_POSTS.ORDER,
      orderby: BLOG.EDITOR_CHOICE_POSTS.ORDER_BY,
    });
  } catch (error) {
    console.error(error);
    return [];
  }
};

export const getSuggestedArticles = async (): Promise<BlogItem[]> => {
  try {
    return await getArticles({
      page: 1,
      per_page: 2,
      context: BLOG.POST.CONTEXT,
      status: BLOG.POST.STATUS,
      categories: [BLOG.SUGGESTED_POSTS.CATEGORY_ID],
      order: BLOG.SUGGESTED_POSTS.ORDER,
      orderby: BLOG.SUGGESTED_POSTS.ORDER_BY,
    });
  } catch (error) {
    console.error(error);
    return [];
  }
};

export const getTagID = async (tagName: string): Promise<string> => {
  try {
    const res = await fetch(
      `${ENDPOINTS.BLOG.TAGS}?search=${tagName}&orderby=name`,
      {
        next: { revalidate: _1D },
      },
    );
    const data = await res.json();
    return data.length > 0 ? data[0].id : null;
  } catch (error) {
    console.log(error);
    return null;
  }
};

export const getTags = async (): Promise<FormattedTag[]> => {
  try {
    const res = await fetch(ENDPOINTS.BLOG.TAGS, {
      next: { revalidate: _1D },
    });
    const data: { id: number; name: string }[] = await res.json();
    return data?.map((tag) => {
      return { id: tag.id, text: tag.name };
    });
  } catch (error) {
    console.log(error);
    return null;
  }
};
