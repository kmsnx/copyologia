export const HOME = {
    name: 'Strona Główna',
    path: '/',
};

export const ABOUT = {
    name: 'O Mnie',
    path: '/o-mnie',
};

export const FAQ = {
    name: 'FAQ',
    path: '/faq',
};

export const CONTACT = {
    name: 'Kontakt',
    path: '/kontakt',
};

export const OFFER = {
    name: 'Oferta',
    path: '/offer',
    subItems: {
        TEXTS_AND_ARTICLES: {
            name: 'Teksty i Artykuły',
            path: '/teksty-artykuly',
        },
        PRODUCT_DESCRIPTIONS: {
            name: 'Opisy Produktów',
            path: '/opisy-produktow',
        },
        TEXT_CORRECTIONS: {
            name: 'Korekty Tekstów',
            path: '/korekty-tekstow',
        },
        ADDITIONAL_SERVICES: {
            name: 'Dodatkowe Usługi',
            path: '/dodatkowe-uslugi',
        },
        SOCIAL_MEDIA: {
            name: 'Media Społecznościowe',
            path: '/media-spolecznosciowe',
        },
        PACKAGES: {
            name: 'Pakiety i Abonamenty',
            path: '/pakiety-abonamenty',
        },
    },
};

export default [
    HOME,
    ABOUT,
    OFFER,
    FAQ,
    CONTACT,
];
