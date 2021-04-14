import React, { useContext } from 'react';
import { Form, Field } from 'react-final-form';
import { StoreContext } from '../../store/StoreProvider';
import styles from './ClientInfo.module.scss';

const required = (value) => (value ? undefined : 'Pole wymagane');

const ClientInfo = (props) => {
    const { valuesData, setValuesData } = useContext(StoreContext);

    return (
        <Form
            onSubmit={props.onSubmit}
            render={({ handleSubmit, form, submitting, pristine, values }) => (
                <form onSubmit={handleSubmit}>
                    <div className={styles.recipient}>
                        <h3>Dane odbiorcy</h3>
                        <Field name="nazwisko" validate={required}>
                            {({ input, meta }) => (
                                <div>
                                    <label>Nazwisko</label>
                                    <input {...input} type="text" placeholder="Nazwisko" />
                                    {meta.error && meta.touched && <span>{meta.error}</span>}
                                </div>
                            )}
                        </Field>
                        <Field name="imie" validate={required}>
                            {({ input, meta }) => (
                                <div className={styles.name}>
                                    <label>Imię</label>
                                    <input {...input} type="text" placeholder="Imię" />
                                    {meta.error && meta.touched && <span>{meta.error}</span>}
                                </div>
                            )}
                        </Field>
                        <Field name="nazwaFirmy" validate={required}>
                            {({ input, meta }) => (
                                <div className={styles.name}>
                                    <label>Nazwa firmy</label>
                                    <input {...input} type="text" placeholder="Nazwa firmy" />
                                    {meta.error && meta.touched && <span>{meta.error}</span>}
                                </div>
                            )}
                        </Field>
                        <Field name="miasto" validate={required}>
                            {({ input, meta }) => (
                                <div className={styles.name}>
                                    <label>Miasto</label>
                                    <input {...input} type="text" placeholder="Miasto" />
                                    {meta.error && meta.touched && <span>{meta.error}</span>}
                                </div>
                            )}
                        </Field>
                        <Field name="kodPocztowy" validate={required}>
                            {({ input, meta }) => (
                                <div className={styles.name}>
                                    <label>Kod pocztowy</label>
                                    <input {...input} type="text" placeholder="zz-zzz" />
                                    {meta.error && meta.touched && <span>{meta.error}</span>}
                                </div>
                            )}
                        </Field>
                        <Field name="ulicaNumer" validate={required}>
                            {({ input, meta }) => (
                                <div className={styles.name}>
                                    <label>Ulica i numer domu / mieszkania</label>
                                    <input
                                        {...input}
                                        type="text"
                                        placeholder="Ulica, numer domu / mieszkania"
                                    />
                                    {meta.error && meta.touched && <span>{meta.error}</span>}
                                </div>
                            )}
                        </Field>
                        <Field name="telefon" validate={required}>
                            {({ input, meta }) => (
                                <div className={styles.name}>
                                    <label>Numer telefonu</label>
                                    <input {...input} type="text" placeholder="777 777 777" />
                                    {meta.error && meta.touched && <span>{meta.error}</span>}
                                </div>
                            )}
                        </Field>
                        <Field name="mail" validate={required}>
                            {({ input, meta }) => (
                                <div className={styles.name}>
                                    <label>Adres eMail</label>
                                    <input
                                        {...input}
                                        type="text"
                                        placeholder="example@example.pl"
                                    />
                                    {meta.error && meta.touched && <span>{meta.error}</span>}
                                </div>
                            )}
                        </Field>
                    </div>
                    <div className={styles.invoice}>
                        <h3>Dane do faktury VAT</h3>
                        <Field name="nazwaFirmy" validate={required}>
                            {({ input, meta }) => (
                                <div className={styles.name}>
                                    <label>Nazwa firmy</label>
                                    <input {...input} type="text" placeholder="Nazwa firmy" />
                                    {meta.error && meta.touched && <span>{meta.error}</span>}
                                </div>
                            )}
                        </Field>
                        <Field name="miasto" validate={required}>
                            {({ input, meta }) => (
                                <div className={styles.name}>
                                    <label>Miasto</label>
                                    <input {...input} type="text" placeholder="Miasto" />
                                    {meta.error && meta.touched && <span>{meta.error}</span>}
                                </div>
                            )}
                        </Field>
                        <Field name="kodPocztowy" validate={required}>
                            {({ input, meta }) => (
                                <div className={styles.name}>
                                    <label>Kod pocztowy</label>
                                    <input {...input} type="text" placeholder="zz-zzz" />
                                    {meta.error && meta.touched && <span>{meta.error}</span>}
                                </div>
                            )}
                        </Field>
                        <Field name="ulicaNumer" validate={required}>
                            {({ input, meta }) => (
                                <div className={styles.name}>
                                    <label>Ulica i numer domu / mieszkania</label>
                                    <input
                                        {...input}
                                        type="text"
                                        placeholder="Ulica, numer domu / mieszkania"
                                    />
                                    {meta.error && meta.touched && <span>{meta.error}</span>}
                                </div>
                            )}
                        </Field>
                        <Field name="nipVat" validate={required}>
                            {({ input, meta }) => (
                                <div className={styles.name}>
                                    <label>Nip</label>
                                    <input {...input} type="text" placeholder="000 000 00 00" />
                                    {meta.error && meta.touched && <span>{meta.error}</span>}
                                </div>
                            )}
                        </Field>
                    </div>

                    <div className={styles.notes}>
                        <label>Uwagi</label>
                        <Field name="uwagi" component="textarea" placeholder="Uwagi" />
                    </div>
                    <div className={styles.buttons}>
                        {/* <button type="submit" disabled={submitting}>
                            Zapisz
                        </button> */}
                        <button
                            type="button"
                            onClick={form.reset}
                            disabled={submitting || pristine}
                        >
                            Reset
                        </button>
                    </div>
                </form>
            )}
        />
    );
};

export default ClientInfo;
