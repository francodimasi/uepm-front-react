import { TypographyProps } from './types';
import { twMerge } from 'tailwind-merge';

export const H3: React.FC<TypographyProps> = ({
  label,
  children,
  className,
}) => {
  const font = 'font-["Lexend"] font-semibold text-dark';
  const sizing =
    'text-2xl leading-6 sm:text-3xl sm:leading-8 lg:text-4xl lg:leading-10 xl:text-5xl xl:leading-[64px]';
  const spacing =
    'my-2.5 pb-4 sm:my-3 sm:pb-6 lg:my-4 lg:pb-8 xl:my-6 xl:pb-12';
  return (
    <span className={twMerge(`${font} ${sizing} ${spacing} ${className}`)}>
      {label}
      {children}
    </span>
  );
};
