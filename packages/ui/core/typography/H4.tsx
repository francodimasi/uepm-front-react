import clsx from 'clsx';
import { TypographyProps } from './types';

export const H4: React.FC<TypographyProps> = ({ label, className }) => {
  const font = 'font-["Lexend"] font-semibold text-dark';
  const sizing =
    'text-lg leading-5 sm:text-lg sm:leading-6 lg:text-xl lg:leading-7 xl:text-2xl xl:leading-8';
  const spacing =
    'my-2 pb-3 sm:my-2.5 sm:pb-5 lg:my-3.5 lg:pb-6 xl:my-4 xl:pb-10';
  return (
    <span className={clsx(`${font} ${sizing} ${spacing}`, className)}>
      {label}
    </span>
  );
};
