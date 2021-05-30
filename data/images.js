import { SITE_URL, TITLE } from './siteInfo';
import {
  OFFER, CONTACT, HOME, ABOUT, FAQ,
} from './routes';

const SVG_DIR = '/svg';
const IMG_DIR = '/img';
const JPG_EXT = '.jpg';
const SVG_EXT = '.svg';

const LOGO_FILEPATH = `${SVG_DIR}/logo${SVG_EXT}`;

export const SHARE_IMAGE = {
  src: `${SITE_URL}${LOGO_FILEPATH}`,
};

export const LOGO = {
  src: LOGO_FILEPATH,
  alt: `Logo ${TITLE}`,
};

export const BACKGROUND_IMAGES_PREFIX = 'Tło';
export const BACKGROUND_IMAGES = {
  [HOME.path]: {
    src: `${IMG_DIR}/index${JPG_EXT}`,
    alt: `${BACKGROUND_IMAGES_PREFIX} ${HOME.name} ${TITLE}`,
  },
  [ABOUT.path]: {
    src: `${IMG_DIR}${ABOUT.path}${JPG_EXT}`,
    alt: `${BACKGROUND_IMAGES_PREFIX} ${ABOUT.name} ${TITLE}`,
  },
  [CONTACT.path]: {
    src: `${IMG_DIR}${CONTACT.path}${JPG_EXT}`,
    alt: `${BACKGROUND_IMAGES_PREFIX} ${CONTACT.name} ${TITLE}`,
  },
  [FAQ.path]: {
    src: `${IMG_DIR}${FAQ.path}${JPG_EXT}`,
    alt: `${BACKGROUND_IMAGES_PREFIX} ${FAQ.name} ${TITLE}`,
  },
  [OFFER.subItems.TEXTS_AND_ARTICLES.path]: {
    src: `${IMG_DIR}${OFFER.subItems.TEXTS_AND_ARTICLES.path}${JPG_EXT}`,
    alt: `${BACKGROUND_IMAGES_PREFIX} ${OFFER.subItems.TEXTS_AND_ARTICLES.name} ${TITLE}`,
  },
  [OFFER.subItems.PRODUCT_DESCRIPTIONS.path]: {
    src: `${IMG_DIR}${OFFER.subItems.PRODUCT_DESCRIPTIONS.path}${JPG_EXT}`,
    alt: `${BACKGROUND_IMAGES_PREFIX} ${OFFER.subItems.PRODUCT_DESCRIPTIONS.name} ${TITLE}`,
  },
  [OFFER.subItems.TEXT_CORRECTIONS.path]: {
    src: `${IMG_DIR}${OFFER.subItems.TEXT_CORRECTIONS.path}${JPG_EXT}`,
    alt: `${BACKGROUND_IMAGES_PREFIX} ${OFFER.subItems.TEXT_CORRECTIONS.name} ${TITLE}`,
  },
  [OFFER.subItems.ADDITIONAL_SERVICES.path]: {
    src: `${IMG_DIR}${OFFER.subItems.ADDITIONAL_SERVICES.path}${JPG_EXT}`,
    alt: `${BACKGROUND_IMAGES_PREFIX} ${OFFER.subItems.ADDITIONAL_SERVICES.name} ${TITLE}`,
  },
  [OFFER.subItems.SOCIAL_MEDIA.path]: {
    src: `${IMG_DIR}${OFFER.subItems.SOCIAL_MEDIA.path}${JPG_EXT}`,
    alt: `${BACKGROUND_IMAGES_PREFIX} ${OFFER.subItems.SOCIAL_MEDIA.name} ${TITLE}`,
  },
  [OFFER.subItems.PACKAGES.path]: {
    src: `${IMG_DIR}${OFFER.subItems.PACKAGES.path}${JPG_EXT}`,
    alt: `${BACKGROUND_IMAGES_PREFIX} ${OFFER.subItems.PACKAGES.name} ${TITLE}`,
  },
};
