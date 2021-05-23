import { Row, Col } from 'react-bootstrap';
import Head from '../components/Head';
import BackgroundImage from '../components/BackgroundImage';
import Footer from '../components/Footer';
import Navigation from '../components/Navigation';
import { OFFER } from '../data/routes';

const { SOCIAL_MEDIA: ROUTE } = OFFER.subItems;

const SocialMedia = () => (
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
            Wiele osób nie wyobraża sobie funkcjonowania bez mediów społecznościowych. Jedni używają
            aplikacji do komunikowania się ze znajomymi, inni do przekazywania wiadomości z
            otoczenia, a jeszcze inni do przeglądania memów. Co prawda, zdjęcia śmiesznych kotów i
            tworzenie zabawnych obrazków to nie moja nisza, ale za to redagowanie i tworzenie postów
            na social media - już tak. Oferuję swoje usługi copywriterskie w zakresie czterech
            kluczowych platform: Twittera, Facebooka, Instagrama oraz LinkedIn. Doskonale zdaję
            sobie sprawę z tego, że prowadząc firmę masz setki innych spraw na głowie, dlatego
            odciążę Cię z części obowiązków. Pomogę w doraźnym dodawaniu postów “na już”, zaplanuję
            posty na określony okres rozliczeniowy, jak również zaprojektuję dla Ciebie całą
            strategię komunikacyjną. Niezależnie od tego, czy chcesz poinformować swoich klientów o
            zbliżającej się promocji, czy po prostu chcesz skrócić dystans z odbiorcami - chętnie
            Cię wesprę w dążeniu do Twojego celu.
          </p>
        </Col>
      </Row>
    </main>
    <Footer externalClassName="text-dark" />
  </>
);

export default SocialMedia;
