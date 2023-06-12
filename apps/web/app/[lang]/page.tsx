"use client";

import { useLayoutEffect } from 'react';
import { useClientTranslation } from "i18n";
import { Header } from "ui";
import { Layout } from "../../components/core/layout/Layout";
import { SwitchLanguage } from "../../components/core/layout/language/SwitchLanguage";
import { useSitesApi } from "@api/sites/useSitesApi";

export default function Page({ params }) {
  const { lang } = params;
  const { t } = useClientTranslation(lang);
  const { getAllSites } = useSitesApi();

  const loadSites = async () => {
    await getAllSites();
  }

  useLayoutEffect(() => {
    loadSites();
  }, [])

  return (
    <Layout>
      <Header text="Web" />
      <p>{t("home")}</p>
      <SwitchLanguage />
    </Layout>
  );
}
