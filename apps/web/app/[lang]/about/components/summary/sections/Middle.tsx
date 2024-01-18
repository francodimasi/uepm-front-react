import { ImageWithFallback } from '@components/utils/ImageWithFallback';
import { useTranslations } from 'intl';
import img from 'public/images/about/middle.png';
import shapes from 'public/images/about/shapes.png';
import { H1, P1, Tag } from 'ui/core';

export const Middle: React.FC = () => {
  const t = useTranslations('about.sections.presentation.middle');
  return (
    <div className="w-full flex overflow-hidden">
      <div className="flex flex-col items-start pe-4 md:w-1/2">
        <Tag
          text={t('tag')}
          className='py-2 text-primary-dark text-sm lg:text-base font-medium font-["DMSans"] uppercase'
        />
        <H1 label={t('title')} className="!pb-0" />
        <P1 label={t('description')} />
        <ImageWithFallback
          src={shapes}
          alt="shapes"
          style={{
            width: '40%',
            height: 'auto',
            marginTop: '62px',
          }}
          className="hidden 2xl:flex"
        />
        <ImageWithFallback
          src={img}
          alt="image"
          style={{
            width: '100%',
            height: 'auto',
          }}
          className="md:hidden pt-4"
        />
      </div>
      <div className="relative hidden md:flex md:w-1/2 lg:mb-8 xl:mb-0">
        <div className="absolute right-0 bottom-0 hidden md:flex justify-end w-[90%]">
          <ImageWithFallback
            src={img}
            alt="image"
            style={{
              width: '100%',
              height: 'auto',
            }}
          />
        </div>
      </div>
    </div>
  );
};
