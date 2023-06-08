"use client";

import { useClientTranslation } from "i18n";
import { Header } from "ui";
import { Layout } from "../../components/core/layout/Layout";
import { SwitchLanguage } from "../../components/core/layout/language/SwitchLanguage";

export default function Page({ params }) {
  const { lang } = params;
  const { t } = useClientTranslation(lang);

  return (
    <Layout>
      <Header text="Web" />
      <p>{t("home")}</p>
      <SwitchLanguage />
    </Layout>
  );
}
