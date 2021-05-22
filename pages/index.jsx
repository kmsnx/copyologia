import Image from '../components/Image';
import Head from '../components/Head';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { HOME as ROUTE, OFFER } from '../data/routes';
import { COMPANY_NAME, DESCRIPTION } from '../data/siteInfo';
import { Col, Row } from 'react-bootstrap';

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
        <main className='container min-vh-80'>
            <Image src='/img/landing.jpg' externalClassName='fullscreenBackground' />
            <Row className='px-3 justify-content-end'>
                <h1 className='text-uppercase fancyLetterSpacing'>
                    <strong>{COMPANY_NAME}</strong>
                </h1>
            </Row>
            <Row className='px-3 justify-content-end'>
                <h3 className='font-weight-light w-lg-50 text-right'>{DESCRIPTION}</h3>
            </Row>
            <Row className='my-5'>
                {cards.map((item) => (
                    <Col xs={12} md={6} lg={3} className='my-2 text-center'>
                        <a
                            href={item.href}
                            style={navCardStyle}
                            className='nav-link rounded shadow-lg text-dark text-center mx-auto'
                        >
                            <span className='fs-3 font-weight-light' style={navCardTextStyle}>
                                {item.name}
                            </span>
                        </a>
                    </Col>
                ))}
            </Row>
        </main>
        <Footer externalClassName='text-dark' />
    </>
);

export default Home;
