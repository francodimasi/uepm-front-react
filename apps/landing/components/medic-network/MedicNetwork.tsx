import { H2 } from 'ui';
import { useContext } from 'react';
import { LanguageContext, useClientTranslation } from 'i18n';

export const MedicNetwork = () => {
  const { lang } = useContext(LanguageContext);
  const { t } = useClientTranslation(lang, { keyPrefix: 'medicalNetwork' });

  return (
    <section className="bg-light relative">
      <div className="container py-16 sm:py-60">
        <div className="grid grid-cols-12">
          <div className="col-span-12 md:col-span-8 lg:col-span-6 sm:pr-20">
            <H2 className="pb-12">{t('title')}</H2>
            <p>{t('description')}</p>
          </div>
        </div>
      </div>
      <div className="sm:absolute top-0 right-0 h-[50vh] sm:h-full bg-medic bg-cover bg-center w-full sm:w-2/6 lg:w-1/2"></div>
    </section>
  );
};
