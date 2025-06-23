import { i18n, type Locale } from "../../i18n-config";
import { getDictionary } from "../../get-dictionary";

export async function generateMetadata({ params }: { params: { lang: Locale } }) {
  const dictionary = await getDictionary(params.lang);
  return {
    title: dictionary.seo.title,
    description: dictionary.seo.description,
  };
}

export async function generateStaticParams() {
  return i18n.locales.map((locale) => ({ lang: locale }));
}

export default async function Root(props: {
  children: React.ReactNode;
  params: Promise<{ lang: Locale }>;
}) {
  const params = await props.params;

  const { children } = props;

  return (
    <html lang={params.lang}>
      <body>{children}</body>
    </html>
  );
}