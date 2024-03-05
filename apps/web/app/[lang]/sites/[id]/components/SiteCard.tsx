import { L1, P2, OfficeBuildingIcon, Card } from 'ui/core';
import { SiteCardProps } from '../Site.types';
import Link from 'next/link';
import { ContactSiteForm } from './contactForm/ContactSiteForm';
import { useTranslations } from 'intl';
import { ImageWithFallback } from '@components/utils/ImageWithFallback';

export const SiteCard: React.FC<SiteCardProps> = ({
  name,
  address,
  website,
  logo,
}) => {
  const t = useTranslations('sites.siteCard');

  return (
    <Card className="w-full max-h-min flex flex-col items-center justify-center !m-0 !p-0">
      <div className="w-full flex flex-col gap-4 p-4">
        <div className="flex flex-col gap-4">
          <div className=" flex gap-4 items-center">
            {logo && (
              <ImageWithFallback
                src={logo}
                width={48}
                height={48}
                alt={'logo'}
              />
            )}
            <P2 className="text-base" label={name}></P2>
          </div>
          <div className="flex items-baseline gap-2">
            <OfficeBuildingIcon width={16} height={11} />
            <P2 className="text-normal" label={address} />
          </div>
          {website && (
            <div className="flex flex-col gap-2">
              <P2 className="text-base font-bold !m-0 !p-0">{t('website')}</P2>
              <Link href={website} target="_blank">
                <L1
                  className="text-base font-normal underline"
                  label={website}
                />
              </Link>
            </div>
          )}
        </div>

        <ContactSiteForm buttonCaption={t('contact')} />
      </div>
    </Card>
  );
};
