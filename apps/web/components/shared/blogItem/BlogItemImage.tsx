import { BlogItem as BlogItemProps } from '@models/blog.types';
import { ImageWithFallback } from '@components/utils/ImageWithFallback';
import { BlogItemLayoutProps } from './BlogItem.types';
import { getImgClasses, getImgDimensions } from './helpers';

export const BlogItemImage = ({
  title,
  image,
  layout: { size, orientation, imgPosition },
  className,
}: Partial<BlogItemProps> & BlogItemLayoutProps) => {
  const { width, height } = getImgDimensions(size);

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
        <ImageWithFallback
          src={image}
          alt={title}
          style={{
            width: '100%',
            height: 'auto',
            maxWidth: `${width}px`,
            maxHeight: `${height}px`,
            margin: 'auto',
          }}
          width={width}
          height={height}
          className={getImgClasses(size, orientation, imgPosition)}
        />
      )}
    </>
  );
};
