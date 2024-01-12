import React, { forwardRef } from 'react';
import { ButtonProps } from './Button.types';
import { getClasses } from './helpers';

export const Button = forwardRef<any, ButtonProps>(
  (
    {
      type = 'button',
      fill = 'solid',
      shape = 'round',
      expand = 'default',
      color = 'primary',
      size = 'md',
      className = '',
      disabled = false,
      onClick,
      children,
      ...props
    },
    ref,
  ) => {
    const childs = React.Children.count(children);
    const { buttonClasses, spanClasses } = getClasses({
      childs,
      classes: className,
      color,
      disabled,
      fill,
      shape,
      expand,
      size,
    });

    return (
      <button
        type={type}
        ref={ref}
        className={buttonClasses}
        onClick={onClick}
        disabled={disabled}
        {...props}
      >
        <span className={spanClasses}>{children}</span>
      </button>
    );
  },
);
