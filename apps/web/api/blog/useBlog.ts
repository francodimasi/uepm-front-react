import { ENDPOINTS } from '@api/endpoints.conts';
import { useRest } from 'rest';
import {
  BlogCategoryTag,
  BlogPost,
  BlogPostFilterParams,
  BlogPostParams,
} from './types/blog.types';

const TAGS_REVALIDATE = 3600;  // 60 * 60  = 1 hour
const TAG_ID_REVALIDATE = 86400;  // 1 day (should never change anyway)

export const useBlog = () => {
  const { get } = useRest();

  const getCategories = async () => {
    const response = await get<BlogCategoryTag[]>(ENDPOINTS.BLOG.CATEGORIES);
    return response;
  };

  const getTags = async () => {
    try {
      const res = await fetch(ENDPOINTS.BLOG.TAGS, {
        next: { revalidate: TAGS_REVALIDATE },
      });
      const data = await res.json();
      const newTags: { id: number; text: string }[] = data.map((tag) => {
        return { id: tag.id, text: tag.name };
      });
      return newTags;
    } catch (error) {
      console.log(error);
      return null;
    }
  };

  const getOnePost = async (slug: string) => {
    try {
      const response = await get<BlogPost[]>(
        `${ENDPOINTS.BLOG.POSTS}?slug=${slug}&_embed=1&context=view`,
      );
      const post = response[0];
      return post;
    } catch (error) {
      console.log(error);
      return null;
    }
  };

  const getPostList = async (params: BlogPostFilterParams) => {
    const defaultParams = {
      context: 'embed',
      status: 'publish',
      per_page: 3,
    };

    const allParams: BlogPostParams = { ...defaultParams, ...params };
    let queryParams = '?';
    const keys = Object.keys(allParams);

    keys.forEach((key, index) => {
      if (allParams[key]) {
        const and = index < keys.length - 1 ? '&' : '';
        let query = `${key}=${allParams[key]}`;
        queryParams += `${query}${and}`;
      }
    });

    try {
      const response = await get<BlogPost[]>(
        `${ENDPOINTS.BLOG.POSTS}${queryParams}`,
      );
      return response;
    } catch (error) {
      console.log(error);
      return null;
    }
  };

  const getTagID = async (tagName: string) => {
    try {
      const res = await fetch(
        `${ENDPOINTS.BLOG.TAGS}?search=${tagName}&orderby=name`,
        {
          next: { revalidate: TAG_ID_REVALIDATE },
        },
      );
      const data = await res.json();
      if (data.length == 0) {
        return null;
      }

      const id: number = data[0].id;
      return id;
    } catch (error) {
      console.log(error);
      return null;
    }
  };

  return {
    getCategories,
    getTags,
    getOnePost,
    getPostList,
    getTagID,
  };
};
