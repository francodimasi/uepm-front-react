'use client';

import { ServerContext, useContext, useEffect, useRef } from 'react';
import { LandingButton } from 'ui';
import { Molecules } from './components/Molecules';
import { H1 } from 'ui';
import { mouseParallax } from '@utils/animations/MouseParallax';
import { LanguageContext, useClientTranslation } from 'i18n';

export const Cover = () => {
  const { lang } = useContext(LanguageContext as ServerContext<any>);
  const { t } = useClientTranslation(lang, { keyPrefix: 'cover' });

  const containerRef = useRef<HTMLDivElement>(null);
  const moleculesRef = useRef<HTMLDivElement>(null);

  let mouseMoveTimeOut: any;
  useEffect(() => {
    const molecules = moleculesRef?.current;
    const container = containerRef?.current;

    if (container && molecules) {
      container.addEventListener('mousemove', (e) => {
        if (mouseMoveTimeOut) clearTimeout(mouseMoveTimeOut);
        setTimeout(() => {
          mouseParallax(e, container, molecules, -30);
        }, 200);
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [containerRef, moleculesRef]);

  return (
    <section
      className="bg-cover bg-cover-page-mobile md:bg-cover-page h-screen relative overflow-hidden pt-28 flex items-center"
      ref={containerRef}
    >
      <div className="container mx-auto z-20 relative">
        <div className="grid grid-cols-11">
          <div className="col-span-11 lg:col-span-8">
            <H1 className="text-light">{t('title')}</H1>
            <span
              dangerouslySetInnerHTML={{ __html: t('subtitle') as string }}
              className="font-sans text-light mb-8 block md:w-4/5"
            ></span>
            <LandingButton
              color="secondary"
              onClick={() => console.warn('@todo: add functionality')}
              className="w-full sm:w-auto"
            >
              {t('button')}
            </LandingButton>
          </div>
        </div>
      </div>
      <Molecules className="hidden md:block" ref={moleculesRef} />
    </section>
  );
};
