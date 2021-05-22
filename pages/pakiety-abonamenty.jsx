import Head from '../components/Head';
import Image from '../components/Image';
import Footer from '../components/Footer';
import Navigation from '../components/Navigation';
import { OFFER } from '../data/routes';
import { Row, Col } from 'react-bootstrap';

const { PACKAGES: ROUTE } = OFFER.subItems;

const Packages = () => (
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
                        Potrzebujesz znacznej liczby tekstów? Masz regularne zapotrzebowanie na treści? A może chcesz
                        dysponować wpisami na bloga i postami social media na zapas? Jeśli na którekolwiek z powyższych
                        pytań Twoja odpowiedź brzmi “tak”, to jesteś w idealnym miejscu. Oferta abonamentów tekstowych i
                        pakietów jest stworzona z myślą o przedsiębiorcach, którzy chcą co miesiąc otrzymywać z góry
                        określone zasoby treści. To rozwiązanie łączy w sobie szereg zalet, na czele z pewnością
                        regularnej obsługi, możliwością planowania wpisów oraz zarządzania treścią. Nie można pominąć
                        istotnego aspektu, jakim jest korzyść finansowa - zamawiając większą ilość artykułów lub
                        abonament tekstowy, otrzymujesz zrabatowaną cenę, a oszczędność wynosi od 15 do nawet 42 %
                        bazowej stawki.
                    </p>
                </Col>
            </Row>
        </main>
        <Footer externalClassName='text-dark' />
    </>
);

export default Packages;
