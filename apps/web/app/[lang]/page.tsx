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
    </Layout>
  );
}

export function generateStaticParams() {
  return locales.map((locale) => ({ lang: locale }));
}
