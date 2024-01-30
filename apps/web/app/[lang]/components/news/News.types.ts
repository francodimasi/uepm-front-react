import { BlogItem } from '@models/blog.types';
import { LocaleProps } from 'intl';

export type NewsProps = LocaleProps & {
  articles: BlogItem[];
};
