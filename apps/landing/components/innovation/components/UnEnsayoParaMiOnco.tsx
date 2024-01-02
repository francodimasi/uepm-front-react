import { LandingButton } from 'ui';
import uepm from 'public/images/innovation/uepm-innovation.png';
import Image from 'next/image';
import { ServerContext, useContext } from 'react';
import { LanguageContext, useClientTranslation } from 'i18n';

export const UnEnsayoParaMiOnco = () => {
  const { lang } = useContext(LanguageContext as ServerContext<any>);
  const { t } = useClientTranslation(lang, {
    keyPrefix: 'innovation.uepmOnco.content',
  });

  return (
    <div>
      <div className="grid grid-cols-2 text-light">
        <div className="col-span-2 lg:col-span-1 flex items-center">
          <div className="w-full">
            <Image className="w-full" src={uepm} alt="uepm" />
          </div>
        </div>
        <div className="col-span-2 lg:col-span-1 lg:pl-16 2xl:pl-28 lg:flex flex-col justify-between">
          <div>
            <h3 className="font-bold text-2xl mb-9 mt-12 lg:mt-0">
              {t('title')}
            </h3>
            <p>{t('text')}</p>
          </div>
          <div>
            <span className="block font-bold mb-9 mt-6">{t('helper')}</span>
            <LandingButton
              size="medium"
              color="secondary"
              outlined={true}
              className="table w-full md:w-auto"
            >
              {t('button')}
            </LandingButton>
          </div>
        </div>
      </div>
    </div>
  );
};
