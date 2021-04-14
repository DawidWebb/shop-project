import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { StoreContext } from '../../store/StoreProvider';

import Burger from '../../components/Burger/Burger';
import Nav from '../Nav/Nav';

import styles from './header.module.scss';

const Header = () => {
    const { setIsMainVisible } = useContext(StoreContext);

    const handleSetStartViev = () => {
        setIsMainVisible(true);
    };
    return (
        <div className={styles.headerContainer}>
            <div className={styles.logoImage} />
            <NavLink to="/start" className={styles.logoName} />
            <div className={styles.headerMenu}>
                <div className={styles.burgerDiv}>
                    <Burger />
                    <Nav />
                </div>
            </div>
        </div>
    );
};

export default Header;
