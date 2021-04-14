import React, { useContext } from 'react';
import { Link } from 'react-router-dom';

import { StoreContext } from '../../store/StoreProvider';

import styles from './branches.module.scss';

// Branches pannel on home-site, set kind of Branches with name and pictures - as links

const Branches = () => {
    const { parent, setCategory, setTypeOfBranch, setPathName } = useContext(StoreContext);

    const handleTypeOfBranch = (e) => {
        setCategory(0);
        setTypeOfBranch(e.target.id);
        setPathName(parent[e.target.id - 1].path);
    };

    const vievBranch = parent.map((item) => (
        <div className={styles.branch} key={item.name}>
            <Link onClick={handleTypeOfBranch} to={item.path} id={item.id}>
                <p> {item.name}</p>
            </Link>
        </div>
    ));

    return (
        <>
            <div className={styles.mainContainer}>{vievBranch}</div>
        </>
    );
};

export default Branches;
