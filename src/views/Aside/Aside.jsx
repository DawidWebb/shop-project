import React from 'react';
import { NavLink } from 'react-router-dom';

import Chart from '../Chart/Chart';

import Data from '../../store/data';

import styles from './aside.module.scss';

const Aside = () => {
    const handleTakeData = () => {};
    return (
        <div className={styles.asideContainer}>
            <div className={styles.search}>
                <form action="">
                    <input type="text" />
                    <button onClick={handleTakeData} type="submit">
                        Szukaj
                    </button>
                </form>
                <Data />
            </div>
            <NavLink to="/shopping-chart">
                <div className={styles.chart}>
                    <Chart />
                </div>
            </NavLink>
        </div>
    );
};

export default Aside;
