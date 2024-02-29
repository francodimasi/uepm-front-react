'use client';

import clsx from 'clsx';
import { CardProps } from './Card.types';

export const Card: React.FC<CardProps> = ({
  children,
  displayClasses = 'flex flex-col items-center justify-center',
  paddingClasses = 'p-3 sm:p-6 lg:p-10 2xl:p-14',
  marginClasses = 'm-3 sm:m-6 lg:m-10 2xl:m-14',
  borderClasses = 'bg-white rounded-xl shadow-xl',
  onClick,
  disabled = false,
}) => {
  let onclickHandlerClasses = '';
  if (onClick) {
    onclickHandlerClasses =
      'hover:border-1 hover:border-gray-medium cursor-pointer';
  }
  return (
    <div
      className={clsx(
        displayClasses,
        paddingClasses,
        marginClasses,
        borderClasses,
        onclickHandlerClasses,
        disabled && '!pointer-events-none !opacity-60',
      )}
      onClick={onClick}
    >
      {children}
    </div>
  );
};
