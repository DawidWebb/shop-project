import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import StoreProvider from '../../store/StoreProvider';

import Header from '../../views/Header/Header';
// import Nav from '../../components/Nav/Nav';
import ContentSwitch from '../MainSwitch/ContentSwitch';
import Footer from '../../views/Footer/Footer';
import UpButton from '../../components/Buttons/UpButton';

const Root = () => {
    return (
        <StoreProvider>
            <Router>
                <Header />
                <ContentSwitch />
                <Footer />
            </Router>
            <UpButton />
        </StoreProvider>
    );
};

export default Root;
