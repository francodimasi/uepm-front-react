'use client';

import { MapSearchAreaProps } from './Map.types';
import { Button } from '../../../core';
import { useTranslations, LocaleProps } from 'intl';

export default function SearchArea({
  disabled,
  className,
  onClick,
}: MapSearchAreaProps & LocaleProps) {
  const t = useTranslations('sites.browser');

  return (
    <div className={className}>
      <Button
        fill="solid"
        size="xs"
        color="dark"
        className="!py-2"
        disabled={disabled}
        onClick={onClick}
      >
        {t('searchInThisArea')}
      </Button>
    </div>
  );
}
