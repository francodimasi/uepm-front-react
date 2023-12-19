'use client';
import { SelectProp } from './List.types';
import { Fragment } from 'react';
import { CheckIcon, ChevronUpDownIcon } from '@heroicons/react/24/outline';
import { Listbox, Transition } from '@headlessui/react';
import clsx from 'clsx';

//color
//tamaño
export const Select = ({ items, selected, onChange, label }: SelectProp) => {
  const selectedItem =  items.find((item) => item.id === selected) 
  return (
    <Listbox value={selectedItem} onChange={(selectedItem) => {selectedItem.id !== selected && onChange(selectedItem.id)}}>
      {({ open }) => (
        <>
          {
            label && (
              <Listbox.Label className="block text-sm font-medium leading-6 text-gray-dark">{label}</Listbox.Label>
            )
          }
          <div className="relative mt-2">
            <Listbox.Button className="relative w-full cursor-default rounded-md bg-light py-1.5 pl-3 pr-10 text-left text-gray-dark shadow-sm ring-1 ring-inset ring-gray-dark focus:outline-none focus:ring-2 focus:ring-primary sm:text-sm sm:leading-6">
              <span className="block truncate">{selectedItem?.name}</span>
              <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                <ChevronUpDownIcon className="h-5 w-5 text-gray-dark" aria-hidden="true" />
              </span>
            </Listbox.Button>

            <Transition
              show={open}
              as={Fragment}
              leave="transition ease-in duration-100"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Listbox.Options className="absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-light py-1 text-base shadow-lg ring-1 ring-gray-dark focus:outline-none sm:text-sm">
                {items.map((item) => (
                  <Listbox.Option
                    key={item.id}
                    className={({ active }) =>
                    clsx(
                        active ? 'bg-primary text-light' : 'text-gray-dark',
                        'relative cursor-default select-none py-2 pl-8 pr-4'
                      )
                    }
                    value={item}
                  >
                    {({ selected, active }) => (
                      <>
                        <span className={clsx(selected ? 'font-semibold' : 'font-normal', 'block truncate')}>
                          {item.name}
                        </span>

                        {selected ? (
                          <span
                            className={clsx(
                              active ? 'text-white' : 'text-primary',
                              'absolute inset-y-0 left-0 flex items-center pl-1.5'
                            )}
                          >
                            <CheckIcon className="h-5 w-5" aria-hidden="true" />
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
