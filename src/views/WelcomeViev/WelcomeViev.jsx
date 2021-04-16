import React from 'react';
import { Link } from 'react-router-dom';
import styles from './welcomeViev.module.scss';

const WelcomeViev = () => {
    return (
        <div className={styles.wrapper}>
            <h3>Witaj na stronie Twojego nowego sklepu</h3>
            <p>
                Naciśnij <Link to="/start">start</Link> aby zobaczyć Twój sklep lub{' '}
                <Link to="/contact">kontakt</Link> aby dowiedzieć się więcej szczegółów.
            </p>
        </div>
    );
};

export default WelcomeViev;
