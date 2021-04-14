import React, { useContext } from 'react';

import { StoreContext } from '../../../store/StoreProvider';
import styles from '../../SubBranches/subBranches.module.scss';
import { CHART_CONTEXT } from '../../../store/TemporaryChartContext';

// Categories is available in Products, it's single of category. There are so many of them hom much are mapped on Products as groupOfCategories

// eslint-disable-next-line react/prop-types
const CategoryCard = ({ name, showCard, price, src, goToProduct }) => {
    const { quanity, setAddToChart, addToChart, setIsConfirmationOpen } = useContext(StoreContext);

    const handleOnSendData = () => {
        CHART_CONTEXT.push({
            id: Math.random() * 10,
            name,
            price: Number(price),
            quanity: Number(quanity),
        });
        setAddToChart(addToChart + 1);
        setIsConfirmationOpen(true);
    };
    return (
        <>
            <div className={styles.category}>
                <p className={styles.categoryName}>{name}</p>
                <div
                    // style={{
                    //     backgroundImage: `url(../${src})`,
                    // }}
                    onClick={goToProduct}
                    className={styles.categoryImage}
                />

                <div className={styles.categoryIcons}>
                    <svg
                        onClick={showCard}
                        className={styles.categoryIcon}
                        xmlns="http://www.w3.org/2000/svg"
                        height="24px"
                        viewBox="0 0 24 24"
                        width="24px"
                        fill="#000000"
                    >
                        <path d="M0 0h24v24H0z" fill="none" />
                        <path d="M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z" />
                    </svg>
                    <svg
                        className={styles.categoryIcon}
                        xmlns="http://www.w3.org/2000/svg"
                        height="24px"
                        viewBox="0 0 24 24"
                        width="24px"
                        fill="#000000"
                    >
                        <path d="M0 0h24v24H0z" fill="none" />
                        <path d="M16.5 3c-1.74 0-3.41.81-4.5 2.09C10.91 3.81 9.24 3 7.5 3 4.42 3 2 5.42 2 8.5c0 3.78 3.4 6.86 8.55 11.54L12 21.35l1.45-1.32C18.6 15.36 22 12.28 22 8.5 22 5.42 19.58 3 16.5 3zm-4.4 15.55l-.1.1-.1-.1C7.14 14.24 4 11.39 4 8.5 4 6.5 5.5 5 7.5 5c1.54 0 3.04.99 3.57 2.36h1.87C13.46 5.99 14.96 5 16.5 5c2 0 3.5 1.5 3.5 3.5 0 2.89-3.14 5.74-7.9 10.05z" />
                    </svg>

                    <svg
                        onClick={handleOnSendData}
                        className={styles.categoryIcon}
                        xmlns="http://www.w3.org/2000/svg"
                        height="24px"
                        viewBox="0 0 24 24"
                        width="24px"
                        fill="#000000"
                    >
                        <path d="M0 0h24v24H0zm18.31 6l-2.76 5z" fill="none" />
                        <path d="M11 9h2V6h3V4h-3V1h-2v3H8v2h3v3zm-4 9c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2zm10 0c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2 2-.9 2-2-.9-2-2-2zm-9.83-3.25l.03-.12.9-1.63h7.45c.75 0 1.41-.41 1.75-1.03l3.86-7.01L19.42 4h-.01l-1.1 2-2.76 5H8.53l-.13-.27L6.16 6l-.95-2-.94-2H1v2h2l3.6 7.59-1.35 2.45c-.16.28-.25.61-.25.96 0 1.1.9 2 2 2h12v-2H7.42c-.13 0-.25-.11-.25-.25z" />
                    </svg>
                </div>
                <div className={styles.categoryPrice}>
                    <p>cena: {price} pln netto</p>
                </div>
            </div>
        </>
    );
};

export default CategoryCard;
