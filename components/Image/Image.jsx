import NextImage from 'next/image';
import { IMAGE } from '../../data/config';
import { TITLE } from '../../data/siteInfo';

const Image = ({
  src,
  layout,
  alt = TITLE,
  width = IMAGE.width,
  height = IMAGE.height,
  quality = IMAGE.quality,
  externalClassName = '',
}) => (
  <NextImage
    loading="lazy"
    decoding="async"
    src={src}
    alt={alt}
    width={!layout && width}
    height={!layout && height}
    layout={layout}
    quality={quality}
    className={externalClassName || undefined}
  />
);

export default Image;
