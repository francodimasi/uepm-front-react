import { Layout } from '@components/core/layout/Layout';
import { getSites } from '@api/sites/requests';
import { defaultLocale } from 'intl';
import {SiteCard} from './components/SiteCard';

export default async function Page({ params: { lang = defaultLocale } }) {
  const sites = await getSites();

  //traducciones
  return (
    <Layout locale={lang}>
      <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 ">
        <div className="w-full col-span-1 lg:col-span-2 grid gap-6">
          <div className="w-full col-span-1 lg:col-span-1">
            searchBar
          </div>
          <div className="block sm:hidden col-span-1 lg:col-span-2">MAPA</div>
          <div className="w-full col-span-1  lg:col-span-1 lg:max-h-screen lg:overflow-y-auto lg:pe-2">
            {sites.map((site) => (
              <SiteCard key={site.id} locale={lang} site={site}/>
            ))}
          </div>
        </div>
        <div
          className="hidden sm:block col-span-1 lg:col-span-3"
          style={{ border: '1px solid green' }}
        >
          MAPA
        </div>
      </div>
    </Layout>
  );
}
