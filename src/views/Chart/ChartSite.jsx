import React, { useContext, useEffect, useMemo } from 'react';

import { NavLink } from 'react-router-dom';
import { CHART_CONTEXT } from '../../store/TemporaryChartContext';
import Aside from '../Aside/Aside';

import { StoreContext } from '../../store/StoreProvider';

import styles from './chartSite.module.scss';

const ChartSite = () => {
    const { addToChart, setAddToChart } = useContext(StoreContext);
    const deleteItem = (event) => {
        setAddToChart(addToChart - 1);
        CHART_CONTEXT.splice(event.target.id, 1);
    };

    const chartInfo = CHART_CONTEXT.map((item, index) => {
        const price = item.quanity * item.price;
        const vatPrice = (item.quanity * item.price * 1.23).toFixed(2);
        return (
            <div key={item.id} className={styles.items}>
                <div className={styles.item}>
                    <h3>{item.name}</h3>
                </div>
                <div className={styles.item}>
                    <p>Cena za szt:</p> <h3>{item.price} pln netto</h3>
                </div>
                <div className={styles.item}>
                    <p>Ilość:</p> <h3>{item.quanity} szt</h3>
                </div>
                <div className={styles.item}>
                    <p>Wartość netto:</p> <h3>{price} pln</h3>
                </div>
                <div className={styles.item}>
                    <p>Wartość brutto:</p>
                    <h3>{vatPrice} pln</h3>
                </div>
                <button id={index} onClick={deleteItem} type="button">
                    Usuń
                </button>
            </div>
        );
    });
    const orderButton = () => {
        if (CHART_CONTEXT.length > 0) {
            return <button type="button">Zamównienie</button>;
        }
    };
    return (
        <>
            <Aside />
            <div className={styles.chart}>
                <div className={styles.title}>
                    <p>Koszyk</p>
                    <p>Zamównienie</p>
                </div>
                <div className={styles.selectedProducts}>
                    Produkty
                    {chartInfo}
                </div>
                <div className={styles.summaryInfo}>Informacje i Podsumowanie</div>
                <div className={styles.selectedButtons}>
                    <NavLink to="/start">
                        <button type="button">Kontynuuj zakupy</button>
                    </NavLink>
                    <NavLink to="/order">{orderButton()}</NavLink>
                </div>
            </div>
        </>
    );
};

export default ChartSite;
