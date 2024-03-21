'use client';

import { useContext } from 'react';
import { twMerge } from 'tailwind-merge';
import { Card } from 'ui/core';
// import { useTranslations } from 'intl';
import { StudyItemHitProps, StudyItemProps } from './StudyItem.types';
import { AlgoliaStudy, StudyHit } from '@models/study.types';
import { StudiesBrowserContext } from '../browser/context/provider';
import { studiesBrowserActions } from '../browser/context/reducer';

export const StudyItem: React.FC<StudyItemProps & StudyItemHitProps> = ({
  study,
  hit,
}) => {
  // const t = useTranslations('studies.studyItem');
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
      Study item
    </Card>
  );
};
