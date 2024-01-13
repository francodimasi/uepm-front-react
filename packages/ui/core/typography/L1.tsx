import clsx from 'clsx';
import { TypographyProps } from './types';

export const L1: React.FC<TypographyProps> = ({ label, className }) => {
  const font = 'font-["DMSans"] font-bold text-dark';
  const sizing =
    'text-sm leading-3 sm:text-base sm:leading-4 lg:leading-6';
  const spacing = 'my-1 pb-1 sm:my-1.5 sm:pb-1.5 lg:my-3 lg:pb-3';
  return (
    <span className={clsx(`${font} ${sizing} ${spacing}`, className)}>
      {label}
    </span>
  );
};
