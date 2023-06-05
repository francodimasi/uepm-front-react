import { Layout } from '../../components/core/layout/Layout';
import { PartnersGrid } from "./components/PartnersGrid";
import { PartnersSummary } from "./components/PartnersSummary";
import partners from '../../public/partners/partners-mock.json'

export default function Page() {
  return (
    <Layout>
      <PartnersSummary />
      <PartnersGrid partners={partners}/>
    </Layout>
  );
}
