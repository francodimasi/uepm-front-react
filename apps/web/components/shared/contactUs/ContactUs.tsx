import { useTranslations } from 'intl';
import { ContactUsProps } from './ContactUs.types';
import { ContactUsForm } from './ContactUsForm';
import { getInitialValues } from './helpers';

export const ContactUs = ({}: ContactUsProps) => {
  const t = useTranslations('shared.contactUs');
  const tActions = useTranslations('actions');

  return (
    <div className="py-24">
      <div className="flex flex-col gap-6 lg:hidden">
        <span className="text-3xl text-dark font-semibold leading-10 font-['Lexend']">
          {t('title')}
        </span>
        <span className="text-xl text-dark font-normal leading-8 font-['DMSans']">
          {t('description')}
        </span>
        <ContactUsForm
          initialValues={getInitialValues(t)}
          buttonText={tActions('submit')}
        />
      </div>
      <div className="hidden lg:flex mx-24 xl:mx-36 2xl:mx-48">
        <div className="flex flex-col text-start gap-12 pe-12">
          <span className="text-6xl text-dark font-semibold leading-[72px] font-['Lexend']">
            {t('title')}
          </span>
          <span className="text-xl text-dark font-normal leading-8 font-['DMSans']">
            {t('description')}
          </span>
        </div>
        <ContactUsForm
          initialValues={getInitialValues(t)}
          buttonText={tActions('submit')}
        />
      </div>
    </div>
  );
};
