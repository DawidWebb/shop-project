import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import ReturnButton from '../../components/Buttons/ReturnButton';

import styles from './contactPage.module.scss';

const ContactPage = () => {
    const [status, setStatus] = useState('');

    const handleSubmitForm = (ev) => {
        ev.preventDefault();
        const form = ev.target;
        const data = new FormData(form);
        const xhr = new XMLHttpRequest();
        xhr.open(form.method, form.action);
        xhr.setRequestHeader('Accept', 'application/json');
        xhr.onreadystatechange = () => {
            if (xhr.readyState !== XMLHttpRequest.DONE) return;
            if (xhr.status === 200) {
                form.reset();
                setStatus('SUCCESS');
            } else {
                setStatus('ERROR');
            }
        };
        xhr.send(data);
    };
    return (
        <div className={styles.wrapper}>
            <form
                onSubmit={handleSubmitForm}
                action="https://formspree.io/f/xoqprbeg"
                method="POST"
            >
                <div className={styles.agreed}>
                    <input
                        type="checkbox"
                        name="confirmation"
                        value="Akceptuję politykę RODO, chce otrzymać informację na temnt Zlecenia on-line"
                        required
                    />
                    <label>
                        Chcę otrzymać informacje na temat aplikacji Zelcenia on-line. Jednocześnie
                        akceptuje politykę ciasteczek i RODO<br></br>
                        <Link to="/cookie">zobacz politykę</Link>
                    </label>
                </div>
                <div className={styles.formItem}>
                    <input type="text" name="phone" required placeholder="telefon" />
                </div>
                <div className={styles.formItem}>
                    <input type="email" name="email" required placeholder="mail" />
                </div>

                <div className={styles.formButton}>
                    <button type="submit">wyślij</button>
                </div>
                <div className={styles.confirmation}>
                    {status === 'SUCCESS' ? (
                        <p>
                            Dziękuję, Twoje zapytanie zostało wysłane - odpowiemy na nie jak
                            najszybciej.
                        </p>
                    ) : (
                        ''
                    )}
                    {status === 'ERROR' && <p>Ooops! Pola formularza nie są wypełnione</p>}
                </div>
            </form>
            <div className={styles.backButton}>
                <ReturnButton />
            </div>
        </div>
    );
};

export default ContactPage;
