import { i18n, type Locale } from "../../i18n-config";
import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import Script from 'next/script';
import StructuredData from "../../components/StructuredData";

const BASE_URL = "https://overpack.am";

export async function generateMetadata({ params }: { params: { lang: Locale } }) {
  const messages = await getMessages({ locale: params.lang });
  const seo = messages.seo as any;
  
  // Для английского используем "/" вместо "/en/"
  const canonicalUrl = params.lang === 'en' ? `${BASE_URL}/` : `${BASE_URL}/${params.lang}/`;
  const ogUrl = params.lang === 'en' ? `${BASE_URL}/` : `${BASE_URL}/${params.lang}/`;
  
  return {
    metadataBase: new URL(BASE_URL),
    title: seo.title,
    description: seo.description,
    keywords: seo.keywords,
    openGraph: {
      title: seo.title,
      description: seo.description,
      url: ogUrl,
      siteName: 'Overpack',
      locale: params.lang,
      type: 'website',
      images: [
        {
          url: `${BASE_URL}/og-image.jpg`,
          width: 1200,
          height: 630,
          alt: seo.title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: seo.title,
      description: seo.description,
      images: [`${BASE_URL}/og-image.jpg`],
    },
    alternates: {
      canonical: canonicalUrl,
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

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { lang: Locale };
}) {
  // Получаем переводы для текущего языка
  const messages = await getMessages({ locale: params.lang });
  
  return (
    <html lang={params.lang}>
      <head>
        <link rel="icon" type="image/x-icon" href="/favicon.ico" />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="theme-color" content="#ffffff" />
        <Script id="gtm-script" strategy="afterInteractive">
          {`
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-56KNDB2R');
          `}
        </Script>
      </head>
      <body>
        <a href="#main" className="skip-link">
          Skip to main content
        </a>
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-56KNDB2R"
            height="0"
            width="0"
            style={{display:'none',visibility:'hidden'}}
          ></iframe>
        </noscript>
        
        <NextIntlClientProvider locale={params.lang} messages={messages}>
          <StructuredData lang={params.lang} dictionary={messages} />
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
