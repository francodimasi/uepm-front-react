"use client";

import { Layout } from "@components/core/layout/Layout";
import { SuggestedPost } from "./components/SuggestedPost";
import { TrendingTopics } from "./components/TrendingTopics";
import { MainPostList } from "./components/MainPostList";

export default function Page({ params }) {
  return (
    <Layout>
      <div className="container">
        <div className="grid grid-cols-12">
          <section className="col-span-9 pr-16 py-12">
            <MainPostList />
          </section>
          <aside className="col-span-3 pl-16">
            <SuggestedPost />
            <TrendingTopics />
          </aside>
        </div>
      </div>
    </Layout>
  );
}
