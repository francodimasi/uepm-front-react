'use client';

import { Fragment } from 'react';
import { Listbox, Transition } from '@headlessui/react';
import clsx from 'clsx';
import { SelectProps } from './Select.types';
import { CheckOutlineIcon, ChevronDownIcon } from 'ui/core/icons';

export const Select = ({
  items,
  selected,
  onChange,
  label,
  color = 'dark',
  className,
  menuPlacement = 'bottom',
}: SelectProps) => {
  const selectedItem = items.find((item) => item.id === selected);

  return (
    <Listbox
      value={selectedItem}
      onChange={(selectedItem) => {
        selectedItem.id !== selected && onChange(selectedItem.id);
      }}
    >
      {({ open }) => (
        <>
          {label && (
            <Listbox.Label className="block text-sm font-medium leading-6 ">
              {label}
            </Listbox.Label>
          )}
          <div className="relative mt-2">
            <Listbox.Button
              className={clsx(
                className,
                `relative w-full cursor-default py-3.5 pl-3 pr-10 ms-1 text-left text-${color} font-semibold shadow-sm border-1 border-${color} focus:outline-none focus:border-2 focus:border-primary sm:text-sm sm:leading-6`,
              )}
            >
              <span className="block truncate">{selectedItem?.name}</span>
              <span className="pointer-events-none absolute text-dark inset-y-0 right-0 flex items-center pr-2">
                <div className="h-5 w-5" aria-hidden="true">
                  <ChevronDownIcon color={color} />
                </div>
              </span>
            </Listbox.Button>
            <Transition
              show={open}
              as={Fragment}
              leave="transition ease-in duration-100"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Listbox.Options
                className={clsx(
                  className,
                  menuPlacement === 'bottom'
                    ? 'mt-2 top-full'
                    : 'mb-2 bottom-full',
                  'absolute ms-1 z-10 mt-1 max-h-60 w-full overflow-auto bg-light text-dark py-1 text-base shadow-lg ring-1 ring-gray-dark focus:outline-none sm:text-sm',
                )}
              >
                {items.map((item) => (
                  <Listbox.Option
                    key={item.id}
                    className={({ active }) =>
                      clsx(
                        active ? 'bg-primary text-light' : 'text-gray-dark',
                        'relative cursor-default select-none py-2 pl-8 pr-4',
                      )
                    }
                    value={item}
                  >
                    {({ selected, active }) => (
                      <>
                        <span
                          className={clsx(
                            selected ? 'font-semibold' : 'font-normal',
                            'block truncate',
                          )}
                        >
                          {item.name}
                        </span>

                        {selected ? (
                          <span
                            className={clsx(
                              active ? 'text-white' : 'text-primary',
                              'absolute inset-y-0 left-0 flex items-center pl-1.5',
                            )}
                          >
                            <div className="h-5 w-5 " aria-hidden="true">
                              <CheckOutlineIcon />
                            </div>
                          </span>
                        ) : null}
                      </>
                    )}
                  </Listbox.Option>
                ))}
              </Listbox.Options>
            </Transition>
          </div>
        </>
      )}
    </Listbox>
  );
};
