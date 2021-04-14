import React from 'react';
import { Form, Field } from 'react-final-form';
import Modal from '../Modal/Modal';
import styles from './questionForm.module.scss';

import StoreContext from '../../store/StoreProvider';

// QuestionForm is open from ProductCard as Modal with Form

const QuestionForm = (props) => {
    const onSubmit = () => {
        console.log('Wysłany / podpiąć PHP');
    };
    return (
        <Modal
            handleOnClose={props.handleOnClose}
            isOpen={props.isModalOpen}
            // shouldBeClosedOnOutsideClick={true}
        >
            <div className={styles.wrapper}>
                <p>Zapytanie o produkt</p>
                <h3>{props.name}</h3>
                <Form
                    onSubmit={onSubmit}
                    // validate={validate}
                    render={({ handleSubmit }) => (
                        <form className={styles.form} onSubmit={handleSubmit}>
                            <div>
                                <label>Imie i Nazwisko</label>
                                <Field
                                    className={styles.inputField}
                                    name="firstName"
                                    component="input"
                                    placeholder="Proszę wpisać imię i nazwisko"
                                />
                            </div>
                            <div>
                                <label>Telefon</label>
                                <Field
                                    className={styles.inputField}
                                    name="phone"
                                    component="input"
                                    placeholder="Proszę wpisać telefon"
                                />
                            </div>
                            <div>
                                <label>eMail</label>
                                <Field
                                    className={styles.inputField}
                                    name="eMail"
                                    component="input"
                                    placeholder="Proszę wpisać eMail"
                                />
                            </div>
                            <div>
                                <Field
                                    className={styles.inputField}
                                    name="question"
                                    render={({ input, meta }) => (
                                        <div>
                                            <label>Tresć pytania</label>
                                            <textarea {...input} />
                                            {meta.touched && meta.error && (
                                                <span>{meta.error}</span>
                                            )}
                                        </div>
                                    )}
                                />
                            </div>

                            <div className={styles.buttons}>
                                <button onClick={props.handleOnClose} type="submit">
                                    Wyslij
                                </button>
                                <button onClick={props.handleOnClose} type="button">
                                    Wyjdź
                                </button>
                            </div>
                        </form>
                    )}
                />
            </div>
        </Modal>
    );
};

export default QuestionForm;
