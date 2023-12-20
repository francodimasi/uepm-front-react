import { Layout } from '../../../components/core/layout/Layout';
import { QuienesSomos } from './components/QuienesSomos';

export default function Page() {
  return (
    <Layout>
      <QuienesSomos/>
      <p className="text-red-500">This is the About us section</p>
    </Layout>
  );
}
