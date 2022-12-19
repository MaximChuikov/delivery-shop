import ButtonComponent from '@Components/ButtonComponent/ButtonComponent';
import React from 'react';

import phoneIcon from '@Assets/images/icons/phoneIcon.svg';
import logoIcon from '@Assets/images/icons/logoIcon.svg';

import './HeaderMenu.css';

const HeaderMenu = () => (
    <div className="header-menu">
        <div className="header-menu--column">
            <img className="menu-logo" src={logoIcon} alt={'logo'} />
            <div className="menu-separator" />
            <div className="menu-name">Курьерская служба доставки</div>
        </div>
        <div className="header-menu--column">
            <div className="header-menu--number">
                <img className="number-icon" src={phoneIcon} alt={'лох'} />
                <div className="number-value">8 (909) 023-12-51</div>
            </div>
            <ButtonComponent value="Вход" styleColor="color-in" />
        </div>
    </div>
);

export default HeaderMenu;
