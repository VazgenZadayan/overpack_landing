import { Manrope } from "next/font/google";
import { notFound } from "next/navigation";
import { NextIntlClientProvider } from "next-intl";
import "../styles/styles.scss";
import FullPageScroller from "@/pages/MainPage";

const manrope = Manrope({
  subsets: ["latin", "cyrillic"],
  weight: ["500", "600", "700", "800"],
  variable: "--font-manrope",
});

export const metadata = {
  title: "Overpack Web",
  description: "Your trusted partner in business solutions",
};

export function generateStaticParams() {
  return [{ locale: "en" }, { locale: "ru" }, { locale: "hy" }];
}

export default async function LocaleLayout({
  children,
  params: { locale },
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  let messages;
  try {
    messages = (await import(`../../messages/${locale}.json`)).default;
  } catch (error) {
    notFound();
  }

  return (
    <html lang={locale}>
      <body className={manrope.variable}>
        <NextIntlClientProvider messages={messages} locale={locale}>
          <FullPageScroller />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
