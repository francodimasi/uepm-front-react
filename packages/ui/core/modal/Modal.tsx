'use client';

import { Fragment } from 'react';
import { ModalProps } from './Modal.types';
import { Dialog, Transition } from '@headlessui/react';
import { twMerge } from 'tailwind-merge';

export const Modal: React.FC<ModalProps> = ({
  children,
  className = '',
  title,
  open,
  onClose,
}) => {
  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog as="div" className="relative z-[9999]" onClose={onClose}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
        </Transition.Child>

        {/* The backdrop, rendered as a fixed sibling to the panel container */}
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-dark/30" aria-hidden="true" />
        </Transition.Child>

        {/* Full screen container to center Dialog */}
        <div className="fixed inset-0 flex z-10 w-screen text-center items-center justify-center">
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            enterTo="opacity-100 translate-y-0 sm:scale-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100 translate-y-0 sm:scale-100"
            leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
          >
            {/* The actual dialog panel */}
            <Dialog.Panel
              className={twMerge(
                '[&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none] max-h-[70vh] relative p-4 sm:p-8 transform overflow-scroll rounded-sm bg-light shadow-2xl transition-all w-full',
                className,
              )}
            >
              {title && (
                <div className="text-center">
                  <Dialog.Title
                    as="h3"
                    className="text-lg font-semibold leading-6 text-dark"
                  >
                    {title}
                  </Dialog.Title>
                </div>
              )}
              {children}
            </Dialog.Panel>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition.Root>
  );
};
