import { Accordion } from '@components/shared/accordion/Accordion';
import { Tabs } from '@components/shared/tabs/Tabs';
import { TabItem } from '@components/shared/tabs/tabs.type';
import { LanguageContext, useClientTranslation } from 'i18n';
import { useContext, useEffect, useState } from 'react';
import { BREAKPOINTS, H2 } from 'ui';
import { Culture } from './components/Culture';

export const Proposal = () => {
  const { lang } = useContext(LanguageContext);
  const { t } = useClientTranslation(lang, { keyPrefix: 'proposal' });

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
      name: t('culture.title'),
      content: <Culture />,
    },
    {
      name: t('normative.title'),
      content: <Culture />,
    },
    {
      name: t('sanitary.title'),
      content: <Culture />,
    },
    {
      name: t('teams.title'),
      content: <Culture />,
    },
  ];

  return (
    <>
      <section className="pt-28 relative overflow-hidden">
        <div className="absolute w-full h-full top-0 left-0 bg-innovation bg-cover opacity-60"></div>
        <div className="container relative z-10">
          <div className="grid grid-cols-2 mb-16 md:mb-28">
            <div className="col-span-2 lg:col-span-1">
              <H2 className="text-light mb-8 lg:mb-0">{t('title')}</H2>
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
