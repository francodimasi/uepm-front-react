import { useTranslations } from 'intl';
import { ContactUsProps } from './ContactUs.types';
import { ContactUsForm } from './ContactUsForm';
import { getInitialValues } from './helpers';
import { H2, P1 } from 'ui/core';

export const ContactUs = ({}: ContactUsProps) => {
  const t = useTranslations('shared.contactUs');
  const tActions = useTranslations('actions');

  return (
    <div className="pb-8 lg:pb-10 w-full">
      <div className="flex flex-col gap-6 lg:hidden">
        <H2 label={t('title')} />
        <P1 label={t('description')} />
        <ContactUsForm
          initialValues={getInitialValues(t)}
          buttonText={tActions('submit')}
        />
      </div>
      <div className="hidden lg:flex 2xl:mx-36">
        <div className="flex flex-col text-start pe-12">
          <H2 label={t('title')} className="lg:pb-0 xl:pb-0 mt-0 xl:text-5xl" />
          <P1 label={t('description')} />
        </div>
        <ContactUsForm
          initialValues={getInitialValues(t)}
          buttonText={tActions('submit')}
        />
      </div>
    </div>
  );
};
