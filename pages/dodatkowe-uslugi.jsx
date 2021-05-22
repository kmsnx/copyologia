import Head from '../components/Head';
import Image from '../components/Image';
import Footer from '../components/Footer';
import Navigation from '../components/Navigation';
import { OFFER } from '../data/routes';
import { Row, Col } from 'react-bootstrap';

const { ADDITIONAL_SERVICES: ROUTE } = OFFER.subItems;

const AdditionalServices = () => (
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
            <Row className='my-5'>
                <Col>
                    <p className='text-justify'>
                        Moje usługi jako copywritera nie ograniczają się wyłącznie do pisania artykułów. Prowadzę także
                        szereg kompleksowych działań, które choć nie są bezpośrednio związane z kreacją treści, to w
                        istotny sposób wesprą Cię w działaniach promocji. Oferuję cztery gatunki aktywności, które są
                        luźno powiązane z copywritingiem:
                    </p>
                    <ol>
                        <li>
                            <strong>Wsparcie branży artystycznej</strong> - przygotowuję teksty, które mogą być
                            wykorzystane jako tekst piosenki, fragment książki, przemówienie czy scenariusz wydarzenia.
                        </li>
                        <li>
                            <strong>Konsultacja text content marketing</strong> - zastanawiasz się, czy treści tekstowe
                            na Twojej stronie www, blogu firmowym, medium społecznościowym lub w innej przestrzeni są
                            odpowiednie? Sprawdzę to i omówię podczas sesji konsultacyjnej.
                        </li>
                        <li>
                            <strong>Działalność informacyjna</strong> - w Twoim imieniu wybiorę się na wydarzenia
                            sportowe, eventy kulturalne, targi biznesowe lub na inne zdarzenia okolicznościowe, podczas
                            których na bieżąco sporządzę relację lub przygotuję podsumowanie ciekawym artykułem.
                        </li>
                        <li>
                            <strong>Research informacji</strong> - propozycja dla osób, które samodzielnie ubiorą treść
                            w słowa, jednak potrzebują wsparcia w zakresie wyszukiwania informacji, interpretacji danych
                            oraz analizy przedstawionych rezultatów.
                        </li>
                    </ol>
                    <p>
                        Nie znalazłeś poszukiwanej przez Ciebie usługi w zakładce ofertowej? Skontaktuj się ze mną i
                        przedstaw swoje potrzeby, oczekiwania i wymagania. Na podstawie przedłożonych informacji
                        postaram się dobrać najlepsze dla Ciebie rozwiązania, które będą stanowić odpowiedź na Twoje
                        zapotrzebowanie.
                    </p>
                </Col>
            </Row>
        </main>
        <Footer externalClassName='text-dark' />
    </>
);

export default AdditionalServices;
