import clsx from 'clsx';
import { TypographyProps } from './types';

export const H4: React.FC<TypographyProps> = ({ label, children, className }) => {
  const font = 'font-["Lexend"] font-semibold text-dark';
  const sizing = 'text-2xl leading-8';
  const spacing = 'my-2 pb-2 lg:my-3 lg:pb-3';
  return (
    <span className={clsx(`${font} ${sizing} ${spacing}`, className)}>
      {label}
      {children}
    </span>
  );
};
