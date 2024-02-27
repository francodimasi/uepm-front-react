'use client';

import { RadioGroupProps } from './RadioGroup.types';
import { twMerge } from 'tailwind-merge';
import { SetStateAction, useState } from 'react';
import { RadioButtonIcon } from 'ui/core/icons';

/**
 * Checkbox group component
 *
 * @items {[{id: string | number, title: string , description: string}]} Object array including id, title and description (optional)
 * @onchage { (id: any) => void } OPTIONAL You can pass a function triggered on selected item change
 * @selected {string | number} OPTIONAL The id of the selected item
 * @disposition {inline | block } default block. Show component inilne or in a block way
 * @orientation {horizontal | vertical } default vertical. Show description below or inline
 * @name {string} Checkbox group name
 * @circleClassName {string} You can override radio button circle classes here
 * @titleClassName {string} You can override title classes here
 * @descriptionClassName {string} You can override description classes here
 */

export const RadioGroup = ({
  items,
  selected: selectedParam,
  onChange,
  orientation = 'vertical',
  disposition = 'block',
  name = 'radio',
  circleClassName = 'h-5 w-5',
  titleClassName = 'ms-2 text-base font-normal text-dark font font-["DMSans"] leading-normal',
  descriptionClassName = 'ms-2 text-sm text-gray-dark',
}: RadioGroupProps) => {
  const [selected, setSelected] = useState(selectedParam);

  const handleChange = (event: {
    target: { id: SetStateAction<string | number | undefined> };
  }) => {
    setSelected(event.target.id);
    if (onChange) onChange(selected);
  };

  return (
    <div
      className={twMerge(
        `space-y-5 ${
          disposition === 'inline'
            ? 'flex items-center space-x-6 space-y-0'
            : 'block'
        }`,
      )}
    >
      {items.map((item) => (
        <div key={item.id} className="relative flex items-baseline">
          <label
            className="cursor-pointer flex justify-center"
            htmlFor={item.id.toString()}
          >
            <input
              id={item.id.toString()}
              aria-describedby={`${item.id}-description`}
              name={name}
              type="radio"
              defaultChecked={item.id === selectedParam}
              className="bg-transparent border-0 cursor-pointer focus:ring-inset peer w-full"
              onChange={handleChange}
            />
            <span
              className={twMerge(
                `${circleClassName} absolute left-0 opacity-0 peer-checked:opacity-100`,
              )}
            >
              <RadioButtonIcon checked className="w-full h-full scale-110" />
            </span>
            <span
              className={twMerge(
                `${circleClassName} absolute left-0 opacity-100 peer-checked:opacity-0`,
              )}
            >
              <RadioButtonIcon className="w-full h-full scale-110" />
            </span>
          </label>
          <div className="leading-6 ms-3">
            <label
              htmlFor={item.id.toString()}
              className={twMerge(`cursor-pointer ${titleClassName}`)}
            >
              {item.title}
              {orientation === 'horizontal' ? (
                <span
                  id={`${item.id.toString()}-description`}
                  className={twMerge(`${descriptionClassName}`)}
                >
                  {item.description}
                </span>
              ) : (
                <p
                  id={`${item.id.toString()}-description`}
                  className={descriptionClassName}
                >
                  {item.description}
                </p>
              )}
            </label>
          </div>
        </div>
      ))}
    </div>
  );
};
