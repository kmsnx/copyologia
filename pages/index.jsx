import Head from './components/Head';
import Navigation from './components/Navigation';
import { HOME as ROUTE } from './data/routes';

const Home = () => (
    <>
        <Head />
        <Navigation currentPath={ROUTE.path} />
        <main className='container'>
            <h1>{ROUTE.name}</h1>
        </main>
    </>
);

export default Home;
