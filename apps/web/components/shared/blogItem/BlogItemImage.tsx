import { BlogItem as BlogItemProps } from '@models/blog.types';
import { ImageWithFallback } from '@components/utils/ImageWithFallback';
import { BlogItemLayoutProps } from './BlogItem.types';
import { getImgClasses } from './helpers';
import clsx from 'clsx';

export const BlogItemImage = ({
  title,
  image,
  layout: { size, orientation, imgPosition },
  className,
}: Partial<BlogItemProps> & BlogItemLayoutProps) => {

  return (
    <>
      {className ? (
        <div className="relative w-full h-full">
          <ImageWithFallback
            src={image}
            alt={title}
            fill
            sizes="100%"
            loading="lazy"
            priority={false}
            className={className}
          />
        </div>
      ) : (
        <div
          className={clsx(
            'relative',
            getImgClasses(size, orientation, imgPosition),
          )}
        >
          <ImageWithFallback
            src={image}
            alt={title}
            fill
            sizes="100%"
            className="absolute inset-0 h-full w-full object-cover"
          />
        </div>
      )}
    </>
  );
};
