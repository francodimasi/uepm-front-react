import { TypographyProps } from './types';
import { twMerge } from 'tailwind-merge';

export const H2: React.FC<TypographyProps> = ({
  label,
  children,
  className,
}) => {
  const font = 'font-["Lexend"] font-semibold text-dark';
  const sizing =
    'text-3xl leading-8 sm:text-4xl sm:leading-10 lg:text-5xl lg:leading-[64px] xl:text-6xl xl:leading-[72px]';
  const spacing =
    'my-3.5 pb-6 sm:my-4 sm:pb-8 lg:my-5 lg:pb-10 xl:my-8 xl:pb-16';
  return (
    <span className={twMerge(`${font} ${sizing} ${spacing} ${className}`)}>
      {label}
      {children}
    </span>
  );
};
