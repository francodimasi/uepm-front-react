'use client';

import { PropsWithChildren } from 'react';
import cx from 'classnames';

type LoadingButtonProps = {
  onClick?: () => void;
  size?: 'small' | 'regular' | 'medium' | 'large';
  outlined?: boolean;
  icon?: boolean;
  type?: 'button' | 'reset' | 'submit';
  disabled?: boolean;
  color?: 'primary' | 'secondary' | 'light';
};

export const LandingButton = ({
  children,
  size = 'regular',
  icon = true,
  outlined = false,
  type = 'button',
  disabled = false,
  color = 'primary',
  className,
  onClick,
}: PropsWithChildren<LoadingButtonProps> &
  React.HTMLAttributes<HTMLButtonElement>) => {
  const sizeClasses = cx({
    'py-2 px-3': size === 'small',
    'py-4 px-5': size === 'medium',
    'py-5 px-6': size === 'regular',
    'py-6 px-7': size === 'large',
  });

  const customStyles = cx({
    'border-2 bg-transparent text-light': outlined,
  });

  const colorStyles = cx({
    'bg-primary hover:bg-primary-dark text-light':
      color === 'primary' && !outlined,
    'bg-secondary hover:bg-light': color === 'secondary' && !outlined,
    'hover:bg-primary border-primary text-primary hover:text-light':
      color === 'primary' && outlined,
    'hover:bg-secondary border-secondary text-secondary hover:text-dark':
      color === 'secondary' && outlined,
    'hover:bg-light border-light text-light hover:text-dark':
      color === 'light' && outlined,
  });

  return (
    <button
      className={`table group ${sizeClasses} ${colorStyles} font-bold transition-all disabled:opacity-20 disabled:pointer-events-none ${customStyles} ${className}`}
      onClick={onClick}
      disabled={disabled}
      type={type}
    >
      <div className="flex items-center justify-between">
        <span>{children}</span>
        {icon && <span className={'pl-5 material-icons'}>east</span>}
      </div>
    </button>
  );
};
