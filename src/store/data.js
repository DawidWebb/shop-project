import React, { useState } from 'react';
// import data from '../store/db.json';

const Data = () => {
    const [dataDB, setDataDB] = useState(null);

    const dataA = require('../store/db.json');

    console.log(dataA.parentCategories);

    return <></>;
};

export default Data;
