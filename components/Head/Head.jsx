import NextHead from 'next/head';
import {
    TITLE,
    SHORT_TITLE,
    DESCRIPTION,
    KEYWORDS,
    COMPANY_NAME,
    CONTACT,
    SITE_URL,
    IMAGE_URL,
    FACEBOOK,
    GOOGLE_ANALYTICS_ID,
} from '../../data/siteInfo';

const Head = ({ name = '' }) => (
    <NextHead>
        {/* Primary */}
        <title>{TITLE}</title>
        <meta name='title' content={TITLE} />
        <meta name='description' content={DESCRIPTION} />
        <meta name='viewport' content='width=device-width, initial-scale=1.0' />
        <meta name='keywords' content={KEYWORDS} />
        <meta name='robots' content='index, follow' />
        <meta http-equiv='Content-Type' content='text/html; charset=utf-8' />
        <meta http-equiv='content-language' content='pl-PL' />
        <meta name='author' content={SHORT_TITLE} />
        <meta name='DC.title' content={SHORT_TITLE} />
        <meta name='geo.region' content={CONTACT.REGION} />
        <meta name='geo.placename' content={CONTACT.CITY} />
        <meta name='geo.position' content={`${CONTACT.LATITUDE};${CONTACT.LONGITUDE}`} />
        <meta name='ICBM' content={`${CONTACT.LATITUDE}, ${CONTACT.LONGITUDE}`} />

        {/* Google Analytics */}
        {GOOGLE_ANALYTICS_ID && (
            <>
                <script async src={`https://www.googletagmanager.com/gtag/js?id=${GOOGLE_ANALYTICS_ID}`} />
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
        <meta property='og:type' content='website' />
        <meta property='og:url' content={SITE_URL} />
        <meta property='og:title' content={TITLE} />
        <meta property='og:description' content={DESCRIPTION} />
        <meta property='og:image' content={IMAGE_URL} />

        {/* Twitter */}
        <meta property='twitter:card' content='summary_large_image' />
        <meta property='twitter:url' content={SITE_URL} />
        <meta property='twitter:title' content={TITLE} />
        <meta property='twitter:description' content={DESCRIPTION} />
        <meta property='twitter:image' content={IMAGE_URL} />

        {/* Structure Data */}
        <script type='application/ld+json'>
            {`{
                "@context": "https://schema.org",
                "@type": "ProfessionalService",
                "name": ${COMPANY_NAME},
                "image": ${IMAGE_URL},
                "@id": ${SITE_URL},
                "url": ${SITE_URL},
                "telephone": ${CONTACT.PHONE},
                "priceRange": "$",
                "address": {
                    "@type": "PostalAddress",
                    "streetAddress": ${CONTACT.STREET},
                    "addressLocality": ${CONTACT.CITY},
                    "postalCode": ${CONTACT.ZIP},
                    "addressCountry": "PL"
                },
                "geo": {
                    "@type": "GeoCoordinates",
                    "latitude": ${CONTACT.LATITUDE},
                    "longitude": ${CONTACT.LONGITUDE}
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
                    "opens": ${CONTACT.OPEN_HOURS_START},
                    "closes": ${CONTACT.OPEN_HOURS_CLOSE}
                },
                "sameAs": ${FACEBOOK}
            }`}
        </script>

        {/* Other */}
        <link rel='shortcut icon' href='/favicon.ico' type='image/x-icon' />
        <link rel='icon' href='/favicon.ico' type='image/x-icon' />
        <meta name='msapplication-TileColor' content='#ffffff' />
        <meta name='theme-color' content='#ffffff' />
        <link rel='manifest' href='/manifest.json' />
        <link rel='canonical' href={SITE_URL} />

        {/* Fonts */}
        <link rel='preconnect' href='https://fonts.gstatic.com' />
        <link href='https://fonts.googleapis.com/css2?family=Nunito:wght@200&display=swap' rel='stylesheet' />
    </NextHead>
);

export default Head;
