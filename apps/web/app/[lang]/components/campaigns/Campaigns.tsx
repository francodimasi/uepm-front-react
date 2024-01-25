'use client';
import Image from 'next/image';
import shapes from '../images/shapes.png';
import { useTranslations } from 'intl';
import { H2 } from 'ui/core';
import { CampaignsProps } from './Campaigns.types';
import { Campaign } from './Campaign';
import { useEffect, useState } from 'react';
import { Pagination } from './Pagination';

export const Campaigns: React.FC<CampaignsProps> = ({
  campaigns,
  perPage = 1,
}) => {
  const pageLength = perPage;
  const totalPages = Math.ceil(campaigns.length / pageLength);

  const [campaignsShown, setCampaignsShown] = useState(
    campaigns.slice(0, pageLength),
  );
  const [pagesCount] = useState(totalPages);
  const [page, setPage] = useState(1);

  useEffect(() => {
    const indexOfLastRecord = page * pageLength;
    const indexOfFirstRecord = indexOfLastRecord - pageLength;

    setCampaignsShown(campaigns.slice(indexOfFirstRecord, indexOfLastRecord));
  }, [page]);

  const t = useTranslations('home.campaigns');

  if (!campaigns || campaigns.length === 0) return null;

  return (
    <>
      <div className="mb-10 sm:mb-8 lg:hidden">
        <H2 label={t('title')} className="!mt-0" />
      </div>

      <div className="grid grid-flow-col grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 sm:gap-4 lg:gap-6">
        <div className="mb-10 sm:mb-8 hidden lg:block">
          <H2 label={t('title')} className="!mt-0" />
          <Image src={shapes} alt={'decorative shapes'} className="mt-24" />
        </div>
        {campaignsShown.map((campaign, index) => {
          return (
            <Campaign
              key={index}
              tag={campaign.condition}
              image={campaign.image}
              link={campaign.link}
              title={campaign.brief_title}
            />
          );
        })}
      </div>

      {pagesCount > 1 && (
        <div className="flex justify-center sm:justify-end mt-5 text-center">
          <Pagination
            currentPage={page}
            totalPages={pagesCount}
            setPage={setPage}
          />
        </div>
      )}
    </>
  );
};
