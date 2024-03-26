'use client';

import { useContext } from 'react';
import { twMerge } from 'tailwind-merge';
import { Card, H4, OfficeBuildingIcon, P2, Tag } from 'ui/core';
import { StudyItemHitProps, StudyItemProps } from './StudyItem.types';
import { AlgoliaStudy, StudyHit } from '@models/study.types';
import { StudiesBrowserContext } from '../browser/context/provider';
import { studiesBrowserActions } from '../browser/context/reducer';
import { ImageWithFallback } from '@components/utils/ImageWithFallback';
import { getUniqueSiteCountries, updatedSince } from './helpers';
import { useTranslations } from 'intl';

export const StudyItem: React.FC<StudyItemProps & StudyItemHitProps> = ({
  study,
  hit,
}) => {
  const t = useTranslations('studies.studyItem');
  const tActions = useTranslations('actions');
  const tTimeUnits = useTranslations('timeUnits');

  const {
    browserState: { selectedStudy },
    browserDispatch,
  } = useContext(StudiesBrowserContext);

  const studyItem: AlgoliaStudy = study ?? (hit as StudyHit);

  if (!studyItem) return null;

  const isSelected = selectedStudy?.id === studyItem?.id;

  const handleClick = (study: AlgoliaStudy) => {
    browserDispatch({
      type: studiesBrowserActions.SET_SELECTED_STUDY,
      selectedStudy: study,
    });
  };

  const uniqueSitesCountries = getUniqueSiteCountries(studyItem.sites);

  const lastUpdate = updatedSince(
    Date.parse(Date()),
    Date.parse(studyItem.last_update_posted_date),
    tTimeUnits,
  );

  return (
    <Card
      key={studyItem.id}
      className={twMerge(
        `bg-white rounded-lg p-3 lg:!p-6 m-0 my-3 sm:m-6 lg:m-3 2xl:m-3 shadow-none hover:border-primary ${
          isSelected && 'border-2 border-primary'
        }`,
      )}
      disabled={false}
      onClick={handleClick}
    >
      <div className="flex flex-col w-full gap-2 sm:gap-4">
        <div className="block sm:flex sm:justify-between">
          <H4
            label={studyItem.brief_title}
            className='!my-0 !py-0 font-bold font-["DMSans"] text-xl'
          />
          <div className="flex flew-row items-center gap-1 overflow-hidden">
            <P2
              label={t('available')}
              className="text-base opacity-50 !my-0 !pb-0"
            />
            {uniqueSitesCountries.map(
              (country, index) =>
                country && (
                  <ImageWithFallback
                    key={index}
                    className="h-4 w-4 rounded-full"
                    src={country.flag}
                    alt={country.name}
                    width={16}
                    height={16}
                  />
                ),
            )}
          </div>
        </div>

        <div className="flex items-baseline gap-2">
          <OfficeBuildingIcon width={16} height={11} />
          <P2
            label={`${studyItem.sites.length} ${t('sites')}`}
            className="text-base !my-0 !pb-0"
          />
        </div>
        {/* <P2 label={'Mas cercano: 7km de Buenos Aires'} className='text-base my-0'/> */}

        <Tag
          text={studyItem.overall_status}
          className='w-min py-2 px-3 my-0 font-["DMSans"] font-medium text-xs uppercase border-solid bg-stone-200 rounded-full'
        />

        <div className="flex items-baseline justify-between">
          <P2
            label={`${t('lastUpdate')} ${lastUpdate}`}
            className="text-sm opacity-50 !pb-0 !my-0"
          />
          <div>
            <P2
              label={`${tActions('seeMore')}`}
              className="font-bold text-base whitespace-nowrap !pb-0 !my-0"
            />
            <P2
              label={' →'}
              className="hidden lg:inline-block font-bold text-base!pb-0 !my-0"
            />
          </div>
        </div>
      </div>
    </Card>
  );
};
