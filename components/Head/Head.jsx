import NextHead from 'next/head';
import {
  TITLE,
  SHORT_TITLE,
  DESCRIPTION,
  KEYWORDS,
  COMPANY_NAME,
  CONTACT,
  SITE_URL,
  GOOGLE_ANALYTICS_ID,
} from '../../data/siteInfo';
import { PAGE_TITLE_SEPARATOR } from '../../data/config';
import { SHARE_IMAGE } from '../../data/images';
import { TITLE_MAX_LENGTH } from '../../data/constants';

const getPageTitle = (name) => {
  if (!name) {
    return TITLE;
  }

  const pageTitleVariant = [
    `${name} ${PAGE_TITLE_SEPARATOR} ${TITLE}`,
    `${name} ${PAGE_TITLE_SEPARATOR} ${SHORT_TITLE}`,
    `${name} ${PAGE_TITLE_SEPARATOR} ${COMPANY_NAME}`,
    TITLE,
  ].find((index) => index.length < TITLE_MAX_LENGTH);

  return pageTitleVariant || TITLE;
};

const getPageDescription = (name) => {
  if (!name) {
    return DESCRIPTION;
  }

  const pageDescriptionVariants = [`${name} ${PAGE_TITLE_SEPARATOR} ${DESCRIPTION}`, DESCRIPTION];

  return pageDescriptionVariants?.[0] || DESCRIPTION;
};

const Head = ({ name = '', title = '', description = '' }) => {
  const pageTitle = title || getPageTitle(name);
  const pageDescription = description || getPageDescription(name);

  return (
    <NextHead>
      {/* Primary */}
      <title>{pageTitle}</title>
      <meta name="title" content={pageTitle} />
      <meta name="description" content={pageDescription} />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="keywords" content={KEYWORDS} />
      <meta name="robots" content="index, follow" />
      <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
      <meta httpEquiv="content-language" content="pl-PL" />
      <meta name="author" content={SHORT_TITLE} />
      <meta name="DC.title" content={SHORT_TITLE} />
      <meta name="geo.region" content={CONTACT.REGION} />
      <meta name="geo.placename" content={CONTACT.CITY} />
      <meta name="geo.position" content={`${CONTACT.LATITUDE};${CONTACT.LONGITUDE}`} />
      <meta name="ICBM" content={`${CONTACT.LATITUDE}, ${CONTACT.LONGITUDE}`} />

      {/* Google Analytics */}
      {GOOGLE_ANALYTICS_ID && (
        <>
          <script
            async
            src={`https://www.googletagmanager.com/gtag/js?id=${GOOGLE_ANALYTICS_ID}`}
          />
          <script
            dangerouslySetInnerHTML={{
              __html: `
                      window.dataLayer = window.dataLayer || [];
                      function gtag(){dataLayer.push(arguments);}
                      gtag('js', new Date());
                      gtag('config', '${GOOGLE_ANALYTICS_ID}');
                      gtag('consent', 'default', {
                        'ad_storage': 'denied',
                        'analytics_storage': 'denied'
                      });
                  `,
            }}
          />
        </>
      )}

      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={SITE_URL} />
      <meta property="og:title" content={pageTitle} />
      <meta property="og:description" content={pageDescription} />
      <meta property="og:image" content={SHARE_IMAGE.src} />

      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={SITE_URL} />
      <meta property="twitter:title" content={pageTitle} />
      <meta property="twitter:description" content={pageDescription} />
      <meta property="twitter:image" content={SHARE_IMAGE.src} />

      {/* Structure Data */}
      <script type="application/ld+json">
        {`{
                "@context": "https://schema.org",
                "@type": "ProfessionalService",
                "name": "${COMPANY_NAME}",
                "image": "${SHARE_IMAGE.src}",
                "@id": "${SITE_URL}",
                "url": "${SITE_URL}",
                "telephone": "${CONTACT.PHONE}",
                "priceRange": "$",
                "address": {
                    "@type": "PostalAddress",
                    "streetAddress": "${CONTACT.STREET}",
                    "addressLocality": "${CONTACT.CITY}",
                    "postalCode": "${CONTACT.ZIP}",
                    "addressCountry": "PL"
                },
                "geo": {
                    "@type": "GeoCoordinates",
                    "latitude": "${CONTACT.LATITUDE}",
                    "longitude": "${CONTACT.LONGITUDE}"
                },
                "openingHoursSpecification": {
                    "@type": "OpeningHoursSpecification",
                    "dayOfWeek": [
                        "Monday",
                        "Tuesday",
                        "Wednesday",
                        "Thursday",
                        "Friday"
                    ],
                    "opens": "${CONTACT.OPEN_HOURS_START}",
                    "closes": "${CONTACT.OPEN_HOURS_CLOSE}"
                }
            }`}
      </script>

      {/* Other */}
      <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
      <link rel="icon" href="/favicon.ico" type="image/x-icon" />
      <meta name="msapplication-TileColor" content="#ffffff" />
      <meta name="theme-color" content="#ffffff" />
      <link rel="manifest" href="/manifest.json" />
      <link rel="canonical" href={SITE_URL} />

      {/* Fonts */}
      <link rel="preconnect" href="https://fonts.gstatic.com" />
      <link
        href="https://fonts.googleapis.com/css2?family=Nunito:wght@200&display=swap"
        rel="stylesheet"
      />
    </NextHead>
  );
};

export default Head;
