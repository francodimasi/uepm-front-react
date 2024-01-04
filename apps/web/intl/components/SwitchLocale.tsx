'use client';

import { useMemo } from 'react';
import { usePathname, useRouter } from '@intl/navigation';
import { useParams } from 'next/navigation';
import { LocaleProps, useTranslations, locales } from 'intl';
import { Select } from 'ui/core';

export const SwitchLocale: React.FC<LocaleProps> = ({ locale }) => {
  const pathname = usePathname();
  const router = useRouter();
  const params = useParams();
  const t = useTranslations('locale');

  const items = useMemo(() => {
    return locales.map((locale) => ({ id: locale, name: t(locale) }));
  }, [locale]);

  const onChangeLanguage = (id: string) => {
    router.replace(
      {
        pathname,
        params: params as any,
      },
      { locale: id },
    );
  };

  return (
    <Select
      items={items}
      selected={locale}
      onChange={onChangeLanguage}
      className="max-w-xs"
      color="light"
      menuPlacement="top"
    />
  );
};
