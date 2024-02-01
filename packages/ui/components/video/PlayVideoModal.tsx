'use client';

import { Fragment } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import { PlayVideoProps } from './PlayVideoModal.types';

export const PlayVideoModal: React.FC<PlayVideoProps> = ({
  title,
  videoLink,
  open,
  onClose,
}) => {
  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog as="div" className="relative z-10" onClose={onClose}>
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
        <div className="fixed inset-0 flex z-10 w-screen text-center items-center justify-center p-2">
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
            <Dialog.Panel className="relative p-0 transform overflow-hidden rounded-sm bg-light shadow-2xl transition-all sm:my-24 w-full min-h-[300px] sm:min-h-[400px] max-w-3xl">
              <div className="text-center">
                {title && (
                  <Dialog.Title
                    as="h3"
                    className="text-lg font-semibold leading-6 text-dark pb-4"
                  >
                    {title}
                  </Dialog.Title>
                )}
                <iframe
                  src={videoLink}
                  allowFullScreen
                  className="w-full min-h-[300px] sm:min-h-[400px] rounded-sm"
                />
              </div>
            </Dialog.Panel>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition.Root>
  );
};
