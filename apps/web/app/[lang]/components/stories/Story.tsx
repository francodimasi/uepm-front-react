'use client';
import { Avatar, Tag } from 'ui/core';
import { StoryProp } from './Stories.types';
import { PlayIcon } from './icons';
import { useState } from 'react';
import { PlayVideoModal } from 'ui/components';

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
          <Tag
            text={`${patientName}.${tag}`}
            className="uppercase text-primary-dark"
          />
        </div>
      )}
      <div className="relative">
        {videoLink && (
          <div className="flex absolute items-center gap-4 bg-dark z-10 left-1/2 top-3/4 transform -translate-x-1/2 -translate-y-1/2 p-4 rounded-full">
            <span className=" text-white ">{patientName}</span>
            <span onClick={() => setIsVideoOpen(true)}>
              <PlayIcon />
            </span>
          </div>
        )}
        <Avatar imageUrl={image} alt={patientName} size="4xl"></Avatar>
        <PlayVideoModal
          videoLink={videoLink}
          open={isVideoOpen}
          onClose={() => setIsVideoOpen(false)}
        />
      </div>
    </div>
  );
};
