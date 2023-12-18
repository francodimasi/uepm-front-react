'use client';

import { PostItemProps } from "./PostItem";
import { useEffect, useState } from "react";
import { SuggestedPostSkeleton } from "./SuggestedPostSkeleton";
import { PostItem } from "./PostItem";

type SuggestedPostProps = {
  posts: PostItemProps[]
};

export const SuggestedPost = ({ posts }: SuggestedPostProps) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(false)
  }, []);


  return (
    <>
      {
        <div className="flex-col justify-start items-start gap-8 flex">
          <div className="text-2xl font-medium font-['Lexend'] leading-7 text-primary ">
              {/*@todo i18nPending translation*/}
              Selección del editor
          </div>
            {/*@todo Pending translation*/}
            {
              loading ? (
                <div className="mt-10 space-y-6 lg:space-y-6">
                  <SuggestedPostSkeleton />
                </div>
              ) : (
                <div className="mt-10 space-y-6 lg:space-y-6">
                  {posts?.map((postItem) => (
                    <div
                      className="flex-1  last:mr-0"
                      key={postItem.slug}
                    >
                      <PostItem size='small' {...postItem} />
                    </div>
                  ))}
                </div>
              )
            }
            
        </div>
      }
    </>
  );
};

