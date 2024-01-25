import { Layout } from '@components/core/layout/Layout';
import {
  defaultLocale,
  locales,
  unstable_setRequestLocale,
} from 'intl';
import { promises as fs } from 'fs';
import { Campaigns } from './components/campaigns';
import { Campaign } from './components/campaigns/Campaigns.types';

export default async function Page({ params: { lang = defaultLocale } }) {
  unstable_setRequestLocale(lang);

  //TODO: replace with real fetch
  const getCampaigns = async () => {
    const campaigns = await fs.readFile(
      process.cwd() + '/api/mocks/campaigns.json',
      'utf8',
    );
    return JSON.parse(campaigns);
  };

  const campaigns: Campaign[] = await getCampaigns();

  return (
    <Layout locale={lang}>
      <div className="sm:hidden">
        <Campaigns campaigns={campaigns[lang]} perPage={1} />
      </div>
      <div className="hidden sm:block">
        <Campaigns campaigns={campaigns[lang]} perPage={2} />
      </div>
      <br></br>
      <span>{`Locale is: ${lang}`}</span>
      <br></br>
      <br></br>
      <span>{`ENV: ${process.env.NEXT_PUBLIC_ENV}`}</span>
      <br></br>
      <span>{`API url: ${process.env.NEXT_PUBLIC_API_URL}`}</span>
      <br></br>
      <span>{`WP url: ${process.env.NEXT_PUBLIC_WP_URL}`}</span>
    </Layout>
  );
}

export function generateStaticParams() {
  return locales.map((locale) => ({ lang: locale }));
}
