type PostItemPropsSize = 'small' | 'large' | 'vertical' | 'bigger';

export type PostItemProps = {
  category: string[];
  title: string;
  date: string;
  content: string;
  image: string;
  slug: string;
  size?: PostItemPropsSize;
};

type PostItemSkeletonPropsSize = 'small' | 'large' | 'vertical' | 'bigger';

export type PostItemSkeletonProps = {
  size?: PostItemSkeletonPropsSize;
};
