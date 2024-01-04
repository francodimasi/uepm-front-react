import { Layout } from '@components/core/layout/Layout';
import { SwitchLocale } from '@intl/components/SwitchLocale';
import { unstable_setRequestLocale, useTranslations } from 'intl';

export default function Page({ params: { lang } }) {
  unstable_setRequestLocale(lang);
  const t = useTranslations('about');

  return (
    <Layout locale={lang}>
      <p className="text-red-500">{t('title')}</p>
      <SwitchLocale />
    </Layout>
  );
}
