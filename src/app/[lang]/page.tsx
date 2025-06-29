import { getDictionary } from "../../get-dictionary";
import { Locale } from "../../i18n-config";
import MainPage from "@/pages/MainPage";

export default async function IndexPage(props: {
  params: Promise<{ lang: Locale }>;
}) {
  const { lang } = await props.params;

  const dictionary = await getDictionary(lang);
  
  return (
    <html lang={lang}>
    <body>
        <MainPage dictionary={dictionary} />
    </body>
  </html>
  );
}