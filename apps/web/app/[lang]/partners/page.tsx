import { Header } from "ui";
import { Layout } from '../../../components/core/layout/Layout';
import { useServerTranslation } from "i18n";
import { SwitchLanguage } from "../../../components/core/layout/language/SwitchLanguage";

export default async function Page({ params: { lang } }) {

  const { t } = await useServerTranslation(lang)

  return (
    <Layout>
      <Header text="Partners" />
      <p>{t('partners')}</p>
      <SwitchLanguage />
    </Layout>
  );
}