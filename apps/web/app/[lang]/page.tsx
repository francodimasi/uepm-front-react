import { Layout } from '@components/core/layout/Layout';
import { defaultLocale, locales, unstable_setRequestLocale } from 'intl';
import { promises as fs } from 'fs';
import { Step } from './components/howitworks/HowItWorks.types';
import { HowItWorks } from './components/howitworks';

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

  const steps: Step[] = await getHowItWorksSteps();

  return (
    <Layout locale={lang}>
      <HowItWorks steps={steps[lang]} />
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
