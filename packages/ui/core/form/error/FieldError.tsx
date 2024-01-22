import clsx from 'clsx';
import { PropsWithClassName } from '../../../types/core';

type FieldErrorProps = PropsWithClassName & {
  message: string;
};

export const FieldError = ({ message, className }: FieldErrorProps) => {
  if (!message) return null;
  return (
    <span
      className={clsx('block pt-1 sm:pt-2 text-base text-error', className)}
    >
      {message}
    </span>
  );
};
