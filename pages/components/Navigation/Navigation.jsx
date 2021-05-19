import ROUTES, { HOME } from '../../data/routes';

const renderNavDropdownItem = (item, subItems, currentPath) => (
    <li className='nav-item dropdown' key={item.name}>
        <a
            className='nav-link dropdown-toggle'
            href='#'
            id='navbarDropdownMenuLink'
            role='button'
            data-bs-toggle='dropdown'
            aria-expanded='false'
        >
            {item.name}
        </a>
        <ul className='dropdown-menu' aria-labelledby='navbarDropdownMenuLink'>
            {Object.values(subItems).map(({ path, name }) => {
                const isActive = path === currentPath;

                return (
                    <li key={name}>
                        <a className='dropdown-item' href={path}>
                            {name}
                        </a>
                    </li>
                );
            })}
        </ul>
    </li>
);
const renderNavItem = ({ name, path }, currentPath) => {
    const isActive = path === currentPath;

    return (
        <li className='nav-item' key={name}>
            <a
                className={isActive ? 'nav-link active' : 'nav-link'}
                aria-current={isActive ? 'page' : undefined}
                href={path}
            >
                {name}
            </a>
        </li>
    );
};

const renderNavItems = (currentPath) =>
    ROUTES.map(({ subItems, ...item }) =>
        subItems ? renderNavDropdownItem(item, subItems, currentPath) : renderNavItem(item, currentPath),
    );

const Navigation = ({ currentPath = '/' }) => (
    <nav className='navbar sticky-top navbar-expand-lg navbar-light mb-5'>
        <div className='container'>
            <a className='navbar-brand' href={HOME.path}>
                Navbar
            </a>
            <button
                className='navbar-toggler'
                type='button'
                data-bs-toggle='collapse'
                data-bs-target='#navbarNav'
                aria-controls='navbarNav'
                aria-expanded='false'
                aria-label='Toggle navigation'
            >
                <span className='navbar-toggler-icon'></span>
            </button>
            <div className='collapse navbar-collapse justify-content-end' id='navbarNav'>
                <ul className='navbar-nav'>{renderNavItems(currentPath)}</ul>
            </div>
        </div>
    </nav>
);

export default Navigation;
