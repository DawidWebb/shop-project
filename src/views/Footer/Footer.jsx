import React from 'react';
import { Link } from 'react-router-dom';

import styles from './footer.module.scss';

const Footer = () => {
    return (
        <div className={styles.wrapper}>
            <div className={styles.adress}>
                <div className={styles.contact}>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        enableBackground="new 0 0 24 24"
                        height="24px"
                        viewBox="0 0 24 24"
                        width="24px"
                        fill="#000000"
                    >
                        <g>
                            <rect fill="none" height="24" width="24" />
                        </g>
                        <g>
                            <path d="M17,11V3H7v4H3v14h8v-4h2v4h8V11H17z M7,19H5v-2h2V19z M7,15H5v-2h2V15z M7,11H5V9h2V11z M11,15H9v-2h2V15z M11,11H9V9h2 V11z M11,7H9V5h2V7z M15,15h-2v-2h2V15z M15,11h-2V9h2V11z M15,7h-2V5h2V7z M19,19h-2v-2h2V19z M19,15h-2v-2h2V15z" />
                        </g>
                    </svg>
                    <div className={styles.context}>
                        <p>Nazwa Firmy</p>
                        <p>Twoje dane</p>
                        <p>Adres</p>
                        <p>Miejcse</p>
                    </div>
                </div>
                <div className={styles.mail}>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        enableBackground="new 0 0 24 24"
                        height="24px"
                        viewBox="0 0 24 24"
                        width="24px"
                        fill="#000000"
                    >
                        <g>
                            <rect fill="none" height="24" width="24" />
                        </g>
                        <g>
                            <g>
                                <path d="M21,10V4c0-1.1-0.9-2-2-2H3C1.9,2,1.01,2.9,1.01,4L1,16c0,1.1,0.9,2,2,2h11v-5c0-1.66,1.34-3,3-3H21z M11,11L3,6V4l8,5 l8-5v2L11,11z" />
                                <path d="M21,14v4c0,1.1-0.9,2-2,2s-2-0.9-2-2v-4.5c0-0.28,0.22-0.5,0.5-0.5s0.5,0.22,0.5,0.5V18h2v-4.5c0-1.38-1.12-2.5-2.5-2.5 S15,12.12,15,13.5V18c0,2.21,1.79,4,4,4s4-1.79,4-4v-4H21z" />
                            </g>
                        </g>
                    </svg>
                    <a href="kontakt@e-pasze.pl">kontakt@do-ciebie.pl</a>
                </div>
                <div className={styles.phone}>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        height="24px"
                        viewBox="0 0 24 24"
                        width="24px"
                        fill="#000000"
                    >
                        <path d="M0 0h24v24H0z" fill="none" />
                        <path d="M13 9h-2v2h2V9zm4 0h-2v2h2V9zm3 6.5c-1.25 0-2.45-.2-3.57-.57-.35-.11-.74-.03-1.02.24l-2.2 2.2c-2.83-1.44-5.15-3.75-6.59-6.58l2.2-2.21c.28-.27.36-.66.25-1.01C8.7 6.45 8.5 5.25 8.5 4c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1 0 9.39 7.61 17 17 17 .55 0 1-.45 1-1v-3.5c0-.55-.45-1-1-1zM19 9v2h2V9h-2z" />
                    </svg>
                    <p>+ 48 777 777 777</p>
                </div>
            </div>
            <div className={styles.info}>
                <div>
                    <Link to="/contact">Kontakt</Link>
                </div>
                <div>
                    <Link to="/start">News</Link>
                </div>
                <div>
                    <Link to="/start">About</Link>
                </div>
            </div>
            <div className={styles.shop}>
                <Link to="/start">Info</Link>
                <a href="" target="_blank">
                    Strona producenta
                </a>
                <Link to="/about">O Firmie</Link>
            </div>
            <div className={styles.additional}>
                <div>
                    <Link to="/start"> Regulamin</Link>
                </div>
                <div>
                    <Link to="/start">Dostawa</Link>
                </div>
                <div>
                    <Link to="/cookie">Polityka cookies</Link>
                </div>
                <div>
                    <Link to="/start">Zwroty i reklamacje</Link>
                </div>
                <div>
                    <Link to="/start">Sposoby płatności</Link>
                </div>
            </div>
            <div className={styles.social}></div>
            <div className={styles.signature}></div>
        </div>
    );
};

export default Footer;
