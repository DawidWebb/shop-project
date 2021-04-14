import React from 'react';

import Aside from '../Aside/Aside';
import Info from '../Info/Info';
import Branches from '../../components/Branches/Branches';

const StartViev = () => {
    return (
        <main>
            <Aside />
            <Info />
            <Branches />
        </main>
    );
};

export default StartViev;
