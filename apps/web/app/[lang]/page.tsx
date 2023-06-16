"use client";

import { useLayoutEffect } from "react";
import { useClientTranslation } from "i18n";
import { Header } from "ui";
import { Layout } from "../../components/core/layout/Layout";
import { SwitchLanguage } from "../../components/core/layout/language/SwitchLanguage";
import { useSiteApi } from "@api/site/useSiteApi";
import { errorResponseHandler } from "@core/error-handler";

export default function Page({ params }) {
  const { lang } = params;
  const { t } = useClientTranslation(lang);
  const { getSites } = useSiteApi();

  const loadSites = async () => {
    try {
      await getSites({query: "mar"});
    } catch (e) {
      errorResponseHandler(e);
    }
  };

  useLayoutEffect(() => {
    loadSites();
  }, []);

  return (
    <Layout>
      <Header text="Web" />
      <p>{t("home")}</p>
      <SwitchLanguage />
    </Layout>
  );
}
