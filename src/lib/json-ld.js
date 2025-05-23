import { homepage, faviconPath } from './util';
import { useRouter } from 'next/router'; 


export function OrganizationJsonLd() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    '@id': `${homepage}/#organization`,
    name: "Elite Capital",
    description: "A real-estate focused fund manager delivering premium investment opportunities in real estate that generate exceptional risk-adjusted returns from developments that contribute to thriving communities.",
    url: homepage,
    telephone: "+971 44 99 2400",
    email: "info@elitecapitalinvestments.com",
    address: {
      "@type": 'PostalAddress',
      streetAddress: 'Elite Capital Head Office',
      addressLocality: 'Central Park Towers, Office 02-40 Dubai International Financial Centre',
      addressRegion: 'PO Box 507417 Dubai',
      addressCountry: 'United Arab Emirates',
    },
    logo: `${homepage}/favicon.ico`,
    sameAs: [
      "https://www.linkedin.com/company/officialelitecapital",
    ]
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}

export function WebsiteJsonLd() {
  const { locale } = useRouter();
  const language = locale === 'ar' ? 'AR' : 'en-US';
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': `${homepage}/#website`,
    name: 'Elite Capital',
    url: homepage,
    copyrightYear: new Date().getFullYear(),
    'inLanguage': language,
    "publisher": [
      {
        "@id": `${homepage}/#organization`
      }
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}

export function ImageObjectJsonLd() {
  const { locale } = useRouter();
  const language = locale === 'ar' ? 'AR' : 'en-US';
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ImageObject",
    '@id': `${homepage}/assets/seo/homepage.png`,
    url: `${homepage}/assets/seo/homepage.png`,
    width: "1920",
    height: "1016",
    inLanguage: language
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}

export function WebpageJsonLd({ metadata = {} }) {
  const { title, path, metaDescription, date_published, date_modified } = metadata;
  const { locale } = useRouter();
  const language = locale === 'ar' ? 'AR' : 'en-US';
  const fpath = locale ==='ar'? `ar/${path}` : `${path}`;

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": `${homepage}/${fpath}#webpage`,
    url: `${homepage}/${fpath}`,
    name: `${title}`,
    description: `${metaDescription}`,
    datePublished: `${date_published}`,
    dateModified: `${date_modified}`,
    publisher: {
      "@type": "Organization",
      name: "Elite Capital",
      logo: {
        "@type": "ImageObject",
        url: `${homepage}/${faviconPath}`,
      }
    },
    "about": {
      "@id": `${homepage}/${path}#organization`
    },
    "isPartOf": {
      "@id": `${homepage}/${path}#website`
    },
    "inLanguage": language,
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}

export function LocalBusiness() {
  
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Elite Capital",
    "image": `https://www.elitecapitalinvestments.com/assets/seo/logo.png`,
    "@id": "",
    "url": `${homepage}`,
    "telephone": "+971 44 99 2400",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Elite Capital Head Office",
      "addressLocality": "Central Park Towers, Office 02-40 Dubai International Financial Centre",
      "postalCode": "PO Box 507417",
      "addressCountry": " Dubai, ",
      "addressRegion": "United Arab Emirates"
    },
    "sameAs": [
      "https://www.linkedin.com/company/officialelitecapital",
     
    ],
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday"
        ],
        "opens": "09:30",
        "closes": "06:30"
      }
    ]
  };

  return (
    <script
    type="application/ld+json"
    dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
  />
  );
}