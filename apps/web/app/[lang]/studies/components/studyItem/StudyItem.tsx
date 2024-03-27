'use client';

import { useContext, useMemo } from 'react';
import { twMerge } from 'tailwind-merge';
import { Card, H4, L1, OfficeBuildingIcon, P2, Tag } from 'ui/core';
import { StudyItemHitProps, StudyItemProps } from './StudyItem.types';
import { AlgoliaStudy, StudyHit } from '@models/study.types';
import { StudiesBrowserContext } from '../browser/context/provider';
import { studiesBrowserActions } from '../browser/context/reducer';
import { ImageWithFallback } from '@components/utils/ImageWithFallback';
import { getUniqueSiteCountries } from './helpers';
import { useTranslations } from 'intl';
import { updatedSince } from 'utils';

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
  const uniqueSitesCountries = useMemo(
    () => getUniqueSiteCountries(studyItem.sites),
    [studyItem.sites],
  );
  if (!studyItem) return null;

  const isSelected = selectedStudy?.id === studyItem?.id;

  const handleClick = (study: AlgoliaStudy) => {
    browserDispatch({
      type: studiesBrowserActions.SET_SELECTED_STUDY,
      selectedStudy: study,
    });
  };

  const lastUpdate = updatedSince(
    Date.parse(Date()),
    Date.parse(studyItem.last_update_posted_date),
    tTimeUnits,
  );

  return (
    <Card
      key={studyItem.id}
      className={twMerge(
        `bg-white rounded-lg p-3 lg:!p-6 m-0 my-3 sm:m-6 lg:m-3 2xl:m-3 shadow-none ${
          isSelected && 'border-2 border-primary'
        }`,
      )}
      onClick={handleClick}
    >
      <div className="flex flex-col w-full gap-2 sm:gap-4">
        <div className="block sm:flex sm:justify-between">
          {studyItem.brief_title && (
            <H4
              label={studyItem.brief_title}
              className='!my-0 !py-0 font-bold font-["DMSans"] text-2xl/7 xl:text-2xl'
            />
          )}
          {uniqueSitesCountries.length > 0 && (
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
          )}
        </div>

        {studyItem.sites.length > 0 && (
          <div className="flex items-baseline gap-2">
            <OfficeBuildingIcon width={16} height={11} />
            <P2
              label={`${studyItem.sites.length} ${t('sites')}`}
              className="text-base !my-0 !pb-0"
            />
          </div>
        )}
        <Tag
          text={studyItem.overall_status}
          className='w-min py-2 px-3 my-0 font-["DMSans"] font-medium text-xs uppercase border-solid bg-stone-200 rounded-full'
        />

        <div className="flex items-baseline justify-between">
          <P2
            label={`${t('lastUpdate')} ${lastUpdate}`}
            className="text-sm/6 xl:text-xs/6 opacity-50 !pb-0 !my-0"
          />
          <div>
            <L1
              label={`${tActions('seeMore')}`}
              className="block sm:hidden font-bold text-base/4 whitespace-nowrap !pb-0 !my-0"
            />
            <L1
              label={`${tActions('seeMore')} →`}
              className="hidden sm:block font-bold text-base whitespace-nowrap !pb-0 !my-0"
            />
          </div>
        </div>
      </div>
    </Card>
  );
};
