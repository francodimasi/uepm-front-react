import { Link } from '@intl/navigation';
import clsx from 'clsx';
import { PropsWithClassName } from 'ui/types/core';
import { LocaleProps, useTranslations } from 'intl';
import { P2 } from 'ui/core';

export const Terms: React.FC<PropsWithClassName & LocaleProps> = ({
  className,
  locale,
}) => {
  const t = useTranslations('legal.links');
  return (
    <Link
      href="/docs/terms"
      locale={locale}
      className={clsx('p-2 text-light', className)}
    >
      <P2 className="text-base text-light">{t('t&c')}</P2>
    </Link>
  );
};
