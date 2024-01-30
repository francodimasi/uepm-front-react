import { Layout } from '@components/core/layout/Layout';
import { defaultLocale, locales, unstable_setRequestLocale } from 'intl';
import { promises as fs } from 'fs';
import { Step } from './components/howitworks/HowItWorks.types';
import { HowItWorks } from './components/howitworks';
import { Campaigns } from './components/campaigns';
import { Campaign } from './components/campaigns/Campaigns.types';
import { Stories } from './components/stories';
import { Story } from './components/stories/Stories.types';

export default async function Page({ params: { lang = defaultLocale } }) {
  unstable_setRequestLocale(lang);

  //TODO: replace with real fetch
  const getHowItWorksSteps = async () => {
    const steps = await fs.readFile(
      process.cwd() + '/api/mocks/howItWorksSteps.json',
      'utf8',
    );
    return JSON.parse(steps);
  };

  //TODO: replace with real fetch
  const getCampaigns = async () => {
    const campaigns = await fs.readFile(
      process.cwd() + '/api/mocks/campaigns.json',
      'utf8',
    );
    return JSON.parse(campaigns);
  };

  //TODO: replace with real fetch
  const getStories = async () => {
    const stories = await fs.readFile(
      process.cwd() + '/api/mocks/stories.json',
      'utf8',
    );
    return JSON.parse(stories);
  };

  const steps: Step[] = await getHowItWorksSteps();
  const campaigns: Campaign[] = await getCampaigns();
  const stories: Story[] = await getStories();

  return (
    <Layout locale={lang}>
      <Stories stories={stories[lang]} />
      <HowItWorks steps={steps[lang]} />
      <Campaigns campaigns={campaigns[lang]} />
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
