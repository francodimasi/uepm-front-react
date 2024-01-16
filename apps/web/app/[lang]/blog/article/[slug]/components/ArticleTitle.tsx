import { Link } from '@intl/navigation';
import { ArrowBackIcon, EllipsisIcon, ShareOutlineIcon } from 'ui/core/icons';
import { ArticleTitleProps } from '../Article.types';
import { LocaleProps, useTranslations } from 'intl';
import { DateMask } from 'ui/components';
import { ArticleTags } from '@components/shared/articleTags/ArticleTags';
import { Button, H3 } from 'ui/core';

export const ArticleTitle: React.FC<ArticleTitleProps & LocaleProps> = ({
  title,
  date,
  readingTime,
  tags,
  locale,
}) => {
  const t = useTranslations('commonTerms');
  const tActions = useTranslations('actions');
  return (
    <div className="flex flex-col pb-4 lg:pb-16">
      <div className="flex justify-between items-center pb-4 lg:pb-14">
        <Link href="/blog" locale={locale}>
          <ArrowBackIcon />
        </Link>
        <Button
          color="dark"
          fill="clear"
          expand="none"
          className="hidden sm:block pe-1"
        >
          {tActions('share')}
          <ShareOutlineIcon color="dark" />
        </Button>
        <Button color="dark" fill="clear" className="sm:hidden pe-1" iconOnly>
          <ShareOutlineIcon color="dark" />
        </Button>
      </div>
      <ArticleTags tags={tags?.slice(0, 1)} />
      <div className="h-full flex-col flex">
        <H3 label={title} className="my-0 sm:my-0 lg:my-0 xl:my-0" />
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
              {readingTime} {t('ofReading')}
            </span>
          )}
        </div>
      </div>
    </div>
  );
};
