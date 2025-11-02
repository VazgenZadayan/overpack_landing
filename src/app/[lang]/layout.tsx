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
        <meta name="yandex-verification" content="e268b63541a3199e" />
        
        {/* Google Tag Manager */}
        <Script id="gtm-script" strategy="afterInteractive">
          {`
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-K48QL5VB');
          `}
        </Script>
        
        {/* Yandex Metrika */}
        <Script id="yandex-metrika" strategy="afterInteractive">
          {`
            (function(m,e,t,r,i,k,a){
                m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
                m[i].l=1*new Date();
                for (var j = 0; j < document.scripts.length; j++) {if (document.scripts[j].src === r) { return; }}
                k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)
            })(window, document,'script','https://mc.yandex.ru/metrika/tag.js?id=104696331', 'ym');

            ym(104696331, 'init', {ssr:true, webvisor:true, clickmap:true, ecommerce:"dataLayer", accurateTrackBounce:true, trackLinks:true});
          `}
        </Script>
        
        {/* Facebook Pixel */}
        <Script id="facebook-pixel" strategy="afterInteractive">
          {`
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '1563344015098710');
            fbq('track', 'PageView');
          `}
        </Script>
      </head>
      <body>
        <a href="#main" className="skip-link">
          Skip to main content
        </a>
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-K48QL5VB"
            height="0"
            width="0"
            style={{display:'none',visibility:'hidden'}}
          ></iframe>
        </noscript>
        
        {/* Yandex Metrika (noscript) */}
        <noscript>
          <div>
            <img 
              src="https://mc.yandex.ru/watch/104696331" 
              style={{position:'absolute', left:'-9999px'}} 
              alt="" 
            />
          </div>
        </noscript>
        
        {/* Facebook Pixel (noscript) */}
        <noscript>
          <img 
            height="1" 
            width="1" 
            style={{display:'none'}}
            src="https://www.facebook.com/tr?id=1563344015098710&ev=PageView&noscript=1"
            alt=""
          />
        </noscript>
        
        <NextIntlClientProvider locale={params.lang} messages={messages}>
          <StructuredData lang={params.lang} dictionary={messages} />
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
