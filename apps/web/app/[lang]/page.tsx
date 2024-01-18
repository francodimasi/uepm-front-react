import { Layout } from '@components/core/layout/Layout';
import {
  defaultLocale,
  unstable_setRequestLocale,
  getTranslations,
} from 'intl';
import { promises as fs } from 'fs';
import { Step } from './howitworks/HowItWorks.types';
import { HowItWorks } from './howitworks';

export default async function Page({ params: { lang = defaultLocale } }) {
  unstable_setRequestLocale(lang);
  const t = await getTranslations('home');

  //TODO: replace with real fetch
  const getHowItWorksSteps = async () => {
    const team = await fs.readFile(
      process.cwd() + '/api/mocks/howItWorksSteps.json',
      'utf8',
    );
    return JSON.parse(team);
  };

  const steps: Step[] = await getHowItWorksSteps();

  return (
    <Layout locale={lang}>
      <HowItWorks steps={steps[lang]} />
      <span>{`Language is: ${t('lang')}`}</span>
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
