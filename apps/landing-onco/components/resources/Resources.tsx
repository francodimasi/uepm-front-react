'use client';

import money from 'public/images/resources/money.png';
import tap from 'public/images/resources/tap.png';
import efficiency from 'public/images/resources/efficiency.png';
import team from 'public/images/resources/team.png';
import personalData from 'public/images/resources/personal-data.png';
import chat from 'public/images/resources/chat.png';

import { H2 } from 'ui';
import { Resource } from './components/Resource';
import { ResourceItem } from './types/resource.type';
import { ServerContext, useContext } from 'react';
import { LanguageContext, useClientTranslation } from 'i18n';

export function Resources() {
  const { lang } = useContext(LanguageContext as ServerContext<any>);
  const { t } = useClientTranslation(lang, { keyPrefix: 'resources' });

  const resources: ResourceItem[] = [
    {
      name: t('cards.fees.name'),
      description: t('cards.fees.description'),
      icon: money,
    },
    {
      name: t('cards.dataPrivacy.name'),
      description: t('cards.dataPrivacy.description'),
      icon: personalData,
    },
    {
      name: t('cards.comprehensiveManagement.name'),
      description: t('cards.comprehensiveManagement.description'),
      icon: team,
    },
    {
      name: t('cards.realTimeTracking.name'),
      description: t('cards.realTimeTracking.description'),
      icon: efficiency,
    },
    {
      name: t('cards.chatDirectCommunication.name'),
      description: t('cards.chatDirectCommunication.description'),
      icon: chat,
    },
    {
      name: t('cards.studiesForEveryPatient.name'),
      description: t('cards.studiesForEveryPatient.description'),
      icon: tap,
    },
  ];

  return (
    <section className="relative py-12 lg:py-28 overflow-hidden">
      {/* <div className="absolute top-0 left-0 w-full h-full bg-success-cases bg-bottom bg-no-repeat bg-[length:100%_auto] opacity-10"></div> */}
      <div className="container relative z-10">
        <div className="grid grid-cols-11">
          <div className="col-span-11 lg:col-span-6 mb-14">
            <H2>{t('title')}</H2>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 dark">
          {resources.map((resource, index) => (
            <Resource key={index} {...resource} />
          ))}
        </div>
      </div>
    </section>
  );
}
