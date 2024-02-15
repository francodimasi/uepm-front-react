import { TypographyProps } from './types';
import { twMerge } from 'tailwind-merge';

export const L1: React.FC<TypographyProps> = ({
  label,
  children,
  className,
}) => {
  const font = 'font-["DMSans"] font-bold text-dark';
  const sizing = 'text-base leading-4 lg:leading-6';
  const spacing = 'my-1 pb-1 sm:my-1.5 sm:pb-1.5 lg:my-3 lg:pb-3';
  return (
    <span className={twMerge(`${font} ${sizing} ${spacing} ${className}`)}>
      {label}
      {children}
    </span>
  );
};
