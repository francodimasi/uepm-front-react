'use client'

import { Button, Header } from "ui";
import { Layout } from "../../components/core/layout/Layout";
import { useClientTranslation } from "i18n";

export default function Page({ params }) {

  const { lang } = params;
  const { t } = useClientTranslation(lang);

  return (
    <Layout>
      <Header text="Web" />
      <p>{t('home')}</p>
      <Button />
    </Layout>
  );
}
