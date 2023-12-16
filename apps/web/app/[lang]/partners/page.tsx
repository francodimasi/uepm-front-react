import { useSite } from "@api/site/useSite";
import { Layout } from "@components/core/layout/Layout";
import { SwitchLanguage } from "@components/core/layout/language/SwitchLanguage";
import { errorResponseHandler } from "@core/error-handler";
import { useServerTranslation } from "i18n";

export default async function Page({ params: { lang } }) {
  const { t } = await useServerTranslation(lang);
  const { getAllSites } = useSite();
  let sites;

  try {
    sites = await getAllSites();
  } catch (e) {
    errorResponseHandler(e);
  }

  return (
    <Layout>
      <p>{t("partners")}</p>
      <SwitchLanguage />
      {sites?.map((site, index) => (
        <p key={index}>{site.name}</p>
      ))}
    </Layout>
  );
}
