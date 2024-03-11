import {
  P2,
  OfficeBuildingIcon,
  Card,
  Tag,
  L1,
  Button,
  ShareOutlineIcon,
  CloseIcon,
  P1,
} from 'ui/core';
import { ImageWithFallback } from '@components/utils/ImageWithFallback';
import { SitePreviewProps } from './SitePreviewCard.types';
import { studyStatus } from '../../[id]/constants';
import Link from 'next/link';
import { LocaleProps, useTranslations } from 'intl';

export const SitePreviewCardMobile: React.FC<
  SitePreviewProps & LocaleProps
> = ({ site, onClose = () => {} }) => {
  const t = useTranslations('sites.site');

  const principalInvestigator = site.physicians.find(
    (p) => p.affiliation.role === 'principal_investigator',
  );
  const principalInvestigatorName = principalInvestigator
    ? `${principalInvestigator.first_name} ${principalInvestigator.last_name}`
    : 'Juan Carlos Banana';

  return (
    <Card className="flex flex-col gap-2 items-start justify-normal sm:hidden bg-white !m-0 !p-4 overflow-y-scroll">
      <div className="flex flex-row w-full mx-4 justify-between">
        {site.logo && (
          <ImageWithFallback
            src={site.logo}
            width={64}
            height={64}
            alt={'logo'}
          />
        )}
        <span onClick={onClose} className="mr-4">
          <CloseIcon height={19} width={19} />
        </span>
      </div>

      <P1 className="text-base !p-0 !m-0" label={site.name}></P1>
      {site.studies?.some(
        (study) => study.status === studyStatus.RECRUITING,
      ) && (
        <div className="justify-start items-start gap-2 inline-flex">
          <Tag
            text={t('recruiting')}
            className="p-2 px-4 bg-stone-200 uppercase rounded-full justify-end items-center inline-flex text-dark text-xs font-medium font-['DMSans] leading-none whitespace-nowrap"
          />
        </div>
      )}
      <div className="flex items-baseline gap-2">
        <OfficeBuildingIcon width={16} height={11} />
        <P2 className="text-normal !m-0 !p-0" label={site.address} />
      </div>

      {site.url && (
        <>
          <P2 className="text-base font-bold !m-0 !p-0">{t('website')}</P2>
          <Link href={site.url} target="_blank">
            <L1 className="text-base font-normal underline" label={site.url} />
          </Link>
        </>
      )}

      {principalInvestigatorName && (
        <>
          <P2 className="text-base font-bold !m-0 !p-0">
            {t('principalInvestigator')}
          </P2>
          <P2 className="text-base font-normal !m-0 !p-0">
            {principalInvestigatorName}
          </P2>
        </>
      )}

      {site.map && (
        <ImageWithFallback
          src={site.map}
          alt={'Map of site location'}
          className="rounded-lg"
          style={{
            width: '100%',
            height: 'auto',
            margin: 'auto',
          }}
          width={327}
          height={255}
        />
      )}

      <div className="flex w-full items-center mt-4">
        <Button type="submit" color="dark" expand="none" className="!w-4/5 ">
          <P2 className="!text-sm !font-bold !font-['DMSans]' text-white leading-normal !pb-0">
            {t('seeFullSite')}
          </P2>
        </Button>
        <ShareOutlineIcon></ShareOutlineIcon>
      </div>
    </Card>
  );
};
