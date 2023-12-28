'use client';

import { Link, usePathname } from '@intl/navigation';
import { LocaleProps, useTranslations } from 'intl';
import { locales } from 'intl';

export const SwitchLocale: React.FC<LocaleProps> = () => {
  const path = usePathname();
  const t = useTranslations('locale');

  return (
    <ul>
      {locales.map((locale) => (
        <li key={locale}>
          <Link href={path as any} locale={locale}>
            {t(locale)}
          </Link>
        </li>
      ))}
    </ul>
  );
};
