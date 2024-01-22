import clsx from 'clsx';
import dayjs from 'dayjs';
import { DateMaskProps } from './DateMask.types';

import 'dayjs/locale/en';
import 'dayjs/locale/es';
import 'dayjs/locale/pt';

export const DateMask = ({
  date,
  mask = 'DD/MM/YYYY',
  locale = 'es',
  className,
}: DateMaskProps) => {
  return (
    <span className={clsx('text-dark', className)}>
      {dayjs(date).locale(locale).format(mask)}
    </span>
  );
};
