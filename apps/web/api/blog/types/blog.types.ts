import { YoastHeadJson } from "./yoast.types";

/**
 * Categories and Tags
 */

export type BlogCategoryTag = {
  /**
   * @todo check for any types
   */
  id: number;
  count: number;
  description: string;
  link: string;
  name: string;
  slug: string;
  taxonomy: string;
  parent: number;
  meta: any[];
  yoast_head: string;
  yoast_head_json: YoastHeadJson;
  _links: BlogLinks;
};

type BlogLinks = {
  self: BlogLinkHref[];
  collection: BlogLinkHref[];
  about: BlogLinkHref[];
  "wp:post_type": BlogLinkHref[];
  curies: BlogLinkCurry[];
};

type BlogLinkHref = { href: string };

type BlogLinkCurry = {
  name: string;
  href: string;
  templated: boolean;
};

/**
 * Blog posts
 */

export type BlogPost = {
  id: number;
  date: string;
  date_gmt: string;
  guid: BlogPostRendered;
  midified: string;
  modified_gmt: string;
  slug: string;
  status: string;
  type: string;
  link: string;
  title: BlogPostRendered;
  content: BlogPostRendered;
  excerpt: BlogPostRendered;
  author: number;
  featured_media: number;
  comment_status: string;
  ping_status: string;
  sticky: boolean;
  template: string;
  format: string;
  meta: any[];
  categories: number[];
  tags: number[];
  yoast_head: string;
  yoast_head_json: YoastHeadJson;
  featured_image_src: string;
  thumbnail_image_src: string;
  display_name: string;
  public_link: string;
  _links: BlogPostLinks;
  _embedded: BlogPostEmbedded;
};

type BlogPostRendered = {
  rendered: string;
  protected?: boolean;
};

export type BlogPostLinks = {
  self?: BlogPostHref[];
  collection?: BlogPostHref[];
  about?: BlogPostHref[];
  author?: BlogPostHref[];
  replies?: BlogPostHref[];
  "version-history"?: BlogPostHref[];
  "predecessor-version"?: BlogPostHref[];
  "wp:featuredmedia"?: BlogPostHref[];
  "wp:attachment"?: BlogPostHref[];
  "wp:term"?: BlogPostHref[];
  curies?: BlogPostHref[];
};

type BlogPostHref = {
  href: string;
  name?: string;
  templated?: boolean;
  embeddable?: boolean;
};

type BlogPostEmbedded = {
  author: BlogPostEmbeddedAuthor[];
  "wp:featuredmedia": BlogPostEmbeddedFeaturedMedia[];
  "wp:term": BlogPostEmbeddedTermList[];
};

type BlogPostEmbeddedAuthor = {
  id: number;
  name: string;
  url: string;
  description: string;
  link: string;
  slug: string;
  avatar_urls: { [key: number]: string };
  yoast_head: string;
  yoast_head_json: YoastHeadJson;
  _links: BlogPostLinks;
};
type BlogPostEmbeddedFeaturedMedia = {
  id: number;
  date: string;
  slug: string;
  type: string;
  link: string;
};
type BlogPostEmbeddedTerm = {
  id: number;
  link: string;
  name: string;
  slug: string;
  taxonomy: string;
  yoast_head: string;
  yoast_head_json: YoastHeadJson;
  _links: BlogPostLinks;
};

type BlogPostEmbeddedTermList = BlogPostEmbeddedTerm[];

/**
 * Vote post
 */

export type VotePostRequest = {
  id: number;
  type: number;
}

/**
 * All posts
 */

export type BlogPostParams = {
  page: number;
  per_page: number;
  status: string;
  context: string;
  categories?: string[];
  tags?: string[];
}

