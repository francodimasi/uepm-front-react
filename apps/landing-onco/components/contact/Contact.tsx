'use client';

import { useContext, useState } from 'react';
import { H2 } from 'ui';
import { ContactForm } from './ContactForm';
import { LanguageContext, useClientTranslation } from 'i18n';

export const Contact = () => {
  const { lang } = useContext(LanguageContext);
  const { t } = useClientTranslation(lang, { keyPrefix: 'contact' });
  const [sent, setSent] = useState(false);

  return (
    <section className="bg-gray-light bg-opacity-70 relative">
      <div className="container py-16 sm:py-40">
        <div className="grid grid-cols-11">
          <div className="col-span-11 lg:col-span-5 mb-14">
            <H2>{t('title')}</H2>
          </div>
        </div>
        <div className="grid grid-cols-12">
          <div className="col-span-12 lg:col-span-6 lg:pr-20">
            {sent ? (
              <div className="p-8 sm:p-20 bg-gradient-to-br bg- border-primary border-2">
                <p className="text-2xl">{t('thanks')}</p>
              </div>
            ) : (
              <ContactForm onSend={setSent} />
            )}
          </div>
        </div>
      </div>
      <div className="hidden lg:block sm:absolute top-0 right-0 h-[50vh] sm:h-full bg-medic bg-cover bg-center w-full sm:w-2/6 lg:w-1/2"></div>
    </section>
  );
};
