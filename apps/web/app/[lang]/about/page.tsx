import { Layout } from '@components/core/layout/Layout';
<<<<<<< HEAD
import { SwitchLocale } from '@intl/components/SwitchLocale';
import { unstable_setRequestLocale, useTranslations } from 'intl';
import { AboutUs } from './components/AboutUs';
=======
import { Team } from './components/team/Team';
import { promises as fs } from 'fs';
>>>>>>> develop

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
<<<<<<< HEAD
      <p className="text-red-500">{t('title')}</p>
      <AboutUs />
      <SwitchLocale />
=======
      <Team board={team.board} staff={team.staff} />
>>>>>>> develop
    </Layout>
  );
}
