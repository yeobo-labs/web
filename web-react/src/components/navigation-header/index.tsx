import React from 'react';
import {
    BrowserRouter as Router,
    NavLink,
} from 'react-router-dom';
import logo from './images/logo.png';
import './navigation-header.css';

type NavigationHeaderProps = {
    children: React.ReactNode
};

const NavigationHeader = ({ children }: NavigationHeaderProps) => {
    return (
        <Router>
            <div>
                <header>
                    <NavLink to="/">
                        <img src={logo} alt="Yeobo Labs" className="logo" />
                    </NavLink>
                    <ul className="navbar">
                        <li className="navitem">
                            <NavLink to="/productivity" activeClassName="navitem--active">Productivity</NavLink>
                        </li>
                        <li className="navitem">
                            <NavLink to="/fun-games" activeClassName="navitem--active">Fun &amp; Games</NavLink>
                        </li>
                        {/* <li className="navitem">
                            <NavLink to="/portfolio" activeClassName="navitem--active">Portfolio</NavLink>
                        </li> */}
                        {/* <li className="navitem">
                            <NavLink to="/blog" activeClassName="navitem--active">Blog</NavLink>
                        </li> */}
                        {/* <li className="navitem">
                            <NavLink to="/about" activeClassName="navitem--active">About</NavLink>
                        </li> */}
                    </ul>
                </header>

                {children}
            </div>
        </Router>
    )
}

export default NavigationHeader;
