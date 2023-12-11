import { ENDPOINTS } from "@api/endpoints.conts";
import {
    BlogCategory,
    BlogPost,
    BlogPostFilterParams,
    BlogPostParams,
  } from "./types/blog.types";

import { blogParser } from "../../app/[lang]/blog/hooks/useBlogParser";

export const getCategories = async () => {
    const response = await fetch(ENDPOINTS.BLOG.CATEGORIES);
    const data = await response.json();
    const categories = data.map(
      (category: { name: string; id: number; slug: string, count: number }): BlogCategory => {
        return {
          name: category.name,
          id: category.id,
          slug: category.slug,
          count: category.count
        };
      }
    );
    return categories;
  }

export const getTags = async () => {
    const res = await fetch(ENDPOINTS.BLOG.TAGS, {
      next: { revalidate: 7200 }, // 60*60*2 = 2 hour
    });
    const data = await res.json();
    const newTags: { id: number; text: string }[] = data.map(
      (tag: { id: number; name: string }) => {
        return { id: tag.id, text: tag.name };
      }
    );
    return newTags;
  }

export const getPostList = async (params: BlogPostFilterParams) => {
    const { postToPostItem } = blogParser();
    const defaultParams = {
      context: "embed",
      status: "publish",
      per_page: 3,
    };
  
    const allParams: BlogPostParams = { ...defaultParams, ...params };
    let queryParams = "?";
    const keys = Object.keys(allParams);
  
    keys.forEach((key, index) => {
      if (allParams[key]) {
        const and = index < keys.length - 1 ? "&" : "";
        let query = `${key}=${allParams[key]}`;
        queryParams += `${query}${and}`;
      }
    });
  
    const res = await fetch(`${ENDPOINTS.BLOG.POSTS}${queryParams}`, {
      next: { revalidate: 7200 }, // 2 hour
    });
  
    if (!res.ok) {
      return []
    }
  
    const data = await res.json();
  
    const items = data?.map((post: BlogPost) => postToPostItem(post)) ?? [];
    return items;
  }