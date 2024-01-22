import { useTranslations } from 'intl';
import { ContactUsProps } from './ContactUs.types';
import { ContactUsForm } from './ContactUsForm';
import { getInitialValues } from './helpers';
import { H2, P1 } from 'ui/core';

export const ContactUs = ({}: ContactUsProps) => {
  const t = useTranslations('shared.contactUs');
  const tActions = useTranslations('actions');

  return (
    <div className="py-8 lg:py-10">
      <div className="flex flex-col gap-6 lg:hidden">
        <H2 label={t('title')} />
        <P1 label={t('description')} />
        <ContactUsForm
          initialValues={getInitialValues(t)}
          buttonText={tActions('submit')}
        />
      </div>
      <div className="hidden lg:flex mx-24 xl:mx-36 2xl:mx-48">
        <div className="flex flex-col text-start pe-12">
          <H2 label={t('title')} className="lg:pb-0 xl:pb-0" />
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
