import { dir } from "i18next";
import "ui/styles.css";
import "@styles/globals.css";
import "swiper/swiper-bundle.css";
import { Providers } from "@core/Providers";
import dayjs from "dayjs";

export default function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { lang: string };
}) {
  const { lang } = params;
  dayjs.locale(lang);

  return (
    <html lang={lang} dir={dir(lang)}>
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}

// Return a list of `params` to populate the [lang] dynamic segment
export async function generateStaticParams() {
  return [
    //Languages not listed here will be dinamycally generated on request time
    { lang: "es" },
    { lang: "en" }
  ];
}