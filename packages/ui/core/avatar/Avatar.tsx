import Image from 'next/image';
import clsx from 'clsx';
import { AvatarProps } from './Avatar.types';
import { getImgClasses } from './utils';
import fallbackImg from './assets/fallback.png';

export const Avatar: React.FC<AvatarProps> = ({
  imageUrl,
  alt,
  size,
  className,
}) => {
  return (
    <div
      className={clsx(
        'relative rounded-full bg-white overflow-hidden',
        getImgClasses(size),
        className,
      )}
    >
      <Image
        src={imageUrl || fallbackImg}
        alt={alt}
        fill
        sizes="100%"
        className="absolute inset-0 h-full w-full object-cover"
      />
    </div>
  );
};
