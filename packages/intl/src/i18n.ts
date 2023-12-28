import { getRequestConfig } from 'next-intl/server';

export default getRequestConfig(async ({ locale }) => ({
  messages: await import(`/intl/locales/${locale}.json`),
}));
