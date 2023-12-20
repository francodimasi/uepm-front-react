import { Layout } from '../../components/core/layout/Layout';

export default function Page() {
  return (
    <Layout>
      <span>{`ENV: ${process.env.NEXT_PUBLIC_ENV}`}</span>
      <br></br>
      <span>{`API url: ${process.env.NEXT_PUBLIC_API_URL}`}</span>
      <br></br>
      <span>{`WP url: ${process.env.NEXT_PUBLIC_WP_URL}`}</span>
    </Layout>
  );
}
