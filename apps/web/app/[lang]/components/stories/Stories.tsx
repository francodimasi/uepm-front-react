import { H2 } from 'ui/core';
import { StoriesProps } from './Stories.types';
import { useTranslations } from 'intl';
import { StoryComp } from './StoryComp';
import { ImageWithFallback } from '@components/utils/ImageWithFallback';
import SmallMidImage from '@public/images/stories/mid.jpeg';
import SmallRightImage from '@public/images/stories/smallRight.png';
import BottomLeftImage from '@public/images/stories/bottomLeft.jpeg';
import BottomRightImage from '@public/images/stories/bottomRight.jpeg';

export const Stories: React.FC<StoriesProps> = ({ stories }) => {
  const t = useTranslations('home.stories');

  return (
    <>
      <H2 label={t('title')} className="sm:hidden" />
      <div className="sm:hidden flex flex-col w-full">
        <div className="flex justify-start">
          <StoryComp {...stories[0]} />
        </div>
        <div className="flex justify-end">
          <StoryComp {...stories[1]} />
        </div>
        <div className="flex justify-end h-[115px]">
          <ImageWithFallback
            alt={'image'}
            src={SmallMidImage}
            width={115}
            height={115}
            className="rounded-full object-cover"
          />
          <ImageWithFallback
            alt={'image'}
            src={SmallRightImage}
            width={115}
            height={115}
            className="rounded-full object-cover"
          />
        </div>
      </div>

      <div className="hidden sm:flex flex-col">
        <div className="flex justify-between">
          <H2
            label={t('title')}
            className="flex !mt-0 sm:text-3xl xl:text-5xl 2xl:max-w-xs"
          />
          <StoryComp {...stories[1]} />
          <div className="flex flex-col ">
            <ImageWithFallback
              alt={'image'}
              src={SmallMidImage}
              width={125}
              height={125}
              className="rounded-full object-cover"
              style={{ height: '125px' }}
            />
            <ImageWithFallback
              alt={'image'}
              src={SmallRightImage}
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
            src={BottomLeftImage}
            width={250}
            height={250}
            className="rounded-full object-cover"
            style={{ height: '250px' }}
          />
          <StoryComp {...stories[0]} />
          <ImageWithFallback
            alt={'image'}
            src={BottomRightImage}
            width={250}
            height={250}
            className="rounded-full object-cover"
            style={{ height: '250px' }}
          />
        </div>
      </div>
    </>
  );
};
