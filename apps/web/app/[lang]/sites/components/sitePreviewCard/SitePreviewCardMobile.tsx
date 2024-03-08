import {
  P2,
  OfficeBuildingIcon,
  Card,
  Tag,
  L1,
  Button,
  ShareOutlineIcon,
} from 'ui/core';
import { ImageWithFallback } from '@components/utils/ImageWithFallback';
import { SitePreviewProps } from './SitePreviewCard.types';
import { studyStatus } from '../../[id]/constants';
import Link from 'next/link';

export const SitePreviewCardMobile: React.FC<SitePreviewProps> = ({
  // name,
  // address,
  // website,
  // logo,
  site,
}) => {
  // const t = useTranslations('sites.siteCard');

  const principalInvestigator = site.physicians.find(
    (p) => p.affiliation.role === 'principal_investigator',
  );
  const principalInvestigatorName = principalInvestigator
    ? `${principalInvestigator.first_name} ${principalInvestigator.last_name}`
    : 'Juan Carlos Banana';

  return (
    <Card className="flex sm:hidden bg-white flex-col items-start justify-normal !m-0 !p-4 overflow-y-scroll">
      <ShareOutlineIcon className="self-end"></ShareOutlineIcon>
      {site.logo && (
        <ImageWithFallback
          src={site.logo}
          width={48}
          height={48}
          alt={'logo'}
        />
      )}
      <P2 className="text-base" label={site.name}></P2>
      {site.studies?.some(
        (study) => study.status === studyStatus.RECRUITING,
      ) && (
        <div className="justify-start items-start gap-2 inline-flex">
          <Tag
            // text={t('recruiting')}
            text={'recruiting'}
            className="p-2 px-4 bg-stone-200 uppercase rounded-full justify-end items-center inline-flex text-dark text-xs font-medium font-['DMSans] leading-none whitespace-nowrap"
          />
        </div>
      )}
      <div className="flex items-baseline gap-2">
        <OfficeBuildingIcon width={16} height={11} />
        <P2 className="text-normal" label={site.address} />
      </div>

      {site.url && (
        <div className="flex flex-col gap-2">
          <P2 className="text-base font-bold !m-0 !p-0">{'Website'}</P2>
          <Link href={site.url} target="_blank">
            <L1 className="text-base font-normal underline" label={site.url} />
          </Link>
        </div>
      )}

      {principalInvestigatorName && (
        <div className="flex flex-col gap-2">
          <P2 className="text-base font-bold !m-0 !p-0">
            {'Principal Investigator'}
          </P2>
          <P2 className="text-base font-bold !m-0 !p-0">
            {principalInvestigatorName}
          </P2>
        </div>
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

      <div className="flex w-full items-center justify-around">
        <Button type="submit" color="dark" expand="none" className="w-4/5">
          <P2 className="!text-sm !font-medium !font-['DMSans]' text-white leading-normal !pb-0">
            {'Ver sitio completo'}
          </P2>
        </Button>
        <ShareOutlineIcon></ShareOutlineIcon>
      </div>
    </Card>
  );
};
