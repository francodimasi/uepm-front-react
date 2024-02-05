'use client';

import shapes from 'public/images/home/shapes.png';
import { useTranslations } from 'intl';
import { H2 } from 'ui/core';
import { CampaignsProps } from './Campaigns.types';
import { Campaign } from './Campaign';
import { useEffect, useMemo, useState } from 'react';
import { Pagination } from './Pagination';
import { ImageWithFallback } from '@components/utils/ImageWithFallback';

export const CampaignsList: React.FC<CampaignsProps> = ({
  campaigns,
  perPage = 1,
}) => {
  const totalPages = useMemo(
    () => Math.ceil(campaigns.length / perPage),
    [perPage, campaigns.length],
  );

  const [campaignsShown, setCampaignsShown] = useState(
    campaigns.slice(0, perPage),
  );
  const [page, setPage] = useState(1);

  useEffect(() => {
    const indexOfLastRecord = page * perPage;
    const indexOfFirstRecord = indexOfLastRecord - perPage;

    setCampaignsShown(campaigns.slice(indexOfFirstRecord, indexOfLastRecord));
  }, [page]);

  const t = useTranslations('home.campaigns');

  if (!campaigns || campaigns.length === 0) return null;

  return (
    <div className="flex flex-col lg:mt-10">
      <H2 label={t('title')} className="lg:hidden" />
      <div className="grid grid-flow-col grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 sm:gap-4 lg:gap-6">
        <div className="mb-10 sm:mb-8 hidden lg:block">
          <H2 label={t('title')} className="xl:text-5xl 2xl:max-w-xs" />
          <ImageWithFallback
            src={shapes}
            alt="shapes"
            style={{
              width: 'auto',
              height: 'auto',
            }}
            className="aspect-square mt-16"
          />
        </div>
        {campaignsShown.map((campaign, index) => (
          <Campaign
            key={index}
            tag={campaign.condition}
            image={campaign.image}
            link={campaign.link}
            title={campaign.brief_title}
          />
        ))}
      </div>

      {totalPages > 1 && (
        <div className="flex justify-center sm:justify-end mt-8 text-center">
          <Pagination
            currentPage={page}
            totalPages={totalPages}
            setPage={setPage}
          />
        </div>
      )}
    </div>
  );
};
