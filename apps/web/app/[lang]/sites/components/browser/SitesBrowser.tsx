'use client';

import { useContext, useState } from 'react';
import { SitesBrowserProps } from './SitesBrowser.types';
import { useTranslations, LocaleProps } from 'intl';
import { SitesBrowserContext } from './context/provider';
import { sitesBrowserActions } from './context/reducer';
import { SiteItem } from '../siteItem';
import { Algolia, AlgoliaHits, AlgoliaSearch } from 'ui/components';
import dynamic from 'next/dynamic';
import { SitePreviewCard, SitePreviewCardMobile } from '../sitePreviewCard';
import { Modal } from 'ui/core';

const AlgoliaMap = dynamic(() => import('ui/components/algolia/map/Map'), {
  ssr: false,
});

const Site = () => {
  return {
    username: '',
    studies: [
      {
        id: 5555,
        status: 'recruiting',
      },
      {
        id: 999,
        status: 'closed',
      },
    ],
    id: 'b643cc15-72bb-4eb5-90ac-9f078c74396f',
    name: 'Sitio de Prueba',
    description:
      'Somos una organización que trabaja en la generación de conocimiento para mejorar la calidad de vida de las personas a través de la investigación clínica. Trabajamos con un fuerte interés en concientizar y educar a la sociedad sobre la prevención y tratamiento de enfermedades y sobre la importancia de los ensayos clínicos para lograrlo.',
    url: 'www.google.com',
    verified: true,
    address: 'Av Triunvirato 3079, C1427 AAD, Buenos Aires, Argentina',
    lat: -34.5840872,
    lng: -58.46593919999999,
    phone: '01130765822',
    email: 'martinez.lucassebastian@gmail.com',
    category: 'trial',
    pipedrive_organization_id: '15599',
    keywords: [
      'Cáncer de pulmón',
      'Diabetes',
      'Obesidad',
      'Cáncer de próstata',
      'Fibrosis pulmonar',
      'Cáncer de útero',
      'Cardiovascular',
      'Cáncer de mama',
      'Insuficiencia cardíaca',
      'Cáncer de riñón',
      'Enfermedad renal crónica',
    ],
    logo: 'https://trialtech-production.ams3.digitaloceanspaces.com/L9CEii2VkXCXRwoDXTrG7mPf?response-content-disposition=inline%3B%20filename%3D%22cedimba.png%22%3B%20filename%2A%3DUTF-8%27%27cedimba.png&response-content-type=image%2Fpng&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=DO00FUMZ722RD4JVYELA%2F20240311%2Fams3%2Fs3%2Faws4_request&X-Amz-Date=20240311T154006Z&X-Amz-Expires=1800&X-Amz-SignedHeaders=host&X-Amz-Signature=f249cb5a2757028cfe455ee270f92d7105e682090e4d0c89376fdffce7f11151',
    map: 'https://trialtech-production.ams3.digitaloceanspaces.com/30l49hetlslavov0j9bz9flksh4d?response-content-disposition=inline%3B%20filename%3D%22staticmap%22%3B%20filename%2A%3DUTF-8%27%27staticmap&response-content-type=image%2Fpng&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=DO00FUMZ722RD4JVYELA%2F20240311%2Fams3%2Fs3%2Faws4_request&X-Amz-Date=20240311T150202Z&X-Amz-Expires=1800&X-Amz-SignedHeaders=host&X-Amz-Signature=5332c83608ee806897a7e59ddc10ebb06dd56b1a7c596c5f194f9d63ef088100',
    physicians: [],
    perks: [
      'Traslado incluido',
      'Viaticos incluidos',
      'Comidas sin cargo',
      'Gastos de acompañante pagos',
    ],
    site_image:
      'https://uepm-dev.sfo3.digitaloceanspaces.com/zf18ja2jr28n8zt3ma1y8vnaxv0p?response-content-disposition=inline%3B%20filename%3D%22siitio%20de%20prueba.webp%22%3B%20filename%2A%3DUTF-8%27%27siitio%2520de%2520prueba.webp&response-content-type=image%2Fwebp&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=TEIB4WPTWDF6AMGMSWIW%2F20240301%2Fsfo3%2Fs3%2Faws4_request&X-Amz-Date=20240301T155735Z&X-Amz-Expires=1800&X-Amz-SignedHeaders=host&X-Amz-Signature=8143fd726b77b77700cf65bc016c02cbef16ed598026192475d7f5c2cf3670dd',
    study_conditions: [
      '',
      'Cáncer de pulmón',
      'Carcinoma de células escamosas de cabeza y cuello',
      'Carcinoma de pulmón de células no pequeñas',
      'Hipercolesterolemia familiar',
    ],
    country: {
      id: 54,
      name: 'Argentina',
      phone_mask: '(###)####-####',
      iso_code: 'AR',
      phone_code: '54',
      flag: 'https://flagcdn.com/ar.svg',
      default_tz: '-0300',
      currency: 'ARS',
      default_rate_cents: null,
    },
  };
};
const selectedSite = Site();

export const SitesBrowser = ({
  apiKey,
  appId,
  indexName,
}: SitesBrowserProps & LocaleProps) => {
  const t = useTranslations('sites');

  const [modalOpen, setModalOpen] = useState(false);

  const {
    browserState: { sites },
    browserDispatch,
  } = useContext(SitesBrowserContext);

  const handleHits = (hits: any[]) => {
    if (JSON.stringify(hits) === JSON.stringify(sites)) return;
    browserDispatch({ type: sitesBrowserActions.SET_SITES, sites: hits });
  };

  const handleOnClose = () => {
    setModalOpen(false);
  };

  const handleOnClick = () => {
    setModalOpen(true);
  };

  return (
    <Algolia appId={appId} apiKey={apiKey} indexName={indexName}>
      <div className="w-full h-auto flex flex-col sm:hidden gap-5">
        <Modal open={modalOpen} onClose={handleOnClose} className="z-20">
          <SitePreviewCardMobile site={selectedSite} onClose={handleOnClose} />
        </Modal>

        <span onClick={handleOnClick}>CLICK TO OPEN MODAL </span>
        <AlgoliaSearch
          placeholder={t('browser.placeholder')}
          className="h-full searchbox"
        />
        <div className="block">
          <AlgoliaMap className="h-[500px] w-full relative z-10" />
        </div>

        <div className="w-full h-full relative">
          <AlgoliaHits
            className="sm:h-[500px] relative"
            hit={SiteItem}
            onChange={handleHits}
          />
        </div>
      </div>

      <div className="hidden w-full h-auto sm:grid sm:grid-cols-3 gap-5">
        <div className="w-full h-auto flex flex-col col-span-1 gap-5">
          <AlgoliaSearch
            placeholder={t('browser.placeholder')}
            className="h-full searchbox"
          />
          <div className="w-full h-[1000px] relative sm:col-span-1 sm:overflow-y-scroll sm:overflow-auto">
            <AlgoliaHits
              className="sm:h-[500px] relative"
              hit={SiteItem}
              onChange={handleHits}
            />
          </div>
        </div>
        {selectedSite && (
          <div className="hidden sm:block m-4 sm:row-start-1 sm:col-start-2 sm:col-span-1 z-20">
            <SitePreviewCard site={selectedSite}></SitePreviewCard>
          </div>
        )}
        <div className="hidden sm:block sm:row-start-1 sm:col-start-2 sm:col-end-4 z-10">
          <AlgoliaMap className="h-full z-10 w-full relative" />
        </div>
      </div>
    </Algolia>
  );
};
