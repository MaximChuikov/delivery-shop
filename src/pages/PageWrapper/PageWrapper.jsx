import React from 'react';
import 'normalize.css';

import {Outlet} from "react-router-dom"
import MainHeader from './Header/MainHeader';
import MainFooter from './Footer/MainFooter';
import PropTypes from "prop-types";
import './styles.css';

const PageWrapper = ({slider = false}) => {

    return (
        <div className="main-page-container">
            <div className="main-header">
                <div className="component-container">
                    <MainHeader slider={slider} />
                </div>
            </div>
            <div className="main-body">
                <div className="component-container">
                    <Outlet />
                </div>
            </div>
            <div className="main-footer">
                <div className="component-container">
                    <MainFooter />
                </div>
            </div>
        </div>
    );
};

PageWrapper.propTypes = {
    slider: PropTypes.bool
}

export default PageWrapper;
