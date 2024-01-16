import { LocaleProps, useTranslations } from 'intl';
import { H2, L1 } from 'ui/core';
import { FAQsProps } from './FAQs.types';
import { Link } from '@intl/navigation';
import { FAQsContent } from './FAQsContent';

export const FAQs = ({ faqs, locale }: FAQsProps & LocaleProps) => {
  const t = useTranslations('shared.faqs');
  const tActions = useTranslations('actions');

  return (
    <div className="flex flex-col py-8 lg:py-10">
      <div className="relative mt-3.5 mb-8 sm:mt-4 sm:mb-12 lg:mt-5 lg:mb-14 xl:mt-8 xl:mb-20">
        <div className="absolute right-0 h-full flex items-center">
          <Link href="/" locale={locale}>
            <L1 label={`${tActions('seeMore')} →`} />
          </Link>
        </div>
        <H2 label={t('title')} />
      </div>
      <FAQsContent faqs={faqs} />
    </div>
  );
};
