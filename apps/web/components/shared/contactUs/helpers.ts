import { ContactUsFormRequest } from './ContactUs.types';

const routeEndpoint = '/api/contactUs';

export const getInitialValues = (t: Function) => ({
  name: {
    value: '',
    label: t('fields.name'),
    required: true,
  },
  lastname: {
    value: '',
    label: t('fields.lastname'),
    required: true,
  },
  email: {
    value: '',
    label: t('fields.email'),
    required: true,
  },
  phone: {
    value: '',
    label: `${t('fields.phone')} ${t('optional')}`,
    required: false,
  },
  query: {
    value: '',
    label: t('fields.query'),
    required: true,
  },
});

export const sendContactRequest = async (data: ContactUsFormRequest) => {
  return await fetch(routeEndpoint, {
    method: 'POST',
    body: JSON.stringify(data),
  });
};
