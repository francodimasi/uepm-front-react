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

  const steps: Step[] = await getHowItWorksSteps();
  const campaigns: Campaign[] = await getCampaigns();
  const news: BlogItem[] = await getArticlesByCategory(
    blogCategories.NEWS,
    lang,
  );

  return (
    <Layout locale={lang}>
      <div className="w-full flex flex-col justify-start items-start gap-[72px] pb-16">
        <HowItWorks steps={steps[lang]} />
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
