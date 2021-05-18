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
    subItems: [
        {
            name: 'Teksty i Artykuły',
            path: '/teksty-artykuly',
        },
        {
            name: 'Korekty Tekstów',
            path: '/korekty-tekstow',
        },
        {
            name: 'Dodatkowe Usługi',
            path: '/dodatkowe-uslugi',
        },
        {
            name: 'Media Społecznościowe',
            path: '/media-spolecznosciowe',
        },
        {
            name: 'Pakiety',
            path: '/pakiety-abonamenty',
        },
    ],
};

export default [
    HOME,
    ABOUT,
    OFFER,
    FAQ,
    CONTACT,
];
