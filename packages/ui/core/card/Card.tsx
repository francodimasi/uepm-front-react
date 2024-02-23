import clsx from 'clsx';
import { CardProps } from './Card.types';

export const Card: React.FC<CardProps> = ({ children }) => {
  const sizeClasses = 'w-full max-h-min';
  const displayClasses = 'flex flex-col items-center justify-center';
  const paddingClasses = 'p-3 sm:p-6 lg:p-10 2xl:p-14';
  return (
    <div
      className={clsx(
        sizeClasses,
        displayClasses,
        paddingClasses,
        'bg-white rounded-xl shadow-xl',
      )}
    >
      {children}
    </div>
  );
};
