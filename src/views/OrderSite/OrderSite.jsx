import React from 'react';
import ClientInfo from './ClientInfo';
import { CHART_CONTEXT } from '../../store/TemporaryChartContext';
import ReturnButton from '../../components/Buttons/ReturnButton';
import styles from './OrderSite.module.scss';

const OrderSite = () => {
    const onSubmit = () => {};
    const handleOnClick = () => {
        onSubmit();
    };
    const chartContent = CHART_CONTEXT.map((item) => {
        return (
            <tr key={item.id}>
                <td>{item.name}</td>
                <td>{item.quanity}</td>
                <td>{item.price} pln</td>
            </tr>
        );
    });

    const sumOfPrice = CHART_CONTEXT.reduce((prev, curr) => prev + curr.price * curr.quanity, 0);
    sumOfPrice.toFixed(2);

    const sumOfPriceVat = (sumOfPrice * 1.23).toFixed(2);
    return (
        <div className={styles.wrapper}>
            <div className={styles.button}>
                <ReturnButton />
            </div>
            <div className={styles.clientInfo}>
                <ClientInfo onSubmit={onSubmit} />
            </div>
            <div className={styles.productsInfo}>
                <h3>Lista produktów</h3>
                <div>
                    <table className={styles.table}>
                        <tr>
                            <th>Nazwa produktu</th>
                            <th>Ilość</th>
                            <th>Cena netto</th>
                        </tr>
                        {chartContent}
                    </table>
                </div>
                <div className={styles.finalPrice}>
                    <div>
                        <p>Suma netto:</p>
                        <p>{sumOfPrice} pln</p>
                    </div>
                    <div>
                        <p>Suma brutto:</p>
                        <p>{sumOfPriceVat} pln</p>
                    </div>
                </div>
            </div>
            <div className={styles.payButton}>
                <button onClick={handleOnClick} type="button">
                    Zakończ i zapłać
                </button>
            </div>
        </div>
    );
};

export default OrderSite;
