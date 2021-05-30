import { Row, Col } from 'react-bootstrap';
import Head from '../components/Head';
import BackgroundImage from '../components/BackgroundImage';
import Footer from '../components/Footer';
import Navigation from '../components/Navigation';
import { CONTACT as ROUTE } from '../data/routes';
import { CONTACT, TITLE } from '../data/siteInfo';

const Contact = () => (
  <>
    <Head name={ROUTE.name} />
    <Navigation currentPath={ROUTE.path} />
    <main className="container min-vh-80 mt-5">
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
          <p>
            Skontaktuj się ze mną - porozmawiamy o Twoich potrzebach i oczekiwaniach. Pozostaję do
            Twojej dyspozycji mailowo i telefonicznie, możesz mnie także odwiedzić osobiście w
            siedzibie firmy po wcześniejszym umówieniu.
          </p>
        </Col>
      </Row>
      <Row className="my-5">
        <Col xs={12} lg={6} className="my-5">
          <address vocab="https://schema.org/" typeof="PostalAddress">
            <strong property="name" className="fs-3 font-weight-bold text-dark">
              {CONTACT.COMPANY_NAME}
            </strong>
            <br />
            <a href={`mailto:${CONTACT.EMAIL}`} className="text-dark">
              <span property="email">{CONTACT.EMAIL}</span>
            </a>
            <br />
            <a href={`tel:${CONTACT.PHONE}`} className="text-dark">
              <span property="telephone">{CONTACT.PHONE}</span>
            </a>
            <br />
            <span property="streetAddress">{CONTACT.STREET}</span>
            <br />
            <span property="postalCode">{CONTACT.ZIP}</span>
            {', '}
            <span property="addressLocality">{CONTACT.CITY}</span>
            <br />
            <span>
              NIP:
              {CONTACT.NIP}
            </span>
            <br />
            <span>
              REGON:
              {CONTACT.REGON}
            </span>
          </address>
          <p>Czas pracy:</p>
          <ul>
            <li>Poniedziałek - piątek: 8:30 - 20:30</li>
            <li>Sobota: 9:30 - 15:30 (pierwsza i trzecia sobota miesiąca)</li>
            <li>Niedziela: Nieczynne</li>
          </ul>
        </Col>
        <Col xs={12} lg={6}>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2502.8863327241593!2d17.07643241612327!3d51.14744717957756!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x470fe9aa86493753%3A0x91d9c0afcc7bf8b4!2sPrzejazdowa%2013A%2C%2051-167%20Wroc%C5%82aw!5e0!3m2!1spl!2spl!4v1621451681339!5m2!1spl!2spl"
            width="100%"
            height="600px"
            allowFullScreen={false}
            style={{ border: 0 }}
            loading="lazy"
            title={`Google Maps dla ${TITLE}`}
          />
        </Col>
      </Row>
    </main>
    <Footer externalClassName="text-dark" />
  </>
);

export default Contact;
