import { ImageWithFallback } from '@components/utils/ImageWithFallback';
import { MainProps } from './Main.types';
import imgDesktop from 'public/images/home/main/topDesktop.png';
import imgMobile from 'public/images/home/main/topMobile.png';
import { H1 } from 'ui/core';
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
        className="sm:hidden -mt-20 -mb-12 m-auto"
      />
      <ImageWithFallback
        src={imgDesktop}
        alt="image"
        style={{
          width: 'auto',
          height: 'auto',
          maxHeight: 700,
        }}
        className="hidden sm:flex md:hidden -mt-24 -mb-20 m-auto"
      />
      <H1
        label={t('title')}
        className="md:max-w-lg xl:max-w-2xl z-10 lg:mb-0 xl:mb-0"
      />
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
      <MainLinks className="hidden sm:flex md:hidden border-t-1 border-gray-medium pt-4 gap-4" />
      <MainLinks className="flex flex-col sm:hidden border-t-1 border-gray-medium pt-4" />
      <div className="absolute right-0 top-0 -mt-12 lg:-mt-16 xl:-mt-20 xl:me-20  hidden md:flex justify-end w-[90%]">
        <ImageWithFallback
          src={imgDesktop}
          alt="image"
          style={{
            width: '40%',
            height: 'auto',
          }}
        />
      </div>
    </div>
  );
};
