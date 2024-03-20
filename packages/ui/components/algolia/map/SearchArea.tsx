'use client';

import { MapSearchAreaProps } from './Map.types';
import { Button } from '../../../core';
import { useTranslations, LocaleProps } from 'intl';

export default function SearchArea({
  disabled,
  onClick,
}: MapSearchAreaProps & LocaleProps) {
  const t = useTranslations('sites.browser');

  return (
    <div className="absolute z-[1000] justify-end flex mt-3 w-full">
      <Button
        fill="solid"
        size="sm"
        className="!py-2 me-5"
        disabled={disabled}
        onClick={onClick}
      >
        {t('searchInThisArea')}
      </Button>
    </div>
  );
}
