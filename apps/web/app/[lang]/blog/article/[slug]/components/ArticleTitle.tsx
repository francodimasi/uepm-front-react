import { Link } from '@intl/navigation';
import { ArrowBackIcon, EllipsisIcon, ShareOutlineIcon } from 'ui/core/icons';
import { ArticleTitleProps } from '../Article.types';
import { LocaleProps, useTranslations } from 'intl';
import { DateMask } from 'ui/components';
import { ArticleTags } from '@components/shared/articleTags/ArticleTags';

export const ArticleTitle: React.FC<ArticleTitleProps & LocaleProps> = ({
  title,
  date,
  readingTime,
  tags,
  locale,
}) => {
  const t = useTranslations('commonTerms');
  return (
    <div className="flex flex-col pb-4 lg:pb-16">
      <div className="flex justify-between items-center pb-4 lg:pb-14">
        <Link href="/blog" locale={locale}>
          <ArrowBackIcon />
        </Link>
        <div className="flex items-center cursor-pointer">
          {/* TODO: add functionality to Share link */}
          <div className="text-dark text-xs font-normal font-['DMSans'] uppercase leading-normal">
            Compartir
          </div>
          {/* TODO: convert to button */}
          <div className="w-12 p-3 items-center">
            <ShareOutlineIcon />
          </div>
        </div>
      </div>
      <ArticleTags tags={tags?.slice(0, 1)} />
      <div className="h-full flex-col gap-2 flex">
        <span className="pb-4 lg:pb-12 text-dark text-2xl leading-8 sm:text-[56px] sm:leading-[64px] font-semibold font-['Lexend']">
          {title}
        </span>
        <div className="items-center gap-4 inline-flex">
          <DateMask
            date={date}
            mask={`DD [${t('of')}] MMMM, YYYY`}
            locale={locale}
            className="text-xs font-normal font-['DMSans'] uppercase leading-normal"
          />
          <EllipsisIcon className="w-[5px] h-[5px] bg-black rounded-full" />
          {readingTime && (
            <span className="text-dark text-xs font-normal font-['DMSans'] uppercase leading-normal">
              {readingTime} de lectura
            </span>
          )}
        </div>
      </div>
    </div>
  );
};
