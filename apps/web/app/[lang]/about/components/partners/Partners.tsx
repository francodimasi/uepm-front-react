import { LocaleProps, useTranslations } from 'intl';
import { PartnersProps } from './Partners.types';
import { H2, L1, Scroll, Tag } from 'ui/core';
import { PartnerItem } from './PartnerItem';
import { Link } from '@intl/navigation';

export const Partners: React.FC<PartnersProps & LocaleProps> = ({
  id = 'partners-section',
  partners = [],
  locale,
}) => {
  const t = useTranslations('about.sections.partners');
  const tActions = useTranslations('actions');

  if (partners.length === 0) return null;

  return (
    <div id={id} className="flex flex-col py-8 lg:py-10 w-full">
      <div className="flex flex-col">
        <Tag
          text={t('tag')}
          className='py-2 text-primary-dark text-sm lg:text-base font-medium font-["DMSans"] uppercase'
        />
        <div className="pb-3.5 sm:pb-4 lg:pb-5 xl:pb-8">
          <div className="relative mb-6 sm:mb-8 lg:mb-10 xl:mb-16">
            <div className="absolute right-0 h-full flex items-center hidden sm:flex">
              <Link href="/" locale={locale}>
                <L1 label={`${tActions('seeMore')} →`} />
              </Link>
            </div>
            <H2 label={t('title')} />
          </div>
        </div>
        <div className="grid grid-cols-2 sm:hidden gap-4">
          {partners.slice(0, 6).map((partner, index) => (
            <PartnerItem
              key={index}
              partner={partner}
              className="items-center"
              size="xl"
            />
          ))}
        </div>
        <div className="hidden sm:flex xl:hidden">
          <Scroll className="w-full h-36">
            {partners.map((partner, index) => (
              <PartnerItem key={index} partner={partner} size="xl" />
            ))}
          </Scroll>
        </div>
        <div className="hidden xl:flex">
          <Scroll className="w-full h-44">
            {partners.map((partner, index) => (
              <PartnerItem key={index} partner={partner} size="2xl" />
            ))}
          </Scroll>
        </div>
        {partners.length > 6 && (
          <div className="sm:hidden pt-6 flex justify-center">
            <Link href="/" locale={locale} className="flex">
              <L1 label={tActions('seeMore')} />
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};
