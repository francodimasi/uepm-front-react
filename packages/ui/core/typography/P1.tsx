import clsx from 'clsx';
import { TypographyProps } from './types';

export const P1: React.FC<TypographyProps> = ({
  label,
  children,
  className,
}) => {
  const font = 'font-["DMSans"] font-normal text-dark';
  const sizing =
    'text-base leading-5 sm:text-lg sm:leading-7 lg:text-xl lg:leading-8';
  const spacing = 'my-1 pb-1 sm:my-1.5 sm:pb-1.5 lg:my-3 lg:pb-3';
  return (
    <span className={clsx(`${font} ${sizing} ${spacing}`, className)}>
      {label}
      {children}
    </span>
  );
};
