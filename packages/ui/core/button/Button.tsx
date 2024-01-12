import { forwardRef } from 'react';
import { ButtonProps } from './Button.types';
import { getClasses } from './helpers';

export const Button = forwardRef<any, ButtonProps>(
  (
    {
      type = 'button',
      fill = 'solid',
      shape = 'round',
      color = 'primary',
      size = 'md',
      className = '',
      disabled = false,
      onClick,
      ...props
    },
    ref,
  ) => {
    const classes = getClasses(size, fill, shape, color, className, disabled);

    return (
      <button
        type={type}
        ref={ref}
        className={classes}
        onClick={onClick}
        disabled={disabled}
        {...props}
      />
    );
  },
);
