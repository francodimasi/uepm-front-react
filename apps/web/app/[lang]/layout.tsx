import '@styles/globals.css';
import 'ui/styles.css';
import { getTranslations, unstable_setRequestLocale } from 'intl';
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

export async function generateMetadata({ params: { locale } }) {
  const t = await getTranslations({ locale, namespace: 'metadata' });

  return {
    title: t('title'),
  };
}
