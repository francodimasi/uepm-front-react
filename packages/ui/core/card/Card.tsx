import clsx from 'clsx';
import { CardProps } from './Card.types';

export const Card: React.FC<CardProps> = ({ children }) => {
  const displayClasses = 'flex flex-col items-center justify-center';
  const paddingClasses = 'p-3 sm:p-6 lg:p-10 2xl:p-14';
  const marginClasses = 'm-3 sm:m-6 lg:m-10 2xl:m-14';
  return (
    <div
      className={clsx(
        displayClasses,
        paddingClasses,
        marginClasses,
        'bg-white rounded-xl shadow-xl',
      )}
    >
      {children}
    </div>
  );
};
