import MainPage from "@/components/MainPage";
import { getMessages } from "next-intl/server";
import { Locale } from "../../i18n-config";

export default async function IndexPage({
  params,
}: {
  params: { lang: Locale };
}) {
  // Получаем все переводы для текущего языка
  const messages = await getMessages({ locale: params.lang });
  
  return <MainPage dictionary={messages} />;
}