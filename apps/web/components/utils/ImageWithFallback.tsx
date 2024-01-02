import NextImage, { ImageProps } from 'next/image';
import fallbackImage from 'public/images/fallback.jpg';

interface ImageWithFallbackProps extends ImageProps {
  fallbackSrc?: string;
}

export const ImageWithFallback = ({
  src,
  alt,
  fallbackSrc,
  ...rest
}: ImageWithFallbackProps) => {
  return (
    <NextImage
      src={src || (fallbackSrc ?? fallbackImage)}
      alt={alt}
      {...rest}
    />
  );
};
