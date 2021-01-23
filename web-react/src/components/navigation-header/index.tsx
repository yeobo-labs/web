import React from 'react';
import {
    BrowserRouter as Router,
    NavLink,
} from 'react-router-dom';
import logo from './images/logo.png';
import styles from './navigation-header.module.css';

type NavigationHeaderProps = {
    children: React.ReactNode
};

const NavigationHeader = ({ children }: NavigationHeaderProps) => {
    return (
        <Router>
            <>
                <header>
                    <NavLink to="/">
                        <img src={logo} alt="Yeobo Labs" className={styles.logo} />
                    </NavLink>
                    <ul className={styles.navbar}>
                        <li className={styles.navitem}>
                            <NavLink to="/productivity" activeClassName={styles.navitemActive}>Productivity</NavLink>
                        </li>
                        <li className={styles.navitem}>
                            <NavLink to="/fun-games" activeClassName={styles.navitemActive}>Fun &amp; Games</NavLink>
                        </li>
                        {/* <li className={styles.navitem}>
                            <NavLink to="/portfolio" activeClassName={styles.navitemActive}>Portfolio</NavLink>
                        </li> */}
                        {/* <li className={styles.navitem}>
                            <NavLink to="/blog" activeClassName={styles.navitemActive}>Blog</NavLink>
                        </li> */}
                        {/* <li className={styles.navitem}>
                            <NavLink to="/about" activeClassName={styles.navitemActive}>About</NavLink>
                        </li> */}
                    </ul>
                </header>
                {children}
            </>
        </Router>
    )
}

export default NavigationHeader;
