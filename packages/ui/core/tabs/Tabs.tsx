import { twMerge } from 'tailwind-merge';
import { TabsProps } from './Tabs.types';
import { getClasses } from './helpers';
import clsx from 'clsx';

export const Tabs = ({
  items,
  selected,
  onChange,
  orientation = 'horizontal',
  size = 'md',
  className,
}: TabsProps) => {
  return (
    <div className={twMerge(`block border-b border-gray-light ${className}`)}>
      <nav
        className={clsx(
          'flex',
          orientation === 'horizontal'
            ? '-mb-px space-x-8'
            : 'flex-col -mb-px space-7-8',
        )}
      >
        {items.map((item) => (
          <div
            key={item.name}
            className={clsx(
              'flex whitespace-nowrap border-b-2 py-4 px-1 text-sm font-["Lexend"] font-medium cursor-pointer',
              getClasses({ size, selected: item.id === selected }),
            )}
            onClick={() => onChange(item.id)}
          >
            {item.name}
          </div>
        ))}
      </nav>
    </div>
  );
};
