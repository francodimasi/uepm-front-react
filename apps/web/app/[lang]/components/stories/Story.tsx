'use client';

import { useState } from 'react';
import { Avatar, Button, EllipsisIcon, Tag } from 'ui/core';
import { PlayVideoModal } from 'ui/components';
import { StoryProp } from './Stories.types';
import { PlayIcon } from './icons';
import clsx from 'clsx';

export const Story: React.FC<StoryProp> = ({
  tag,
  patientName,
  image,
  description,
  videoLink,
}) => {
  const [isVideoOpen, setIsVideoOpen] = useState(false);

  return (
    <div
      className={clsx(
        'flex flex-row justify-center items-center rounded-full',
        {
          'bg-transparent sm:bg-gray-medium sm:flex-1': description,
        },
      )}
    >
      {description && (
        <div className="hidden sm:flex flex-col pe-3 ps-10 py-5 md:ps-12 md:py-8 lg:ps-16 lg:py-10 items-start justify-center flex-1">
          <span className="pb-4 text-base lg:text-base 2xl:text-base 3xl:text-lg">{description}</span>
          <div className="flex items-center">
            <Tag
              text={patientName}
              className="uppercase text-primary-dark font-medium text-xs sm:text-sm"
            />
            <span className="p-1">
              <EllipsisIcon color="primaryDark" />
            </span>
            <Tag
              text={tag}
              className="uppercase text-primary-dark font-medium text-xs sm:text-sm"
            />
          </div>
        </div>
      )}
      <div className="relative flex md:hidden">
        {videoLink && (
          <Button
            onClick={() => setIsVideoOpen(true)}
            color="dark"
            expand="none"
            size="xs"
            className="absolute z-10 left-1/2 top-3/4 transform -translate-x-1/2 -translate-y-1/2 !border-0"
          >
            <span className="text-white">{patientName}</span>
            <PlayIcon />
          </Button>
        )}
        <Avatar imageUrl={image} alt={patientName} size="3xl" />
      </div>
      <div className="relative hidden md:flex lg:hidden">
        {videoLink && (
          <Button
            onClick={() => setIsVideoOpen(true)}
            color="dark"
            expand="none"
            size="sm"
            className="absolute z-10 left-1/2 top-3/4 transform -translate-x-1/2 -translate-y-1/2 !border-0"
          >
            <span className="text-white">{patientName}</span>
            <PlayIcon />
          </Button>
        )}
        <Avatar imageUrl={image} alt={patientName} size="4xl" />
      </div>
      <div className="relative hidden lg:flex">
        {videoLink && (
          <Button
            onClick={() => setIsVideoOpen(true)}
            color="dark"
            expand="none"
            className="absolute z-10 left-1/2 top-3/4 transform -translate-x-1/2 -translate-y-1/2 !border-0"
          >
            <span className="text-white">{patientName}</span>
            <PlayIcon />
          </Button>
        )}
        <Avatar imageUrl={image} alt={patientName} size="4xl" />
      </div>
      <PlayVideoModal
        videoLink={videoLink}
        open={isVideoOpen}
        onClose={() => setIsVideoOpen(false)}
      />
    </div>
  );
};
