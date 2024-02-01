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
        <div className="flex justify-start">
          <Story {...stories[0]} />
        </div>
        <div className="flex justify-end">
          <Story {...stories[1]} />
        </div>
        <div className="flex justify-end h-[115px]">
          <ImageWithFallback
            alt={'image'}
            src={MotherAndChild}
            width={115}
            height={115}
            className="rounded-full object-cover"
          />
          <ImageWithFallback
            alt={'image'}
            src={SmilingPeople}
            width={115}
            height={115}
            className="rounded-full object-cover"
          />
        </div>
      </div>

      <div className="hidden sm:flex flex-col w-full">
        <div className="flex justify-between">
          <H2
            label={t('title')}
            className="flex !mt-0 sm:text-3xl xl:text-5xl 2xl:max-w-xs"
          />
          <Story {...stories[1]} />
          <div className="flex flex-col ">
            <ImageWithFallback
              alt={'image'}
              src={MotherAndChild}
              width={125}
              height={125}
              className="rounded-full object-cover"
              style={{ height: '125px' }}
            />
            <ImageWithFallback
              alt={'image'}
              src={SmilingPeople}
              width={125}
              height={125}
              className="rounded-full object-cover"
              style={{ height: '125px' }}
            />
          </div>
        </div>
        <div className="flex justify-between">
          <ImageWithFallback
            alt={'image'}
            src={SmilingGirl}
            width={256}
            height={256}
            className="rounded-full object-cover"
            style={{ height: '256px' }}
          />
          <Story {...stories[0]} />
          <ImageWithFallback
            alt={'image'}
            src={SmilingWoman}
            width={256}
            height={256}
            className="rounded-full object-cover"
            style={{ height: '256px' }}
          />
        </div>
      </div>
    </>
  );
};
