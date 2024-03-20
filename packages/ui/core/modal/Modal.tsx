'use client';

import { Fragment } from 'react';
import { ModalProps } from './Modal.types';
import { Dialog, Transition } from '@headlessui/react';
import { twMerge } from 'tailwind-merge';
import { CloseIcon } from 'ui/core';

export const Modal: React.FC<ModalProps> = ({
  children,
  className = '',
  title,
  open,
  onClose,
}) => {
  return (
    <Transition
      show={open}
      as={Fragment}
      appear={true}
      enter="ease-out duration-300"
      enterFrom="opacity-0"
      enterTo="opacity-100"
      leave="ease-in duration-200"
      leaveFrom="opacity-100"
      leaveTo="opacity-0"
    >
      <Dialog as="div" className="relative z-[9999]" onClose={() => {}}>
        {/* The backdrop, rendered as a fixed sibling to the panel container */}
        <div className="fixed inset-0 bg-dark/30" aria-hidden="true" />

        {/* Full screen container to center Dialog */}
        <div className="fixed inset-0 flex z-10 w-screen text-center items-center justify-center">
          {/* The actual dialog panel */}
          <Dialog.Panel
            className={twMerge(
              '[&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none] max-h-[70vh] relative p-4 sm:p-8 transform overflow-scroll rounded-sm bg-light shadow-2xl w-full',
              className,
            )}
          >
            <div className="w-full flex">
              <span onClick={onClose} className="ml-auto">
                <CloseIcon height={19} width={19} />
              </span>
            </div>
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
        </div>
      </Dialog>
    </Transition>
  );
};
