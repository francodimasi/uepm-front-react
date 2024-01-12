import { BlogTag } from '@models/blog.types';
import { PropsWithClassName } from 'ui/types/core';

export type ArticleTagsProps = PropsWithClassName & {
  tags: BlogTag[];
};
