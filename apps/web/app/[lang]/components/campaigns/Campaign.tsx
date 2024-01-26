import { ImageWithFallback } from '@components/utils/ImageWithFallback';
import { CampaignProps } from './Campaigns.types';
import { H3, H4, Tag } from 'ui/core';
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
        className="w-full h-auto max-w-[400px]"
        alt="Alt image"
        src={image}
        width={343}
        height={343}
      />
      <div className="flex flex-col flex-1">
        <Tag
          text={tag}
          className='text-primary font-normal leading-none mt-8 uppercase font-["DMSans"] text-base lg:leading-6 my-1 pb-1 sm:my-1.5 sm:pb-1.5 lg:my-3 lg:pb-3'
        />
        <H3 label={title} className="!mt-4" />
        <Link href={link} className="mt-auto">
          <H4 label={t('seeMore') + ' ->'} />
        </Link>
      </div>
    </div>
  );
};
