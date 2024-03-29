import { Layout } from '@components/core/layout/Layout';
import { defaultLocale, locales, unstable_setRequestLocale } from 'intl';
import { promises as fs } from 'fs';
import { Step } from './components/howitworks/HowItWorks.types';
import { HowItWorks } from './components/howitworks';
import { Campaigns } from './components/campaigns';
import { Campaign } from './components/campaigns/Campaigns.types';
import { BlogItem } from '@models/blog.types';
import { getArticlesByCategory } from '@api/blog/requests';
import { blogCategories } from './blog/constants';
import { News } from './components/news';
import { ContactUs } from '@components/shared/contactUs';
import { Stories } from './components/stories';
import { StoryProp } from './components/stories/Stories.types';
import { Main } from './components/main';

export default async function Page({ params: { lang = defaultLocale } }) {
  unstable_setRequestLocale(lang);

  const getHowItWorksSteps = async () => {
    const steps = await fs.readFile(
      process.cwd() + '/api/mocks/howItWorksSteps.json',
      'utf8',
    );
    return JSON.parse(steps);
  };

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
  const news: BlogItem[] = await getArticlesByCategory(
    blogCategories.NEWS,
    lang,
  );
  const stories: StoryProp[] = await getStories();

  return (
    <Layout locale={lang}>
      <div className="w-full flex flex-col justify-start items-start gap-[72px] pb-16">
        <Main locale={lang} />
        <HowItWorks steps={steps[lang]} />
        <Stories stories={stories[lang]} />
        <Campaigns campaigns={campaigns[lang]} />
        <News articles={news} locale={lang} />
        <ContactUs />
      </div>
    </Layout>
  );
}

export function generateStaticParams() {
  return locales.map((locale) => ({ lang: locale }));
}
