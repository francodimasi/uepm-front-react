import { Layout } from '@components/core/layout/Layout';
import { Team } from './components/team';
import { Partners } from './components/partners';
import { promises as fs } from 'fs';
import { ContactUs } from '@components/shared/contactUs/ContactUs';
import { FAQs } from '@components/shared/faqs';

export default async function Page({ params: { lang } }) {
  /**
   * @todo Replace for a real fetch
   */
  const getTeam = async () => {
    const team = await fs.readFile(
      process.cwd() + '/api/mocks/ourTeam.json',
      'utf8',
    );
    return JSON.parse(team);
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
      <Team board={team.board} staff={team.staff} locale={lang} />
      <Partners partners={partners} locale={lang} />
      <FAQs faqs={faqs} locale={lang} />
      <ContactUs />
    </Layout>
  );
}
