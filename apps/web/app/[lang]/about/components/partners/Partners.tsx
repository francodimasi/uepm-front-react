import { LocaleProps, useTranslations } from 'intl';
import { PartnersProps } from './Partners.types';
import { Scroll, Tag } from 'ui/core';
import { PartnerItem } from './PartnerItem';
import { Link } from '@intl/navigation';

export const Partners: React.FC<PartnersProps & LocaleProps> = ({
  partners = [],
  locale,
}) => {
  const t = useTranslations('about.sections.partners');
  const tActions = useTranslations('actions');

  if (partners.length === 0) return null;

  return (
    <div className="flex flex-col py-8 lg:py-10">
      <div className="flex flex-col">
        <Tag
          text={t('tag')}
          className='py-2 text-primary-dark text-sm lg:text-base font-medium font-["DMSans"] uppercase'
        />
        <div className="relative mb-4 mb-10 sm:mb-16 text-dark text-2xl leading-8 sm:text-4xl sm:leading-10 lg:text-6xl lg:leading-[72px] font-semibold font-['Lexend']">
          <div className="absolute right-0 h-full flex items-center hidden sm:flex">
            <Link href="/partners" locale={locale}>
              <span className="flex text-base font-['DMSans'] leading-none">
                {tActions('seeMore')} →
              </span>
            </Link>
          </div>
          {t('title')}
        </div>
        <div className="grid grid-cols-2 sm:hidden gap-4">
          {partners.slice(0, 6).map((partner, index) => (
            <PartnerItem
              key={index}
              partner={partner}
              className="items-center"
              size='xl'
            />
          ))}
        </div>
        <div className="hidden sm:flex xl:hidden">
          <Scroll className="w-full h-40">
            {partners.map((partner, index) => (
              <PartnerItem key={index} partner={partner} size="xl" />
            ))}
          </Scroll>
        </div>
        <div className="hidden xl:flex">
          <Scroll className="w-full h-40">
            {partners.map((partner, index) => (
              <PartnerItem key={index} partner={partner} size="2xl" />
            ))}
          </Scroll>
        </div>
        {partners.length > 6 && (
          <div className="sm:hidden pt-6">
            <Link href="/partners" locale={locale}>
              <span className="flex justify-center text-base font-semibold font-['DMSans'] leading-none">
                {tActions('seeMore')}
              </span>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};
