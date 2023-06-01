import { Header } from "ui";
import { Layout } from '../../components/core/layout/Layout';
import { Reviews } from './components/Reviews';

export default function Page() {
  return (
    <Layout>
      {/* <Header text="Partners" /> */}
      <Reviews />
    </Layout>
  );
}
