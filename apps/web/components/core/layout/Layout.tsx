import React, { PropsWithChildren } from 'react';
import { Header } from './header';
import { Footer } from './footer';
import { Content } from './Content';

type LayoutProps = PropsWithChildren<{}>;

export const Layout: React.FC<LayoutProps> = ({ children }) => (
  <div className="min-h-full flex flex-col">
    <Header />
    <Content>{children}</Content>
    <Footer />
  </div>
);
