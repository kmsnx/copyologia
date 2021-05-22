import Head from '../components/Head';
import Image from '../components/Image';
import Footer from '../components/Footer';
import Navigation from '../components/Navigation';
import { ABOUT as ROUTE, CONTACT, FAQ } from '../data/routes';
import { Row, Col } from 'react-bootstrap';

const About = () => (
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
                        Spodziewasz się, że za chwilę będę składać wyświechtane obietnice o najwyższej jakości, puste
                        gwarancje satysfakcji i zapewnienia o innowacyjności? Nie tym razem. To nie jest kolejna notatka
                        pisana od szablonu, a zaproszenie do poznania mnie i mojego zawodu. Mam na imię Patryk, teksty
                        piszę już od dzieciaka, a profesjonalnym copywritingiem zajmuję się od 2017 roku. Początkowo
                        była to forma dorobienia kilku groszy na studiach, by odciążyć rodziców i móc sobie pozwolić na
                        sobotnie wyjścia ze znajomymi. Po drodze zaliczyłem przygodę z etatową pracą w sektorze
                        finansowym, która - delikatnie mówiąc - nie sprawiała mi satysfakcji. Dziś mogę o sobie
                        powiedzieć, że z zawodu jestem szczęśliwym człowiekiem: praca jest jednocześnie moim hobby, a
                        każdego dnia spotykam sympatycznych ludzi, którzy decydują się na współpracę ze mną. Choć czasem
                        ciężko jest zachować work-life balance, to lubię copywriting i cieszę się, że mogę być częścią
                        projektu moich Klientów. Tych samych Klientów, z którymi nierzadko utrzymuję relacje
                        pozabiznesowe: wspólny lunch czy wyjście na squasha to jedna z satysfakcjonujących części mojej
                        pracy.
                    </p>
                </Col>
            </Row>
            <Row className='my-5'>
                <Col>
                    <p className='text-justify'>
                        Jako copywriter kieruję się pewnymi zasadami i regułami, które w skrócie można zdefiniować jako
                        <strong> KUNSZT</strong>:
                    </p>
                    <ul>
                        <li>
                            <strong>K</strong> jak Kreatywność - każde zlecenie traktuję jako wyjątkowe, nowe wyzwanie i
                            mimo wcześniejszych realizacji w podobnym zakresie, przekazuję niepowtarzalną i unikalną
                            treść;
                        </li>
                        <li>
                            <strong>U</strong> jak Umiejętne komunikowanie - coś, co można nazwać “zgrabnym przelewaniem
                            myśli na papier”, czyli posługiwanie się atrakcyjną w odbiorze i w pełni zrozumiałą formą
                            językową;
                        </li>
                        <li>
                            <strong>N</strong> jak Nienaganny język - choć każdemu z nas zdarza się literówka lub czeski
                            błąd, to finalny tekst cechuje się wysoką jakością, biegłością w dziedzinie ortografii,
                            stylistyki oraz interpunkcji;
                        </li>
                        <li>
                            <strong>S</strong> jak Samodyscyplina - w każde powierzone zlecenie angażuje 100% zdobytych
                            umiejętności, jednocześnie konsekwentnie przygotowuję treści zgodnie z naszymi ustaleniami;
                        </li>
                        <li>
                            <strong>Z</strong> jak Znajomość tematu - niektóre zagadnienia znam biegle, o innych
                            pierwszy raz słyszę, ale dzięki sprawnemu i kompleksowemu researchowi przygotuję wartościowy
                            tekst na większość tematów;
                        </li>
                        <li>
                            <strong>T</strong> jak Troska o efekt - jeśli oczekujesz pewnych rozwiązań, które w moim
                            odczuciu nie będą najlepszym wyborem, to zakomunikuję to, proponując bardziej dopasowaną
                            alternatywę;
                        </li>
                    </ul>
                </Col>
            </Row>
            <Row className='my-5'>
                <Col>
                    <p className='text-justify'>
                        Misją mnie jako copywritera jest przygotowanie treści, które będą trafną odpowiedzią na Twoje
                        potrzeby. Chcę, by Twoje produkty same się sprzedawały, Twoja strona internetowa generowała
                        wiele unikalnych odsłon, a Twoje blogi czytało się z przyjemnością. Choć nie zawsze jest to
                        łatwe zadanie, to zawsze znajdę sposób, by przygotować dla Ciebie ciekawe i wartościowe treści.
                        Wizja osiągania celu to przede wszystkim współpraca: podczas gdy Ty opowiadasz mi o swojej
                        branży i firmie, ja aktywnie słucham, analizuję i dopytuję, badając potrzeby i wyszukując
                        odpowiednie rozwiązania. Poszukuję tych środków, które przybliżą nas do celu i sugeruję
                        rozwiązania, pamiętając jednak, że ostateczne zdanie należy do Ciebie. Nie zakładam jednej,
                        uniwersalnej strategii, bo wiem, że indywidualny i niepowtarzalny charakter podmiotów nie
                        pozwala ustalić ścisłych ram postępowania. Zamiast utartych ścieżek i powtarzalnych schematów,
                        stawiam na otwarty umysł, chęć zrozumienia drugiej osoby i wykonania powierzonej mi pracy w
                        sposób możliwie kreatywny i profesjonalny. Czego dokładnie możesz ode mnie oczekiwać? Koniecznie
                        sprawdź zawartość zakładki “Oferta”, a w przypadku wątpliwości rzuć okiem na{' '}
                        <a href={FAQ.path} className='text-dark'>
                            <strong>{FAQ.name}</strong>
                        </a>
                        . Pamiętaj, że cały czas jestem do Twojej dyspozycji, a sposoby na porozumienie się ze mną
                        zostawiam pod hasłem{' '}
                        <a href={CONTACT.path} className='text-dark'>
                            <strong>{CONTACT.name}</strong>
                        </a>
                    </p>
                </Col>
            </Row>
        </main>
        <Footer externalClassName='text-dark' />
    </>
);

export default About;
