"use client";

import { Layout } from "@components/core/layout/Layout";
import { SuggestedPost } from "./components/SuggestedPost";
import { TrendingTopics } from "./components/TrendingTopics";
import { MainPostList } from "./components/MainPostList";

const MOCK_TAGS = ["Cáncer", "Artritis Psoriásica", "Cáncer de cabeza", "Cáncer de cabeza y cuello",
 "Cáncer de esófago", "Cáncer de cuello", "Cáncer de piel", "Alzheimer", "Síndrome de Dunning Krugger"]

export default function Page({ params }) {
  return (
    <Layout>
      <div className="container">
        <div className="grid grid-cols-12">
          <section className="col-span-9 pr-16 py-12">
            <MainPostList />
          </section>
          <aside className="col-span-3 flex-col justify-start items-start gap-8 inline-flex">
            <SuggestedPost />
            <TrendingTopics tags={MOCK_TAGS} />
          </aside>
        </div>
      </div>
    </Layout>
  );
}
