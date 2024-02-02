'use client';

import { useState } from 'react';
import { Avatar, Button, EllipsisIcon, Tag } from 'ui/core';
import { PlayVideoModal } from 'ui/components';
import { StoryProp } from './Stories.types';
import { PlayIcon } from './icons';

export const Story: React.FC<StoryProp> = ({
  tag,
  patientName,
  image,
  description,
  videoLink,
}) => {
  const [isVideoOpen, setIsVideoOpen] = useState(false);

  return (
    <div className="flex flex-row justify-center items-center rounded-full bg-gray-medium">
      {description && (
        <div className="hidden sm:flex flex-col mr-3 pl-20 items-center justify-center w-min h-64 gap-6 py-12">
          <span>{description}</span>
          <div className="flex items-center">
            <Tag
              text={patientName}
              className="uppercase text-primary-dark font-medium text-sm"
            />
            <span className="p-1">
              <EllipsisIcon color="primaryDark" />
            </span>
            <Tag
              text={tag}
              className="uppercase text-primary-dark font-medium text-sm"
            />
          </div>
        </div>
      )}
      <div className="relative">
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
        <PlayVideoModal
          videoLink={videoLink}
          open={isVideoOpen}
          onClose={() => setIsVideoOpen(false)}
        />
      </div>
    </div>
  );
};
