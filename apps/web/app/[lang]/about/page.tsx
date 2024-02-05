import { Layout } from '@components/core/layout/Layout';
import { Team } from './components/team';
import { Partners } from './components/partners';
import { Summary } from './components/summary';
import { ContactUs } from '@components/shared/contactUs';
import { FAQs } from '@components/shared/faqs';
import { promises as fs } from 'fs';
import { locales, unstable_setRequestLocale } from 'intl';

export default async function Page({ params: { lang } }) {
  unstable_setRequestLocale(lang);
  /**
   * @todo Replace for a real fetch
   */
  const getTeam = async () => {
    const team = await fs.readFile(
      process.cwd() + '/api/mocks/ourTeam.json',
      'utf8',
    );
    return JSON.parse(team)[lang];
  };

  const getPartners = async () => {
    const partners = await fs.readFile(
      process.cwd() + '/api/mocks/ourPartners.json',
      'utf8',
    );
    return JSON.parse(partners);
  };

  const getFAQs = async () => {
    const faqs = await fs.readFile(
      process.cwd() + '/api/mocks/FAQs.json',
      'utf8',
    );
    return JSON.parse(faqs)[lang];
  };

  const team = await getTeam();
  const partners = await getPartners();
  const faqs = await getFAQs();

  return (
    <Layout locale={lang}>
      <div className="w-full flex flex-col justify-start items-start gap-[72px] pb-16">
        <Summary />
        <Team board={team.board} staff={team.staff} locale={lang} />
        <Partners partners={partners} locale={lang} />
        <FAQs faqs={faqs} locale={lang} />
        <ContactUs />
      </div>
    </Layout>
  );
}

export function generateStaticParams() {
  return locales.map((locale) => ({ lang: locale }));
}
