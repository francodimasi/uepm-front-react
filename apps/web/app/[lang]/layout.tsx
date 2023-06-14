import { dir } from "i18next";
import "ui/styles.css";
import { Providers } from "@core/Providers";

export default function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { lang: string };
}) {
  const { lang } = params;
  return (
    <html lang={lang} dir={dir(lang)}>
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
