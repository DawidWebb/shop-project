import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { StoreContext } from '../../store/StoreProvider';
import styles from './info.module.scss';

// Banner over the Branches name: "wybierz kategorie", after setup the Branch "Przejdź do"

const Info = () => {
    const { parent, setCategory, typeOfBranch, setTypeOfBranch, setPathName } = useContext(
        StoreContext,
    );

    const handleTypeOfBranch = (e) => {
        setCategory(0);
        setTypeOfBranch(e.target.id);
        setPathName(parent[e.target.id - 1].path);
    };

    const branches = parent.map((item) => (
        <div className={styles.product} key={item.name}>
            <NavLink
                className={typeOfBranch === item.id ? styles.selected : 'null'}
                onClick={handleTypeOfBranch}
                id={item.id}
                to={item.path}
                exact={item.exact ? item.exact : false}
            >
                {item.name}
            </NavLink>
        </div>
    ));
    return (
        <div className={styles.infoContainer}>
            {typeOfBranch > 0 ? (
                <div className={styles.infoPath}>
                    <p>Przejdź do: </p>
                    {branches}
                </div>
            ) : (
                <p>Wybierz kategorię</p>
            )}
        </div>
    );
};
export default Info;
