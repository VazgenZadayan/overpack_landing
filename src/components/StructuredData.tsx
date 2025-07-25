import Script from 'next/script';

interface StructuredDataProps {
  lang: string;
  dictionary: any;
}

const StructuredData: React.FC<StructuredDataProps> = ({ lang, dictionary }) => {
  const baseUrl = "https://overpack.am";
  
  const organizationData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Overpack",
    "url": baseUrl,
    "logo": `${baseUrl}/LogoWithText.svg`,
    "description": dictionary.seo.description,
    "sameAs": [
        // TODO: add social media links
    ],
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+374 41 919694",
      "contactType": "customer service",
      "email": "overpackhookahmarket@gmail.com"
    }
  };

  const websiteData = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Overpack",
    "url": baseUrl,
    "description": dictionary.seo.description,
    "inLanguage": lang,
    "potentialAction": {
      "@type": "SearchAction",
      "target": {
        "@type": "EntryPoint",
        "urlTemplate": `${baseUrl}/search?q={search_term_string}`
      },
      "query-input": "required name=search_term_string"
    }
  };

  const onlineStoreData = {
    "@context": "https://schema.org",
    "@type": "OnlineStore",
    "name": "Overpack",
    "description": dictionary.seo.description,
    "url": baseUrl,
    "telephone": "+374 41 919694",
    "email": "overpackhookahmarket@gmail.com",
    "areaServed": {
      "@type": "Country",
      "name": "Armenia"
    },
    "paymentAccepted": ["Credit Card"],
    "currenciesAccepted": "AMD",
    "availableOnDevice": ["Mobile App", "Web Browser"]
  };

  return (
    <>
      <Script
        id="structured-data-organization"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(organizationData)
        }}
      />
      <Script
        id="structured-data-website"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(websiteData)
        }}
      />
      <Script
        id="structured-data-online-store"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(onlineStoreData)
        }}
      />
    </>
  );
};

export default StructuredData; 