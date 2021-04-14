import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import { StoreContext } from '../../store/StoreProvider';

import styles from './nav.module.scss';

const routerLinks = [
    { id: 1, name: 'start', path: '/start' }, // exact: true  exact={link.exact ? link.exact : false}
    { id: 2, name: 'logowanie', path: '/' },
    { id: 3, name: 'kontakt', path: '/contact' },
    { id: 4, name: 'pomoc', path: '/help' },
];

const Nav = () => {
    const { isOpenMenu, setIsOpenMenu, setPathName, setTypeOfBranch } = useContext(StoreContext);

    const handleScroll = () => {
        if (window.scroll) {
            setIsOpenMenu(false);
        }
    };
    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
    });

    const handleCloseNav = (e) => {
        setIsOpenMenu(!isOpenMenu);
        setPathName(routerLinks[e.target.id - 1].path);
        setTypeOfBranch(0);
    };

    const menu = routerLinks.map((link) => (
        <li key={link.name}>
            <Link to={link.path} onClick={handleCloseNav} id={link.id}>
                {link.name}
            </Link>
        </li>
    ));
    return (
        <div className={`${styles.container} ${isOpenMenu ? styles.navVisable : ''}`}>
            <nav className={styles.nav}>
                <ul className={styles.ul}>{menu}</ul>
            </nav>
        </div>
    );
};

export default Nav;
