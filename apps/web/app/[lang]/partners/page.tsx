import { Layout } from '@components/core/layout/Layout';

export default async function Page({ params: { lang } }) {
  return (
    <Layout locale={lang}>
      <p>{`Lang: ${lang}`}</p>
    </Layout>
  );
}
