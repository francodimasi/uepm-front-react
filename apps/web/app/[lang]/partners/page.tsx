import { Layout } from '@components/core/layout/Layout';

export default async function Page({ params: { lang } }) {
  return (
    <Layout>
      <p>{`Lang: ${lang}`}</p>
    </Layout>
  );
}
