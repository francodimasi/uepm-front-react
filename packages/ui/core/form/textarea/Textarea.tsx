import { forwardRef } from 'react';
import clsx from 'clsx';
import { FormTeaxtAreaProps } from './types';

export const Textarea = forwardRef<any, FormTeaxtAreaProps>(
  (
    { name, placeholder, rows = 3, value, disabled, className, ...rest },
    ref,
  ) => {
    return (
      <textarea
        ref={ref}
        name={name}
        id={name}
        className={clsx(
          'block w-full bg-transparent border-0 border-b-1 border-gray-medium focus:border-gray-dark focus:ring-0 pe-4 py-4 text-dark placeholder:text-gray-dark text-base lg:text-lg leading-5 lg:leading-6 cursor-text outline-none',
          {
            'cursor-auto placeholder:text-gray-light border-gray-light':
              disabled,
          },
          className,
        )}
        rows={rows}
        placeholder={placeholder}
        value={value}
        disabled={disabled}
        {...rest}
      />
    );
  },
);
