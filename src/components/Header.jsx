import React from 'react';
import { Link } from 'gatsby';
import headerSyle from './styling/header.module.scss';

const Header = () => {

    return (
    <div className={headerSyle.header_color}>
        <nav className="container-fluid">
            <ul className="row">
                <li>
                    <Link to="/" activeClassName="font-weight-bold">
                        Home
                    </Link>
                </li>

                <li>
                    <Link to="/contact" activeClassName="font-weight-bold">
                        Contact
                    </Link>
                </li>
            </ul>
        </nav>
    </div>
)};
export default Header;