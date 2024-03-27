import Link from 'next/link';
import { P2, OfficeBuildingIcon, CloseIcon, P1, Button, L1 } from 'ui/core';
import { ImageWithFallback } from '@components/utils/ImageWithFallback';
import { SitePreviewProps } from './SitePreview.types';
import { SiteSpecializations } from '../shared/SiteSpecializations';
import { SitePerks } from '../shared/SitePerks';
import { LocaleProps, defaultLocale, useTranslations } from 'intl';

export const SitePreview: React.FC<SitePreviewProps & LocaleProps> = ({
  site,
  onClose,
  locale = defaultLocale,
}) => {
  const t = useTranslations('sites.site');

  return (
    <div className="w-full flex flex-col gap-4">
      <div className=" w-full flex flex-col gap-2">
        <div className="w-full grid grid-cols-2">
          <div className="col-span-1 flex">
            <ImageWithFallback
              src={site.logo_url}
              width={80}
              height={80}
              alt="logo"
            />
          </div>
          <div className="hidden lg:flex col-span-1 justify-end cursor-pointer">
            <span onClick={onClose}>
              <CloseIcon color="dark" />
            </span>
          </div>
        </div>
        <P1 className="font-bold text-xl !p-0" label={site.name} />
      </div>
      <div className="flex items-center gap-2">
        <OfficeBuildingIcon width={24} height={24} />
        <P2 className="!p-0 !m-0" label={site.address} />
      </div>
      <div className="block lg:hidden">
        {site.url && (
          <>
            <P2 className="block text-base font-bold">{t('website')}</P2>
            <Link href={site.url} target="_blank">
              <L1 className="font-normal underline" label={site.url} />
            </Link>
          </>
        )}
        <div className="w-full mt-4">
          <Link href={`/${locale}/sites/${site.id}`}>
            <Button size="xs" color="dark" expand="full" className="w-full">
              <P2 className="!text-sm !font-bold text-white leading-normal !pb-0">
                {t('seeFullSite')}
              </P2>
            </Button>
          </Link>
        </div>
      </div>
      <div className="hidden lg:flex lg:flex-col">
        {site.description && <P2 className="!m-0">{site.description}</P2>}
        {site.keywords?.length > 0 && (
          <SiteSpecializations
            specializations={site.keywords}
            title={t('specializations')}
            titleClassName="text-base"
          />
        )}
        {site.perks?.length > 0 && (
          <SitePerks perks={site.perks} title={t('benefits')} />
        )}
      </div>
    </div>
  );
};
