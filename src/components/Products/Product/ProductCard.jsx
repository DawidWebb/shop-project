import React, { useContext } from 'react';

import { StoreContext } from '../../../store/StoreProvider';
import styles from './productCard.module.scss';
import { CHART_CONTEXT } from '../../../store/TemporaryChartContext';
import SuccessAddPopup from '../Popup/SuccessAddPopup';
import QuestionForm from '../../QuestionForm/QuestionAboutProduct';

// PorductCard is one opened card from Categiries - is open as one selected product

const ProductCard = () => {
    const {
        name,
        price,
        setQuanity,
        setAddToChart,
        addToChart,
        quanity,
        isModalOpen,
        setIsModalOpen,
        isConfirmationOpen,
        setIsConfirmationOpen,
    } = useContext(StoreContext);

    let formQuanity = 1;

    const setValue = (e) => {
        formQuanity = e.target.value;
        setQuanity(formQuanity);
    };

    const handleOnSendData = (e) => {
        e.preventDefault();
        CHART_CONTEXT.push({
            id: Math.random() * 10,
            name,
            price: Number(price),
            quanity: Number(quanity),
        });
        setAddToChart(addToChart + 1);
        setQuanity(1);
        setIsConfirmationOpen(true);
    };

    const handleOnClick = () => {
        setIsModalOpen(true);
    };

    const handleOnClose = () => {
        setIsModalOpen(false);
    };

    return (
        <>
            <div className={styles.card}>
                <h1 className={styles.cardName}>{name}</h1>
                <div className={styles.cardImg} />
                <div className={styles.cardInfo}>
                    <h4>Symbol + (props)</h4>
                    <p>
                        (PROPS) Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis,
                        animi asperiores esse excepturi non blanditiis autem dolorum numquam
                        molestiae est ratione odit itaque officiis neque debitis provident? Quis,
                        recusandae ullam.{' '}
                    </p>
                </div>
                <div className={styles.cardShopInfo}>
                    <div className={styles.cardPrice}>
                        <p>cena: {price} pln netto</p>
                    </div>
                    <form onSubmit={handleOnSendData} className={styles.valueForm}>
                        <label htmlFor={name}>ilość: </label>
                        <input
                            onChange={setValue}
                            type="number"
                            min="1"
                            max="120"
                            id={name}
                            placeholder="1"
                        />
                        <button className={styles.cardIcons} type="submit">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                height="24px"
                                viewBox="0 0 24 24"
                                width="24px"
                                fill="#000000"
                            >
                                <path d="M0 0h24v24H0zm18.31 6l-2.76 5z" fill="none" />
                                <path d="M11 9h2V6h3V4h-3V1h-2v3H8v2h3v3zm-4 9c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2zm10 0c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2 2-.9 2-2-.9-2-2-2zm-9.83-3.25l.03-.12.9-1.63h7.45c.75 0 1.41-.41 1.75-1.03l3.86-7.01L19.42 4h-.01l-1.1 2-2.76 5H8.53l-.13-.27L6.16 6l-.95-2-.94-2H1v2h2l3.6 7.59-1.35 2.45c-.16.28-.25.61-.25.96 0 1.1.9 2 2 2h12v-2H7.42c-.13 0-.25-.11-.25-.25z" />
                            </svg>
                            <p>Dodaj do koszyka</p>
                        </button>
                    </form>
                </div>
                <div className={styles.transportInfo}>
                    <p>Wysyłka w ciagu: (props)</p>
                    <p>Cena przesyłki: (props)</p>
                    <p>Opakowanie: (props)</p>
                </div>
                <div className={styles.questionFormButton}>
                    <button onClick={handleOnClick} type="button">
                        Zapytaj o produkt
                    </button>
                </div>
                <div className={styles.pdfInfo}>plik pdf do pobrania (props)</div>
                <div className={styles.infoAboutProduct}>
                    <h2>Opis produktu / Karta produktu</h2>
                    <h5>Oceny </h5>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet velit placeat
                        ex voluptatum possimus quo soluta, eligendi dicta ut! Consequatur
                        perspiciatis vitae dolores blanditiis facilis assumenda atque nesciunt
                        quisquam nulla! Incidunt, facilis omnis. Dolor reprehenderit quibusdam,
                        nobis sed numquam non assumenda, dolore vel possimus aut voluptates
                        laboriosam delectus placeat harum, provident ut voluptatum blanditiis maxime
                        eligendi quisquam. Hic, provident consectetur. Iure consequatur praesentium
                        deserunt hic perspiciatis distinctio sunt, labore magni nam at neque
                        consectetur dolorum quis accusantium repellat, debitis ex omnis molestiae
                        non! Exercitationem doloribus vero libero nam consectetur aliquam!
                    </p>
                </div>
            </div>
            <SuccessAddPopup closeModal={handleOnClose} isConfirmationOpen={isConfirmationOpen} />
            <QuestionForm isModalOpen={isModalOpen} handleOnClose={handleOnClose} name={name} />
        </>
    );
};

export default ProductCard;
