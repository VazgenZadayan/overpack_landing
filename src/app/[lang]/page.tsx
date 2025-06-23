import { NextIntlClientProvider } from "next-intl";
import { getDictionary } from "../../get-dictionary";
import { Locale } from "../../i18n-config";
import { Manrope } from "next/font/google";
import MainPage from "@/pages/MainPage";

export default async function IndexPage(props: {
  params: Promise<{ lang: Locale }>;
}) {
  const { lang } = await props.params;

  const dictionary = await getDictionary(lang);
  
  return (
    <html lang={lang}>
    <body>
        <MainPage />
    </body>
  </html>
  );
}