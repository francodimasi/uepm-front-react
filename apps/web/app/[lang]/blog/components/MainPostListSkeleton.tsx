import { PostItemSkeleton } from './PostItemSkeleton';

type MainPostListSkeleton = {
    entries: number
  };


export const MainPostListSkeleton = ({entries} : MainPostListSkeleton) => {
  return (
    <div className=''>
      {
        (
          () => {
            const options = [];
            for (let i = 0 ; i < entries; i++) {
              options.push(
                <div  key={i} className='pt-0 pb-10 border-b border-gray-medium sm:mb-0 sm:mt-10 sm:pb-7'>
                  <PostItemSkeleton size='large'/>
                </div>
              )
            }
            return options;
          }
        )()
      }
    </div>
  )
}

