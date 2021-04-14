import React, { useContext } from 'react';

import { StoreContext } from '../../store/StoreProvider';

import styles from './burger.module.scss';

const Burger = () => {
    const { isOpenMenu, setIsOpenMenu } = useContext(StoreContext);

    const handleChangeBurger = (e) => {
        e.preventDefault();
        setIsOpenMenu(!isOpenMenu);
    };
    return (
        <div className={styles.burger} onClick={handleChangeBurger}>
            <div className={`${styles.lineOne} ${isOpenMenu ? styles.rotate : ''}`} />
            <div className={`${styles.lineTwo} ${isOpenMenu ? styles.visible : ''}`} />
            <div className={`${styles.lineThree} ${isOpenMenu ? styles.rotateOne : ''}`} />
        </div>
    );
};

export default Burger;
