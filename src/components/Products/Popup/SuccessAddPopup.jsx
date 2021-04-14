import React, { useContext } from 'react';
import { Link, useHistory } from 'react-router-dom';

import Modal from '../../Modal/Modal';
import { StoreContext } from '../../../store/StoreProvider';
import styles from './successAddPopup.module.scss';

const SuccessAddPopup = (props) => {
    const { setIsConfirmationOpen, setIsModalOpen } = useContext(StoreContext);

    const history = useHistory();

    const handleOnClose = () => {
        setIsConfirmationOpen(false);
        setIsModalOpen(false);
    };
    const handleOnCloseAndBack = () => {
        handleOnClose();
        history.goBack();
    };
    return (
        <Modal isOpen={props.isConfirmationOpen} handleOnClose={handleOnClose}>
            <div className={styles.wrapper}>
                <div className={styles.image}>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        height="24px"
                        viewBox="0 0 24 24"
                        width="24px"
                        fill="#000000"
                    >
                        <path d="M0 0h24v24H0z" fill="none" />
                        <path d="M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z" />
                    </svg>
                </div>
                <div className={styles.info}>
                    <p>Dodano do koszyka</p>
                </div>
                <div className={styles.buttons}>
                    <button type="button" onClick={handleOnCloseAndBack}>
                        Kontynuuj zakupy
                    </button>

                    <div onClick={handleOnClose}>
                        <Link className={styles.linkBtn} to="shopping-chart">
                            Koszyk
                        </Link>
                    </div>
                </div>
            </div>
        </Modal>
    );
};

export default SuccessAddPopup;
