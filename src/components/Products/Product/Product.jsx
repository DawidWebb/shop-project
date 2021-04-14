import React, { useContext } from 'react';
import { StoreContext } from '../../../store/StoreProvider';

import Categories from '../Category/Categories';
import ProductCard from './ProductCard';

// Product is a part of SubBranches, after click of list we have products alailable for clicked SubBranch

const Product = () => {
    const { subCategories, category, setIsModalOpen, pathName } = useContext(StoreContext);
    const handleModalOpen = () => {
        setIsModalOpen(true);
    };

    // const handleOnClose = () => {
    //     setIsModalOpen(false);
    // };

    let groupOfCategories;

    if (category === 0 && pathName !== '/product') {
        groupOfCategories = '';
    } else if (category > 0) {
        groupOfCategories = subCategories.map((item) => {
            if (item.categoryId === category) {
                return (
                    <div key={item.id}>
                        <Categories
                            open={handleModalOpen}
                            key={item.id}
                            name={item.name}
                            // url={item.img}
                            price={item.price}
                        />
                    </div>
                );
            }
            return groupOfCategories;
        });
    } else if (pathName === '/product') {
        groupOfCategories = <ProductCard />;
    }

    return <>{groupOfCategories}</>;
};

export default Product;
