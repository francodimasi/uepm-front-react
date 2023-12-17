import { StaticImageData } from 'next/image';

export type ResourceItem = {
  name: string;
  description: string;
  icon: string | StaticImageData;
};
