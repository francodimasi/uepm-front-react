import { Layout } from '@components/core/layout/Layout';
import { StudiesBrowserProvider } from './components/browser/context/provider';
import { defaultLocale } from 'intl';
import { StudiesBrowser } from './components/browser';

export default function Page({ params: { lang = defaultLocale } }) {
  return (
    <Layout locale={lang}>
      <StudiesBrowserProvider>
        <StudiesBrowser
          apiKey={process.env['ALGOLIA_API_KEY']}
          appId={process.env['ALGOLIA_APP_ID']}
          indexName={`${process.env.NEXT_PUBLIC_ALGOLIA_INDEX_NAME}${lang}`}
          locale={lang}
        />
      </StudiesBrowserProvider>
    </Layout>
  );
}
