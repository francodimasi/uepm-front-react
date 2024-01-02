import clsx from 'clsx';
import { Link } from '@intl/navigation';
import { LocaleProps } from 'intl';
import { BlogItemContentProps, BlogItemLayoutProps } from './BlogItem.types';
import { BlogItemImage } from './BlogItemImage';
import { BlogItemContent } from './BlogItemContent';

export const BlogItem = ({
  article,
  layout: {
    imgPosition = 'start',
    orientation = 'horizontal',
    showDescription = true,
    showImg = true,
    size = 'md',
    contentClasses,
    imgClasses,
  },
  className,
  locale,
}: BlogItemContentProps & BlogItemLayoutProps & LocaleProps) => {
  if (!article) return null;
  const { slug, category, content, date, image, tags, title } = article;
  const classes =
    orientation === 'horizontal'
      ? `${
          imgPosition === 'start' ? 'flex-row' : 'flex-row-reverse'
        } items-center`
      : `${
          imgPosition === 'start' ? 'flex-col' : 'flex-col-reverse'
        } items-start`;

  return (
    <Link href={`/blog/article/${slug}` as any} locale={locale}>
      <div className={clsx('flex justify-start', classes, className)}>
        {showImg && (
          <BlogItemImage
            image={image}
            layout={{
              imgPosition,
              orientation,
              size,
            }}
            className={imgClasses}
          />
        )}
        <BlogItemContent
          category={category}
          content={content}
          date={date}
          tags={tags}
          title={title}
          layout={{
            imgPosition,
            showDescription,
            size,
          }}
          className={contentClasses}
          locale={locale}
        />
      </div>
    </Link>
  );
};
