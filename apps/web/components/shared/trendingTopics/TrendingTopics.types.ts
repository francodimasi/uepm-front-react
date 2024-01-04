import { FormattedTag } from '@models/blog.types';

export type TrendingTopicsProps = {
  topics: FormattedTag[];
  params: { lang: string };
};
