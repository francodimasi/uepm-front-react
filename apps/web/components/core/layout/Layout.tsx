import { PropsWithChildren } from 'react';
import { Header } from './header';
import { Footer } from './footer';
import { Content } from './Content';
import { LocaleProps, defaultLocale } from 'intl';

type LayoutProps = PropsWithChildren & LocaleProps;

export const Layout: React.FC<LayoutProps> = ({
  children,
  locale = defaultLocale,
}) => (
  <div className="min-h-full flex flex-col">
    <Header locale={locale} />
    <Content>{children}</Content>
    <Footer locale={locale} />
  </div>
);
