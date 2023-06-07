import { Button, Header } from "ui";
import { Layout } from "../../../components/core/layout/Layout";

export default function Page() {
  return (
    <Layout>
      <Header text="About" />
      <p className="text-red-500">This is the About us section</p>
    </Layout>
  );
}
