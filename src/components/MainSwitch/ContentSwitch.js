import React, { useContext } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import { StoreContext } from '../../store/StoreProvider';

import WelcomeViev from '../../views/WelcomeViev/WelcomeViev';
import StartViev from '../../views/StartViev/StartViev';
import BranchViev from '../../views/BranchViev/BranchViev';
import ProductCard from '../Products/Product/ProductCard';
import LoginPage from '../../views/LoginPage/LoginPage';
import ContactPage from '../../views/ContactPage/ContactPage';
import ChartSite from '../../views/Chart/ChartSite';
import OrderSite from '../../views/OrderSite/OrderSite';
import AboutCompany from '../../views/AboutCompany/AboutCompany';
import CookiesPage from '../../views/CookiesPage/CookiesPage';

const ContentSwitch = () => {
    const { pathName } = useContext(StoreContext);
    return (
        <main>
            <Switch>
                <Route component={WelcomeViev} exact="true" path="/" />
                <Route component={StartViev} path="/start" />
                <Route component={BranchViev} path="/category1" />
                <Route component={BranchViev} path="/category2" />
                <Route component={BranchViev} path="/category3" />
                <Route component={ProductCard} path={`${pathName}/product`} />
                <Route component={LoginPage} path="/login" />
                <Route component={ContactPage} path="/contact" />
                <Route component={ChartSite} path="/shopping-chart" />
                <Route component={OrderSite} path="/order" />
                <Route component={AboutCompany} path="/about" />
                <Route component={CookiesPage} path="/cookie" />
                <Redirect from="*" to="/" />
            </Switch>
        </main>
    );
};

export default ContentSwitch;
