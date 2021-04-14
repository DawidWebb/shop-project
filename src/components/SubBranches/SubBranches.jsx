import React, { useContext, useEffect } from 'react';
// import { NavLink } from 'react-router-dom';
import { StoreContext } from '../../store/StoreProvider';

import Product from '../Products/Product/Product';
import ReturnButton from '../Buttons/ReturnButton';

import styles from './subBranches.module.scss';

// SubBranches is opened from Branches, has categories of Branches as list on ul tag

const SubBranches = () => {
    const { categories, category, setCategory, typeOfBranch } = useContext(StoreContext);

    const handleGoToCategory = (e) => {
        setCategory(e.target.id);
    };

    // eslint-disable-next-line consistent-return
    const categoryOfBranch = categories.map((item) => {
        if (item.parentCategoryId === typeOfBranch) {
            return (
                <li
                    key={item.id + Math.random()}
                    onClick={handleGoToCategory}
                    id={item.id}
                    className={category == item.id ? styles.selected : 'null'}
                >
                    {item.name}
                </li>
            );
        }
    });

    return (
        <>
            <div className={styles.branchSection}>
                <div className={styles.branchCatrgories}>
                    <ul className={styles.branchList}>{categoryOfBranch}</ul>
                </div>
                <div className={styles.branchProducts}>
                    <Product />
                </div>
            </div>
            <div className={styles.returnButton}>{/* <ReturnButton /> */}</div>
        </>
    );
};

export default SubBranches;
