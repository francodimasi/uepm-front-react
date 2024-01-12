import Link from 'next/link';
import clsx from 'clsx';
import { PropsWithClassName } from 'ui/types/core';
import { useTranslations } from 'intl';

export const Terms: React.FC<PropsWithClassName> = ({ className }) => {
  const t = useTranslations('legal.links');
  return (
    <Link href="" className={clsx('p-2 text-light', className)}>
      {t('t&c')}
    </Link>
  );
};
