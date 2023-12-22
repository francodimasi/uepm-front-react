import dayjs from 'dayjs';
import { ArrowBackIcon, EllipsisIcon, ShareOutlineIcon } from 'ui/core/icons'
import Link from 'next/link';
import { TitleProps } from '../Article.types';

export const Title: React.FC<TitleProps> = ({ title, date, readingTime }) => {
  return (
    <div className="w-full h-full flex-col gap-4 inline-flex">
      <div className="self-stretch justify-between items-center inline-flex">
        {/* TODO: this link needs to consider locale */}
        <Link href="/en/blog/">
          <ArrowBackIcon></ArrowBackIcon>
        </Link>
        <div className="flex items-center">
          {/* TODO: add functionality to Share link */}
          <div className="text-dark text-xs font-normal font-['DMSans'] uppercase leading-normal">
            Compartir
          </div>
          <div className="w-12 px-3 py-4 rounded-[100px] items-center gap-3 flex">
            <ShareOutlineIcon className="w-6 h-6"></ShareOutlineIcon>
          </div>
        </div>
      </div>
      <div className="h-full flex-col gap-2 flex">
        <div className="self-stretch text-dark sm:text-[56px] font-semibold font-['Lexend']">
          {title}
        </div>
        <div className="items-center gap-4 inline-flex">
          <div className="text-dark text-xs font-normal font-['DMSans'] uppercase leading-normal">
            {dayjs(date).format('d [de] MMMM, YYYY')}
          </div>
          <EllipsisIcon className="w-[5px] h-[5px] bg-black rounded-full"></EllipsisIcon>
          <div className="text-dark text-xs font-normal font-['DMSans'] uppercase leading-normal">
            {readingTime} de lectura
          </div>
        </div>
      </div>
    </div>
  );
};
