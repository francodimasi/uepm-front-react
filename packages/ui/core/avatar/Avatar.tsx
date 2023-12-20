import Link from 'next/link';
import Image from 'next/image';
import { AvatarProps } from './Avatar.types';
import { getWidth } from './utils';

export const Avatar: React.FC<AvatarProps> = ({
  imageUrl,
  alt,
  title,
  description,
  href = '#',
  size = 'md',
  className,
}) => {
  return (
    <Link href={href} className={className}>
      <div className="flex flex-col items-center cursor-pointer">
        <Image
          className="rounded-full"
          src={imageUrl}
          alt={alt}
          width={getWidth(size)}
        />
        {title && (
          <span
            className={`text-${size === 'md' ? 'base' : size} font-semibold`}
          >
            {title}
          </span>
        )}
        {description && (
          <span className={`text-${size === 'md' ? 'base' : size} font-normal`}>
            {description}
          </span>
        )}
      </div>
    </Link>
  );
};
