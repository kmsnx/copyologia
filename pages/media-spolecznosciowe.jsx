import Head from '../components/Head';
import Image from '../components/Image';
import Footer from '../components/Footer';
import Navigation from '../components/Navigation';
import { OFFER } from '../data/routes';
import { Row, Col } from 'react-bootstrap';

const { SOCIAL_MEDIA: ROUTE } = OFFER.subItems;

const SocialMedia = () => (
    <>
        <Head />
        <Navigation currentPath={ROUTE.path} />
        <main className='container min-vh-80'>
            <Image src={`/img${ROUTE.path}.jpg`} externalClassName='fullscreenBackground' />
            <Row className='px-3 justify-content-center'>
                <h1 className='text-uppercase fancyLetterSpacing'>
                    <strong>{ROUTE.name}</strong>
                </h1>
            </Row>
            <Row className='my-4'>
                <Col>
                    <p className='text-justify'>
                        Podstawowy zakres działania copywritera to tworzenie szeroko rozumianych treści pisanych i
                        operowanie słowem. Artykuły branżowe, wpisy na bloga firmowego, teksty reklamowe, a nawet
                        uroczyste mowy czy felietony tematyczne - wszystkie powyższe treści to efekty mojej pracy.
                        Podejmuję się zagadnień z rozmaitych dziedzin: od lekkiej tematyki lifestyle przez zaawansowane
                        branże techniczne. Biorąc pod uwagę osobiste zainteresowania i doświadczenie, najlepiej czuję
                        się w takich tematach, jak ekonomia, finanse, prawo, sport, motoryzacja, kulinaria oraz
                        podróżnictwo. Nie zmienia to faktu, że zamawiając tekst z dowolnej innej niszy, otrzymasz
                        profesjonalnie przygotowaną i ciekawą w odbiorze treść.
                    </p>
                </Col>
            </Row>
        </main>
        <Footer externalClassName='text-dark' />
    </>
);

export default SocialMedia;
