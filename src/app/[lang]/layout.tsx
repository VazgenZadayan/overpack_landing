import { i18n, type Locale } from "../../i18n-config";
import { getDictionary } from "../../get-dictionary";
import "../../styles/global.scss";

const BASE_URL = "https://overpack.am";

export async function generateMetadata({ params }: { params: { lang: Locale } }) {
  const dictionary = await getDictionary(params.lang);
  const lang = params.lang;
  return {
    title: dictionary.seo.title,
    description: dictionary.seo.description,
    alternates: {
      canonical: lang === "en" ? `${BASE_URL}/` : `${BASE_URL}/${lang}/`,
      languages: {
        en: `${BASE_URL}/`,
        hy: `${BASE_URL}/hy/`,
        ru: `${BASE_URL}/ru/`,
      },
    },
  };
}

export async function generateStaticParams() {
  return i18n.locales.map((locale) => ({ lang: locale }));
}

export default async function Root({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { lang: Locale };
}) {
  return (
    <html lang={params.lang}>
      <body>{children}</body>
    </html>
  );
}
