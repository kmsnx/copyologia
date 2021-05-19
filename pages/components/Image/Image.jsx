import { COMPANY_NAME } from '../../data/siteInfo';
import NextImage from 'next/image';

const Image = ({ src, alt = COMPANY_NAME, width = '100vw', height = '100vh', quality = 90, externalClassName }) => (
    <NextImage
        loading='lazy'
        decoding='async'
        alt={alt}
        width={width}
        height={height}
        src={src}
        quality={quality}
        className={externalClassName}
    />
);

export default Image;
