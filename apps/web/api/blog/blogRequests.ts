import { ENDPOINTS } from '@api/endpoints.conts';
import {
  BlogCategory,
  BlogPost,
  BlogPostFilterParams,
} from './types/blog.types';
import { BLOG } from './constants';
import { blogParser } from '@app/[lang]/blog/hooks/useBlogParser';

export const getCategories = async () => {
  try {
    const response = await fetch(
      ENDPOINTS.BLOG.CATEGORIES + `?slug=${BLOG.CATEGORY.SLUG}`,
      {
        next: { revalidate: 18000 }, // 60*60*5 = 5 hour
      },
    );
    const data = await response.json();
    const categories = data?.map(
      (category: {
        name: string;
        id: number;
        slug: string;
        count: number;
      }): BlogCategory => {
        return {
          name: category.name,
          id: category.id,
          slug: category.slug,
          count: category.count,
        };
      },
    );
    return categories;
  } catch (error) {
    console.error(error);
    return [];
  }
};

export const getTrendingTopics = async () => {
  try {
    const res = await fetch(
      ENDPOINTS.BLOG.TAGS + '?order=desc&orderby=count&per_page=10&page=1',
      {
        next: { revalidate: 7200 },
      },
    );
    const data = await res.json();
    const newTags: { id: number; text: string }[] = data?.map(
      (tag: { id: number; name: string }) => {
        return { id: tag.id, text: tag.name };
      },
    );
    return newTags;
  } catch (error) {
    console.error(error);
    return [];
  }
};

export const getPostList = async (params: BlogPostFilterParams) => {
  try {
    const { postToPostItem } = blogParser();
    const defaultParams = {
      context: 'embed',
      status: 'publish',
      per_page: 3,
    };

    const allParams: BlogPostFilterParams = { ...defaultParams, ...params };
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
      next: { revalidate: 7200 }, // 2 hour
    });

    if (!res.ok) {
      return [];
    }

    const data = await res.json();

    const items = data?.map((post: BlogPost) => postToPostItem(post)) ?? [];
    return items;
  } catch (error) {
    console.error(error);
    return [];
  }
};

export const getFeaturedPost = async (category: number) => {
  try {
    const featuredPost = await getPostList({
      page: 1,
      per_page: 1,
      context: BLOG.POST.CONTEXT,
      status: BLOG.POST.STATUS,
      tags: [BLOG.FEATURED_POSTS.TAG_ID],
      order: BLOG.FEATURED_POSTS.ORDER,
      orderby: BLOG.FEATURED_POSTS.ORDER_BY,
      categories: [category],
    });
    return featuredPost && featuredPost[0] ? featuredPost[0] : {};
  } catch (error) {
    console.error(error);
    return [];
  }
};

export const getEditorChoicePosts = async () => {
  try {
    const editorChoicePosts = await getPostList({
      page: 1,
      per_page: 3,
      context: BLOG.POST.CONTEXT,
      status: BLOG.POST.STATUS,
      tags: [BLOG.EDITOR_CHOICE_POSTS.TAG_ID],
      order: BLOG.EDITOR_CHOICE_POSTS.ORDER,
      orderby: BLOG.EDITOR_CHOICE_POSTS.ORDER_BY,
    });

    return editorChoicePosts;
  } catch (error) {
    console.error(error);
    return [];
  }
};

export const getSuggestedPosts = async () => {
  try {
    const suggestedPosts = await getPostList({
      page: 1,
      per_page: 2,
      context: BLOG.POST.CONTEXT,
      status: BLOG.POST.STATUS,
      categories: [BLOG.SUGGESTED_POSTS.CATEGORY_ID],
      order: BLOG.SUGGESTED_POSTS.ORDER,
      orderby: BLOG.SUGGESTED_POSTS.ORDER_BY,
    });

    return suggestedPosts;
  } catch (error) {
    console.error(error);
    return [];
  }
};

export const getBlogCategoryPostList = async (category: number) => {
  try {
    const blogPostsList = await getPostList({
      page: 1,
      per_page: 4,
      context: BLOG.POST.CONTEXT,
      status: BLOG.POST.STATUS,
      categories: [category],
      order: BLOG.POST.ORDER,
      orderby: BLOG.POST.ORDER_BY,
    });

    return blogPostsList;
  } catch (error) {
    console.error(error);
    return [];
  }
};
