import { ImageWithFallback } from '@components/utils/ImageWithFallback';
import { MainProps } from './Main.types';
import imgPeople from 'public/images/home/main/peopleDesktop.png';
import imgShapes from 'public/images/home/main/shapesBackground.png';
import imgMobile from 'public/images/home/main/topMobile.png';
import { H2 } from 'ui/core';
import { useTranslations } from 'intl';
import { Browser } from '@components/shared/browser';
import { MainLinks } from './MainLinks';
import { BrowserProvider } from '@components/shared/browser/context/provider';
import { API_KEY, APP_ID, INDEX_NAME } from './constants';

export const Main = ({ locale }: MainProps) => {
  const t = useTranslations('home.main');

  return (
    <div className="relative w-full flex flex-col mb-10 ">
      <ImageWithFallback
        src={imgMobile}
        alt="image"
        style={{
          width: 'auto',
          height: '100%',
          maxHeight: 500,
        }}
        className="md:hidden m-auto"
      />
      <div className="flex">
        <H2
          label={t('title')}
          className="md:max-w-lg xl:max-w-2xl z-10 md:!mb-0 md:!pb-0"
        />
        <div className="hidden md:block ml-auto">
          <ImageWithFallback src={imgPeople} alt="smiling people" />
        </div>
      </div>
      <div className="w-full z-10 bg-white p-4 md:p-10 max-w-screen-2xl m-auto">
        <div className="flex w-full">
          <BrowserProvider>
            <Browser
              apiKey={API_KEY}
              appId={APP_ID}
              indexName={INDEX_NAME}
              locale={locale}
              title={t('browser.title')}
              subtitle={t('browser.subtitle')}
              placeholder={t('browser.placeholder')}
            />
          </BrowserProvider>
          <MainLinks className="hidden md:flex flex-col justify-center border-s-1 border-gray-medium -my-4 ps-4" />
        </div>
      </div>

      <div className="w-3/5 hidden md:flex ml-auto justify-end">
        <ImageWithFallback src={imgShapes} alt="decorative shapes" />
      </div>
      <MainLinks className="hidden sm:flex md:hidden border-t-1 border-gray-medium pt-4 gap-4" />
      <MainLinks className="flex flex-col sm:hidden border-t-1 border-gray-medium pt-4" />
    </div>
  );
};
