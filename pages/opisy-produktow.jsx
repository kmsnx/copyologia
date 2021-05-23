import { Row, Col } from 'react-bootstrap';
import Head from '../components/Head';
import BackgroundImage from '../components/BackgroundImage';
import Footer from '../components/Footer';
import Navigation from '../components/Navigation';
import { OFFER } from '../data/routes';

const { PRODUCT_DESCRIPTIONS: ROUTE } = OFFER.subItems;

const ProductDescriptions = () => (
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
            Rynek e-commerce systematycznie rozwija się i zyskuje na wartości, co daje dwie
            niezwykle istotne informacje zwrotne. Pierwsza z nich jest taka, że coraz chętniej
            kupujemy w internecie, co pozwala wirtualnym sprzedawcom maksymalizować zyski. Druga -
            mniej optymistyczna - głosi, że z roku na rok konkurencja wzrasta, toteż konieczne jest
            skuteczne wyróżnienie się z tłumu. Chętnie Ci w tym pomogę, przygotowując unikatowe
            opisy produktów i usług oferowanych w Twoim sklepie. Niezależnie od tego, czy prowadzisz
            indywidualną platformę sprzedażową, czy korzystasz z takich portali jak Allegro lub OLX,
            opiszę Twoje świadczenia lub towary. Każdy produkt zyskuje nie tylko wartość
            informacyjną, ale także komunikat marketingowy, dzięki czemu czytelnik zyskuje
            świadomość i chęć zakupu produktu. Poza samym tekstem wyświetlanym na stronie,
            przygotowuję meta title (tytuły wyświetlane w przeglądarkach dla danego towaru) oraz
            meta description (opisy prezentowane pod tytułem w przeglądarce). Kompleksowe opisanie
            produktu sprawia, że Twoim zadaniem będzie wyłącznie dobranie zdjęć produktowych, by móc
            wstawić nowy towar na swoje wirtualne półki sklepowe.
          </p>
        </Col>
      </Row>
    </main>
    <Footer externalClassName="text-dark" />
  </>
);

export default ProductDescriptions;
