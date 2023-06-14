import { useSitesApi } from '@api/sites/useSitesApi';
import { Layout } from '@components/core/layout/Layout';
import { SwitchLanguage } from "@components/core/layout/language/SwitchLanguage";
import { errorResponseHandler } from '@core/error-handler';
import { useServerTranslation } from "i18n";
import { Header } from "ui";

export default async function Page({ params: { lang } }) {

  const { t } = await useServerTranslation(lang)
  const { getAllSites } = useSitesApi();
  let sites;

  try{
    sites = await getAllSites();
  }
  catch(e){
    errorResponseHandler(e)
  }

  return (
    <Layout>
      <Header text="Partners" />
      <p>{t('partners')}</p>
      <SwitchLanguage />
      {
        sites && sites.page.map((site, index) => (
          <p key={index} >{site.name}</p>
        ))
      }
    </Layout>
  );
}