import React from 'react';
import 'normalize.css';

import MainHeader from './components/MainHeader/MainHeader';
import MainContainer from './components/MainContainer/MainContainer';
import MainFooter from './components/MainFooter/MainFooter';

import { useWindowDimensions } from '@Helpers/useWindowDimensions';

import './styles.css';

const Main = () => {
    const { width } = useWindowDimensions;

    return (
        <div className="main-page-container">
            <div className="main-page">
                <MainHeader />
                <MainContainer />
                <MainFooter />
            </div>
        </div>
    );
};

export default Main;
