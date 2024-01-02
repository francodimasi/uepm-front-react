import { Layout } from '@components/core/layout/Layout';
import {
  defaultLocale,
  unstable_setRequestLocale,
  useTranslations,
} from 'intl';

export default function Page({ params: { lang = defaultLocale } }) {
  unstable_setRequestLocale(lang);
  const t = useTranslations('home');

  return (
    <Layout locale={lang}>
      <span>{`Language is: ${t('lang')}`}</span>
      <br></br>
      <span>{`Locale is: ${lang}`}</span>
      <br></br>
      <br></br>
      <span>{`ENV: ${process.env.NEXT_PUBLIC_ENV}`}</span>
      <br></br>
      <span>{`API url: ${process.env.NEXT_PUBLIC_API_URL}`}</span>
      <br></br>
      <span>{`WP url: ${process.env.NEXT_PUBLIC_WP_URL}`}</span>
    </Layout>
  );
}
