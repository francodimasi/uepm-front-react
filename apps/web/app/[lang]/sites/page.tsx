import { Layout } from '@components/core/layout/Layout';
import { getSites } from '@api/sites/requests';
import { defaultLocale /*, locales */ } from 'intl';
// import { notFound } from 'next/navigation';

export default async function Page({ params: { lang = defaultLocale } }) {
  const sites = await getSites();

  return (
    <Layout locale={lang}>
      <div
        className="h-full grid grid-cols-1 lg:grid-cols-3 gap-5"
        style={{ border: '1px solid black' }}
      >
        <div
          className="w-full col-span-1 lg:col-span-1 xl:col-span-1"
          style={{ border: '1px solid red' }}
        >
          <div
            className="w-full col-span-1 lg:col-span-1 xl:col-span-1"
            style={{ border: '1px solid pink' }}
          >
            searchBar
          </div>
          <div
            className="block sm:hidden col-span-1 lg:col-span-2"
            style={{ border: '1px solid green' }}
          >
            MAPA
          </div>
          <div
            className="w-full col-span-1 lg:col-span-1 xl:col-span-1"
            style={{ border: '1px solid gray' }}
          >
            Order
          </div>
          <div
            className="w-full col-span-1 lg:col-span-1 xl:col-span-1"
            style={{ border: '1px solid blue' }}
          >
            {sites.map((site) => (
              <div key={site.id}>{site.name}</div>
            ))}
          </div>
        </div>
        <div
          className="hidden sm:block col-span-1 lg:col-span-2 h-full"
          style={{ border: '1px solid green' }}
        >
          MAPA
        </div>
      </div>
    </Layout>
  );
}
