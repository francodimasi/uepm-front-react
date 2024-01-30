import { ImageWithFallback } from '@components/utils/ImageWithFallback';
import { CampaignProps } from './Campaigns.types';
import { H3, L1, Tag } from 'ui/core';
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
      <div className="flex flex-col flex-1 lg:mx-0">
        <Tag
          text={tag}
          className='text-primary-dark font-medium leading-none mt-3 uppercase font-["DMSans"] lg:leading-6 py-1 sm:py-1.5 lg:py-3'
        />
        <H3 className="!mt-4 !pb-2 !text-2xl !leading-7">
          <span className="line-clamp-2">{title}</span>
        </H3>
        <Link href={link}>
          <L1 label={`${t('seeMore')} →`} />
        </Link>
      </div>
    </div>
  );
};
