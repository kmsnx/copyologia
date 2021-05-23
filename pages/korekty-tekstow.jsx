import { Row, Col } from 'react-bootstrap';
import Head from '../components/Head';
import BackgroundImage from '../components/BackgroundImage';
import Footer from '../components/Footer';
import Navigation from '../components/Navigation';
import { OFFER } from '../data/routes';

const { TEXT_CORRECTIONS: ROUTE } = OFFER.subItems;

const TextCorrections = () => (
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
            Seneka Starszy zwykł mawiać, że mylenie się jest rzeczą ludzką. Trudno się z tym nie
            zgodzić, biorąc pod uwagę, że większość drobnych błędów popełniana jest nieświadomie.
            Nie zmienia to jednak faktu, że literówki, czeskie błędy lub pomyłki interpunkcyjne są
            niemile widziane we wszelkiego rodzaju tekstach. Niektóre wypaczenia, takie jak błędy
            ortograficzne w pracy naukowej czy niepoprawne wykorzystanie słów w artykułach
            branżowych, mogą całkowicie zdyskredytować autora. Aby zapobiec blamażowi i
            zagwarantować pewność co do napisanej treści, proponuję korektę tekstu. Otrzymując
            bazowy dokument, przeprowadzam analizę pod kątem błędów stylistycznych, źle
            zastosowanego słownictwa, ortografów, literówek, pomyłek interpunkcyjnych i powtórzeń.
            Przy pracach dyplomowych dodatkowo sprawdzam tekst w kilku niezależnych systemach
            antyplagiatowych - w przypadku wykrycia wysokiego wskaźnika plagiatu pomagam rozwiązać
            ten problem.
          </p>
        </Col>
      </Row>
    </main>
    <Footer externalClassName="text-dark" />
  </>
);

export default TextCorrections;
