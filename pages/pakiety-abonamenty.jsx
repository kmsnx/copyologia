import { Row, Col } from 'react-bootstrap';
import Head from '../components/Head';
import BackgroundImage from '../components/BackgroundImage';
import Footer from '../components/Footer';
import Navigation from '../components/Navigation';
import { OFFER } from '../data/routes';

const { PACKAGES: ROUTE } = OFFER.subItems;

const Packages = () => (
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
            Potrzebujesz znacznej liczby tekstów? Masz regularne zapotrzebowanie na treści? A może
            chcesz dysponować wpisami na bloga i postami social media na zapas? Jeśli na
            którekolwiek z powyższych pytań Twoja odpowiedź brzmi “tak”, to jesteś w idealnym
            miejscu. Oferta abonamentów tekstowych i pakietów jest stworzona z myślą o
            przedsiębiorcach, którzy chcą co miesiąc otrzymywać z góry określone zasoby treści. To
            rozwiązanie łączy w sobie szereg zalet, na czele z pewnością regularnej obsługi,
            możliwością planowania wpisów oraz zarządzania treścią. Nie można pominąć istotnego
            aspektu, jakim jest korzyść finansowa - zamawiając większą ilość artykułów, otrzymujesz
            zrabatowaną cenę, a oszczędność wynosi od 15 do nawet 42 % bazowej stawki. Abonamenty
            tekstowe obejmują trzy zróżnicowane kategorie:
          </p>
          <ul>
            <li>
              <strong>Artykuły i wpisy</strong>
              {' '}
              - angażujące treści przeznaczone do publikacji na
              blogach firmowych, sporządzone jako felietony, opracowane jako artykuły sponsorowane
              czy wykonane jako inne, pokrewne teksty;
            </li>
            <li>
              <strong>Opisy produktowe</strong>
              {' '}
              - doskonałe rozwiązanie w sytuacji, gdy tworzysz lub
              rozbudowujesz swój sklep internetowy i potrzebujesz krótkich tekstów łączących walory
              marketingowe i informacyjne;
            </li>
            <li>
              <strong>Wpisy na social media</strong>
              {' '}
              - zdecydowana większość regularnie śledzi media
              społecznościowe, a zorganizowane prowadzenie i regularne publikacje na profilu
              firmowym stanowią podstawę komunikacji z odbiorcami;
            </li>
          </ul>
        </Col>
      </Row>
    </main>
    <Footer externalClassName="text-dark" />
  </>
);

export default Packages;
