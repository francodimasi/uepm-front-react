'use client';

import { Disclosure } from '@headlessui/react';
import { AccordionProps } from './Accordion.types';
import { MinusIcon, PlusIcon } from '../icons';
import clsx from 'clsx';
import { getClasses, getContentClasses, getTitleClasses } from './helper';

export const Accordion = ({
  items,
  size = 'md',
  className,
}: AccordionProps) => {
  return (
    <div className={clsx('mx-auto max-w-7xl', className)}>
      <div className="space-y-1 divide-y divide-gray-light">
        {items.map((item, index) => (
          <Disclosure as="div" key={index}>
            {({ open }) => (
              <div className={getClasses(open)}>
                <dt>
                  <Disclosure.Button className="flex w-full items-start justify-between text-left text-gray-dark">
                    <span className={getTitleClasses(size)}>{item.title}</span>
                    <span className="ml-6 flex h-7 items-center">
                      {open ? (
                        <MinusIcon className="h-6 w-6" aria-hidden="true" />
                      ) : (
                        <PlusIcon className="h-6 w-6" aria-hidden="true" />
                      )}
                    </span>
                  </Disclosure.Button>
                </dt>
                <Disclosure.Panel as="dd" className="mt-1 pr-2">
                  <p className={getContentClasses(size)}>{item.content}</p>
                </Disclosure.Panel>
              </div>
            )}
          </Disclosure>
        ))}
      </div>
    </div>
  );
};
