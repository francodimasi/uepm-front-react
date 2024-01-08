export type BlogArticle = {
  id: number;
  date: string;
  date_gmt: string;
  midified: string;
  modified_gmt: string;
  slug: string;
  status: string;
  type: string;
  link: string;
  title: WpArticleRendered;
  content: WpArticleRendered;
  author: number;
  category: number[];
  tags: string[];
  featured_image_src: string;
  thumbnail_image_src: string;
  display_name: string;
  public_link: string;
};

export type BlogItem = {
  category: string[] | number[];
  title: string;
  date: string;
  content: string;
  image: string;
  slug: string;
  tags: string[];
};

export type ResponseMetaData = {
  totalItems?: number,
  totalPages?: number
};

export type BlogArticleResponse = {
  meta: ResponseMetaData,
  data: BlogItem[]
}

export type BlogItemType = 'small' | 'large' | 'vertical' | 'bigger';

export type WpArticle = BlogArticle & {
  guid: WpArticleRendered;
  excerpt: WpArticleRendered;
  featured_media: number;
  comment_status: string;
  ping_status: string;
  sticky: boolean;
  template: string;
  format: string;
  meta: any[];
  _links: any;
  _embedded: any;
};

type WpArticleRendered = {
  rendered: string;
  protected?: boolean;
};

export type BlogFilterParams = {
  page?: number;
  per_page?: number;
  status?: string;
  context?: string;
  categories?: number[];
  tags?: number[];
  order?: string;
  orderby?: string;
  slug?: string;
  operator?: 'AND' | 'OR';
  before?: string;
};

export type BlogCategory = {
  id: number;
  name: string;
  slug: string;
  count: number;
};
export type BlogTag = BlogCategory;
