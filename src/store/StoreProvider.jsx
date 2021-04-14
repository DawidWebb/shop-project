import React, { createContext, useCallback, useEffect, useMemo, useState } from 'react';

import request from '../helpers/request';
import Data from './data';
import { CHART_CONTEXT } from './TemporaryChartContext';

export const StoreContext = createContext(null);

const dataDB = require('../store/db.json');

const StoreProvider = ({ children }) => {
    const { parentCategoriesData, categoriesData, subCategoriesData } = dataDB;
    // ParentCategories (Branches)
    const [pathName, setPathName] = useState(null);

    const [parent, setParent] = useState([]);

    useEffect(() => {
        setParent(parentCategoriesData);
    }, [pathName === '/start']);

    // const fetchParentData = async () => {
    //     const { data } = await request.get('/parentCategories');

    //     setParent(data);
    // };

    // useEffect(() => {
    //     fetchParentData();
    // }, [pathName === '/start']);

    // Categories (SubBranches)
    const [typeOfBranch, setTypeOfBranch] = useState(null);

    const [categories, setCategories] = useState([]);

    useEffect(() => {
        setCategories(categoriesData);
    }, [typeOfBranch > 0]);

    // const fetchCategoriesData = async () => {
    //     const { data } = await request.get('/categories');

    //     setCategories(data);
    // };

    // useEffect(() => {
    //     fetchCategoriesData();
    // }, [typeOfBranch > 0]);

    // SubCategiries (Products)
    const [category, setCategory] = useState(0);

    const [subCategories, setSubCategories] = useState([]);

    useEffect(() => {
        setSubCategories(subCategoriesData);
    }, [category > 0]);

    // const fetchSubCategoriesData = async () => {
    //     const { data } = await request.get('/subCategories');

    //     setSubCategories(data);
    // };

    // useEffect(() => {
    //     fetchSubCategoriesData();
    // }, [category > 0]);

    // Nav menu
    const [isOpenMenu, setIsOpenMenu] = useState(false);

    // Popup
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [name, setName] = useState('');
    const [price, setPrice] = useState(null);

    // Confirmation Popup
    const [isConfirmationOpen, setIsConfirmationOpen] = useState(false);

    // CHART VALUES
    const [quanity, setQuanity] = useState(1);
    const [addToChart, setAddToChart] = useState(0);
    // const [chartContent, setChartContent] = useState();

    // categoty value (on Popap viev)

    const [categoryValue, setCategoryValue] = useState(0);

    // values from OrderSite
    const [valuesData, setValuesData] = useState(null);

    // eslint-disable-next-line react/destructuring-assignment
    return (
        <StoreContext.Provider
            value={{
                parent,
                setParent,
                categories,
                setCategories,
                subCategories,
                setSubCategories,
                isOpenMenu,
                setIsOpenMenu,
                typeOfBranch,
                setTypeOfBranch,
                pathName,
                setPathName,
                category,
                setCategory,
                isModalOpen,
                setIsModalOpen,
                categoryValue,
                setCategoryValue,
                name,
                setName,
                price,
                setPrice,
                quanity,
                setQuanity,
                addToChart,
                setAddToChart,
                isConfirmationOpen,
                setIsConfirmationOpen,
                valuesData,
                setValuesData,
            }}
        >
            {children}
        </StoreContext.Provider>
    );
};

export default StoreProvider;
