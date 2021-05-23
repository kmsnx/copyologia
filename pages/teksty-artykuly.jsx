import { Row, Col } from 'react-bootstrap';
import Head from '../components/Head';
import BackgroundImage from '../components/BackgroundImage';
import Footer from '../components/Footer';
import Navigation from '../components/Navigation';
import { OFFER } from '../data/routes';

const { TEXTS_AND_ARTICLES: ROUTE } = OFFER.subItems;

const TextsAndArticles = () => (
  <>
    <Head name={ROUTE.name} />
    <Navigation currentPath={ROUTE.path} />
    <main className="container min-vh-80">
      <BackgroundImage route={ROUTE} />
      <Row className="justify-content-center">
        <Col>
          <h1 className="text-uppercase text-center">
            <strong>{ROUTE.name}</strong>
          </h1>
        </Col>
      </Row>
      <Row className="my-5">
        <Col>
          <p className="text-justify">
            Podstawowy zakres działania copywritera to tworzenie szeroko rozumianych treści pisanych
            i operowanie słowem. Artykuły branżowe, wpisy na bloga firmowego, teksty reklamowe, a
            nawet uroczyste mowy czy felietony tematyczne - wszystkie powyższe treści to efekty
            mojej pracy. Podejmuję się zagadnień z rozmaitych dziedzin: od lekkiej tematyki
            lifestyle przez zaawansowane branże techniczne. Biorąc pod uwagę osobiste
            zainteresowania i doświadczenie, najlepiej czuję się w takich tematach, jak ekonomia,
            finanse, prawo, sport, motoryzacja, kulinaria oraz podróżnictwo. Nie zmienia to faktu,
            że zamawiając tekst z dowolnej innej niszy, otrzymasz profesjonalnie przygotowany i
            ciekawy w odbiorze dokument. Kwestię finalnej długości treści także pozostawiam do
            uzgodnienia; stworzę zarówno zwięzły wpis, jak również rozbudowany artykuł. Zarówno w
            długich, jak i krótkich tekstach uwzględniam słowa kluczowe dedykowane pod SEO, które w
            sposób naturalny wplatam w zdania.
          </p>
        </Col>
      </Row>
    </main>
    <Footer externalClassName="text-dark" />
  </>
);

export default TextsAndArticles;
