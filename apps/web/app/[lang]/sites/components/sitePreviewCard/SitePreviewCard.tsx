import { P2, OfficeBuildingIcon, Card, CloseIcon, P1 } from 'ui/core';
import { ImageWithFallback } from '@components/utils/ImageWithFallback';
import { SitePreviewProps } from './SitePreviewCard.types';
import { SiteSpecializations } from '../SiteSpecializations';
import { SitePerks } from '../SitePerks';
import { useTranslations } from 'intl';

export const SitePreviewCard: React.FC<SitePreviewProps> = ({
  site,
  onClose,
}) => {
  const t = useTranslations('sites.site');

  return (
    <Card className="flex flex-col gap-4 items-start justify-normal bg-white !m-0 !p-4">
      <div className="w-full flex gap-4 items-center justify-start">
        <ImageWithFallback
          src={site.logo_url}
          width={48}
          height={48}
          alt={'logo'}
        />

        <P1 className="text-base !p-0 !m-0" label={site.name}></P1>
        <span onClick={onClose} className="self-start ml-auto">
          <CloseIcon />
        </span>
      </div>

      <div className="flex items-baseline gap-2">
        <OfficeBuildingIcon width={16} height={11} />
        <P2 className="text-normal !p-0 !m-0" label={site.address} />
      </div>
      {site.description && (
        <P2 className="!leading-relaxed !p-0 !m-0">{site.description}</P2>
      )}

      {site.keywords?.length > 0 && (
        <SiteSpecializations
          specializations={site.keywords}
          title={t('specializations')}
        />
      )}
      {site.perks?.length > 0 && (
        <SitePerks perks={site.perks} title={t('benefits')} />
      )}
    </Card>
  );
};
