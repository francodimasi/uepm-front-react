import { Layout } from '@components/core/layout/Layout';
import { SitesBrowserProvider } from './components/browser/context/provider';
import { SitesBrowser } from './components/browser/SitesBrowser';
import { defaultLocale } from 'intl';
// import { notFound } from 'next/navigation';

export default function Page({ params: { lang = defaultLocale } }) {
  // const sites = await getSites();

  //traducciones
  return (
    <Layout locale={lang}>
      <SitesBrowserProvider>
        <SitesBrowser
          apiKey={process.env['ALGOLIA_API_KEY']}
          appId={process.env['ALGOLIA_APP_ID']}
          indexName={process.env.NEXT_PUBLIC_ALGOLIA_SITES_INDEX_NAME}
          locale={lang}
        />
      </SitesBrowserProvider>
    </Layout>
  );
}
