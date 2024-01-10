import { Layout } from '@components/core/layout/Layout';
import { Team } from './components/team';
import { Partners } from './components/partners';
import { promises as fs } from 'fs';
import { AboutUs } from './components/AboutUs';

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

  const team = await getTeam();
  const partners = await getPartners();

  return (
    <Layout locale={lang}>
      <AboutUs />
      <Team board={team.board} staff={team.staff} />
      <Partners partners={partners} />
    </Layout>
  );
}
