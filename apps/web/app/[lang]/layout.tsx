import '@styles/globals.css';
import 'swiper/swiper-bundle.css';
import 'ui/styles.css';
import { locales, unstable_setRequestLocale, getTranslations } from 'intl';
import { NextIntlClientProvider, useMessages } from 'next-intl';

export default function RootLayout({
  children,
  params: { lang },
}: {
  children: React.ReactNode;
  params: { lang: string };
}) {
  unstable_setRequestLocale(lang);
  const messages = useMessages();

  return (
    <html lang={lang}>
      <body>
        <NextIntlClientProvider messages={JSON.parse(JSON.stringify(messages))}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}

// Return a list of `params` to populate the [lang] dynamic segment
export function generateStaticParams() {
  return locales.map((locale) => ({ lang: locale }));
}

export async function generateMetadata({ params: { locale } }) {
  const t = await getTranslations({ locale, namespace: 'metadata' });

  return {
    title: t('title'),
  };
}
