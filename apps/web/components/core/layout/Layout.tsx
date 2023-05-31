import React, { PropsWithChildren } from "react";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { Content } from "./Content";

type LayoutProps = PropsWithChildren<{}>;

export const Layout: React.FC<LayoutProps> = ({ children }) => (
  <div className="min-h-full flex flex-col">
    <Header />
    <Content>{children}</Content>
    <Footer />
  </div>
);
