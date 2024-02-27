import clsx from 'clsx';
import { CardProps } from './Card.types';

export const Card: React.FC<CardProps> = ({ children }) => {
  const sizeClasses = 'w-full max-h-min';
  const displayClasses = 'flex flex-col items-center justify-center';
  return (
    <div
      className={clsx(
        sizeClasses,
        displayClasses,
        'bg-white rounded-xl shadow-xl',
      )}
    >
      {children}
    </div>
  );
};
