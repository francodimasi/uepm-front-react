import { ImageWithFallback } from '@components/utils/ImageWithFallback';
import logo from 'public/images/about/compliance-logo.svg';
import imgDesktop from 'public/images/about/bottomDesktop.png';
import imgMobile from 'public/images/about/bottomMobile.png';
import { H1, P1, Tag } from 'ui/core';
import { useTranslations } from 'intl';

export const Bottom: React.FC = () => {
  const t = useTranslations('about.sections.presentation.bottom');
  return (
    <div className="w-full flex flex-col mb-10 sm:mb-16">
      <Tag
        text={t('tag')}
        className='py-2 text-primary-dark text-sm lg:text-base font-medium font-["DMSans"] uppercase'
      />
      <H1 label={t('title')} />
      <div className="sm:hidden">
        <ImageWithFallback
          src={imgMobile}
          alt="image"
          style={{
            width: '100%',
            height: 'auto',
          }}
          loading="lazy"
        />
        <div className="relative h-40 overflow-visible">
          <div className="absolute bottom-0 mx-4 w-100 bg-light flex flex-col items-start">
            <ImageWithFallback
              src={logo}
              alt="iso45001"
              width={128}
              height={128}
              className="p-4"
            />
            <P1 className="p-4 leading-6" label={t('description')} />
          </div>
        </div>
      </div>
      <div className="hidden sm:flex flex-col">
        <ImageWithFallback
          src={imgDesktop}
          alt="image"
          style={{
            width: '100%',
            height: 'auto',
          }}
          loading="lazy"
        />
        <div className="relative h-40 md:h-0 lg:h-0 xl:h-0 overflow-visible">
          <div className="absolute bottom-8 xl:bottom-16 2xl:bottom-20 mx-4 md:mx-8 lg:mx-10 xl:mx-16 2xl:mx-20 w-100 bg-light flex flex-col items-start md:flex-row md:items-center">
            <ImageWithFallback
              src={logo}
              alt="iso45001"
              width={128}
              height={128}
              className="p-4 z-10"
            />
            <P1 className="p-4" label={t('description')} />
          </div>
        </div>
      </div>
    </div>
  );
};
