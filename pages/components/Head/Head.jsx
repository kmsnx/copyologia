import NextHead from 'next/head';
import { TITLE, DESCRIPTION, KEYWORDS, COMPANY_NAME, CONTACT, URL, IMAGE_URL, FACEBOOK } from '../../data/siteInfo';

const Head = () => (
    <NextHead>
        <title>{TITLE}</title>
        <meta name='description' content={DESCRIPTION} />
        <link rel='icon' href='/favicon.ico' />
        <meta name='viewport' content='width=device-width, initial-scale=1.0' />
        <meta name='keywords' content={KEYWORDS} />
        <meta name='robots' content='index, follow' />
        <meta http-equiv='Content-Type' content='text/html; charset=utf-8' />
        <meta http-equiv='content-language' content='pl-PL' />
        <meta name='author' content={COMPANY_NAME} />
        <meta name='DC.title' content={TITLE} />
        <meta name='geo.region' content='PL-DS' />
        <meta name='geo.placename' content={CONTACT.CITY} />
        <meta name='geo.position' content={`${CONTACT.LATITUDE};${CONTACT.LONGITUDE}`} />
        <meta name='ICBM' content={`${CONTACT.LATITUDE}, ${CONTACT.LONGITUDE}`} />

        {/* Open Graph / Facebook */}
        <meta property='og:type' content='website' />
        <meta property='og:url' content={URL} />
        <meta property='og:title' content={TITLE} />
        <meta property='og:description' content={DESCRIPTION} />
        <meta property='og:image' content={IMAGE_URL} />

        {/* Twitter */}
        <meta property='twitter:card' content='summary_large_image' />
        <meta property='twitter:url' content={URL} />
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
                "@id": ${URL},
                "url": ${URL},
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
        <meta name='msapplication-TileColor' content='#ffffff' />
        <meta name='theme-color' content='#ffffff' />
        <link rel='manifest' href='/manifest.json' />
        <link rel='canonical' href={URL} />

        {/* Bootstrap */}
        <link href='https://cdn.jsdelivr.net/npm/bootstrap@5.0.1/dist/css/bootstrap.min.css' rel='stylesheet' />
        <script async src='https://cdn.jsdelivr.net/npm/bootstrap@5.0.1/dist/js/bootstrap.bundle.min.js' />
    </NextHead>
);

export default Head;
