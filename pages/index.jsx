import Image from './components/Image';
import Head from './components/Head';
import Navigation from './components/Navigation';
import { HOME as ROUTE, ABOUT, FAQ, OFFER } from './data/routes';
import { COMPANY_NAME, DESCRIPTION } from './data/siteInfo';

const lottieStyle = {
    position: 'absolute',
    zIndex: -1,
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    margin: 'auto',
};
const navCardStyle = {
    background: 'rgba(255,255,255, 0.4)',
    margin: 'auto',
    verticalAlign: 'middle',
    width: '200px',
    height: '200px',
    display: 'table'
};

const navCardTextStyle = {
    display: 'table-cell',
    verticalAlign: 'middle',
};

const Home = () => {
    return (
        <>
            <Head />
            <Navigation currentPath={ROUTE.path} />
            <main className='container'>
                <Image src='/img/landing.jpg' externalClassName='fullscreenBackground' />
                <div className='row my-5 justify-content-end'>
                    <h1 className='text-end text-uppercase text-primary fw-bolder fs-1'>{COMPANY_NAME}</h1>
                    <h3 className='w-lg-50 text-end fw-light font-monospace fs-3'>{DESCRIPTION}</h3>
                </div>
                <div className='row mt-5 justify-content-between'>
                    <div className='col-6 col-lg-3 my-2'>
                        <a
                            href={ABOUT.path}
                            className='nav-link rounded shadow-lg text-dark text-center'
                            style={navCardStyle}
                        >
                            <span className='fs-3 fw-lighter' style={navCardTextStyle}>
                                {ABOUT.name}
                            </span>
                        </a>
                    </div>

                    <div className='col-6 col-lg-3 my-2'>
                        <a className='nav-link rounded shadow-lg text-dark text-center' style={navCardStyle}>
                            <span className='fs-3 fw-lighter' style={navCardTextStyle}>
                                ?
                            </span>
                        </a>
                    </div>

                    <div className='col-6 col-lg-3 my-2'>
                        <a
                            href={OFFER.subItems.PACKAGES.path}
                            className='nav-link rounded shadow-lg text-dark text-center'
                            style={navCardStyle}
                        >
                            <span className='fs-3 fw-lighter' style={navCardTextStyle}>
                                {OFFER.subItems.PACKAGES.name}
                            </span>
                        </a>
                    </div>

                    <div className='col-6 col-lg-3 my-2'>
                        <a
                            href={FAQ.path}
                            className='nav-link rounded shadow-lg text-dark text-center'
                            style={navCardStyle}
                        >
                            <span className='fs-3 fw-lighter' style={navCardTextStyle}>
                                {FAQ.name}
                            </span>
                        </a>
                    </div>
                </div>
            </main>
        </>
    );
};

export default Home;
