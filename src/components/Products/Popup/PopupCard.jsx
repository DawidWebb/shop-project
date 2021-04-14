import React from 'react';

import styles from './popupCard.module.scss';

// PopupCard is one opened card from Categiries - is open as Modal (picture clicked)

const PopupCard = (props) => {
    return (
        <>
            <div className={styles.card}>
                <p className={styles.cardName}>{props.name}</p>
                <div
                    className={styles.cardImg}

                    // style={{
                    //     backgroundImage: 'url(../../assets/img/img_set/package.JPG)',

                    // }}
                />

                <div className={styles.cardPrice}>
                    <p>cena: {props.price} pln netto</p>
                </div>
                <div className={styles.cardInfo}>
                    <h3>Informacja o produkcie</h3>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eum placeat ad
                        esse perferendis, reiciendis dolore officia error quidem autem repellat
                        magnam vel amet suscipit unde eligendi tempore doloremque accusamus aperiam!
                    </p>
                </div>
            </div>
        </>
    );
};

export default PopupCard;
