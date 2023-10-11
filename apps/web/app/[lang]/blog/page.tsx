"use client";

import { Layout } from "@components/core/layout/Layout";
import { Header } from "ui";
import { PostListHeader } from "./components/PostListHeader";
import { PostList } from "./components/PostList";
import { Pagination } from "@components/pagination/Pagination";
import { SuggestedPost } from "./components/SuggestedPost";
import { TrendingTopics } from "./components/TrendingTopics";

export default function Page({ params }) {
  


  return (
    <Layout>
      <div className="container">
        <div className="grid grid-cols-12">
        <section className="col-span-8">
          <PostListHeader />
          <PostList />
          <Pagination />
        </section>
        <aside className="col-span-4">
          <SuggestedPost />
          <TrendingTopics />
        </aside>
        </div>
      </div>
    </Layout>
  );
}
