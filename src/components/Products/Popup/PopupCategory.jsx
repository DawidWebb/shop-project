import React, { useContext } from 'react';
import { StoreContext } from '../../../store/StoreProvider';

import Modal from '../../Modal/Modal';
import PopupCard from './PopupCard';

import styles from './popupCategory.module.scss';

// PopupCategory is one of category clicked on Category component. It's use Modal.

const PopupCategory = (props) => {
    const { name, price } = useContext(StoreContext);
    const handleOnCloseModal = () => {
        props.closeModal();
    };

    return (
        <Modal
            handleOnClose={props.handleOnClose}
            isOpen={props.isModalOpen}
            // shouldBeClosedOnOutsideClick={true}
        >
            <div className={styles.categoryModal}>
                <PopupCard name={name} price={price} />

                <div className={styles.buttonsSection}>
                    <button onClick={handleOnCloseModal} type="button">
                        Wyjdź
                    </button>
                </div>
            </div>
        </Modal>
    );
};

export default PopupCategory;
