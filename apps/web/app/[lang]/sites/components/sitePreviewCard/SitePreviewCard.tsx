import { P2, OfficeBuildingIcon, Card, Tag, CloseIcon, P1 } from 'ui/core';
import { ImageWithFallback } from '@components/utils/ImageWithFallback';
import { SitePreviewProps } from './SitePreviewCard.types';
import { studyStatus } from '../../[id]/constants';
import { SiteSpecializations } from '../SiteSpecializations';
import { SitePerks } from '../SitePerks';
import { SitePhysicians } from '../SitePhysicians';
import { SiteConditions } from '../SiteConditions';
import { LocaleProps, defaultLocale, useTranslations } from 'intl';

const conditionsList = ['lupus', 'cancer', 'esquizofrenia aguda pediatrica'];
export const SitePreviewCard: React.FC<SitePreviewProps & LocaleProps> = ({
  locale = defaultLocale,
  site,
  onClose,
}) => {
  const t = useTranslations('sites.site');

  return (
    <Card className="flex flex-col gap-4 items-start justify-normal bg-white !m-0 !p-4 overflow-y-scroll">
      <div className="w-full flex gap-4 items-center justify-start">
        {site.logo && (
          <ImageWithFallback
            src={site.logo}
            width={48}
            height={48}
            alt={'logo'}
          />
        )}
        <P1 className="text-base !p-0 !m-0" label={site.name}></P1>
        <span onClick={onClose} className="self-start ml-auto">
          <CloseIcon />
        </span>
      </div>
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
        <P2 className="text-normal !p-0 !m-0" label={site.address} />
      </div>
      {site.description && (
        <P2 className="!leading-relaxed !p-0 !m-0">{site.description}</P2>
      )}

      <SiteSpecializations
        specializations={site.keywords}
        title={t('specializations')}
      />

      {site.perks?.length > 0 && (
        <SitePerks perks={site.perks} title={t('benefits')} />
      )}

      {site.physicians?.length > 0 && (
        <SitePhysicians physicians={site.physicians} title={t('physicians')} />
      )}

      {conditionsList.length > 0 && (
        <SiteConditions
          conditions={conditionsList}
          title={t('openStudies')}
          locale={locale}
          seeMore={t('seeMore')}
        />
      )}
    </Card>
  );
};
