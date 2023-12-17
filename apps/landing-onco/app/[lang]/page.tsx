'use client';
import { Contact } from '@components/contact/Contact';
import { Cover } from '@components/cover/Cover';
import { Resources } from '@components/resources/Resources';
import { Footer } from '@components/shared/Footer';
import { Header } from '@components/shared/header/Header';
import { LanguageProvider } from 'i18n';

export default function Page({ params }: { params: any }) {
  const { lang } = params;

  return (
    <LanguageProvider lang={lang}>
      <Header />
      <Cover />
      <Resources />
      <div id="contact">
        <Contact />
      </div>
      <Footer />
    </LanguageProvider>
  );
}
