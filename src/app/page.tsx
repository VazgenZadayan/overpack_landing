import MainPage from "@/components/MainPage";
import { getDictionary } from "../get-dictionary";
import StructuredData from "../components/StructuredData";

const BASE_URL = "https://overpack.am/";

export async function generateMetadata() {
  const dictionary = await getDictionary("en");
  return {
    metadataBase: new URL(BASE_URL),
    title: dictionary.seo.title,
    description: dictionary.seo.description,
    keywords: dictionary.seo.keywords,
    openGraph: {
      title: dictionary.seo.title,
      description: dictionary.seo.description,
      url: `${BASE_URL}`,
      siteName: 'Overpack',
      locale: 'en',
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
      canonical: `${BASE_URL}`,
      languages: {
        en: `${BASE_URL}/en/`,
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

export default async function RootPage() {
  const dictionary = await getDictionary("en");
  return (
    <html lang="en">
      <body>
        <StructuredData lang="en" dictionary={dictionary} />
        <MainPage dictionary={dictionary} />
      </body>
    </html>
  );
} 