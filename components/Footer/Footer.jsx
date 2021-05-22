import { SITE_URL, CONTACT, COMPANY_NAME } from '../../data/siteInfo';

const Footer = ({ externalClassName }) => (
    <footer className='text-center mb-4'>
        <a href={SITE_URL} className={externalClassName}>
            <span id='owner'>{COMPANY_NAME}</span> © <span id='year'>{new Date().getFullYear()}</span>{' '}
            <span id='city'>{CONTACT.CITY}</span>
        </a>
    </footer>
);

export default Footer;
