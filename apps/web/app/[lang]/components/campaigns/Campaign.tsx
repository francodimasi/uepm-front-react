import { ImageWithFallback } from '@components/utils/ImageWithFallback';
import { CampaignProps } from './Campaigns.types';
import { H3, H4, L1 } from 'ui/core';
import Link from 'next/link';
import { useTranslations } from 'intl';

export const Campaign: React.FC<CampaignProps> = ({
  tag,
  title,
  link,
  image,
}) => {
  const t = useTranslations('actions');

  return (
    <div className="flex flex-col">
      <ImageWithFallback
        className="w-full h-auto"
        alt="Alt image"
        src={image}
        width={343}
        height={343}
      />
      <div className="flex flex-col flex-1">
        <L1 className="!mt-8 uppercase !text-primary !font-normal !leading-none">
          {tag}
        </L1>
        <H3 label={title} className="!mt-4" />
        <Link href={link} className="mt-auto">
          <H4 label={t('seeMore') + ' ->'} />
        </Link>
      </div>
    </div>
  );
};
