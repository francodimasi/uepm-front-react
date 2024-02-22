'use client';

import { RadioGroupProps } from './RadioGroup.types';
import { twMerge } from 'tailwind-merge';

export const RadioGroup = ({
  items,
  selected,
  onChange,
  radioDisposition = 'vertical',
  name = 'radio',
  circleClassName = 'border-gray-300 text-indigo-600 focus:ring-indigo-600',
  titleClassName = 'text-sm font-medium text-gray-900',
  descriptionClassName = 'text-sm text-gray-500'
}: RadioGroupProps) => {

  const inputClass = 'h-4 w-4';

  return (
    <div className="space-y-5">
        {items.map((item) => (
          <div key={item.id} className="relative flex items-start">
            <div className="flex h-6 items-center">
              <input
                id={item.id.toString()}
                aria-describedby={`${item.id}-description`}
                name={name}
                type="radio"
                defaultChecked={item.id === selected}
                className= {twMerge(`${inputClass} ${circleClassName}`)}
                onChange={(e) => onChange(e.target.value)}
              />
            </div>
            <div className="ml-3 leading-6">
              <label htmlFor={item.id.toString()} className={titleClassName}>
                {item.title}
              </label>
              {radioDisposition === 'vertical' ? (
                <p id={`${item.id.toString()}-description`} className={descriptionClassName}>
                  {item.description}
                </p>
              ) : (
                <span id={`${item.id.toString()}-description`} className={descriptionClassName}>
                  {item.description}
                </span>
              )}
              
            </div>
          </div>
        ))}
      </div>
  );
};
