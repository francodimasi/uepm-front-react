import { ENDPOINTS } from '@api/endpoints';
import {
  BlogArticle,
  BlogArticleResponse,
  BlogCategory,
  BlogFilterParams,
  BlogItem,
  BlogTag,
} from '@models/blog.types';
import { BLOG } from './constants';
import { getLangCategory, parseArticleItem } from './helpers';

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
    return data?.map((category: BlogCategory) => {
      return {
        name: category.name,
        id: category.id,
        slug: category.slug,
        count: category.count,
      };
    });
  } catch (error) {
    console.log(error);
    return [];
  }
};

export const getTags = async (): Promise<BlogTag[]> => {
  try {
    const res = await fetch(
      `${ENDPOINTS.BLOG.TAGS}?order=desc&orderby=count&per_page=100&page=1`,
      {
        next: { revalidate: _1D },
      },
    );
    const data: BlogTag[] = await res.json();
    return data?.map((tag) => {
      return {
        name: tag.name,
        id: tag.id,
        slug: tag.slug,
        count: tag.count,
      };
    });
  } catch (error) {
    console.log(error);
    return null;
  }
};

/**
 * TODO: Check if we can filter this by lang once we have more info about translations
 */
export const getTrendingTopics = async (): Promise<BlogTag[]> => {
  try {
    const res = await fetch(
      `${ENDPOINTS.BLOG.TAGS}?order=desc&orderby=count&per_page=10&page=1`,
      {
        next: { revalidate: _2H },
      },
    );
    const data = await res.json();
    return data?.map((tag: BlogTag) => {
      return {
        name: tag.name,
        id: tag.id,
        slug: tag.slug,
        count: tag.count,
      };
    });
  } catch (error) {
    console.log(error);
    return [];
  }
};

export const getArticles = async (
  params: BlogFilterParams,
): Promise<BlogArticleResponse> => {
  try {
    const defaultParams = {
      context: 'view',
      status: 'publish',
      per_page: 3,
    };

    const allParams: BlogFilterParams = { ...defaultParams, ...params };
    let queryParams = '?';
    const keys = Object.keys(allParams);

    keys.forEach((key, index) => {
      if (allParams[key]) {
        const and = index < keys.length - 1 ? '&' : '';
        let query = `${key}=${allParams[key]}`;

        if (key === 'categories') {
          query = `categories[terms]=${allParams[key]}`;
          query += '&categories[operator]=AND';
        }
        if (key === 'tags') {
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
      return null;
    }

    const meta = {
      totalItems: Number(res.headers?.get('X-WP-Total') || 0),
      totalPages: Number(res.headers?.get('X-WP-TotalPages') || 0),
    };

    const data = await res.json();
    return {
      meta,
      data:
        data?.map((article: BlogArticle) => parseArticleItem(article)) ?? [],
    };
  } catch (error) {
    console.log(error);
    return null;
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
  lang: string,
): Promise<BlogItem> => {
  try {
    const articleResponse = await getArticles({
      page: 1,
      per_page: 1,
      context: BLOG.POST.CONTEXT,
      status: BLOG.POST.STATUS,
      tags: [BLOG.FEATURED_POSTS.TAG_ID],
      order: BLOG.FEATURED_POSTS.ORDER,
      orderby: BLOG.FEATURED_POSTS.ORDER_BY,
      categories: [category, getLangCategory(lang)],
    });
    if (articleResponse && articleResponse.data)
      return articleResponse.data.length > 0 ? articleResponse.data[0] : null;
    return null;
  } catch (error) {
    console.log(error);
    return null;
  }
};

export const getArticlesByCategory = async (
  category: number,
  lang: string,
): Promise<BlogItem[]> => {
  try {
    const res = await getArticles({
      page: 1,
      per_page: 4,
      context: BLOG.POST.CONTEXT,
      status: BLOG.POST.STATUS,
      categories: [category, getLangCategory(lang)],
      order: BLOG.POST.ORDER,
      orderby: BLOG.POST.ORDER_BY,
    });
    return res?.data || [];
  } catch (error) {
    console.log(error);
    return [];
  }
};

export const getEditorSelection = async (lang: string): Promise<BlogItem[]> => {
  try {
    const res = await getArticles({
      page: 1,
      per_page: 3,
      context: BLOG.POST.CONTEXT,
      status: BLOG.POST.STATUS,
      tags: [BLOG.EDITOR_CHOICE_POSTS.TAG_ID],
      categories: [getLangCategory(lang)],
      order: BLOG.EDITOR_CHOICE_POSTS.ORDER,
      orderby: BLOG.EDITOR_CHOICE_POSTS.ORDER_BY,
    });
    return res?.data || [];
  } catch (error) {
    console.log(error);
    return [];
  }
};

export const getSuggestedArticles = async (
  lang: string,
): Promise<BlogItem[]> => {
  try {
    const res = await getArticles({
      page: 1,
      per_page: 2,
      context: BLOG.POST.CONTEXT,
      status: BLOG.POST.STATUS,
      categories: [BLOG.SUGGESTED_POSTS.CATEGORY_ID, getLangCategory(lang)],
      order: BLOG.SUGGESTED_POSTS.ORDER,
      orderby: BLOG.SUGGESTED_POSTS.ORDER_BY,
    });
    return res?.data || [];
  } catch (error) {
    console.log(error);
    return [];
  }
};

export const getTagID = async (tagName: string): Promise<number> => {
  try {
    const res = await fetch(
      `${ENDPOINTS.BLOG.TAGS}?search=${tagName}&orderby=name`,
      {
        next: { revalidate: _1D },
      },
    );
    const data = await res.json();
    return data.length > 0 ? Number(data[0].id) : null;
  } catch (error) {
    console.log(error);
    return null;
  }
};
