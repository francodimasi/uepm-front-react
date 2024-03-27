'use client';

import { Fragment } from 'react';
import { ModalProps } from './Modal.types';
import { Dialog, Transition } from '@headlessui/react';
import { twMerge } from 'tailwind-merge';
import { CloseIcon } from 'ui/core';

export const Modal: React.FC<ModalProps> = ({
  children,
  className,
  title,
  open,
  showClose = false,
  backdropDismiss = true,
  onClose,
}) => (
  <Transition.Root show={open} as={Fragment} appear={true}>
    <Dialog
      as="div"
      className="relative z-[9999]"
      onClose={backdropDismiss ? onClose : () => {}}
    >
      <Transition.Child
        as={Fragment}
        enter="ease-out duration-300"
        enterFrom="opacity-0"
        enterTo="opacity-100"
        leave="ease-in duration-200"
        leaveFrom="opacity-100"
        leaveTo="opacity-0"
      >
        <div className="fixed inset-0 bg-dark/30 bg-opacity-75 transition-opacity" />
      </Transition.Child>

      <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
        <div className="flex min-h-full items-end justify-center p-0 pb-8 sm:pb-0 text-center sm:items-center">
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            enterTo="opacity-100 translate-y-0 sm:scale-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100 translate-y-0 sm:scale-100"
            leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
          >
            <Dialog.Panel
              className={twMerge(
                'relative transform overflow-scroll [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none] max-h-[70vh] rounded-lg bg-light px-4 pb-4 pt-5 text-left shadow-xl transition-all sm:my-8 w-full lg:max-w-3xl xl:max-w-5xl 2xl:max-w-7xl sm:p-6',
                className,
              )}
            >
              {showClose && (
                <span
                  onClick={onClose}
                  className="w-full flex justify-end cursor-pointer"
                >
                  <CloseIcon height={19} width={19} />
                </span>
              )}
              {title && (
                <div className="mt-3 text-center sm:mt-5">
                  <Dialog.Title
                    as="h3"
                    className="text-xl font-semibold leading-6 text-dark"
                  >
                    {title}
                  </Dialog.Title>
                </div>
              )}
              {children}
            </Dialog.Panel>
          </Transition.Child>
        </div>
      </div>
    </Dialog>
  </Transition.Root>
);
