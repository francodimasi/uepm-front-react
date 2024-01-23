import { ImageWithFallback } from '@components/utils/ImageWithFallback';
import imgMobile from 'public/images/about/topMobile.png';
import imgDesktop from 'public/images/about/topDesktop.png';
import { H1, H4 } from 'ui/core';
import { useTranslations } from 'intl';

export const Top: React.FC = () => {
  const t = useTranslations('about.sections.presentation.top');
  return (
    <div className="w-full">
      <div className="grid grid-cols-2 sm:pb-4">
        <div className="col-span-2 sm:col-span-1 w-full md:w-1/2">
          <H1 label={t('title')} className="block sm:!pb-0" />
        </div>
        <div className="col-span-2 sm:col-span-1 w-full lg:w-3/4 xl:w-2/3 flex items-center">
          <H4 className="!font-normal">
            {`${t('description')} `}
            <b>{`${t('highlighted')}.`}</b>
          </H4>
        </div>
      </div>
      <div className="sm:hidden mt-12">
        <ImageWithFallback
          src={imgMobile}
          alt="image"
          sizes="100%"
          loading="lazy"
        />
      </div>
      <div className="hidden sm:flex">
        <ImageWithFallback
          src={imgDesktop}
          alt="image"
          sizes="100%"
          loading="lazy"
        />
      </div>
    </div>
  );
};
