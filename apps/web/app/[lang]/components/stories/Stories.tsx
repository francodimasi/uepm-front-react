import { H2 } from 'ui/core';
import { StoriesProps } from './Stories.types';
import { useTranslations } from 'intl';
import { Story } from './Story';
import { ImageWithFallback } from '@components/utils/ImageWithFallback';
import MotherAndChild from '@public/images/home/stories/motherAndChild.jpeg';
import SmilingPeople from '@public/images/home/stories/smilingPeople.png';
import SmilingGirl from '@public/images/home/stories/smilingGirl.jpeg';
import SmilingWoman from '@public/images/home/stories/smilingWoman.jpeg';

export const Stories: React.FC<StoriesProps> = ({ stories }) => {
  const t = useTranslations('home.stories');

  return (
    <>
      <div className="sm:hidden flex flex-col w-full">
        <H2 label={t('title')} />
        <div className="flex items-center justify-evenly">
          <Story {...stories[0]} />
          <ImageWithFallback
            alt={'image'}
            src={MotherAndChild}
            width={115}
            height={115}
            className="rounded-full object-cover aspect-square"
          />
        </div>
        <div className="flex items-center justify-between">
          <ImageWithFallback
            alt={'image'}
            src={SmilingPeople}
            width={115}
            height={115}
            className="rounded-full object-cover aspect-square"
          />
          <Story {...stories[1]} />
        </div>
      </div>

      <div className="hidden sm:flex flex-col w-full">
        <div className="flex justify-between">
          <H2
            label={t('title')}
            className="flex !mt-0 xl:text-5xl 2xl:max-w-xs"
          />
          <Story {...stories[1]} />
          <div className="hidden md:flex flex-col">
            <ImageWithFallback
              alt={'image'}
              src={MotherAndChild}
              width={128}
              height={128}
              className="rounded-full object-cover h-32"
            />
            <ImageWithFallback
              alt={'image'}
              src={SmilingPeople}
              width={128}
              height={128}
              className="rounded-full object-cover h-32"
            />
          </div>
        </div>
        <div className="flex justify-between items-center">
          <ImageWithFallback
            alt={'image'}
            src={SmilingGirl}
            width={256}
            height={256}
            className="hidden md:flex rounded-full object-cover w-32 h-32 lg:w-64 lg:h-64"
          />
          <Story {...stories[0]} />
          <ImageWithFallback
            alt={'image'}
            src={SmilingWoman}
            width={256}
            height={256}
            className="hidden md:flex rounded-full object-cover w-32 h-32 xl:w-64 xl:h-64"
          />
        </div>
      </div>
    </>
  );
};
