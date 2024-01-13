import clsx from 'clsx';
import { TypographyProps } from './types';

export const H1: React.FC<TypographyProps> = ({ label, className }) => {
  const font = 'font-["Lexend"] font-semibold text-dark';
  const sizing =
    'text-4xl leading-10 sm:text-5xl sm:leading-[64px] lg:text-6xl lg:leading-[72px] xl:text-7xl xl:leading-[80px]';
  const spacing =
    'my-4 pb-8 sm:my-5 sm:pb-10 lg:my-8 lg:pb-16 xl:my-10 xl:pb-20';
  return (
    <span className={clsx(`${font} ${sizing} ${spacing}`, className)}>
      {label}
    </span>
  );
};
