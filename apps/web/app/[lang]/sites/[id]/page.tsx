// import { Metadata } from 'next';
import { notFound } from 'next/navigation';
// import { headers } from 'next/headers';
import { Layout } from '@components/core/layout/Layout';
import { defaultLocale } from 'intl';
import { SiteProp } from './Site.types';
import { getSiteById } from '@api/sites/requests';

const Page = async ({ params: { lang = defaultLocale, id } }: SiteProp) => {
  const site = await getSiteById(id);
  if (!site) notFound();

  return (
    <Layout locale={lang}>
      <div className="grid grid-cols-1 lg:grid-cols-3 xl:grid-cols-4">
        <div
          className="w-full col-span-1 lg:col-span-2 xl:col-span-3 pr-0 lg:pr-12"
          style={{ backgroundColor: 'yellow' }}
        >
          <p>Titulo y descripcion</p>
        </div>
        <div className="col-span-1 lg:row-span-2 pl-0 flex flex-col gap-12 lg:gap-10">
          <div
            className="flex flex-col justify-start items-start"
            style={{ backgroundColor: 'green' }}
          >
            <p>Card Flotante</p>
          </div>
        </div>
        <div
          className="w-full col-span-1 lg:col-span-2 xl:col-span-3 pr-0 lg:pr-12"
          style={{ backgroundColor: 'yellow' }}
        >
          <p>Especializaciones</p>
          <p>beneficios para pacientes</p>
          <p>Investigadores</p>
          <p>Estudios abiertos</p>
        </div>
      </div>
    </Layout>
  );
};

export default Page;

// TODO : Define and generate metadata
// export async function generateMetadata({
//   params: { id },
// }: SiteProp): Promise<Metadata> {
//   const site = await getSiteById(is);

//   if (!site) notFound();

//   const yoast_head_json = site['yoast_head_json'];
//   const headersInstance = headers();
//   const url = headersInstance.get('x-url');

//   return setMetadata({ meta: yoast_head_json, url, article });
// }
