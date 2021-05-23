import { Col, Row } from 'react-bootstrap';
import BackgroundImage from '../components/BackgroundImage';
import Head from '../components/Head';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { HOME as ROUTE, OFFER } from '../data/routes';
import { COMPANY_NAME, DESCRIPTION } from '../data/siteInfo';

const navCardStyle = {
  background: 'rgba(255,255,255, 0.4)',
  width: '100%',
  height: '200px',
  display: 'table',
};

const navCardTextStyle = {
  display: 'table-cell',
  verticalAlign: 'middle',
};

const cards = [
  {
    href: OFFER.subItems.TEXTS_AND_ARTICLES.path,
    name: OFFER.subItems.TEXTS_AND_ARTICLES.name,
  },
  {
    href: OFFER.subItems.PRODUCT_DESCRIPTIONS.path,
    name: OFFER.subItems.PRODUCT_DESCRIPTIONS.name,
  },
  {
    href: OFFER.subItems.TEXT_CORRECTIONS.path,
    name: OFFER.subItems.TEXT_CORRECTIONS.name,
  },
  {
    href: OFFER.subItems.PACKAGES.path,
    name: OFFER.subItems.PACKAGES.name,
  },
];

const Home = () => (
  <>
    <Head />
    <Navigation currentPath={ROUTE.path} />
    <main className="container min-vh-80">
      <BackgroundImage route={ROUTE} />
      <Row className="justify-content-end">
        <Col>
          <h1 className="text-uppercase text-right">
            <strong>{COMPANY_NAME}</strong>
          </h1>
        </Col>
      </Row>
      <Row className="justify-content-end">
        <Col xs={12} lg={6}>
          <h2 className="font-weight-light text-right">{DESCRIPTION}</h2>
        </Col>
      </Row>
      <Row className="my-5">
        {cards.map(({ href, name }) => (
          <Col xs={12} md={6} lg={3} className="my-2 text-center" key={name}>
            <a
              href={href}
              style={navCardStyle}
              className="nav-link rounded shadow-lg text-dark text-center mx-auto"
            >
              <span className="fs-3 font-weight-light" style={navCardTextStyle}>
                {name}
              </span>
            </a>
          </Col>
        ))}
      </Row>
    </main>
    <Footer externalClassName="text-dark" />
  </>
);

export default Home;
