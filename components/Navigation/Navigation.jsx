import { useEffect, useRef } from 'react';
import { debounce } from 'lodash';
import {
  Navbar, Nav, NavDropdown, Container,
} from 'react-bootstrap';
import ROUTES, { HOME } from '../../data/routes';
import Image from '../Image';
import { COMPANY_NAME } from '../../data/siteInfo';
import { LOGO } from '../../data/images';
import { NAV_STICKY_OFFSET } from '../../data/config';

const renderNavDropdownItem = (item, subItems, currentPath) => (
  <NavDropdown key={item.name} title={item.name} id="collasible-nav-dropdown">
    {Object.values(subItems).map(({ path, name }) => {
      const isActive = path === currentPath;

      return (
        <NavDropdown.Item
          key={name}
          href={path}
          className={isActive ? 'active' : undefined}
          style={{ background: 'transparent !important' }}
        >
          {name}
        </NavDropdown.Item>
      );
    })}
  </NavDropdown>
);
const renderNavItem = ({ name, path }, currentPath) => {
  const isActive = path === currentPath;

  return (
    <Nav.Link
      key={name}
      className={isActive ? 'active' : undefined}
      aria-current={isActive ? 'page' : undefined}
      href={path}
    >
      {name}
    </Nav.Link>
  );
};

const renderNavItems = (currentPath) => ROUTES.map(({ subItems, ...item }) => (subItems
  ? renderNavDropdownItem(item, subItems, currentPath)
  : renderNavItem(item, currentPath)));

const Navigation = ({ currentPath = '/' }) => {
  const nav = useRef();
  useEffect(() => {
    const handleScroll = debounce(() => {
      if (!nav?.current) return;
      if (
        (window.pageYOffset >= NAV_STICKY_OFFSET && !nav.current.classList.contains('bg-white'))
        || (window.pageYOffset < NAV_STICKY_OFFSET && nav.current.classList.contains('bg-white'))
      ) {
        nav.current.classList.toggle('bg-white');
      }
    });
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <Navbar sticky="top" expand="lg" ref={nav}>
      <Container>
        <Navbar.Brand href={HOME.path}>
          {LOGO ? <Image {...LOGO} width="238.86px" height="40px" /> : COMPANY_NAME}
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
          <Nav>{renderNavItems(currentPath)}</Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navigation;
