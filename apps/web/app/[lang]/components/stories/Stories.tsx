import { H2 } from 'ui/core';
import { StoriesProps } from './Stories.types';
import { useTranslations } from 'intl';
import { Story } from './Story';
import { ImageWithFallback } from '@components/utils/ImageWithFallback';
import MotherAndChild from '@public/images/home/stories/motherAndChild.jpeg';
import OldGuy from '@public/images/home/stories/oldGuy.png';
import SmilingPeople from '@public/images/home/stories/smilingPeople.png';
import SmilingGirl from '@public/images/home/stories/smilingGirl.jpeg';
import SmilingWoman from '@public/images/home/stories/smilingWoman.jpeg';
import CircleWhite from '@public/images/shared/circle-white.png';
import CircleBrand from '@public/images/shared/circle-brand.png';
import SemiCircleWhite from '@public/images/shared/semi-circle-white.png';
import SemiCircleBrand from '@public/images/shared/semi-circle-brand.png';
import SemiCircleGray from '@public/images/shared/semi-circle-gray.png';

export const Stories: React.FC<StoriesProps> = ({ stories }) => {
  const t = useTranslations('home.stories');

  return (
    <>
      <div className="flex flex-col w-full">
        <H2 label={t('title')} className="sm:hidden" />
        <div className="relative flex justify-end">
          <H2
            label={t('title')}
            className="absolute left-0 z-10 hidden sm:flex !mt-0 xl:text-5xl max-w-xs lg:max-w-md"
          />
          <div className="flex justify-end">
            <ImageWithFallback
              alt={'image'}
              src={CircleWhite}
              sizes="100%"
              className="hidden md:flex rounded-full object-cover w-48 h-48 lg:w-64 lg:h-64"
            />
            <ImageWithFallback
              alt={'image'}
              src={SemiCircleBrand}
              sizes="100%"
              className="hidden lg:flex w-24 h-48 lg:w-32 lg:h-64 opacity-70"
            />
            <ImageWithFallback
              alt={'image'}
              src={OldGuy}
              sizes="100%"
              className="hidden md:flex rounded-full object-cover w-48 h-48 lg:w-64 lg:h-64"
            />
            <Story {...stories[1]} />
            <div className="flex lg:hidden xl:flex flex-col min-w-[128px]">
              <ImageWithFallback
                alt={'image'}
                src={MotherAndChild}
                sizes="100%"
                className="rounded-full object-cover w-32 h-32"
              />
              <ImageWithFallback
                alt={'image'}
                src={SmilingPeople}
                sizes="100%"
                className="rounded-full object-cover w-32 h-32"
              />
            </div>
            <ImageWithFallback
              alt={'image'}
              src={SemiCircleGray}
              sizes="100%"
              className="hidden xl:flex w-32 h-64"
            />
            <ImageWithFallback
              alt={'image'}
              src={CircleBrand}
              sizes="100%"
              className="hidden 2xl:flex w-64 h-64 opacity-80"
            />
          </div>
        </div>
        <div className="flex justify-start items-center">
          <ImageWithFallback
            alt={'image'}
            src={SmilingGirl}
            sizes="100%"
            className="hidden lg:flex rounded-full object-cover w-48 h-48 lg:w-64 lg:h-64"
          />
          <ImageWithFallback
            alt={'image'}
            src={SemiCircleWhite}
            sizes="100%"
            className="hidden sm:flex lg:hidden xl:flex w-24 h-48 md:w-32 md:h-64"
          />
          <ImageWithFallback
            alt={'image'}
            src={SemiCircleBrand}
            sizes="100%"
            className="flex sm:hidden xl:flex w-24 h-48 md:w-32 md:h-64 opacity-80"
          />
          <ImageWithFallback
            alt={'image'}
            src={SemiCircleGray}
            sizes="100%"
            className="hidden xl:flex w-24 h-48 md:w-32 md:h-64"
          />
          <Story {...stories[0]} />
          <ImageWithFallback
            alt={'image'}
            src={SemiCircleBrand}
            sizes="100%"
            className="hidden 2xl:flex 2xl:hidden w-32 h-64 opacity-80"
          />
          <ImageWithFallback
            alt={'image'}
            src={SmilingWoman}
            sizes="100%"
            className="hidden 2xl:flex rounded-full object-cover w-64 h-64"
          />
        </div>
      </div>
    </>
  );
};
