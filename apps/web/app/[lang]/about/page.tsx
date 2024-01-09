import { Layout } from '@components/core/layout/Layout';
import { Team } from './components/team/Team';
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

  const team = await getTeam();

  return (
    <Layout locale={lang}>
      <AboutUs />
      <Team board={team.board} staff={team.staff} />
    </Layout>
  );
}
