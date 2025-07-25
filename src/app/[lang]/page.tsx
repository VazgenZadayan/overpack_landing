import MainPage from "@/components/MainPage";
import { getDictionary } from "../../get-dictionary";
import { Locale, i18n } from "../../i18n-config";
import { notFound } from "next/navigation";

export default async function IndexPage(props: {
  params: { lang: string };
}) {
  const { lang } = props.params;

  if (!i18n.locales.includes(lang as Locale)) {
    notFound();
  }

  const dictionary = await getDictionary(lang as Locale);
  
  return <MainPage dictionary={dictionary} />;
}