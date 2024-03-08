import { P2, OfficeBuildingIcon, Card, Tag } from 'ui/core';
import { ImageWithFallback } from '@components/utils/ImageWithFallback';
import { SitePreviewProps } from './SitePreviewCard.types';
import { studyStatus } from '../../[id]/constants';
import { SiteSpecializations } from '../SiteSpecializations';
import { SitePerks } from '../SitePerks';
import { SitePhysicians } from '../SitePhysicians';
import { SiteConditions } from '../SiteConditions';

const conditionsList = ['lupus', 'cancer', 'esquizofrenia aguda pediatrica'];
export const SitePreviewCard: React.FC<SitePreviewProps> = ({
  // name,
  // address,
  // website,
  // logo,
  site,
}) => {
  // const t = useTranslations('sites.siteCard');

  return (
    <Card className="flex flex-col items-start justify-normal bg-white !m-0 !p-4 overflow-y-scroll">
      <div className=" flex gap-4 items-center">
        {site.logo && (
          <ImageWithFallback
            src={site.logo}
            width={48}
            height={48}
            alt={'logo'}
          />
        )}
        <P2 className="text-base" label={site.name}></P2>
      </div>
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
      {site.description && (
        <P2 className="!leading-relaxed">{site.description}</P2>
      )}

      <SiteSpecializations
        specializations={site.keywords}
        title={'specializations'}
      />

      {site.perks?.length > 0 && (
        <SitePerks perks={site.perks} title={'benefits'} />
      )}

      {site.physicians?.length > 0 && (
        <SitePhysicians physicians={site.physicians} title={'physicians'} />
      )}

      {conditionsList.length > 0 && (
        <SiteConditions
          conditions={conditionsList}
          title={'Estudios Abiertos'}
        />
      )}
    </Card>
  );
};
