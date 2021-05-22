import Head from '../components/Head';
import Footer from '../components/Footer';
import Navigation from '../components/Navigation';
import { CONTACT as ROUTE } from '../data/routes';
import { CONTACT } from '../data/siteInfo';
import { Row, Col } from 'react-bootstrap';

const Contact = () => (
    <>
        <Head />
        <Navigation currentPath={ROUTE.path} />
        <main className='container min-vh-80 mt-5'>
            <Row className='mt-5'>
                <Col xs={12} lg={6} className='my-5'>
                    <address vocab='http://schema.org/' typeof='PostalAddress'>
                        <strong property='name' className='fs-3 font-weight-bold text-dark'>
                            Copyologia
                        </strong>
                        <br />
                        <a href={`mailto:${CONTACT.EMAIL}`} className='text-dark'>
                            <span property='email'>{CONTACT.EMAIL}</span>
                        </a>
                        <br />
                        <a href={`tel:${CONTACT.PHONE}`} className='text-dark'>
                            <span property='telephone'>{CONTACT.PHONE}</span>
                        </a>
                        <br />
                        <span property='streetAddress'>{CONTACT.STREET}</span>
                        <br />
                        <span property='postalCode'>{CONTACT.ZIP}</span>
                        {', '}
                        <span property='addressLocality'>{CONTACT.CITY}</span>
                    </address>
                </Col>
                <Col xs={12} lg={6}>
                    <iframe
                        src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2502.8863327241593!2d17.07643241612327!3d51.14744717957756!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x470fe9aa86493753%3A0x91d9c0afcc7bf8b4!2sPrzejazdowa%2013A%2C%2051-167%20Wroc%C5%82aw!5e0!3m2!1spl!2spl!4v1621451681339!5m2!1spl!2spl'
                        width='100%'
                        height='600px'
                        style={{ border: 0 }}
                        loading='lazy'
                    ></iframe>
                </Col>
            </Row>
        </main>
        <Footer externalClassName='text-dark' />
    </>
);

export default Contact;
