import { Tabs } from '@components/shared/tabs/Tabs';
import { TabItem } from '@components/shared/tabs/tabs.type';
import { UnEnsayoParaMi } from './components/UnEnsayoParaMi';
import { UnEnsayoParaMiOnco } from './components/UnEnsayoParaMiOnco';
import { ManagementPortal } from './components/ManagementPortal';
import { EDiary } from './components/EDiary';
import { LanguageContext, useClientTranslation } from 'i18n';
import { useContext, useEffect, useState } from 'react';
import { BREAKPOINTS, H2 } from 'ui';
import { Accordion } from '@components/shared/accordion/Accordion';

export const Innovation = () => {
  const { lang } = useContext(LanguageContext);
  const { t } = useClientTranslation(lang, { keyPrefix: 'innovation' });

  const [showAccordion, setShowAccordion] = useState<boolean>(false);

  const switchContainer = () => {
    const { clientWidth } = document.body;
    setShowAccordion(clientWidth < BREAKPOINTS.sm);
  };

  useEffect(() => {
    switchContainer();
    window.addEventListener('resize', switchContainer);

    return () => {
      window.removeEventListener('resize', switchContainer);
    };
  }, []);

  const items: TabItem[] = [
    {
      name: t('uepm.title'),
      content: <UnEnsayoParaMi />,
    },
    {
      name: t('uepmOnco.title'),
      content: <UnEnsayoParaMiOnco />,
    },
    {
      name: t('managementPortal.title'),
      content: <ManagementPortal />,
    },
    {
      name: t('ediary.title'),
      content: <EDiary />,
    },
  ];

  return (
    <>
      <section className="pt-28 relative overflow-hidden">
        <div className="absolute w-full h-full top-0 left-0 bg-innovation bg-cover opacity-60"></div>
        <div className="container relative z-10">
          <div className="grid grid-cols-2 mb-16 md:mb-28">
            <div className="col-span-2 lg:col-span-1">
              <span className="block text-light uppercase mb-6">
                {t('label')}
              </span>
              <H2 className="text-light mb-8 lg:mb-0">{t('title')}</H2>
            </div>
            <div className="col-span-2 lg:col-span-1 flex items-end lg:pl-16 2xl:pl-28">
              <p className="text-light">{t('description')}</p>
            </div>
          </div>
        </div>
        <div className="relative z-10">
          {showAccordion ? (
            <Accordion items={items} />
          ) : (
            <div className="container">
              <Tabs items={items} />
            </div>
          )}
        </div>
      </section>
    </>
  );
};
