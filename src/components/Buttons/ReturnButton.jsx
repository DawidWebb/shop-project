import React from 'react';
import { useHistory } from 'react-router-dom';

import styles from './returnButton.module.scss';

const ReturnButton = () => {
    const history = useHistory();

    const handleOnClick = () => history.goBack();

    return (
        <>
            <button onClick={handleOnClick} className={styles.ReturnButton} type="button">
                Wstecz
            </button>
        </>
    );
};
export default ReturnButton;
