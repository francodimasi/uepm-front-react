import {
  P2,
  OfficeBuildingIcon,
  L1,
  Button,
  ShareOutlineIcon,
  CloseIcon,
  P1,
} from 'ui/core';
import { ImageWithFallback } from '@components/utils/ImageWithFallback';
import { SitePreviewProps } from './SitePreviewCard.types';
import Link from 'next/link';
import { LocaleProps, defaultLocale, useTranslations } from 'intl';

export const SitePreviewCardMobile: React.FC<
  SitePreviewProps & LocaleProps
> = ({ site, onClose = () => {}, locale = defaultLocale }) => {
  const t = useTranslations('sites.site');

  return (
    <>
      <div className="flex flex-row w-full justify-between">
        <ImageWithFallback
          src={site.logo_url}
          width={64}
          height={64}
          alt={'logo'}
        />
        <span onClick={onClose}>
          <CloseIcon height={19} width={19} />
        </span>
      </div>

      <P1
        className="block font-bold text-base !my-3 !p-0"
        label={site.name}
      ></P1>

      <div className="flex items-baseline gap-2 my-2">
        <OfficeBuildingIcon width={16} height={11} />
        <P2 className="text-normal" label={site.address} />
      </div>

      {site.url && (
        <>
          <P2 className="block text-base font-bold">{t('website')}</P2>
          <Link href={site.url} target="_blank">
            <L1 className="text-base font-normal underline" label={site.url} />
          </Link>{' '}
        </>
      )}

      <div className="flex w-full items-center justify-evenly mt-4">
        <Link
          href={`/${locale}/sites/${site.id}`}
          target="_blank"
          className="w-5/6"
        >
          <Button size="xs" color="dark" expand="none" className="w-full">
            <P2 className="!text-sm !font-bold !font-['DMSans]' text-white leading-normal !pb-0">
              {t('seeFullSite')}
            </P2>
          </Button>
        </Link>
        <ShareOutlineIcon></ShareOutlineIcon>
      </div>
    </>
  );
};
