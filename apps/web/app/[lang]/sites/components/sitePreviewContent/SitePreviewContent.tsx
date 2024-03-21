import {
  P2,
  OfficeBuildingIcon,
  CloseIcon,
  P1,
  Button,
  ShareOutlineIcon,
  L1,
} from 'ui/core';
import { ImageWithFallback } from '@components/utils/ImageWithFallback';
import { SitePreviewContentProps } from './SitePreviewContent.types';
import { SiteSpecializations } from '../SiteSpecializations';
import { SitePerks } from '../SitePerks';
import { LocaleProps, defaultLocale, useTranslations } from 'intl';
import Link from 'next/link';

export const SitePreviewContent: React.FC<
  SitePreviewContentProps & LocaleProps
> = ({ site, onClose, locale = defaultLocale }) => {
  const t = useTranslations('sites.site');

  return (
    <div className="flex flex-col gap-4">
      <div className="hidden lg:flex lg:gap-4 w-full lg:items-center lg:justify-start">
        <ImageWithFallback
          src={site.logo_url}
          width={80}
          height={80}
          alt={'logo'}
        />
        <P1
          className="block font-bold text-base !p-0  !my-3  lg:!m-0"
          label={site.name}
        />
        <span onClick={onClose} className="hidden lg:block self-start ml-auto">
          <CloseIcon />
        </span>
      </div>
      <div className="w-full flex-col lg:gap-4 lg:hidden">
        <ImageWithFallback
          src={site.logo_url}
          width={64}
          height={64}
          alt={'logo'}
        />
        <P1 className="block font-bold" label={site.name} />
      </div>

      <div className="flex items-baseline gap-2">
        <OfficeBuildingIcon width={16} height={11} />
        <P2 className="!p-0 !m-0" label={site.address} />
      </div>

      <div className="block lg:hidden">
        {site.url && (
          <>
            <P2 className="block text-base font-bold">{t('website')}</P2>
            <Link href={site.url} target="_blank">
              <L1 className="font-normal underline" label={site.url} />
            </Link>{' '}
          </>
        )}

        <div className="flex w-full items-center justify-evenly mt-4">
          <Link href={`/${locale}/sites/${site.id}`} className="w-5/6">
            <Button size="xs" color="dark" expand="none" className="w-full">
              <P2 className="!text-sm !font-bold text-white leading-normal !pb-0">
                {t('seeFullSite')}
              </P2>
            </Button>
          </Link>
          <ShareOutlineIcon />
        </div>
      </div>

      <div className="hidden lg:flex lg:flex-col lg:gap-4">
        {site.description && <P2 className="!p-0 !m-0">{site.description}</P2>}

        {site.keywords?.length > 0 && (
          <SiteSpecializations
            specializations={site.keywords}
            title={t('specializations')}
          />
        )}
        {site.perks?.length > 0 && (
          <SitePerks perks={site.perks} title={t('benefits')} />
        )}
      </div>
    </div>
  );
};
