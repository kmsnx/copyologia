import Image from '../Image';
import { BACKGROUND_IMAGES } from '../../data/images';

const BackgroundImage = ({ route }) => (
  <Image
    {...BACKGROUND_IMAGES[route.path]}
    width="80px"
    height="80px"
    externalClassName="fullscreenBackground"
  />
);

export default BackgroundImage;
