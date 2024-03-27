'use client';

import NextImage, { ImageProps } from 'next/image';
import fallbackImage from 'public/images/fallback.svg';
import { useState } from 'react';

interface ImageWithFallbackProps extends ImageProps {
  fallbackSrc?: string;
}

export const ImageWithFallback = ({
  src,
  alt,
  fallbackSrc,
  ...rest
}: ImageWithFallbackProps) => {
  const [imgSrc, setImgSrc] = useState(src);

  return (
    <NextImage
      src={imgSrc || (fallbackSrc ?? fallbackImage)}
      alt={alt}
      onError={() => {
        setImgSrc(fallbackSrc);
      }}
      {...rest}
    />
  );
};
