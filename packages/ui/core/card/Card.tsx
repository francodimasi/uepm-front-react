'use client';

import { CardProps } from './Card.types';
import { twMerge } from 'tailwind-merge';

export const Card: React.FC<CardProps> = ({
  children,
  className = '',
  onClick,
  disabled = false,
}) => {
  const displayClasses = 'flex flex-col items-center justify-center'
  const paddingClasses = 'p-3 sm:p-6 lg:p-10 2xl:p-14'
  const marginClasses = 'm-3 sm:m-6 lg:m-10 2xl:m-14'
  const borderClasses = 'bg-white rounded-xl shadow-md'

  return (
    <div
      className={twMerge(
        displayClasses,
        paddingClasses,
        marginClasses,
        borderClasses,
        (onClick && !disabled) && 'hover:border-1 hover:border-gray-medium cursor-pointer',
        disabled && 'pointer-events-none opacity-60',
        className
      )}
      onClick={onClick}
    >
      {children}
    </div>
  );
};
