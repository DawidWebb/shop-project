/* eslint-disable react/prop-types */
import React, { useContext } from 'react';
import { StoreContext } from '../../../store/StoreProvider';

import CategoryCard from './CategoryCard';
import PopupCategory from '../Popup/PopupCategory';
import SuccessAddPopup from '../Popup/SuccessAddPopup';

// import styles from '../../SubBranches/SubBranches.module.scss';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faCartArrowDown, faHeart, faEye } from '@fortawesome/free-solid-svg-icons';

// Categories is available in Products, it's single of category. There are so many of them hom much are mapped on Products as groupOfCategories

const Categories = (props) => {
    const {
        isModalOpen,
        setIsModalOpen,
        setName,
        setPrice,
        setPathName,
        setCategory,
        isConfirmationOpen,
    } = useContext(StoreContext);

    const handleOnClickShowCard = () => {
        setName(props.name);
        setPrice(props.price);
        props.open();
    };

    const handleOnClose = () => {
        setIsModalOpen(false);
    };

    // const handleOnClickAddToChartConfirmation = () => {
    //     console.log('dodano do koszyka');
    //     setIsConfirmationOpen(true);
    // };

    const handleOnClickGoToProduct = () => {
        setName(props.name);
        setPrice(props.price);
        setCategory(0);
        setPathName('/product');
    };
    return (
        <>
            <CategoryCard
                showCard={handleOnClickShowCard}
                goToProduct={handleOnClickGoToProduct}
                // openConfirmation={handleOnClickAddToChartConfirmation}
                name={props.name}
                price={props.price}
                src={props.url}
            />
            <PopupCategory closeModal={handleOnClose} isModalOpen={isModalOpen} />
            <SuccessAddPopup closeModal={handleOnClose} isConfirmationOpen={isConfirmationOpen} />
        </>
    );
};

export default Categories;
