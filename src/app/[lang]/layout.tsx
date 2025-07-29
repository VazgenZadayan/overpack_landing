import { i18n, type Locale } from "../../i18n-config";
import { getDictionary } from "../../get-dictionary";
import "../../styles/global.scss";
import StructuredData from "../../components/StructuredData";

const BASE_URL = "https://overpack.am";

export async function generateMetadata({ params }: { params: { lang: Locale } }) {
  const dictionary = await getDictionary(params.lang);
  const lang = params.lang;
  return {
    metadataBase: new URL(BASE_URL),
    title: dictionary.seo.title,
    description: dictionary.seo.description,
    keywords: dictionary.seo.keywords,
    openGraph: {
      title: dictionary.seo.title,
      description: dictionary.seo.description,
      url: lang === "en" ? `${BASE_URL}/` : `${BASE_URL}/${lang}/`,
      siteName: 'Overpack',
      locale: lang,
      type: 'website',
      images: [
        {
          url: `${BASE_URL}/og-image.jpg`,
          width: 300,
          height: 300,
          alt: dictionary.seo.title,
        },
      ],
    },
    twitter: {
      card: 'summary',
      title: dictionary.seo.title,
      description: dictionary.seo.description,
      images: [`${BASE_URL}/og-image.jpg`],
    },
    alternates: {
      canonical: lang === "en" ? `${BASE_URL}/` : `${BASE_URL}/${lang}/`,
      languages: {
        en: `${BASE_URL}/`,
        hy: `${BASE_URL}/hy/`,
        ru: `${BASE_URL}/ru/`,
      },
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
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
  const dictionary = await getDictionary(params.lang);
  
  return (
    <html lang={params.lang}>
      <body>
        <StructuredData lang={params.lang} dictionary={dictionary} />
        {children}
      </body>
    </html>
  );
}
